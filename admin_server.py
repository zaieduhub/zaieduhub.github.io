#!/usr/bin/env python3
"""
╔═══════════════════════════════════════════════════════════════╗
║        ZAI CMS WEB ADMIN - Content Management System         ║
║        Made by Zai Creations with Love ❤️                    ║
║        Web-based CMS for Zai Education Hub                   ║
║        Powered by Google Gemini AI                           ║
╚═══════════════════════════════════════════════════════════════╝
"""

import os
import sys
import json
import re
import subprocess
import threading
import http.server
import socketserver
import urllib.parse
import mimetypes
from datetime import datetime
from pathlib import Path

# ─── Configuration ───────────────────────────────────────────
SCRIPT_DIR = Path(__file__).parent.resolve()
DATA_FILE = SCRIPT_DIR / "js" / "data.js"
JSON_FILE = SCRIPT_DIR / "js" / "data.json"
PORT = 8080
HOST = "0.0.0.0"  # Listen on all interfaces

# Load config
GITHUB_TOKEN = ""
GEMINI_API_KEY = ""
GITHUB_REPO = "zaieduhub/zaieduhub.github.io"

config_file = SCRIPT_DIR / "config.env"
if config_file.exists():
    for line in config_file.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith('#'):
            if '=' in line:
                key, val = line.split('=', 1)
                if key == 'GITHUB_TOKEN':
                    GITHUB_TOKEN = val
                elif key == 'GEMINI_API_KEY':
                    GEMINI_API_KEY = val
                elif key == 'GITHUB_REPO':
                    GITHUB_REPO = val

# ─── Gemini AI Setup ─────────────────────────────────────────
GEMINI_AVAILABLE = False
gemini_client = None

try:
    from google import genai
    GEMINI_AVAILABLE = True
except ImportError:
    pass

def init_gemini():
    global gemini_client, GEMINI_AVAILABLE
    if not GEMINI_AVAILABLE or not GEMINI_API_KEY:
        return False
    try:
        gemini_client = genai.Client(api_key=GEMINI_API_KEY)
        test = gemini_client.models.generate_content(
            model="gemini-2.0-flash",
            contents="Say 'connected'"
        )
        return bool(test and test.text)
    except Exception as e:
        print(f"Gemini init error: {e}")
        return False

gemini_ready = init_gemini()

# ─── Data Management ─────────────────────────────────────────
def load_content():
    """Load content from JSON or data.js"""
    if JSON_FILE.exists():
        try:
            return json.loads(JSON_FILE.read_text(encoding='utf-8'))
        except:
            pass
    return {}

def save_content(data):
    """Save content to both JSON and JS files"""
    try:
        # Save JSON
        JSON_FILE.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding='utf-8')
        
        # Generate JS
        js = python_to_js(data)
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M')
        js_content = f"""/* ZAI CMS - Auto-generated {timestamp} */
const ZAI_CONTENT = {js};
function getSubjectContent(grade, key) {{
    if (!ZAI_CONTENT[grade]) return null;
    return ZAI_CONTENT[grade][key] || null;
}}
function getGradeSubjects(grade) {{
    const m = {{'al':'al','ol':'ol','grade6-9':'grade6_9','grade1-5':'grade1_5'}};
    const k = m[grade];
    return (k && ZAI_CONTENT[k]) ? ZAI_CONTENT[k] : {{}};
}}
"""
        DATA_FILE.write_text(js_content, encoding='utf-8')
        return True
    except Exception as e:
        print(f"Save error: {e}")
        return False

def python_to_js(obj, indent=1):
    if isinstance(obj, dict):
        items = []
        for k, v in obj.items():
            items.append(f"{'    ' * indent}'{k}': {python_to_js(v, indent + 1)}")
        return "{\n" + ",\n".join(items) + "\n" + "    " * (indent - 1) + "}"
    elif isinstance(obj, list):
        items = []
        for v in obj:
            items.append(f"{'    ' * indent}{python_to_js(v, indent + 1)}")
        return "[\n" + ",\n".join(items) + "\n" + "    " * (indent - 1) + "]"
    elif isinstance(obj, str):
        escaped = obj.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n").replace("\r", "")
        return f"'{escaped}'"
    elif isinstance(obj, bool):
        return "true" if obj else "false"
    elif obj is None:
        return "null"
    else:
        return str(obj)

