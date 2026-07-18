#!/usr/bin/env python3
"""
╔═══════════════════════════════════════════════════════════════╗
║        ZAI CMS - Content Management System v1.0              ║
║        Made by Zai Creations with Love ❤️                    ║
║        Desktop CMS for Zai Education Hub                     ║
║        Powered by Google Gemini AI                           ║
╚═══════════════════════════════════════════════════════════════╝
"""

import os
import sys
import json
import subprocess
import re
import threading
import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext, filedialog
from datetime import datetime
from pathlib import Path

# ─── Configuration ───────────────────────────────────────────
SCRIPT_DIR = Path(__file__).parent.resolve()
DATA_FILE = SCRIPT_DIR / "js" / "data.js"
INDEX_HTML = SCRIPT_DIR / "index.html"
# Load secrets from config.env (NOT committed to GitHub)
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
else:
    print("⚠️ config.env not found - API keys and tokens not loaded")

# ─── Gemini AI Import ────────────────────────────────────────
try:
    from google import genai
    from google.genai import types
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False    # ─── Main Application ────────────────────────────────────────
class ZaiCMS:
    # Default background color used throughout the UI
    BG_COLOR = '#F0FDFA'
    
    def __init__(self, root):
        self.root = root
        self.root.title("Zai CMS - Zai Education Hub Manager")
        self.root.geometry("1400x850")
        self.root.minsize(1100, 700)
        
        # Set icon and colors
        self.root.tk_setPalette(
            background=self.BG_COLOR,
            foreground="#134E4A",
            activeBackground="#0D9488",
            activeForeground="white"
        )
        
        # Data
        self.content_data = {}
        self.current_grade = "al"
        self.current_subject = None
        self.current_unit_idx = 0
        self.current_topic_idx = 0
        self.gemini_client = None
        
        # Try to init Gemini
        self.init_gemini()
        
        # Load existing data
        self.load_data()
        
        # Build UI
        self.build_ui()
        
        # Load content into tree
        self.refresh_content_tree()
        
        # Status message
        self.update_status("✅ Zai CMS loaded successfully")
    
    def init_gemini(self):
        """Initialize Google Gemini AI client"""
        if not GEMINI_AVAILABLE:
            return
        try:
            self.gemini_client = genai.Client(api_key=GEMINI_API_KEY)
            # Test the API
            test = self.gemini_client.models.generate_content(
                model="gemini-2.0-flash",
                contents="Say 'Gemini AI is connected!'"
            )
            if test and test.text:
                self.gemini_ready = True
            else:
                self.gemini_ready = False
        except Exception as e:
            self.gemini_ready = False
            print(f"Gemini init error: {e}")
    
    # ─── Data Loading/Saving ────────────────────────────────
    def load_data(self):
        """Load content data from JSON file (preferred) or parse data.js as fallback"""
        json_file = SCRIPT_DIR / "js" / "data.json"
        
        # Try JSON first (fast, reliable)
        if json_file.exists():
            try:
                with open(json_file, 'r', encoding='utf-8') as f:
                    self.content_data = json.load(f)
                print(f"✅ Loaded content from data.json")
                return
            except Exception as e:
                print(f"JSON load error: {e}")
        
        # Fallback: parse data.js
        if DATA_FILE.exists():
            try:
                content = DATA_FILE.read_text(encoding='utf-8')
                # Use exec to safely evaluate the JS object
                # We create a Python-compatible version
                ns = {}
                exec("import json\nimport re\n")  # Make modules available
                
                # Convert JS to Python dict using a more robust approach
                parsed = self.parse_js_to_dict(content)
                if parsed:
                    self.content_data = parsed
                    # Save as JSON for future fast loading
                    with open(json_file, 'w', encoding='utf-8') as f:
                        json.dump(self.content_data, f, indent=2, ensure_ascii=False)
                    print(f"✅ Loaded content from data.js (converted to JSON)")
                    return
            except Exception as e:
                print(f"Parse error: {e}")
                import traceback
                traceback.print_exc()
        
        # Ultimate fallback
        self.content_data = self.get_default_data()
    
    def parse_js_to_dict(self, js_content):
        """Parse the ZAI_CONTENT JS object into a Python dict using a robust approach.
        
        Strategy: Convert the JS literal to JSON by:
        1. Extracting just the ZAI_CONTENT object
        2. Replacing single quotes with double quotes
        3. Removing trailing commas
        4. Handling JS-specific values (true/false/null)
        """
        # Extract the const ZAI_CONTENT = {...} part
        # Find the opening brace
        start = js_content.find("const ZAI_CONTENT = ")
        if start < 0:
            start = js_content.find("const ZAI_CONTENT=")
        if start < 0:
            return None
        
        # Find the opening brace after '='
        eq_pos = js_content.find('=', start)
        brace_start = js_content.find('{', eq_pos)
        if brace_start < 0:
            return None
        
        # Track brace depth to find matching closing brace
        depth = 0
        brace_end = brace_start
        in_string = False
        string_char = None
        
        for i in range(brace_start, len(js_content)):
            ch = js_content[i]
            
            # Handle string boundaries
            if in_string:
                if ch == '\\' and i + 1 < len(js_content):
                    i += 1  # Skip escaped char
                    continue
                if ch == string_char:
                    in_string = False
                continue
            
            if ch in ("'", '"'):
                in_string = True
                string_char = ch
                continue
            
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    brace_end = i + 1
                    break
        
        # Extract the object text
        obj_text = js_content[brace_start:brace_end]
        
        # Convert to JSON-compatible format
        # 1. Replace single quotes with double quotes (handling escaped quotes)
        # This uses a simple but effective approach
        json_str = []
        in_single = False
        in_double = False
        i = 0
        while i < len(obj_text):
            ch = obj_text[i]
            
            if ch == '\\' and i + 1 < len(obj_text):
                json_str.append(ch + obj_text[i+1])
                i += 2
                continue
            
            if ch == "'" and not in_double:
                in_single = not in_single
                json_str.append('"')
                i += 1
                continue
            
            if ch == '"' and not in_single:
                in_double = not in_double
                json_str.append(ch)
                i += 1
                continue
            
            if ch == '"' and in_single:
                # Escape embedded double quotes in HTML attributes for JSON
                json_str.append('\\"')
                i += 1
                continue
            
            json_str.append(ch)
            i += 1
        
        json_text = ''.join(json_str)
        
        # 2. Remove trailing commas before closing braces/brackets
        json_text = re.sub(r',\s*}', '}', json_text)
        json_text = re.sub(r',\s*]', ']', json_text)
        
        # 3. Handle JS boolean/null values
        json_text = re.sub(r':\s*true\s*([,}])', r': true\1', json_text)
        json_text = re.sub(r':\s*false\s*([,}])', r': false\1', json_text)
        json_text = re.sub(r':\s*null\s*([,}])', r': null\1', json_text)
        
        # 4. Parse as JSON
        try:
            return json.loads(json_text)
        except json.JSONDecodeError as e:
            print(f"JSON decode error at pos {e.pos}: {e.msg}")
            start_context = max(0, e.pos - 50)
            end_context = min(len(json_text), e.pos + 50)
            print(f"Context: ...{json_text[start_context:end_context]}...")
            # Show warning to user
            try:
                self.root.after(0, lambda: messagebox.showwarning(
                    "Data Parse Notice",
                    "Could not automatically parse the existing data.js file.\n\n"
                    "This is normal for first-time use!\n"
                    "Just click 'Save' once in the Content Manager tab\n"
                    "to create the data.json file and everything will work perfectly."
                ))
            except:
                pass
            return None
    
    def get_default_data(self):
        """Return default empty structure"""
        return {
            "al": {},
            "ol": {},
            "grade6_9": {},
            "grade1_5": {}
        }
    
    def save_data(self):
        """Save content data to both data.json (for CMS) and data.js (for website)"""
        try:
            # Save JSON for fast CMS loading
            json_file = SCRIPT_DIR / "js" / "data.json"
            with open(json_file, 'w', encoding='utf-8') as f:
                json.dump(self.content_data, f, indent=2, ensure_ascii=False)
            
            # Generate data.js for the website
            js_output = self.python_to_js(self.content_data)
            full_content = f"""/* ============================================
   ZAI EDUCATION HUB - Complete Study Content
   Auto-generated by Zai CMS on {datetime.now().strftime('%Y-%m-%d %H:%M')}
   Made by Zai Creations with Love ❤️
   ============================================ */

const ZAI_CONTENT = {js_output};

// Helper function to get content by grade and subject
function getSubjectContent(grade, subjectKey) {{
    if (!ZAI_CONTENT[grade]) return null;
    return ZAI_CONTENT[grade][subjectKey] || null;
}}

// Helper to get all subjects for a grade
function getGradeSubjects(grade) {{
    const gradeMap = {{
        'al': 'al',
        'ol': 'ol',
        'grade6-9': 'grade6_9',
        'grade1-5': 'grade1_5'
    }};
    const key = gradeMap[grade];
    if (!key || !ZAI_CONTENT[key]) return {{}};
    return ZAI_CONTENT[key];
}}
"""
            DATA_FILE.write_text(full_content, encoding='utf-8')
            self.update_status(f"✅ Saved to data.js + data.json ({len(full_content)} bytes)")
            return True
        except Exception as e:
            messagebox.showerror("Save Error", str(e))
            return False
    
    def python_to_js(self, obj, indent=1):
        """Convert Python dict to JS object string"""
        if isinstance(obj, dict):
            items = []
            for k, v in obj.items():
                val = self.python_to_js(v, indent + 1)
                items.append(f"{'    ' * indent}'{k}': {val}")
            return "{{\n{}{}}}".format("    " * (indent-1) if indent > 1 else "", ",\n".join(items))
        elif isinstance(obj, list):
            items = []
            for v in obj:
                items.append(f"{'    ' * indent}{self.python_to_js(v, indent + 1)}")
            return "[\n{}\n{}]".format(",\n".join(items), "    " * (indent - 1))
        elif isinstance(obj, str):
            # Escape special characters
            escaped = obj.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n").replace("\r", "")
            return f"'{escaped}'"
        elif isinstance(obj, bool):
            return "true" if obj else "false"
        elif obj is None:
            return "null"
        else:
            return str(obj)
    
    # ─── UI Building ───────────────────────────────────────
    def build_ui(self):
        """Build the main application interface"""
        # Style
        style = ttk.Style()
        style.theme_use('clam')
        style.configure('TNotebook', background='#F0FDFA', borderwidth=0)
        style.configure('TNotebook.Tab', padding=[15, 8], font=('Baloo 2', 11))
        style.map('TNotebook.Tab', background=[('selected', '#0D9488'), ('active', '#CCFBF1')],
                  foreground=[('selected', 'white'), ('active', '#134E4A')])
        
        # Main container
        main_frame = ttk.Frame(self.root)
        main_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        
        # Title bar
        title_frame = tk.Frame(main_frame, bg='#0D9488', height=60)
        title_frame.pack(fill=tk.X, pady=(0, 10))
        title_frame.pack_propagate(False)
        
        tk.Label(title_frame, text="📚 Zai CMS - Education Hub Manager", 
                font=('Baloo 2', 18, 'bold'), bg='#0D9488', fg='white').pack(side=tk.LEFT, padx=20, pady=10)
        
        self.status_label = tk.Label(title_frame, text="Ready", 
                                      font=('Comic Neue', 10), bg='#0D9488', fg='#CCFBF1')
        self.status_label.pack(side=tk.RIGHT, padx=20, pady=10)
        
        # Notebook (Tabs)
        self.notebook = ttk.Notebook(main_frame)
        self.notebook.pack(fill=tk.BOTH, expand=True)
        
        # ── Tab 1: Dashboard ──
        self.tab_dashboard = ttk.Frame(self.notebook)
        self.notebook.add(self.tab_dashboard, text="🏠 Dashboard")
        self.build_dashboard()
        
        # ── Tab 2: Content Manager ──
        self.tab_content = ttk.Frame(self.notebook)
        self.notebook.add(self.tab_content, text="📝 Content Manager")
        self.build_content_manager()
        
        # ── Tab 3: AI Generator ──
        self.tab_ai = ttk.Frame(self.notebook)
        self.notebook.add(self.tab_ai, text="🤖 AI Generator")
        self.build_ai_generator()
        
        # ── Tab 4: AI Study Guide ──
        self.tab_study = ttk.Frame(self.notebook)
        self.notebook.add(self.tab_study, text="🎯 AI Study Guide")
        self.build_study_guide()
        
        # ── Tab 5: GitHub Sync ──
        self.tab_git = ttk.Frame(self.notebook)
        self.notebook.add(self.tab_git, text="🚀 GitHub Deploy")
        self.build_git_sync()
    
    # ─── Dashboard ──────────────────────────────────────────
    def build_dashboard(self):
        f = self.tab_dashboard
        
        # Welcome
        welcome = tk.Frame(f, bg=self.BG_COLOR)
        welcome.pack(fill=tk.X, pady=20)
        
        tk.Label(welcome, text="🏫 Welcome to Zai CMS!", 
                font=('Baloo 2', 24, 'bold'), bg=welcome.BG_COLOR, fg='#134E4A').pack()
        
        tk.Label(welcome, text="Manage all your educational content with AI-powered tools", 
                font=('Comic Neue', 14), bg=welcome.BG_COLOR, fg='#4B7A75').pack()
        
        # Stats cards
        stats_frame = tk.Frame(welcome, bg=welcome.BG_COLOR)
        stats_frame.pack(pady=20)
        
        grades = [('al', 'A/L', '#667eea'), ('ol', 'O/L', '#43e97b'), 
                  ('grade6_9', 'Gr 6-9', '#f6d365'), ('grade1_5', 'Gr 1-5', '#fa709a')]
        
        self.stat_labels = {}
        for i, (key, name, color) in enumerate(grades):
            card = tk.Frame(stats_frame, bg=color, padx=30, pady=15, highlightthickness=0)
            card.grid(row=0, column=i, padx=10)
            
            subjects = len(self.content_data.get(key, {}))
            total_units = sum(len(s.get('units', [])) for s in self.content_data.get(key, {}).values())
            total_topics = sum(
                sum(len(u.get('topics', [])) for u in s.get('units', [])) 
                for s in self.content_data.get(key, {}).values()
            )
            
            tk.Label(card, text=name, font=('Baloo 2', 16, 'bold'), 
                    bg=color, fg='white').pack()
            tk.Label(card, text=f"📚 {subjects} Subjects", font=('Comic Neue', 12), 
                    bg=color, fg='white').pack()
            tk.Label(card, text=f"📖 {total_topics} Topics", font=('Comic Neue', 12), 
                    bg=color, fg='white').pack()
        
        # Quick actions
        actions_frame = tk.LabelFrame(f, text="⚡ Quick Actions", font=('Baloo 2', 14),
                                      bg=f.BG_COLOR, fg='#134E4A', padx=20, pady=15)
        actions_frame.pack(fill=tk.X, padx=40, pady=10)
        
        btn_frame = tk.Frame(actions_frame, bg=actions_frame.BG_COLOR)
        btn_frame.pack()
        
        self.make_btn(btn_frame, "📝 Open Content Manager", lambda: self.notebook.select(1), '#0D9488').pack(side=tk.LEFT, padx=5)
        self.make_btn(btn_frame, "🤖 Generate Content with AI", lambda: self.notebook.select(2), '#D97706').pack(side=tk.LEFT, padx=5)
        self.make_btn(btn_frame, "🎯 Create Study Guide", lambda: self.notebook.select(3), '#10B981').pack(side=tk.LEFT, padx=5)
        self.make_btn(btn_frame, "🚀 Deploy to GitHub", lambda: self.notebook.select(4), '#3B82F6').pack(side=tk.LEFT, padx=5)
        
        # Gemini status
        gem_frame = tk.LabelFrame(f, text="🤖 AI Status", font=('Baloo 2', 14),
                                  bg=f.BG_COLOR, fg='#134E4A', padx=20, pady=10)
        gem_frame.pack(fill=tk.X, padx=40, pady=10)
        
        status_text = "✅ Gemini AI Connected & Ready!" if getattr(self, 'gemini_ready', False) else "⚠️ Gemini AI not connected"
        status_color = '#10B981' if getattr(self, 'gemini_ready', False) else '#DC2626'
        tk.Label(gem_frame, text=status_text, font=('Comic Neue', 12),
                bg=gem_frame.BG_COLOR, fg=status_color).pack()
    
    # ─── Content Manager ────────────────────────────────────
    def build_content_manager(self):
        f = self.tab_content
        
        # Top: Grade selector and subject controls
        top_frame = tk.Frame(f, bg=f.BG_COLOR)
        top_frame.pack(fill=tk.X, pady=(10, 5))
        
        tk.Label(top_frame, text="Grade:", font=('Baloo 2', 12), 
                bg=top_frame.BG_COLOR, fg='#134E4A').pack(side=tk.LEFT, padx=5)
        
        self.grade_var = tk.StringVar(value="al")
        grade_menu = ttk.Combobox(top_frame, textvariable=self.grade_var, 
                                   values=["al (A/L)", "ol (O/L)", "grade6_9 (Gr 6-9)", "grade1_5 (Gr 1-5)"],
                                   state="readonly", width=20, font=('Comic Neue', 10))
        grade_menu.pack(side=tk.LEFT, padx=5)
        grade_menu.bind('<<ComboboxSelected>>', lambda e: self.refresh_content_tree())
        
        self.make_btn(top_frame, "➕ New Subject", self.add_subject_dialog, '#0D9488').pack(side=tk.RIGHT, padx=5)
        self.make_btn(top_frame, "🔄 Refresh", self.refresh_content_tree, '#64748B').pack(side=tk.RIGHT, padx=5)
        
        # Main: Tree + Editor split
        main_pane = tk.PanedWindow(f, orient=tk.HORIZONTAL, bg=f.BG_COLOR)
        main_pane.pack(fill=tk.BOTH, expand=True, pady=5)
        
        # Left: Tree view
        left_frame = tk.LabelFrame(main_pane, text="📚 Content Tree", font=('Baloo 2', 12),
                                   bg=f.BG_COLOR, fg='#134E4A', padx=5, pady=5)
        main_pane.add(left_frame, width=400, minsize=300)
        
        tree_frame = tk.Frame(left_frame, bg=left_frame.BG_COLOR)
        tree_frame.pack(fill=tk.BOTH, expand=True)
        
        self.content_tree = ttk.Treeview(tree_frame, columns=("type",), show="tree")
        self.content_tree.heading("#0", text="Content Structure")
        self.content_tree.column("#0", width=350)
        
        tree_scroll = ttk.Scrollbar(tree_frame, orient=tk.VERTICAL, command=self.content_tree.yview)
        self.content_tree.configure(yscrollcommand=tree_scroll.set)
        
        self.content_tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        tree_scroll.pack(side=tk.RIGHT, fill=tk.Y)
        
        self.content_tree.bind('<<TreeviewSelect>>', self.on_tree_select)
        
        # Tree action buttons
        tree_actions = tk.Frame(left_frame, bg=left_frame.BG_COLOR)
        tree_actions.pack(fill=tk.X, pady=5)
        self.make_btn(tree_actions, "✏️ Edit", self.edit_selected, '#D97706').pack(side=tk.LEFT, padx=2)
        self.make_btn(tree_actions, "➕ Unit", self.add_unit_dialog, '#0D9488').pack(side=tk.LEFT, padx=2)
        self.make_btn(tree_actions, "➕ Topic", self.add_topic_dialog, '#0D9488').pack(side=tk.LEFT, padx=2)
        self.make_btn(tree_actions, "🗑️ Delete", self.delete_selected, '#DC2626').pack(side=tk.LEFT, padx=2)
        
        # Right: Editor
        right_frame = tk.LabelFrame(main_pane, text="✏️ Content Editor", font=('Baloo 2', 12),
                                    bg=f.BG_COLOR, fg='#134E4A', padx=5, pady=5)
        main_pane.add(right_frame, width=700, minsize=400)
        
        # Editor fields
        editor_frame = tk.Frame(right_frame, bg=right_frame.BG_COLOR)
        editor_frame.pack(fill=tk.BOTH, expand=True)
        
        # Title
        tk.Label(editor_frame, text="Title:", font=('Baloo 2', 11),
                bg=editor_frame.BG_COLOR, fg='#134E4A').pack(anchor=tk.W)
        self.edit_title = tk.Entry(editor_frame, font=('Comic Neue', 12), 
                                   bg='white', fg='#134E4A', relief=tk.SOLID, bd=1)
        self.edit_title.pack(fill=tk.X, pady=(0, 10))
        
        # Description (for subjects)
        tk.Label(editor_frame, text="Description:", font=('Baloo 2', 11),
                bg=editor_frame.BG_COLOR, fg='#134E4A').pack(anchor=tk.W)
        self.edit_desc = tk.Entry(editor_frame, font=('Comic Neue', 11),
                                  bg='white', fg='#134E4A', relief=tk.SOLID, bd=1)
        self.edit_desc.pack(fill=tk.X, pady=(0, 10))
        
        # Content (HTML for topics)
        tk.Label(editor_frame, text="Content (HTML):", font=('Baloo 2', 11),
                bg=editor_frame.BG_COLOR, fg='#134E4A').pack(anchor=tk.W)
        
        self.edit_content = scrolledtext.ScrolledText(
            editor_frame, wrap=tk.WORD, font=('Courier', 10),
            bg='#1e293b', fg='#e2e8f0', insertbackground='white',
            relief=tk.SOLID, bd=1, height=15
        )
        self.edit_content.pack(fill=tk.BOTH, expand=True, pady=(0, 10))
        
        # Save button
        btn_row = tk.Frame(editor_frame, bg=editor_frame.BG_COLOR)
        btn_row.pack(fill=tk.X)
        self.make_btn(btn_row, "💾 Save Changes", self.save_editor, '#0D9488').pack(side=tk.RIGHT, padx=5)
        self.make_btn(btn_row, "🔄 Load Selected", self.load_selected_into_editor, '#64748B').pack(side=tk.RIGHT, padx=5)
        self.editor_info_label = tk.Label(btn_row, text="Select an item from the tree", font=('Comic Neue', 9),
                                          bg=btn_row.BG_COLOR, fg='#4B7A75')
        self.editor_info_label.pack(side=tk.LEFT)
    
    def get_selection_info(self):
        """Get info about the current editor selection"""
        selection = self.content_tree.selection()
        if not selection:
            return "Select an item from the tree"
        item = selection[0]
        values = self.content_tree.item(item, 'values')
        item_type = values[0] if values else "unknown"
        text = self.content_tree.item(item, 'text')
        if len(text) > 40:
            text = text[:37] + "..."
        return f"Editing: {item_type} → {text}"
    
    def refresh_content_tree(self):
        """Rebuild the content tree from current data"""
        self.content_tree.delete(*self.content_tree.get_children())
        
        grade_key = self.grade_var.get().split()[0]
        subjects = self.content_data.get(grade_key, {})
        
        for subj_key, subj_data in subjects.items():
            name = subj_data.get('name', subj_key)
            subj_id = self.content_tree.insert("", "end", text=f"{subj_data.get('icon', '📚')} {name}", 
                                                values=("subject", subj_key), open=True)
            
            for ui, unit in enumerate(subj_data.get('units', [])):
                unit_id = self.content_tree.insert(subj_id, "end", text=f"📂 {unit.get('title', 'Unit')}", 
                                                   values=("unit", str(ui)), open=True)
                for ti, topic in enumerate(unit.get('topics', [])):
                    self.content_tree.insert(unit_id, "end", text=f"📄 {topic.get('title', 'Topic')}", 
                                             values=("topic", f"{ui}:{ti}"))
    
    def on_tree_select(self, event):
        """Handle tree selection"""
        self.load_selected_into_editor()
    
    def load_selected_into_editor(self):
        """Load selected item into the editor"""
        selection = self.content_tree.selection()
        if not selection:
            return
        
        item = selection[0]
        values = self.content_tree.item(item, 'values')
        if not values:
            return
        
        item_type = values[0]
        item_ref = values[1]
        grade_key = self.grade_var.get().split()[0]
        
        # Update editor info label
        if hasattr(self, 'editor_info_label'):
            self.editor_info_label.config(text=self.get_selection_info())
        
        self.edit_content.delete("1.0", tk.END)
        self.edit_desc.delete(0, tk.END)
        self.edit_title.delete(0, tk.END)
        
        if item_type == "subject":
            subj = self.content_data.get(grade_key, {}).get(item_ref, {})
            self.edit_title.insert(0, subj.get('name', ''))
            self.edit_desc.insert(0, f"Icon: {subj.get('icon', '📚')} | Color: {subj.get('color', '#0D9488')}")
            self.edit_content.insert("1.0", f"Subject: {item_ref}\nUnits: {len(subj.get('units', []))}")
        
        elif item_type == "unit":
            parts = item_ref.split(':')
            ui = int(parts[0]) if len(parts) == 1 else 0
            subj_item = self.content_tree.parent(item)
            subj_key = self.content_tree.item(subj_item, 'values')[1]
            subj = self.content_data.get(grade_key, {}).get(subj_key, {})
            units = subj.get('units', [])
            if ui < len(units):
                unit = units[ui]
                self.edit_title.insert(0, unit.get('title', ''))
                self.edit_desc.insert(0, f"Topics: {len(unit.get('topics', []))} | Unit #{ui+1}")
                self.edit_content.insert("1.0", f"Unit: {unit.get('title', '')}\nTopics can be edited individually.")
        
        elif item_type == "topic":
            parts = item_ref.split(':')
            if len(parts) == 2:
                ui, ti = int(parts[0]), int(parts[1])
            else:
                return
            # Navigate up to find subject
            unit_item = self.content_tree.parent(item)
            subj_item = self.content_tree.parent(unit_item)
            subj_key = self.content_tree.item(subj_item, 'values')[1]
            subj = self.content_data.get(grade_key, {}).get(subj_key, {})
            units = subj.get('units', [])
            if ui < len(units) and ti < len(units[ui].get('topics', [])):
                topic = units[ui]['topics'][ti]
                self.edit_title.insert(0, topic.get('title', ''))
                self.edit_desc.delete(0, tk.END)
                self.edit_content.insert("1.0", topic.get('content', ''))
    
    def save_editor(self):
        """Save editor content back to data"""
        selection = self.content_tree.selection()
        if not selection:
            return
        
        item = selection[0]
        values = self.content_tree.item(item, 'values')
        if not values:
            return
        
        item_type = values[0]
        item_ref = values[1]
        grade_key = self.grade_var.get().split()[0]
        title = self.edit_title.get().strip()
        content = self.edit_content.get("1.0", tk.END).strip()
        
        if not title:
            messagebox.showwarning("Warning", "Title cannot be empty")
            return
        
        if item_type == "subject":
            subj = self.content_data.get(grade_key, {}).get(item_ref, {})
            if subj:
                subj['name'] = title
        
        elif item_type == "unit":
            parts = item_ref.split(':')
            ui = int(parts[0]) if len(parts) == 1 else 0
            subj_item = self.content_tree.parent(item)
            subj_key = self.content_tree.item(subj_item, 'values')[1]
            subj = self.content_data.get(grade_key, {}).get(subj_key, {})
            units = subj.get('units', [])
            if ui < len(units):
                units[ui]['title'] = title
        
        elif item_type == "topic":
            parts = item_ref.split(':')
            if len(parts) == 2:
                ui, ti = int(parts[0]), int(parts[1])
                unit_item = self.content_tree.parent(item)
                subj_item = self.content_tree.parent(unit_item)
                subj_key = self.content_tree.item(subj_item, 'values')[1]
                subj = self.content_data.get(grade_key, {}).get(subj_key, {})
                units = subj.get('units', [])
                if ui < len(units) and ti < len(units[ui].get('topics', [])):
                    units[ui]['topics'][ti]['title'] = title
                    units[ui]['topics'][ti]['content'] = content
        
        self.save_data()
        self.refresh_content_tree()
        self.update_status(f"✅ Saved: {title}")
    
    def add_subject_dialog(self):
        """Dialog to add a new subject"""
        dialog = tk.Toplevel(self.root)
        dialog.title("Add New Subject")
        dialog.geometry("400x300")
        dialog.transient(self.root)
        dialog.grab_set()
        
        tk.Label(dialog, text="Subject Key (e.g., physics):", font=('Baloo 2', 11),
                bg=dialog.BG_COLOR, fg='#134E4A').pack(pady=(15,5))
        key_entry = tk.Entry(dialog, font=('Comic Neue', 12), width=30)
        key_entry.pack(pady=5)
        
        tk.Label(dialog, text="Subject Name (e.g., Physics):", font=('Baloo 2', 11),
                bg=dialog.BG_COLOR, fg='#134E4A').pack(pady=(10,5))
        name_entry = tk.Entry(dialog, font=('Comic Neue', 12), width=30)
        name_entry.pack(pady=5)
        
        tk.Label(dialog, text="Icon (emoji):", font=('Baloo 2', 11),
                bg=dialog.BG_COLOR, fg='#134E4A').pack(pady=(10,5))
        icon_entry = tk.Entry(dialog, font=('Comic Neue', 12), width=10)
        icon_entry.insert(0, "📚")
        icon_entry.pack(pady=5)
        
        def save():
            key = key_entry.get().strip().lower().replace(' ', '-')
            name = name_entry.get().strip()
            icon = icon_entry.get().strip() or "📚"
            
            if not key or not name:
                messagebox.showwarning("Warning", "Key and Name are required")
                return
            
            grade_key = self.grade_var.get().split()[0]
            if grade_key not in self.content_data:
                self.content_data[grade_key] = {}
            
            if key in self.content_data[grade_key]:
                if not messagebox.askyesno("Confirm", f"Subject '{key}' already exists. Overwrite?"):
                    return
            
            colors = ['#667eea', '#43e97b', '#f6d365', '#fa709a', '#a18cd1', '#fbc2eb', '#89f7fe', '#fddb92', '#4facfe', '#f093fb']
            color = colors[len(self.content_data[grade_key]) % len(colors)]
            
            self.content_data[grade_key][key] = {
                'name': name,
                'icon': icon,
                'color': color,
                'units': []
            }
            self.save_data()
            self.refresh_content_tree()
            self.update_status(f"✅ Added subject: {name}")
            dialog.destroy()
        
        self.make_btn(dialog, "💾 Add Subject", save, '#0D9488').pack(pady=20)
    
    def add_unit_dialog(self):
        """Dialog to add a new unit"""
        selection = self.content_tree.selection()
        if not selection:
            messagebox.showinfo("Info", "Select a subject first")
            return
        
        item = selection[0]
        values = self.content_tree.item(item, 'values')
        if not values or values[0] not in ('subject', 'unit'):
            messagebox.showinfo("Info", "Please select a subject")
            return
        
        # Find subject key
        if values[0] == 'subject':
            subj_key = values[1]
        else:
            parent = self.content_tree.parent(item)
            subj_key = self.content_tree.item(parent, 'values')[1]
        
        dialog = tk.Toplevel(self.root)
        dialog.title("Add New Unit")
        dialog.geometry("400x200")
        dialog.transient(self.root)
        dialog.grab_set()
        
        tk.Label(dialog, text="Unit Title:", font=('Baloo 2', 11),
                bg=dialog.BG_COLOR, fg='#134E4A').pack(pady=(15,5))
        title_entry = tk.Entry(dialog, font=('Comic Neue', 12), width=40)
        title_entry.pack(pady=5)
        
        def save():
            title = title_entry.get().strip()
            if not title:
                messagebox.showwarning("Warning", "Title is required")
                return
            
            grade_key = self.grade_var.get().split()[0]
            subj = self.content_data.get(grade_key, {}).get(subj_key, {})
            if 'units' not in subj:
                subj['units'] = []
            subj['units'].append({'title': title, 'topics': []})
            
            self.save_data()
            self.refresh_content_tree()
            self.update_status(f"✅ Added unit: {title}")
            dialog.destroy()
        
        self.make_btn(dialog, "💾 Add Unit", save, '#0D9488').pack(pady=20)
    
    def add_topic_dialog(self):
        """Dialog to add a new topic"""
        selection = self.content_tree.selection()
        if not selection:
            messagebox.showinfo("Info", "Select a unit first")
            return
        
        item = selection[0]
        values = self.content_tree.item(item, 'values')
        
        # Navigate to find unit
        if values and values[0] == 'topic':
            parent = self.content_tree.parent(item)
            unit_item = self.content_tree.parent(parent)
            ui = int(self.content_tree.item(parent, 'values')[1])
        elif values and values[0] == 'unit':
            unit_item = item
            ui = int(values[1])
        elif values and values[0] == 'subject':
            # Add to first unit
            unit_item = self.content_tree.get_children(item)[0] if self.content_tree.get_children(item) else None
            if not unit_item:
                messagebox.showinfo("Info", "Add a unit first")
                return
            ui = int(self.content_tree.item(unit_item, 'values')[1])
        else:
            messagebox.showinfo("Info", "Select a unit")
            return
        
        subj_item = self.content_tree.parent(unit_item)
        subj_key = self.content_tree.item(subj_item, 'values')[1]
        
        dialog = tk.Toplevel(self.root)
        dialog.title("Add New Topic")
        dialog.geometry("400x200")
        dialog.transient(self.root)
        dialog.grab_set()
        
        tk.Label(dialog, text="Topic Title:", font=('Baloo 2', 11),
                bg=dialog.BG_COLOR, fg='#134E4A').pack(pady=(15,5))
        title_entry = tk.Entry(dialog, font=('Comic Neue', 12), width=40)
        title_entry.pack(pady=5)
        
        def save():
            title = title_entry.get().strip()
            if not title:
                messagebox.showwarning("Warning", "Title is required")
                return
            
            grade_key = self.grade_var.get().split()[0]
            subj = self.content_data.get(grade_key, {}).get(subj_key, {})
            units = subj.get('units', [])
            
            # Generate basic content template
            content = f"""
<h3>{title}</h3>
<p>Study notes for {title} — part of the {subj.get('name', '')} curriculum.</p>

<h4>Key Concepts</h4>
<ul>
<li>Concept 1: Description</li>
<li>Concept 2: Description</li>
<li>Concept 3: Description</li>
</ul>

<h4>Important Points</h4>
<p>Add your study notes here...</p>

<h4>Practice Questions</h4>
<ol>
<li>Question 1</li>
<li>Question 2</li>
<li>Question 3</li>
</ol>
"""
            
            if ui < len(units):
                units[ui]['topics'].append({'title': title, 'content': content})
            
            self.save_data()
            self.refresh_content_tree()
            self.update_status(f"✅ Added topic: {title}")
            dialog.destroy()
        
        self.make_btn(dialog, "💾 Add Topic", save, '#0D9488').pack(pady=20)
    
    def edit_selected(self):
        """Focus on editing the selected item"""
        self.load_selected_into_editor()
    
    def delete_selected(self):
        """Delete the selected item"""
        selection = self.content_tree.selection()
        if not selection:
            return
        
        item = selection[0]
        values = self.content_tree.item(item, 'values')
        if not values:
            return
        
        item_type = values[0]
        item_ref = values[1]
        item_text = self.content_tree.item(item, 'text')
        grade_key = self.grade_var.get().split()[0]
        
        if not messagebox.askyesno("Confirm Delete", f"Delete '{item_text}'?\nThis cannot be undone!"):
            return
        
        if item_type == "subject":
            if grade_key in self.content_data and item_ref in self.content_data[grade_key]:
                del self.content_data[grade_key][item_ref]
        
        elif item_type == "unit":
            subj_item = self.content_tree.parent(item)
            subj_key = self.content_tree.item(subj_item, 'values')[1]
            subj = self.content_data.get(grade_key, {}).get(subj_key, {})
            units = subj.get('units', [])
            try:
                ui = int(item_ref)
                if ui < len(units):
                    subj['units'].pop(ui)
            except:
                pass
        
        elif item_type == "topic":
            parts = item_ref.split(':')
            if len(parts) == 2:
                ui, ti = int(parts[0]), int(parts[1])
                unit_item = self.content_tree.parent(item)
                subj_item = self.content_tree.parent(unit_item)
                subj_key = self.content_tree.item(subj_item, 'values')[1]
                subj = self.content_data.get(grade_key, {}).get(subj_key, {})
                units = subj.get('units', [])
                if ui < len(units) and ti < len(units[ui].get('topics', [])):
                    units[ui]['topics'].pop(ti)
        
        self.save_data()
        self.refresh_content_tree()
        self.update_status(f"🗑️ Deleted: {item_text}")
    
    # ─── AI Content Generator ──────────────────────────────
    def build_ai_generator(self):
        f = self.tab_ai
        
        if not getattr(self, 'gemini_ready', False):
            tk.Label(f, text="⚠️ Gemini AI Not Connected", font=('Baloo 2', 18),
                    fg='#DC2626').pack(pady=50)
            tk.Label(f, text="The AI features require an internet connection and valid API key.",
                    font=('Comic Neue', 12), fg='#4B7A75').pack()
            self.make_btn(f, "🔄 Retry Connection", self.init_gemini, '#0D9488').pack(pady=10)
            return
        
        # Top controls
        control_frame = tk.Frame(f, bg=f.BG_COLOR)
        control_frame.pack(fill=tk.X, pady=10)
        
        tk.Label(control_frame, text="Generate Educational Content with AI", 
                font=('Baloo 2', 16, 'bold'), bg=control_frame.BG_COLOR, fg='#134E4A').pack(anchor=tk.W)
        
        # Subject & Topic inputs
        input_frame = tk.Frame(f, bg=f.BG_COLOR)
        input_frame.pack(fill=tk.X, pady=10)
        
        # Grade
        tk.Label(input_frame, text="Grade:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=0, column=0, sticky=tk.W, padx=5)
        self.ai_grade = ttk.Combobox(input_frame, values=["A/L", "O/L", "Grade 6-9", "Grade 1-5"], width=15)
        self.ai_grade.grid(row=0, column=1, padx=5, pady=5)
        self.ai_grade.set("A/L")
        
        # Subject
        tk.Label(input_frame, text="Subject:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=0, column=2, sticky=tk.W, padx=5)
        self.ai_subject = tk.Entry(input_frame, font=('Comic Neue', 11), width=25, relief=tk.SOLID, bd=1)
        self.ai_subject.grid(row=0, column=3, padx=5, pady=5)
        self.ai_subject.insert(0, "Combined Maths")
        
        # Topic
        tk.Label(input_frame, text="Topic:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=0, column=4, sticky=tk.W, padx=5)
        self.ai_topic = tk.Entry(input_frame, font=('Comic Neue', 11), width=30, relief=tk.SOLID, bd=1)
        self.ai_topic.grid(row=0, column=5, padx=5, pady=5)
        self.ai_topic.insert(0, "Differentiation")
        
        # Content type
        tk.Label(input_frame, text="Content Style:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=1, column=0, sticky=tk.W, padx=5)
        self.ai_style = ttk.Combobox(input_frame, 
            values=["📝 Study Notes", "📊 Summary & Key Points", "❓ Practice Questions", "🎯 Exam Tips", "📚 Complete Lesson"],
            width=30)
        self.ai_style.grid(row=1, column=1, columnspan=2, padx=5, pady=5, sticky=tk.W)
        self.ai_style.set("📝 Study Notes")
        
        # Generate button
        self.make_btn(input_frame, "🤖 Generate with AI", self.generate_content_ai, '#D97706').grid(row=1, column=4, padx=5)
        self.make_btn(input_frame, "📥 Save to CMS", self.save_ai_content, '#0D9488').grid(row=1, column=5, padx=5)
        
        # Output
        output_frame = tk.LabelFrame(f, text="🤖 AI Generated Content", font=('Baloo 2', 12),
                                    bg=f.BG_COLOR, fg='#134E4A', padx=10, pady=10)
        output_frame.pack(fill=tk.BOTH, expand=True)
        
        self.ai_output = scrolledtext.ScrolledText(
            output_frame, wrap=tk.WORD, font=('Courier', 10),
            bg='#1e293b', fg='#e2e8f0', insertbackground='white',
            relief=tk.SOLID, bd=1
        )
        self.ai_output.pack(fill=tk.BOTH, expand=True)
        
        # Status
        self.ai_status = tk.Label(output_frame, text="Ready to generate!", 
                                  font=('Comic Neue', 10), bg=output_frame.BG_COLOR, fg='#4B7A75')
        self.ai_status.pack(anchor=tk.W, pady=(5, 0))
    
    def generate_content_ai(self):
        """Generate content using Gemini AI"""
        if not getattr(self, 'gemini_ready', False) or not self.gemini_client:
            messagebox.showerror("AI Error", "Gemini AI is not connected")
            return
        
        subject = self.ai_subject.get().strip()
        topic = self.ai_topic.get().strip()
        grade = self.ai_grade.get().strip()
        style = self.ai_style.get().strip()
        
        if not subject or not topic:
            messagebox.showwarning("Input Error", "Please enter subject and topic")
            return
        
        self.ai_status.config(text="⏳ Generating content with Gemini AI...")
        self.root.update()
        
        def generate():
            try:
                prompt = f"""You are an expert Sri Lankan {grade} {subject} teacher. 
Create comprehensive study notes about "{topic}" for {grade} students following the Sri Lankan curriculum.

Format the content as HTML that can be displayed on a website. Use these HTML tags:
- <h3> for main title
- <h4> for subtitles  
- <p> for paragraphs
- <ul>/<li> for bullet points
- <ol>/<li> for numbered lists
- <strong> for bold text
- <table>/<tr>/<th>/<td> for tables
- <pre> for code/formulas

Content style: {style}

Include:
1. Clear explanations with examples
2. Key formulas or concepts (if applicable)
3. Important definitions
4. Practice questions for self-testing
5. Sri Lankan curriculum context

Make the content educational, accurate, and easy to understand. DO NOT wrap in HTML/head/body tags."""
                
                response = self.gemini_client.models.generate_content(
                    model="gemini-2.0-flash",
                    contents=prompt
                )
                
                if response and response.text:
                    self.root.after(0, lambda: self.ai_output.delete("1.0", tk.END))
                    self.root.after(0, lambda: self.ai_output.insert("1.0", response.text.strip()))
                    self.root.after(0, lambda: self.ai_status.config(
                        text=f"✅ Generated content for: {topic} ({len(response.text)} chars)"))
                else:
                    self.root.after(0, lambda: self.ai_status.config(text="❌ No content generated"))
            
            except Exception as e:
                self.root.after(0, lambda: self.ai_status.config(text=f"❌ Error: {str(e)[:50]}"))
        
        threading.Thread(target=generate, daemon=True).start()
    
    def save_ai_content(self):
        """Save AI generated content to a new topic"""
        content = self.ai_output.get("1.0", tk.END).strip()
        if not content or content == "Ready to generate!":
            messagebox.showinfo("Info", "Generate content first using the AI button")
            return
        
        subject_name = self.ai_subject.get().strip().lower().replace(' ', '-')
        topic = self.ai_topic.get().strip()
        grade_map = {"A/L": "al", "O/L": "ol", "Grade 6-9": "grade6_9", "Grade 1-5": "grade1_5"}
        grade_key = grade_map.get(self.ai_grade.get(), "al")
        
        if grade_key not in self.content_data:
            self.content_data[grade_key] = {}
        
        if subject_name not in self.content_data[grade_key]:
            self.content_data[grade_key][subject_name] = {
                'name': self.ai_subject.get().strip(),
                'icon': '📚',
                'color': '#0D9488',
                'units': []
            }
        
        subj = self.content_data[grade_key][subject_name]
        if not subj.get('units'):
            subj['units'] = [{'title': self.ai_subject.get().strip(), 'topics': []}]
        
        subj['units'][0]['topics'].append({'title': topic, 'content': content})
        
        self.save_data()
        self.refresh_content_tree()
        self.update_status(f"✅ Saved AI content: {topic}")
        messagebox.showinfo("Success", f"Content for '{topic}' saved successfully!\n\nSwitch to Content Manager tab to view it.")
    
    # ─── AI Study Guide ─────────────────────────────────────
    def build_study_guide(self):
        f = self.tab_study
        
        if not getattr(self, 'gemini_ready', False):
            tk.Label(f, text="⚠️ Gemini AI Not Connected. Study Guide requires AI.", 
                    font=('Baloo 2', 14), fg='#DC2626').pack(pady=50)
            return
        
        # Header
        tk.Label(f, text="🎯 AI Study Guide Generator", font=('Baloo 2', 18, 'bold'),
                bg=f.BG_COLOR, fg='#134E4A').pack(pady=(15,5))
        tk.Label(f, text="Generate personalized study guides and learning plans for students", 
                font=('Comic Neue', 12), bg=f.BG_COLOR, fg='#4B7A75').pack()
        
        # Inputs
        input_frame = tk.Frame(f, bg=f.BG_COLOR)
        input_frame.pack(pady=20)
        
        tk.Label(input_frame, text="Student Grade:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=0, column=0, padx=5, sticky=tk.W)
        self.sg_grade = ttk.Combobox(input_frame, values=["Grade 5 Scholarship", "Grade 6-9", "O/L", "A/L"], width=20)
        self.sg_grade.grid(row=0, column=1, padx=5, pady=5)
        self.sg_grade.set("A/L")
        
        tk.Label(input_frame, text="Subject:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=0, column=2, padx=5, sticky=tk.W)
        self.sg_subject = tk.Entry(input_frame, font=('Comic Neue', 11), width=20, relief=tk.SOLID, bd=1)
        self.sg_subject.grid(row=0, column=3, padx=5, pady=5)
        self.sg_subject.insert(0, "Science")
        
        tk.Label(input_frame, text="Exam Focus:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=0, column=4, padx=5, sticky=tk.W)
        self.sg_exam = ttk.Combobox(input_frame, values=[
            "Final Exam", "Term Test", "Unit Test", "General Study", "Quick Revision"
        ], width=15)
        self.sg_exam.grid(row=0, column=5, padx=5, pady=5)
        self.sg_exam.set("Final Exam")
        
        # Duration
        tk.Label(input_frame, text="Study Duration:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=1, column=0, padx=5, sticky=tk.W)
        self.sg_duration = ttk.Combobox(input_frame, values=["1 Day", "3 Days", "1 Week", "2 Weeks", "1 Month"], width=15)
        self.sg_duration.grid(row=1, column=1, padx=5, pady=5)
        self.sg_duration.set("1 Week")
        
        # Student notes
        tk.Label(input_frame, text="Student Notes:", font=('Baloo 2', 11),
                bg=input_frame.BG_COLOR, fg='#134E4A').grid(row=1, column=2, padx=5, sticky=tk.W)
        self.sg_notes = tk.Entry(input_frame, font=('Comic Neue', 11), width=50, relief=tk.SOLID, bd=1)
        self.sg_notes.grid(row=1, column=3, columnspan=2, padx=5, pady=5)
        self.sg_notes.insert(0, "Struggling with formulas, needs more practice")
        
        self.make_btn(input_frame, "🎯 Generate Study Guide", self.generate_study_guide, '#D97706').grid(row=1, column=5, padx=5)
        
        # Output
        output_frame = tk.LabelFrame(f, text="📋 Study Guide", font=('Baloo 2', 12),
                                    bg=f.BG_COLOR, fg='#134E4A', padx=10, pady=10)
        output_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=(0, 20))
        
        self.sg_output = scrolledtext.ScrolledText(
            output_frame, wrap=tk.WORD, font=('Comic Neue', 11),
            bg='white', fg='#134E4A', relief=tk.SOLID, bd=1
        )
        self.sg_output.pack(fill=tk.BOTH, expand=True)
        
        self.sg_status = tk.Label(output_frame, text="Enter details and generate a study guide!", 
                                  font=('Comic Neue', 10), bg=output_frame.BG_COLOR, fg='#4B7A75')
        self.sg_status.pack(anchor=tk.W)
    
    def generate_study_guide(self):
        """Generate a study guide using Gemini AI"""
        if not getattr(self, 'gemini_ready', False) or not self.gemini_client:
            messagebox.showerror("AI Error", "Gemini AI is not connected")
            return
        
        grade = self.sg_grade.get()
        subject = self.sg_subject.get().strip()
        exam = self.sg_exam.get()
        duration = self.sg_duration.get()
        notes = self.sg_notes.get().strip()
        
        self.sg_status.config(text="⏳ Creating personalized study guide...")
        self.root.update()
        
        def generate():
            try:
                prompt = f"""You are an expert Sri Lankan education counselor and subject teacher.

Create a detailed {duration} study plan for a {grade} student preparing for their {exam} in {subject}.

Student's additional notes: "{notes}"

Create a comprehensive study guide that includes:

1. **📅 Day-by-Day Study Schedule** suitable for {duration}
2. **📚 Topic Prioritization** - what to focus on first
3. **⏰ Time Management Tips** specific to {grade} students
4. **💡 Study Techniques** for {subject}
5. **⚠️ Common Mistakes to Avoid** in exams
6. **✅ Quick Revision Checklist**
7. **🎯 Confidence Building Tips**

Format with clear sections using **bold headers** and line breaks. Keep it practical and actionable for a Sri Lankan student. Use emojis for visual appeal. Do NOT use HTML tags - just plain text with markdown-style formatting."""
                
                response = self.gemini_client.models.generate_content(
                    model="gemini-2.0-flash",
                    contents=prompt
                )
                
                if response and response.text:
                    self.root.after(0, lambda: self.sg_output.delete("1.0", tk.END))
                    self.root.after(0, lambda: self.sg_output.insert("1.0", response.text.strip()))
                    self.root.after(0, lambda: self.sg_status.config(text="✅ Study guide generated!"))
                else:
                    self.root.after(0, lambda: self.sg_status.config(text="❌ No guide generated"))
            
            except Exception as e:
                self.root.after(0, lambda: self.sg_status.config(text=f"❌ Error: {str(e)[:50]}"))
        
        threading.Thread(target=generate, daemon=True).start()
    
    # ─── GitHub Sync ───────────────────────────────────────
    def build_git_sync(self):
        f = self.tab_git
        
        # Header
        tk.Label(f, text="🚀 Deploy to GitHub Pages", font=('Baloo 2', 18, 'bold'),
                bg=f.BG_COLOR, fg='#134E4A').pack(pady=(15,5))
        tk.Label(f, text="Push your content updates to zaieduhub.github.io", 
                font=('Comic Neue', 12), bg=f.BG_COLOR, fg='#4B7A75').pack()
        
        # Git Status Frame
        status_frame = tk.LabelFrame(f, text="📊 Repository Status", font=('Baloo 2', 12),
                                    bg=f.BG_COLOR, fg='#134E4A', padx=20, pady=15)
        status_frame.pack(fill=tk.X, padx=40, pady=20)
        
        self.git_info = scrolledtext.ScrolledText(
            status_frame, wrap=tk.WORD, font=('Courier', 10),
            bg='#1e293b', fg='#e2e8f0', height=8, relief=tk.SOLID, bd=1
        )
        self.git_info.pack(fill=tk.BOTH, expand=True)
        
        # Actions
        action_frame = tk.Frame(f, bg=f.BG_COLOR)
        action_frame.pack(pady=10)
        
        self.make_btn(action_frame, "🔄 Check Status", self.check_git_status, '#64748B').pack(side=tk.LEFT, padx=10)
        self.make_btn(action_frame, "📦 Commit & Deploy", self.commit_and_push, '#0D9488').pack(side=tk.LEFT, padx=10)
        self.make_btn(action_frame, "💾 Save All & Deploy", self.save_and_deploy, '#D97706').pack(side=tk.LEFT, padx=10)
        
        # Deploy log
        log_frame = tk.LabelFrame(f, text="📝 Deploy Log", font=('Baloo 2', 12),
                                 bg=f.BG_COLOR, fg='#134E4A', padx=10, pady=10)
        log_frame.pack(fill=tk.BOTH, expand=True, padx=40, pady=(0, 20))
        
        self.deploy_log = scrolledtext.ScrolledText(
            log_frame, wrap=tk.WORD, font=('Courier', 10),
            bg='#0D1117', fg='#e2e8f0', height=12, relief=tk.SOLID, bd=1
        )
        self.deploy_log.pack(fill=tk.BOTH, expand=True)
        
        # Initial status
        self.check_git_status()
    
    def log(self, message):
        """Add message to deploy log"""
        self.deploy_log.insert(tk.END, f"> {message}\n")
        self.deploy_log.see(tk.END)
        self.root.update()
    
    def check_git_status(self):
        """Check current git status"""
        self.git_info.delete("1.0", tk.END)
        try:
            result = subprocess.run(
                ["git", "status"],
                capture_output=True, text=True, cwd=SCRIPT_DIR, timeout=10
            )
            self.git_info.insert("1.0", result.stdout + result.stderr)
            self.log("📋 Git status checked")
        except Exception as e:
            self.git_info.insert("1.0", f"Error: {e}")
            self.log(f"❌ Git error: {e}")
    
    def commit_and_push(self):
        """Commit and push to GitHub"""
        self.log("🚀 Starting deploy process...")
        self.root.update()
        
        def deploy():
            try:
                # Set up git remote if not configured
                remote_check = subprocess.run(
                    ["git", "remote", "get-url", "origin"],
                    capture_output=True, text=True, cwd=SCRIPT_DIR, timeout=10
                )
                if remote_check.returncode != 0:
                    self.log("🔗 Configuring git remote...")
                    remote_url = f"https://zaieduhub:{GITHUB_TOKEN}@github.com/{GITHUB_REPO}.git"
                    subprocess.run(
                        ["git", "remote", "add", "origin", remote_url],
                        capture_output=True, cwd=SCRIPT_DIR, timeout=10
                    )
                    self.log("✅ Git remote configured")
                
                # Stage all files
                self.log("📦 Staging all files...")
                subprocess.run(["git", "add", "-A"], cwd=SCRIPT_DIR, capture_output=True, timeout=10)
                
                # Commit
                timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
                commit_msg = f"📚 CMS Update - {timestamp}"
                self.log(f"💾 Committing: {commit_msg}")
                
                # Set user config if not set
                subprocess.run(["git", "config", "user.name", "zaieduhub"], cwd=SCRIPT_DIR, capture_output=True, timeout=5)
                subprocess.run(["git", "config", "user.email", "ruzaith2007@gmail.com"], cwd=SCRIPT_DIR, capture_output=True, timeout=5)
                
                result = subprocess.run(
                    ["git", "commit", "-m", commit_msg, "--allow-empty"],
                    capture_output=True, text=True, cwd=SCRIPT_DIR, timeout=10
                )
                self.log(result.stdout.strip() or result.stderr.strip())
                
                # Push
                self.log("☁️ Pushing to GitHub...")
                push_result = subprocess.run(
                    ["git", "push", "-f", "origin", "main"],
                    capture_output=True, text=True, cwd=SCRIPT_DIR, timeout=60
                )
                
                if push_result.returncode == 0:
                    self.log("✅ SUCCESS! Website deployed to zaieduhub.github.io!")
                    self.log(f"⏱ Time: {timestamp}")
                    self.update_status("🚀 Website deployed successfully!")
                    
                    # Show success in git info
                    self.git_info.delete("1.0", tk.END)
                    self.git_info.insert("1.0", 
                        "✅ DEPLOYMENT SUCCESSFUL!\n\n"
                        "Your website has been updated at:\n"
                        "🌐 https://zaieduhub.github.io/\n\n"
                        f"📅 Last deployed: {timestamp}\n"
                        "⏳ Changes visible in 1-2 minutes."
                    )
                    
                    # Show success message
                    self.root.after(0, lambda: messagebox.showinfo(
                        "Deploy Success", 
                        "✅ Website deployed successfully!\n\n"
                        "Your changes are now live at:\n"
                        "https://zaieduhub.github.io/\n\n"
                        "⏳ Changes visible in 1-2 minutes."
                    ))
                else:
                    error = push_result.stderr or push_result.stdout
                    self.log(f"❌ Push failed: {error[:300]}")
                    
                    if "Could not resolve host" in error:
                        self.log("⚠️ Network issue - try again later")
                    elif "403" in error:
                        self.log("🔑 Token permission issue - check token")
                    elif "rejected" in error:
                        self.log("🔄 Force push conflict - retrying...")
                        retry = subprocess.run(
                            ["git", "push", "-f", "origin", "main"],
                            capture_output=True, text=True, cwd=SCRIPT_DIR, timeout=60
                        )
                        if retry.returncode == 0:
                            self.log("✅ Retry successful!")
                        else:
                            self.log(f"❌ Retry also failed: {retry.stderr[:200]}")
                    
            except Exception as e:
                self.log(f"❌ Deploy error: {e}")
        
        threading.Thread(target=deploy, daemon=True).start()
    
    def save_and_deploy(self):
        """Save data first, then deploy"""
        if self.save_data():
            self.log("✅ Data saved to data.js")
            self.commit_and_push()
        else:
            self.log("❌ Failed to save data")
    
    # ─── Helper Methods ────────────────────────────────────
    def make_btn(self, parent, text, command, color='#0D9488'):
        """Create a styled button"""
        btn = tk.Button(parent, text=text, command=command,
                       font=('Baloo 2', 10), bg=color, fg='white',
                       padx=15, pady=5, bd=0, cursor='hand2',
                       activebackground=self.lighten(color),
                       activeforeground='white')
        btn.bind("<Enter>", lambda e: btn.config(bg=self.lighten(color)))
        btn.bind("<Leave>", lambda e: btn.config(bg=color))
        return btn
    
    def lighten(self, color):
        """Lighten a hex color for hover effect"""
        try:
            r = int(color[1:3], 16)
            g = int(color[3:5], 16)
            b = int(color[5:7], 16)
            r = min(255, r + 30)
            g = min(255, g + 30)
            b = min(255, b + 30)
            return f'#{r:02x}{g:02x}{b:02x}'
        except:
            return color
    
    def update_status(self, message):
        """Update the status bar"""
        self.status_label.config(text=message)
        self.root.update_idletasks()

# ─── Main Entry Point ─────────────────────────────────────
if __name__ == "__main__":
    root = tk.Tk()
    app = ZaiCMS(root)
    root.mainloop()
