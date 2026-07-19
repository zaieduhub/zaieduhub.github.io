/* ============================================
   ZAI CMS WEB ADMIN - Admin Panel Logic
   Made by Zai Creations with Love ❤️
   ============================================ */

// ─── State ───────────────────────────────────────────────
const state = {
    content: {},
    selectedGrade: 'al',
    selectedSubject: null,
    selectedUnit: null,
    selectedTopic: null,
    editingType: null,
    editingRef: null,
    bulkResults: []
};

// ─── API Helper ──────────────────────────────────────────
async function apiPost(endpoint, data = {}) {
    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (e) {
        console.error('API Error:', e);
        return { success: false, message: `Network error: ${e.message}` };
    }
}

async function apiGet(endpoint) {
    try {
        const res = await fetch(endpoint);
        return await res.json();
    } catch (e) {
        console.error('API Error:', e);
        return { success: false };
    }
}

// ─── Toast ───────────────────────────────────────────────
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 4000);
}

// ─── Tab Switching ──────────────────────────────────────
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tab = this.dataset.tab;
        switchTab(tab);
    });
});

function switchTab(tab) {
    // Update sidebar
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`.sidebar-link[data-tab="${tab}"]`);
    if (link) link.classList.add('active');
    
    // Update tab
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    const tabEl = document.getElementById(`tab-${tab}`);
    if (tabEl) tabEl.classList.add('active');
    
    // Load data when switching to content tab
    if (tab === 'content') loadContentTree();
    if (tab === 'deploy') checkGitStatus();
}

// ─── Theme ───────────────────────────────────────────────
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    localStorage.setItem('zai-cms-theme', current === 'dark' ? 'light' : 'dark');
}

// Load saved theme
const savedTheme = localStorage.getItem('zai-cms-theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

// ─── Clock ──────────────────────────────────────────────
function updateClock() {
    const el = document.getElementById('headerTime');
    if (el) el.textContent = new Date().toLocaleString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        month: 'short',
        day: 'numeric'
    });
}
setInterval(updateClock, 1000);
updateClock();