def get_git_status():
    """Get git status as string"""
    try:
        r = subprocess.run(["git", "status", "--short"], capture_output=True, text=True, cwd=SCRIPT_DIR, timeout=10)
        return r.stdout or "✅ Clean working tree"
    except:
        return "⚠️ Git not available"

def git_commit_push():
    """Commit and push to GitHub"""
    try:
        # Add all
        subprocess.run(["git", "add", "-A"], cwd=SCRIPT_DIR, capture_output=True, timeout=10)
        # Commit
        ts = datetime.now().strftime("%Y-%m-%d %H:%M")
        subprocess.run(["git", "config", "user.name", "zaieduhub"], cwd=SCRIPT_DIR, capture_output=True, timeout=5)
        subprocess.run(["git", "config", "user.email", "ruzaith2007@gmail.com"], cwd=SCRIPT_DIR, capture_output=True, timeout=5)
        subprocess.run(["git", "commit", "-m", f"📚 CMS Web Update - {ts}", "--allow-empty"], cwd=SCRIPT_DIR, capture_output=True, timeout=10)
        # Push
        r = subprocess.run(["git", "push", "-f", "origin", "main"], cwd=SCRIPT_DIR, capture_output=True, text=True, timeout=60)
        return r.returncode == 0, r.stdout[:500] + r.stderr[:500]
    except Exception as e:
        return False, str(e)

def gemini_generate(prompt, model="gemini-2.0-flash"):
    """Generate content using Gemini AI"""
    if not gemini_ready or not gemini_client:
        return None
    try:
        response = gemini_client.models.generate_content(model=model, contents=prompt)
        return response.text.strip() if response and response.text else None
    except Exception as e:
        return f"ERROR: {str(e)}"

# ─── HTTP Request Handler ────────────────────────────────────
class AdminHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SCRIPT_DIR), **kwargs)
    
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        
        # API routes
        if path == "/api/status":
            self.send_json({
                "status": "ok",
                "gemini": gemini_ready,
                "timestamp": datetime.now().isoformat(),
                "git_status": get_git_status()
            })
            return
        
        elif path == "/api/content":
            self.send_json(load_content())
            return
        
        elif path == "/api/content/stats":
            data = load_content()
            stats = {}
            for grade_key, grade_name in [("al", "A/L"), ("ol", "O/L"), ("grade6_9", "Gr 6-9"), ("grade1_5", "Gr 1-5")]:
                subjects = data.get(grade_key, {})
                total_units = sum(len(s.get('units', [])) for s in subjects.values())
                total_topics = sum(
                    sum(len(u.get('topics', [])) for u in s.get('units', []))
                    for s in subjects.values()
                )
                stats[grade_key] = {
                    "name": grade_name,
                    "subjects": len(subjects),
                    "units": total_units,
                    "topics": total_topics
                }
            self.send_json({"stats": stats})
            return
        
        # Serve admin.html for admin routes
        if path.startswith("/admin"):
            self.path = "/admin.html"
        
        # Default: serve static files
        return super().do_GET()
    
    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8') if content_length else "{}"
        
        try:
            data = json.loads(body) if body else {}
        except:
            data = {}
        
        if path == "/api/content/save":
            new_data = data.get("content", {})
            success = save_content(new_data)
            self.send_json({"success": success, "message": "✅ Content saved!" if success else "❌ Save failed"})
            return
        
        elif path == "/api/content/add-subject":
            content_data = load_content()
            grade = data.get("grade", "al")
            key = data.get("key", "").strip().lower().replace(" ", "-")
            name = data.get("name", "").strip()
            icon = data.get("icon", "📚")
            
            if not key or not name:
                self.send_json({"success": False, "message": "❌ Key and name required"})
                return
            
            if grade not in content_data:
                content_data[grade] = {}
            
            colors = ['#667eea', '#43e97b', '#f6d365', '#fa709a', '#a18cd1', '#fbc2eb', '#89f7fe', '#fddb92', '#4facfe', '#f093fb']
            color = colors[len(content_data[grade]) % len(colors)]
            
            content_data[grade][key] = {"name": name, "icon": icon, "color": color, "units": []}
            save_content(content_data)
            self.send_json({"success": True, "message": f"✅ Added subject: {name}"})
            return
        
        elif path == "/api/content/add-unit":
            content_data = load_content()
            grade = data.get("grade", "al")
            subject = data.get("subject", "")
            title = data.get("title", "").strip()
            
            if not subject or not title:
                self.send_json({"success": False, "message": "❌ Subject and title required"})
                return
            
            if grade in content_data and subject in content_data[grade]:
                if 'units' not in content_data[grade][subject]:
                    content_data[grade][subject]['units'] = []
                content_data[grade][subject]['units'].append({"title": title, "topics": []})
                save_content(content_data)
                self.send_json({"success": True, "message": f"✅ Added unit: {title}"})
            else:
                self.send_json({"success": False, "message": "❌ Subject not found"})
            return
        
        elif path == "/api/content/add-topic":
            content_data = load_content()
            grade = data.get("grade", "al")
            subject = data.get("subject", "")
            unit_idx = int(data.get("unit_idx", 0))
            title = data.get("title", "").strip()
            content = data.get("content", "")
            
            if not title:
                self.send_json({"success": False, "message": "❌ Title required"})
                return
            
            if not content:
                content = f"""<h3>{title}</h3>
<p>Study notes for {title}.</p>
<h4>Key Concepts</h4>
<ul>
<li>Concept 1</li>
<li>Concept 2</li>
<li>Concept 3</li>
</ul>
<h4>Practice Questions</h4>
<ol>
<li>Question 1</li>
<li>Question 2</li>
</ol>"""
            
            if grade in content_data and subject in content_data[grade]:
                units = content_data[grade][subject].get('units', [])
                if unit_idx < len(units):
                    units[unit_idx]['topics'].append({"title": title, "content": content})
                    save_content(content_data)
                    self.send_json({"success": True, "message": f"✅ Added topic: {title}"})
                else:
                    self.send_json({"success": False, "message": "❌ Unit not found"})
            else:
                self.send_json({"success": False, "message": "❌ Subject not found"})
            return
        
        elif path == "/api/content/delete":
            content_data = load_content()
            grade = data.get("grade", "")
            subject = data.get("subject", "")
            unit_idx = data.get("unit_idx")
            topic_idx = data.get("topic_idx")
            
            if grade in content_data:
                if subject and unit_idx is None and topic_idx is None:
                    if subject in content_data[grade]:
                        del content_data[grade][subject]
                        save_content(content_data)
                        self.send_json({"success": True, "message": "✅ Subject deleted"})
                    else:
                        self.send_json({"success": False, "message": "❌ Subject not found"})
                elif subject and unit_idx is not None and topic_idx is None:
                    units = content_data[grade][subject].get('units', [])
                    if unit_idx < len(units):
                        units.pop(unit_idx)
                        save_content(content_data)
                        self.send_json({"success": True, "message": "✅ Unit deleted"})
                    else:
                        self.send_json({"success": False, "message": "❌ Unit not found"})
                elif subject and unit_idx is not None and topic_idx is not None:
                    units = content_data[grade][subject].get('units', [])
                    if unit_idx < len(units) and topic_idx < len(units[unit_idx].get('topics', [])):
                        units[unit_idx]['topics'].pop(topic_idx)
                        save_content(content_data)
                        self.send_json({"success": True, "message": "✅ Topic deleted"})
                    else:
                        self.send_json({"success": False, "message": "❌ Topic not found"})
                else:
                    self.send_json({"success": False, "message": "❌ Invalid parameters"})
            return
        
        elif path == "/api/content/update-topic":
            content_data = load_content()
            grade = data.get("grade", "")
            subject = data.get("subject", "")
            unit_idx = int(data.get("unit_idx", 0))
            topic_idx = int(data.get("topic_idx", 0))
            title = data.get("title", "")
            content = data.get("content", "")
            
            try:
                units = content_data[grade][subject].get('units', [])
                if unit_idx < len(units) and topic_idx < len(units[unit_idx].get('topics', [])):
                    units[unit_idx]['topics'][topic_idx]['title'] = title
                    units[unit_idx]['topics'][topic_idx]['content'] = content
                    save_content(content_data)
                    self.send_json({"success": True, "message": "✅ Topic updated!"})
                else:
                    self.send_json({"success": False, "message": "❌ Topic not found"})
            except:
                self.send_json({"success": False, "message": "❌ Error updating topic"})
            return
        
        elif path == "/api/git/status":
            self.send_json({"status": get_git_status()})
            return
        
        elif path == "/api/git/deploy":
            success, output = git_commit_push()
            self.send_json({"success": success, "output": output[:1000]})
            return
        
        elif path == "/api/ai/generate":
            if not gemini_ready:
                self.send_json({"success": False, "message": "❌ Gemini AI not connected"})
                return
            
            subject = data.get("subject", "")
            topic = data.get("topic", "")
            grade = data.get("grade", "O/L")
            style = data.get("style", "Study Notes")
            
            prompt = f"""You are an expert Sri Lankan {grade} {subject} teacher.
Create comprehensive study notes about "{topic}" for {grade} students following the Sri Lankan curriculum.

Format as HTML:
- <h3> for title, <h4> for subtitles
- <p> for paragraphs, <ul>/<li> for lists
- <strong> for bold, <table> for comparisons

Style: {style}

Include:
1. Clear explanations with examples
2. Key formulas/concepts
3. Important definitions
4. Practice questions
5. Sri Lankan context

DO NOT wrap in HTML/head/body tags."""
            
            result = gemini_generate(prompt)
            self.send_json({"success": bool(result), "content": result or "❌ Generation failed"})
            return
        
        elif path == "/api/ai/translate":
            if not gemini_ready:
                self.send_json({"success": False, "message": "❌ Gemini AI not connected"})
                return
            
            content = data.get("content", "")
            target_lang = data.get("language", "si")
            lang_names = {'si': 'Sinhala (සිංහල)', 'ta': 'Tamil (தமிழ்)', 'en': 'English'}
            
            prompt = f"""Translate this educational content to {lang_names.get(target_lang, target_lang)}.
Keep all HTML tags (<h3>, <h4>, <p>, <ul>/<li>, <strong>) exactly as they are.
Only translate the text content.

Content:
{content}

Translated content:"""
            
            result = gemini_generate(prompt)
            self.send_json({"success": bool(result), "content": result or "❌ Translation failed"})
            return
        
        elif path == "/api/ai/chat":
            if not gemini_ready:
                self.send_json({"success": False, "message": "❌ Gemini AI not connected"})
                return
            
            message = data.get("message", "")
            context = data.get("context", "General Education")
            
            prompt = f"""You are Zai AI, a helpful education assistant for Sri Lankan students.

Context: {context}
Student's Question: {message}

Provide a helpful, accurate answer. Include:
- Clear explanation suitable for student's level
- Sri Lankan examples
- Study tips
- Encouraging tone

Use emojis. DO NOT use HTML tags."""
            
            result = gemini_generate(prompt)
            self.send_json({"success": bool(result), "reply": result or "❌ Failed to generate"})
            return
        
        elif path == "/api/ai/question-paper":
            if not gemini_ready:
                self.send_json({"success": False, "message": "❌ Gemini AI not connected"})
                return
            
            grade = data.get("grade", "O/L")
            subject = data.get("subject", "Mathematics")
            exam_type = data.get("exam_type", "Term Test")
            topics = data.get("topics", "")
            
            prompt = f"""Create a complete {exam_type} question paper for {grade} {subject}.
Topics: {topics}

Structure:
## {subject} - {exam_type}
Grade: {grade} | Time: 2 Hours | Marks: 100

Part I - Structured Questions (50 marks): 5 questions
Part II - Essay (30 marks): 2 questions
Part III - Challenge (20 marks): 2 questions

## Answer Key with Mark Scheme

Format with markdown. Include Sri Lankan curriculum context."""
            
            result = gemini_generate(prompt)
            self.send_json({"success": bool(result), "content": result or "❌ Generation failed"})
            return
        
        elif path == "/api/ai/improve":
            if not gemini_ready:
                self.send_json({"success": False, "message": "❌ Gemini AI not connected"})
                return
            
            content = data.get("content", "")
            mode = data.get("mode", "Enhance & Expand")
            
            mode_instructions = {
                "Enhance & Expand": "Enhance and expand this educational content. Add more details, examples, and explanations.",
                "Simplify for Students": "Simplify this content for students. Break down complex concepts into simpler language.",
                "Add Practice Questions": "Add 5-7 practice questions with answers to this content.",
                "Create Summary Table": "Create a summary table at the end with key concepts, definitions, and examples.",
                "Rewrite Active Voice": "Rewrite this content using active voice. Make it engaging and direct.",
                "Add Sri Lankan Examples": "Add 3-5 practical Sri Lankan examples relevant to daily life."
            }
            
            instruction = mode_instructions.get(mode, "Enhance this content.")
            
            prompt = f"""{instruction}
Keep HTML formatting intact. Use <h3>, <h4>, <p>, <ul>/<li>, <strong> tags.

Content:
{content}

Improved content:"""
            
            result = gemini_generate(prompt)
            self.send_json({"success": bool(result), "content": result or "❌ Improvement failed"})
            return
        
        elif path == "/api/ai/bulk-generate":
            if not gemini_ready:
                self.send_json({"success": False, "message": "❌ Gemini AI not connected"})
                return
            
            grade = data.get("grade", "O/L")
            subject = data.get("subject", "Science")
            unit = data.get("unit", "")
            topics = data.get("topics", [])
            
            results = []
            for topic_name in topics[:10]:  # Max 10 topics
                prompt = f"""Create study notes about "{topic_name}" (part of "{unit}") for {grade} {subject} students in Sri Lanka.

Format as HTML with <h3>, <h4>, <p>, <ul>/<li>, <strong> tags.
Include key concepts, examples, and practice questions.
DO NOT wrap in HTML/head/body tags."""
                
                result = gemini_generate(prompt)
                results.append({"title": topic_name, "content": result or "<p>Failed to generate</p>"})
            
            self.send_json({"success": True, "results": results})
            return
        
        # Unknown route
        self.send_json({"success": False, "message": "Unknown API endpoint"}, 404)
    
    def send_json(self, data, status=200):
        """Send JSON response"""
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
    
    def do_OPTIONS(self):
        """Handle CORS preflight"""
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
    
    def log_message(self, format, *args):
        """Custom log format"""
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {args[0]} {args[1]} {args[2]}")