// ─── Dashboard ──────────────────────────────────────────
async function loadDashboard() {
    const res = await apiGet('/api/content/stats');
    const statsGrid = document.getElementById('statsGrid');
    
    if (res.stats) {
        const grades = ['al', 'ol', 'grade6_9', 'grade1_5'];
        const names = ['A/L (Gr 12-13)', 'O/L (Gr 10-11)', 'Grade 6-9', 'Grade 1-5'];
        const icons = ['🎓', '📐', '📖', '📕'];
        
        statsGrid.innerHTML = grades.map((key, i) => {
            const s = res.stats[key] || { subjects: 0, units: 0, topics: 0 };
            return `
                <div class="stat-card">
                    <div class="stat-card-grade">${icons[i]} ${names[i]}</div>
                    <div style="display:flex;gap:1rem;margin-top:0.5rem;">
                        <div><div class="stat-card-value">${s.subjects}</div><div class="stat-card-label">Subjects</div></div>
                        <div><div class="stat-card-value">${s.units}</div><div class="stat-card-label">Units</div></div>
                        <div><div class="stat-card-value">${s.topics}</div><div class="stat-card-label">Topics</div></div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    checkAIStatus();
}

async function checkAIStatus() {
    const res = await apiGet('/api/status');
    const connected = res.gemini;
    
    // Sidebar badge
    const dot = document.getElementById('aiDot');
    const text = document.getElementById('aiStatusText');
    dot.className = `ai-dot ${connected ? 'connected' : 'disconnected'}`;
    text.textContent = connected ? 'AI Connected' : 'AI Offline';
    
    // Dashboard card
    const dotLarge = document.getElementById('aiDotLarge');
    const title = document.getElementById('aiStatusTitle');
    const detail = document.getElementById('aiStatusDetail');
    if (dotLarge) {
        dotLarge.className = `ai-dot large ${connected ? 'connected' : 'disconnected'}`;
        title.textContent = connected ? '✅ Gemini AI Connected' : '❌ Gemini AI Not Connected';
        detail.textContent = connected ? 'Google Gemini API is active and ready' : 'Check config.env for API key or internet connection';
    }
}

// ─── Content Manager ────────────────────────────────────
document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.selectedGrade = this.dataset.grade;
        state.selectedSubject = null;
        state.selectedUnit = null;
        state.selectedTopic = null;
        loadContentTree();
    });
});

async function loadContentTree() {
    const res = await apiGet('/api/content');
    state.content = res || {};
    renderTree();
}

function renderTree() {
    const container = document.getElementById('contentTree');
    const subjects = state.content[state.selectedGrade] || {};
    const keys = Object.keys(subjects);
    
    if (keys.length === 0) {
        container.innerHTML = `<div class="tree-empty">📭 No subjects yet. Click "➕ New" to add one.</div>`;
        return;
    }
    
    container.innerHTML = keys.map(subjKey => {
        const subj = subjects[subjKey];
        const units = subj.units || [];
        const isSelected = state.selectedSubject === subjKey && !state.selectedUnit;
        
        return `
            <div class="tree-item">
                <div class="tree-item-header ${isSelected ? 'selected' : ''}" 
                     onclick="selectSubject('${subjKey}')" data-key="${subjKey}">
                    <span class="tree-toggle expanded">▶</span>
                    <span class="tree-item-icon">${subj.icon || '📚'}</span>
                    <span class="tree-item-text">${subj.name || subjKey}</span>
                    <span class="tree-item-actions">
                        <button class="tree-item-action" onclick="event.stopPropagation();showAddUnit('${subjKey}')" title="Add Unit">➕</button>
                        <button class="tree-item-action delete" onclick="event.stopPropagation();deleteSubject('${subjKey}')" title="Delete">🗑️</button>
                    </span>
                </div>
                <div class="tree-children">
                    ${units.map((unit, ui) => {
                        const topics = unit.topics || [];
                        const isUnitSelected = state.selectedSubject === subjKey && state.selectedUnit === ui && !state.selectedTopic;
                        return `
                            <div class="tree-item">
                                <div class="tree-item-header ${isUnitSelected ? 'selected' : ''}"
                                     onclick="selectUnit('${subjKey}', ${ui})">
                                    <span class="tree-toggle expanded">▶</span>
                                    <span class="tree-item-icon">📂</span>
                                    <span class="tree-item-text">${unit.title || 'Unit ' + (ui+1)}</span>
                                    <span class="tree-item-actions">
                                        <button class="tree-item-action" onclick="event.stopPropagation();showAddTopic('${subjKey}', ${ui})" title="Add Topic">➕</button>
                                        <button class="tree-item-action delete" onclick="event.stopPropagation();deleteUnit('${subjKey}', ${ui})" title="Delete">🗑️</button>
                                    </span>
                                </div>
                                <div class="tree-children">
                                    ${topics.map((topic, ti) => {
                                        const isTopicSelected = state.selectedSubject === subjKey && state.selectedUnit === ui && state.selectedTopic === ti;
                                        return `
                                            <div class="tree-item">
                                                <div class="tree-item-header ${isTopicSelected ? 'selected' : ''}"
                                                     onclick="selectTopic('${subjKey}', ${ui}, ${ti})">
                                                    <span class="tree-item-icon">📄</span>
                                                    <span class="tree-item-text">${topic.title || 'Topic ' + (ti+1)}</span>
                                                    <span class="tree-item-actions">
                                                        <button class="tree-item-action delete" onclick="event.stopPropagation();deleteTopic('${subjKey}', ${ui}, ${ti})" title="Delete">🗑️</button>
                                                    </span>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function selectSubject(key) {
    state.selectedSubject = key;
    state.selectedUnit = null;
    state.selectedTopic = null;
    state.editingType = 'subject';
    state.editingRef = key;
    
    const subj = state.content[state.selectedGrade][key];
    document.getElementById('editorTitle').value = subj.name || '';
    document.getElementById('editorContent').value = `Subject: ${key}\nIcon: ${subj.icon || '📚'}\nUnits: ${(subj.units || []).length}`;
    document.getElementById('editorInfo').querySelector('span:last-child').textContent = `✏️ Editing subject: ${subj.name}`;
    renderTree();
}

function selectUnit(key, ui) {
    state.selectedSubject = key;
    state.selectedUnit = ui;
    state.selectedTopic = null;
    state.editingType = 'unit';
    state.editingRef = { key, ui };
    
    const subj = state.content[state.selectedGrade][key];
    const unit = (subj.units || [])[ui];
    document.getElementById('editorTitle').value = unit ? unit.title : '';
    document.getElementById('editorContent').value = unit ? `Unit: ${unit.title}\nTopics: ${(unit.topics || []).length}` : '';
    document.getElementById('editorInfo').querySelector('span:last-child').textContent = `✏️ Editing unit: ${unit ? unit.title : ''}`;
    renderTree();
}

function selectTopic(key, ui, ti) {
    state.selectedSubject = key;
    state.selectedUnit = ui;
    state.selectedTopic = ti;
    state.editingType = 'topic';
    state.editingRef = { key, ui, ti };
    
    const subj = state.content[state.selectedGrade][key];
    const unit = (subj.units || [])[ui] || {};
    const topic = (unit.topics || [])[ti];
    document.getElementById('editorTitle').value = topic ? topic.title : '';
    document.getElementById('editorContent').value = topic ? topic.content : '';
    document.getElementById('editorInfo').querySelector('span:last-child').textContent = `✏️ Editing: ${topic ? topic.title : ''}`;
    renderTree();
}

async function saveEditor() {
    const title = document.getElementById('editorTitle').value.trim();
    const content = document.getElementById('editorContent').value.trim();
    
    if (!title) { showToast('❌ Title cannot be empty', 'error'); return; }
    
    if (state.editingType === 'topic' && state.editingRef) {
        const { key, ui, ti } = state.editingRef;
        const res = await apiPost('/api/content/update-topic', {
            grade: state.selectedGrade,
            subject: key,
            unit_idx: ui,
            topic_idx: ti,
            title,
            content
        });
        if (res.success) {
            showToast(res.message, 'success');
            await loadContentTree();
        } else {
            showToast(res.message, 'error');
        }
    } else if (state.editingType === 'subject' && state.editingRef) {
        showToast('✅ Subject name saved! Use the tree to edit content.', 'info');
    } else {
        showToast('📌 Select a topic to edit its content', 'info');
    }
}

function showAddSubject() {
    showModal('➕ Add New Subject', `
        <div class="form-group">
            <label>Subject Key (e.g., physics)</label>
            <input type="text" class="form-input" id="modalSubjectKey" placeholder="physics">
        </div>
        <div class="form-group">
            <label>Subject Name (e.g., Physics)</label>
            <input type="text" class="form-input" id="modalSubjectName" placeholder="Physics">
        </div>
        <div class="form-group">
            <label>Icon (emoji)</label>
            <input type="text" class="form-input" id="modalSubjectIcon" value="📚" style="width:80px;">
        </div>
    `, [
        { text: 'Cancel', class: 'btn btn-ghost', action: closeModal },
        { text: '➕ Add Subject', class: 'btn btn-primary', action: addSubject }
    ]);
}

async function addSubject() {
    const key = document.getElementById('modalSubjectKey').value.trim().toLowerCase().replace(/\s+/g, '-');
    const name = document.getElementById('modalSubjectName').value.trim();
    const icon = document.getElementById('modalSubjectIcon').value.trim() || '📚';
    
    if (!key || !name) { showToast('❌ Key and Name are required', 'error'); return; }
    
    const res = await apiPost('/api/content/add-subject', {
        grade: state.selectedGrade,
        key, name, icon
    });
    
    closeModal();
    showToast(res.message, res.success ? 'success' : 'error');
    if (res.success) await loadContentTree();
}

function showAddUnit(subjKey) {
    showModal('➕ Add New Unit', `
        <div class="form-group">
            <label>Unit Title</label>
            <input type="text" class="form-input" id="modalUnitTitle" placeholder="e.g. Chemical Reactions">
        </div>
    `, [
        { text: 'Cancel', class: 'btn btn-ghost', action: closeModal },
        { text: '➕ Add Unit', class: 'btn btn-primary', action: () => addUnit(subjKey) }
    ]);
}

async function addUnit(subjKey) {
    const title = document.getElementById('modalUnitTitle').value.trim();
    if (!title) { showToast('❌ Title is required', 'error'); return; }
    
    const res = await apiPost('/api/content/add-unit', {
        grade: state.selectedGrade,
        subject: subjKey,
        title
    });
    
    closeModal();
    showToast(res.message, res.success ? 'success' : 'error');
    if (res.success) await loadContentTree();
}

function showAddTopic(subjKey, ui) {
    showModal('➕ Add New Topic', `
        <div class="form-group">
            <label>Topic Title</label>
            <input type="text" class="form-input" id="modalTopicTitle" placeholder="e.g. Types of Chemical Reactions">
        </div>
    `, [
        { text: 'Cancel', class: 'btn btn-ghost', action: closeModal },
        { text: '➕ Add Topic', class: 'btn btn-primary', action: () => addTopic(subjKey, ui) }
    ]);
}

async function addTopic(subjKey, ui) {
    const title = document.getElementById('modalTopicTitle').value.trim();
    if (!title) { showToast('❌ Title is required', 'error'); return; }
    
    const res = await apiPost('/api/content/add-topic', {
        grade: state.selectedGrade,
        subject: subjKey,
        unit_idx: ui,
        title
    });
    
    closeModal();
    showToast(res.message, res.success ? 'success' : 'error');
    if (res.success) await loadContentTree();
}

async function deleteSubject(key) {
    if (!confirm(`Delete subject "${key}" and all its content?`)) return;
    const res = await apiPost('/api/content/delete', { grade: state.selectedGrade, subject: key });
    showToast(res.message, res.success ? 'info' : 'error');
    if (res.success) { state.selectedSubject = null; await loadContentTree(); }
}

async function deleteUnit(key, ui) {
    if (!confirm('Delete this unit and all its topics?')) return;
    const res = await apiPost('/api/content/delete', { grade: state.selectedGrade, subject: key, unit_idx: ui });
    showToast(res.message, res.success ? 'info' : 'error');
    if (res.success) { state.selectedUnit = null; await loadContentTree(); }
}

async function deleteTopic(key, ui, ti) {
    if (!confirm('Delete this topic?')) return;
    const res = await apiPost('/api/content/delete', { grade: state.selectedGrade, subject: key, unit_idx: ui, topic_idx: ti });
    showToast(res.message, res.success ? 'info' : 'error');
    if (res.success) { state.selectedTopic = null; await loadContentTree(); }
}

// ─── Editor Toolbar ──────────────────────────────────────
function insertTag(tag) {
    const textarea = document.getElementById('editorContent');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);
    const openers = { h3: '<h3>', h4: '<h4>', p: '<p>', ul: '<ul>\n', ol: '<ol>\n', li: '<li>', strong: '<strong>' };
    const closers = { h3: '</h3>', h4: '</h4>', p: '</p>', ul: '\n</ul>', ol: '\n</ol>', li: '</li>', strong: '</strong>' };
    
    const insert = tag === 'ul' || tag === 'ol' 
        ? `${openers[tag]}  <li>${selected || 'Item'}</li>\n</${tag}>`
        : `${openers[tag]}${selected || 'text'}${closers[tag]}`;
    
    textarea.setRangeText(insert, start, end, 'end');
    textarea.focus();
}

function generateWithAI() {
    switchTab('generator');
    const title = document.getElementById('editorTitle').value;
    if (title) {
        document.getElementById('genTopic').value = title;
    }
    showToast('📝 Switch to AI Generator tab to create content', 'info');
}

// ─── Modal ───────────────────────────────────────────────
function showModal(title, body, buttons = []) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = body;
    
    const footer = document.getElementById('modalFooter');
    footer.innerHTML = buttons.map(b => 
        `<button class="${b.class}" onclick="(${b.action.toString()})()">${b.text}</button>`
    ).join('');
    
    document.getElementById('modalOverlay').classList.add('open');
    document.getElementById('modalDialog').classList.add('open');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.getElementById('modalDialog').classList.remove('open');
}

// ─── AI Generator ────────────────────────────────────────
async function generateContent() {
    const grade = document.getElementById('genGrade').value;
    const subject = document.getElementById('genSubject').value.trim();
    const topic = document.getElementById('genTopic').value.trim();
    const style = document.getElementById('genStyle').value;
    
    if (!subject || !topic) { showToast('❌ Enter subject and topic', 'error'); return; }
    
    document.getElementById('genStatus').textContent = '⏳ Generating content with Gemini AI...';
    document.getElementById('genOutput').value = '';
    
    const res = await apiPost('/api/ai/generate', { subject, topic, grade, style });
    
    if (res.success && res.content) {
        document.getElementById('genOutput').value = res.content;
        document.getElementById('genStatus').textContent = `✅ Generated! (${res.content.length} chars)`;
        showToast('✅ Content generated successfully!', 'success');
    } else {
        document.getElementById('genStatus').textContent = `❌ ${res.message || 'Generation failed'}`;
        showToast('❌ Generation failed', 'error');
    }
}

async function saveGeneratedContent() {
    const content = document.getElementById('genOutput').value.trim();
    if (!content) { showToast('❌ Generate content first!', 'error'); return; }
    
    const gradeMap = { 'A/L': 'al', 'O/L': 'ol', 'Grade 6-9': 'grade6_9', 'Grade 1-5': 'grade1_5' };
    const grade = gradeMap[document.getElementById('genGrade').value] || 'al';
    const subjectName = document.getElementById('genSubject').value.trim().toLowerCase().replace(/\s+/g, '-');
    const topic = document.getElementById('genTopic').value.trim();
    const subjectDisplay = document.getElementById('genSubject').value.trim();
    
    // Create subject if needed
    const contentRes = await apiGet('/api/content');
    const data = contentRes || {};
    if (!data[grade]) data[grade] = {};
    if (!data[grade][subjectName]) {
        data[grade][subjectName] = {
            name: subjectDisplay,
            icon: '📚',
            color: '#0D9488',
            units: [{ title: subjectDisplay, topics: [] }]
        };
    }
    
    // Add topic to first unit
    const subj = data[grade][subjectName];
    if (!subj.units || subj.units.length === 0) {
        subj.units = [{ title: subjectDisplay, topics: [] }];
    }
    subj.units[0].topics.push({ title: topic, content });
    
    const saveRes = await apiPost('/api/content/save', { content: data });
    if (saveRes.success) {
        showToast(`✅ Saved "${topic}" to ${subjectDisplay}`, 'success');
    } else {
        showToast('❌ Failed to save', 'error');
    }
}

// ─── AI Translate (from editor) ──────────────────────────
async function translateContent(lang) {
    const content = document.getElementById('editorContent').value.trim();
    if (!content || content.length < 10) {
        showToast('❌ Load content into editor first!', 'error');
        return;
    }
    
    showToast(`🌐 Translating...`, 'info');
    const res = await apiPost('/api/ai/translate', { content, language: lang });
    
    if (res.success && res.content) {
        document.getElementById('editorContent').value = res.content;
        showToast('✅ Translation complete!', 'success');
    } else {
        showToast('❌ Translation failed', 'error');
    }
}

async function improveContent() {
    const content = document.getElementById('editorContent').value.trim();
    if (!content || content.length < 20) {
        showToast('❌ Need at least 20 chars to improve', 'error');
        return;
    }
    
    showToast('✨ Improving content...', 'info');
    const res = await apiPost('/api/ai/improve', { content, mode: 'Enhance & Expand' });
    
    if (res.success && res.content) {
        document.getElementById('editorContent').value = res.content;
        showToast('✅ Content improved!', 'success');
    } else {
        showToast('❌ Improvement failed', 'error');
    }
}

async function summarizeContent() {
    const content = document.getElementById('editorContent').value.trim();
    if (!content || content.length < 50) {
        showToast('❌ Need at least 50 chars to summarize', 'error');
        return;
    }
    
    showToast('📋 Creating summary...', 'info');
    const res = await apiPost('/api/ai/improve', { content, mode: 'Create Summary Table' });
    
    if (res.success && res.content) {
        document.getElementById('editorContent').value = content + '\n\n<!-- AI SUMMARY -->\n' + res.content;
        showToast('✅ Summary added to content!', 'success');
    } else {
        showToast('❌ Summarization failed', 'error');
    }
}

// ─── Tool Tabs ──────────────────────────────────────────
document.querySelectorAll('.tool-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tool-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(`tool-${this.dataset.tool}`).classList.add('active');
    });
});

// ─── Bulk Generator ──────────────────────────────────────
async function bulkGenerate() {
    const grade = document.getElementById('bulkGrade').value;
    const subject = document.getElementById('bulkSubject').value.trim();
    const unit = document.getElementById('bulkUnit').value.trim();
    const topicsText = document.getElementById('bulkTopics').value.trim();
    const topics = topicsText.split(',').map(t => t.trim()).filter(t => t);
    
    if (!subject || !unit || topics.length === 0) {
        showToast('❌ Fill all fields with at least one topic', 'error');
        return;
    }
    
    state.bulkResults = [];
    const resultsDiv = document.getElementById('bulkResults');
    const progressBar = document.getElementById('bulkProgress');
    const progressFill = document.getElementById('bulkProgressFill');
    const status = document.getElementById('bulkStatus');
    
    progressBar.style.display = 'block';
    resultsDiv.innerHTML = '';
    status.textContent = `⏳ Generating ${topics.length} topics...`;
    
    for (let i = 0; i < topics.length; i++) {
        resultsDiv.innerHTML += `<div class="bulk-result-item" id="bulkItem${i}">⏳ Generating "${topics[i]}"...</div>`;
    }
    
    for (let i = 0; i < topics.length; i++) {
        const res = await apiPost('/api/ai/bulk-generate', {
            grade, subject, unit, topics: [topics[i]]
        });
        
        const item = document.getElementById(`bulkItem${i}`);
        if (res.success && res.results && res.results[0]) {
            state.bulkResults.push(res.results[0]);
            item.className = 'bulk-result-item success';
            item.innerHTML = `✅ ${topics[i]}`;
        } else {
            item.className = 'bulk-result-item error';
            item.innerHTML = `❌ ${topics[i]} - Failed`;
        }
        
        progressFill.style.width = `${((i + 1) / topics.length) * 100}%`;
    }
    
    status.textContent = `✅ Complete! ${state.bulkResults.length} topics generated. Click "Save All to CMS" to save.`;
}

async function saveBulkContent() {
    if (!state.bulkResults || state.bulkResults.length === 0) {
        showToast('❌ Generate content first!', 'error');
        return;
    }
    
    const gradeMap = { 'A/L': 'al', 'O/L': 'ol', 'Grade 6-9': 'grade6_9', 'Grade 1-5': 'grade1_5' };
    const grade = gradeMap[document.getElementById('bulkGrade').value] || 'ol';
    const subjectName = document.getElementById('bulkSubject').value.trim().toLowerCase().replace(/\s+/g, '-');
    const unitTitle = document.getElementById('bulkUnit').value.trim();
    
    const contentRes = await apiGet('/api/content');
    const data = contentRes || {};
    if (!data[grade]) data[grade] = {};
    if (!data[grade][subjectName]) {
        data[grade][subjectName] = { 
            name: document.getElementById('bulkSubject').value.trim(), 
            icon: '📚', color: '#0D9488', units: [] 
        };
    }
    
    data[grade][subjectName].units.push({ title: unitTitle, topics: state.bulkResults });
    
    const res = await apiPost('/api/content/save', { content: data });
    if (res.success) {
        showToast(`✅ Saved ${state.bulkResults.length} topics!`, 'success');
        state.bulkResults = [];
        document.getElementById('bulkResults').innerHTML = '';
        document.getElementById('bulkStatus').textContent = '✅ Saved successfully!';
    } else {
        showToast('❌ Failed to save', 'error');
    }
}

// ─── Question Paper ──────────────────────────────────────
async function generateQuestionPaper() {
    const grade = document.getElementById('qpGrade').value;
    const subject = document.getElementById('qpSubject').value.trim();
    const examType = document.getElementById('qpType').value;
    const topics = document.getElementById('qpTopics').value.trim();
    
    document.getElementById('qpStatus').textContent = '⏳ Generating question paper...';
    document.getElementById('qpOutput').value = '';
    
    const res = await apiPost('/api/ai/question-paper', { grade, subject, exam_type: examType, topics });
    
    if (res.success && res.content) {
        document.getElementById('qpOutput').value = res.content;
        document.getElementById('qpStatus').textContent = '✅ Question paper generated!';
        showToast('✅ Question paper ready!', 'success');
    } else {
        document.getElementById('qpStatus').textContent = '❌ Generation failed';
        showToast('❌ Failed to generate question paper', 'error');
    }
}

// ─── Content Improver Tool ──────────────────────────────
async function improveContentTool() {
    const content = document.getElementById('improveInput').value.trim();
    const mode = document.getElementById('improveMode').value;
    
    if (!content || content.length < 20) {
        showToast('❌ Paste content to improve (min 20 chars)', 'error');
        return;
    }
    
    document.getElementById('improveStatus').textContent = '⏳ Improving...';
    document.getElementById('improveOutput').value = '';
    
    const res = await apiPost('/api/ai/improve', { content, mode: mode.replace(/^[^\s]+\s/, '') });
    
    if (res.success && res.content) {
        document.getElementById('improveOutput').value = res.content;
        document.getElementById('improveStatus').textContent = '✅ Improvement complete!';
        showToast('✅ Content improved!', 'success');
    } else {
        document.getElementById('improveStatus').textContent = '❌ Improvement failed';
        showToast('❌ Failed to improve content', 'error');
    }
}

// ─── AI Chat ──────────────────────────────────────────────
async function sendChat() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    input.value = '';
    const messagesDiv = document.getElementById('chatMessages');
    const status = document.getElementById('chatStatus');
    
    // Add user message
    messagesDiv.innerHTML += `
        <div class="chat-message user">
            <div class="chat-avatar">👤</div>
            <div class="chat-bubble"><strong>You</strong><p>${escapeHtml(message)}</p></div>
        </div>
    `;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    status.textContent = '⏳ Thinking...';
    
    const context = document.getElementById('chatContext').value;
    const res = await apiPost('/api/ai/chat', { message, context });
    
    if (res.success && res.reply) {
        messagesDiv.innerHTML += `
            <div class="chat-message ai">
                <div class="chat-avatar">🤖</div>
                <div class="chat-bubble"><strong>Zai AI</strong><p>${escapeHtml(res.reply).replace(/\n/g, '<br>')}</p></div>
            </div>
        `;
        status.textContent = '✅ Answered!';
    } else {
        messagesDiv.innerHTML += `
            <div class="chat-message ai">
                <div class="chat-avatar">🤖</div>
                <div class="chat-bubble"><strong>Zai AI</strong><p>Sorry, I couldn't generate an answer. Please try again.</p></div>
            </div>
        `;
        status.textContent = '❌ Failed';
    }
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function quickChat(message) {
    document.getElementById('chatInput').value = message;
    sendChat();
}

// ─── Deploy ──────────────────────────────────────────────
async function checkGitStatus() {
    const res = await apiPost('/api/git/status', {});
    document.getElementById('gitStatus').textContent = res.status || '⚠️ Could not check status';
}

function addLogEntry(message, type = '') {
    const log = document.getElementById('deployLog');
    log.innerHTML += `<div class="log-entry ${type}">▸ ${message}</div>`;
    log.scrollTop = log.scrollHeight;
}

async function saveAndDeploy() {
    addLogEntry('💾 Saving content...');
    
    // Save current content
    const res = await apiPost('/api/content/save', { content: state.content });
    
    if (res.success) {
        addLogEntry('✅ Content saved to data.js', 'success');
    } else {
        addLogEntry('❌ Save failed', 'error');
        return;
    }
    
    addLogEntry('🚀 Starting deployment...');
    const deployRes = await apiPost('/api/git/deploy');
    
    if (deployRes.success) {
        addLogEntry('✅ SUCCESS! Website deployed to zaieduhub.github.io!', 'success');
        addLogEntry(`🌐 https://zaieduhub.github.io/`, 'success');
        addLogEntry('⏳ Changes visible in 1-2 minutes.');
        showToast('🚀 Deployed successfully!', 'success');
    } else {
        addLogEntry(`❌ Deploy failed: ${deployRes.output || 'Unknown error'}`, 'error');
        showToast('❌ Deploy failed. Check internet connection.', 'error');
    }
}

async function deployOnly() {
    addLogEntry('🚀 Starting deployment (without save)...');
    const res = await apiPost('/api/git/deploy');
    
    if (res.success) {
        addLogEntry('✅ Deployed successfully!', 'success');
        showToast('🚀 Deployed!', 'success');
    } else {
        addLogEntry(`❌ Failed: ${res.output || 'Error'}`, 'error');
        showToast('❌ Deploy failed', 'error');
    }
}

// ─── Utility ─────────────────────────────────────────────
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ─── Init ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
    
    // Editor textarea handling for improve/summarize
    // (already handled by toolbar buttons)
    
    console.log('🚀 Zai CMS Web Admin loaded!');
});