# ─── Main Server ─────────────────────────────────────────────
def run_server():
    """Start the admin web server"""
    print(f"""
╔═══════════════════════════════════════════════════════════════╗
║        ZAI CMS WEB ADMIN - Server Starting...                ║
║        Made by Zai Creations with Love ❤️                    ║
╠═══════════════════════════════════════════════════════════════╣
║  📍 Admin Panel:  http://localhost:{PORT}/admin                ║
║  🌐 Website:      http://localhost:{PORT}/                    ║
║  🤖 Gemini AI:    {'✅ Connected' if gemini_ready else '❌ Not Connected'}                    ║
║  📁 Content:      {len(load_content())} grades loaded                ║
║  📊 API:          http://localhost:{PORT}/api/status           ║
╚═══════════════════════════════════════════════════════════════╝
    """)
    
    # Create necessary directories
    (SCRIPT_DIR / "css").mkdir(exist_ok=True)
    (SCRIPT_DIR / "js").mkdir(exist_ok=True)
    
    # Ensure the admin.html exists (will be created by the web admin build)
    
    # Start server
    with socketserver.TCPServer((HOST, PORT), AdminHandler) as httpd:
        print(f"✅ Server running at http://localhost:{PORT}")
        print(f"📋 Admin panel at http://localhost:{PORT}/admin")
        print("Press Ctrl+C to stop\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped. Goodbye!")
            httpd.server_close()

if __name__ == "__main__":
    run_server()
