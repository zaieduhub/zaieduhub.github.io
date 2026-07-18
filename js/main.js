/* ============================================
   ZAI EDUCATION HUB - Main JavaScript
   Made by Zai Creations with Love ❤️
   ============================================ */

// =============================================
// 1. DOM READY - Initialize Everything
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLoadingScreen();
    initThemeToggle();
    initMobileMenu();
    initNavbarScroll();
    initScrollAnimations();
    initGradeTabs();
    initQuiz();
    initMemoryGame();
    initContentViewer();
    initBackToTop();
    initSmoothScroll();
    initCounters();
    initContactCards();
    initBotCards();
});

// Global content viewer state
let viewerState = {
    grade: '',
    subjectKey: '',
    subject: null,
    unitIndex: 0,
    topicIndex: 0
};

// =============================================
// 2. LOADING SCREEN
// =============================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 1800);

    // Fallback
    setTimeout(() => {
        if (!loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }
    }, 3500);
}

// =============================================
// 3. THEME TOGGLE (Dark/Light Mode)
// =============================================
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    // Check saved theme
    const savedTheme = localStorage.getItem('zai-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('zai-theme', newTheme);
        
        // Playful toggle animation
        toggleBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            toggleBtn.style.transform = '';
        }, 300);
    });
}

// =============================================
// 4. MOBILE MENU
// =============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');
    
    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        menuBtn.innerHTML = isOpen ? '✕' : '☰';
        document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuBtn.innerHTML = '☰';
            document.body.style.overflow = 'visible';
        });
    });
}

// =============================================
// 5. NAVBAR SCROLL EFFECT
// =============================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll direction
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Active nav link highlighting using IntersectionObserver (performant, no layout thrashing)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-link');

    if (sections.length && navLinks.length) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0,
            rootMargin: '-70px 0px -50% 0px'
        });

        sections.forEach(section => navObserver.observe(section));

        // Default: activate home on page load (in case hero hasn't triggered yet)
        const homeLink = document.querySelector('.navbar-link[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
    }
}

// =============================================
// 6. SCROLL ANIMATIONS (Intersection Observer)
// =============================================
function initScrollAnimations() {
    const animateElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, ' +
        '.animate-on-scroll-scale, .stagger-item'
    );

    if (!animateElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay for staggered items
                if (entry.target.classList.contains('stagger-item')) {
                    const parent = entry.target.closest('[data-stagger]');
                    const items = parent ? parent.querySelectorAll('.stagger-item') : [];
                    const itemIndex = Array.from(items).indexOf(entry.target);
                    const delay = Math.min(itemIndex * 100, 500);
                    
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                } else {
                    entry.target.classList.add('visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => observer.observe(el));
}

// =============================================
// 7. GRADE TABS & CONTENT VIEWER (Real Study Materials)
// =============================================
function initGradeTabs() {
    const tabs = document.querySelectorAll('.grade-tab');
    const subjectGrid = document.getElementById('subjectGrid');
    
    if (!tabs.length || !subjectGrid) return;

    // Helper to get subjects for a grade
    function getSubjectsForGrade(grade) {
        const content = getGradeSubjects(grade);
        const list = [];
        for (const [key, val] of Object.entries(content)) {
            const unitCount = val.units ? val.units.length : 0;
            const topicCount = val.units ? val.units.reduce((sum, u) => sum + (u.topics ? u.topics.length : 0), 0) : 0;
            list.push({
                key: key,
                name: val.name,
                icon: val.icon || '📚',
                color: val.color || '#0D9488',
                desc: `${unitCount} units, ${topicCount} topics with complete study notes`,
                count: `${topicCount}+ topics`
            });
        }
        return list;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const grade = tab.dataset.grade;
            const subjects = getSubjectsForGrade(grade);
            renderSubjects(subjects, grade);
        });
    });

    // Render initial subjects (AL)
    const initialSubjects = getSubjectsForGrade('al');
    renderSubjects(initialSubjects, 'al');
}

function renderSubjects(subjects, grade) {
    const grid = document.getElementById('subjectGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    subjects.forEach((subject, index) => {
        const card = document.createElement('div');
        card.className = `subject-card stagger-item`;
        
        card.innerHTML = `
            <div class="subject-card-icon" style="background: ${subject.color}20; color: ${subject.color}">
                ${subject.icon}
            </div>
            <h3 class="subject-card-title">${subject.name}</h3>
            <p class="subject-card-desc">${subject.desc}</p>
            <div class="subject-card-meta">
                <span>📚 ${subject.count}</span>
                <span>⭐ Free Access</span>
            </div>
            <button class="btn btn-primary btn-sm subject-card-btn" onclick="openSubjectViewer('${grade}', '${subject.key}')">
                📖 Study Now
            </button>
        `;
        
        grid.appendChild(card);
        
        requestAnimationFrame(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 80);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    });
}

// =============================================
// 7b. CONTENT VIEWER (Subject/Topic Viewer Modal)
// =============================================
function initContentViewer() {
    const modal = document.getElementById('contentViewer');
    if (!modal) return;
    
    // Close buttons
    modal.querySelectorAll('.content-close, .content-backdrop').forEach(el => {
        if (el) el.addEventListener('click', closeContentViewer);
    });
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeContentViewer();
    });
}

window.openSubjectViewer = function(grade, subjectKey) {
    const content = getSubjectContent(grade.replace('-', '_'), subjectKey);
    if (!content) {
        showToast('📚 Content for this subject is being prepared!', 'info');
        return;
    }
    
    viewerState.grade = grade;
    viewerState.subjectKey = subjectKey;
    viewerState.subject = content;
    viewerState.unitIndex = 0;
    viewerState.topicIndex = 0;
    
    renderContentViewer();
};

function renderContentViewer() {
    const modal = document.getElementById('contentViewer');
    const body = document.getElementById('contentViewerBody');
    if (!modal || !body || !viewerState.subject) return;
    
    const subject = viewerState.subject;
    const units = subject.units || [];
    const unit = units[viewerState.unitIndex];
    const topics = unit ? unit.topics || [] : [];
    const topic = topics[viewerState.topicIndex];
    
    // Build sidebar (unit list)
    let sidebarHTML = `<div class="content-sidebar-header">
        <span class="content-sidebar-icon">${subject.icon || '📚'}</span>
        <h3>${subject.name}</h3>
    </div>
    <div class="content-sidebar-units">`;
    
    units.forEach((u, ui) => {
        const isActiveUnit = ui === viewerState.unitIndex;
        sidebarHTML += `<div class="content-unit-group ${isActiveUnit ? 'active' : ''}">
            <div class="content-unit-title" onclick="selectUnit(${ui})">
                <span>${u.title}</span>
                <span class="content-unit-count">${u.topics ? u.topics.length : 0}</span>
            </div>`;
        if (u.topics && isActiveUnit) {
            u.topics.forEach((t, ti) => {
                const isActiveTopic = ti === viewerState.topicIndex;
                sidebarHTML += `<div class="content-topic-item ${isActiveTopic ? 'active' : ''}" onclick="selectTopic(${ui}, ${ti})">
                    📄 ${t.title}
                </div>`;
            });
        }
        sidebarHTML += `</div>`;
    });
    
    sidebarHTML += `</div>`;
    
    // Build main content area
    let mainHTML = '';
    if (topic && topic.content) {
        mainHTML = `<div class="content-topic-header">
            <span class="content-breadcrumb">${subject.name} / ${unit ? unit.title : ''} / ${topic.title}</span>
            <h2>${topic.title}</h2>
        </div>
        <div class="content-topic-body">${topic.content}</div>
        <div class="content-topic-nav">
            <button class="btn btn-outline btn-sm" onclick="navigateTopic(-1)" ${viewerState.topicIndex <= 0 ? 'disabled' : ''}>
                ← Previous
            </button>
            <span class="content-progress">Topic ${viewerState.topicIndex + 1} of ${topics.length}</span>
            <button class="btn btn-primary btn-sm" onclick="navigateTopic(1)" ${viewerState.topicIndex >= topics.length - 1 ? 'disabled' : ''}>
                Next →
            </button>
        </div>`;
    } else if (unit && unit.topics) {
        mainHTML = `<div class="content-unit-landing">
            <h2>${unit.title}</h2>
            <p>Select a topic from the sidebar to start studying.</p>
            <div class="content-topic-grid">
                ${unit.topics.map((t, ti) => `
                    <div class="content-topic-card" onclick="selectTopic(${viewerState.unitIndex}, ${ti})">
                        <span class="content-topic-card-icon">📄</span>
                        <span>${t.title}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }
    
    body.innerHTML = `<div class="content-sidebar">${sidebarHTML}</div>
        <div class="content-main">${mainHTML}</div>`;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

window.selectUnit = function(index) {
    if (viewerState.subject && viewerState.subject.units && viewerState.subject.units[index]) {
        viewerState.unitIndex = index;
        viewerState.topicIndex = 0;
        renderContentViewer();
    }
};

window.selectTopic = function(unitIndex, topicIndex) {
    viewerState.unitIndex = unitIndex;
    viewerState.topicIndex = topicIndex;
    renderContentViewer();
};

window.navigateTopic = function(direction) {
    const topics = viewerState.subject.units[viewerState.unitIndex].topics;
    const newIndex = viewerState.topicIndex + direction;
    if (newIndex >= 0 && newIndex < topics.length) {
        viewerState.topicIndex = newIndex;
        renderContentViewer();
    }
};

window.closeContentViewer = function() {
    const modal = document.getElementById('contentViewer');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = 'visible';
    }
};

// =============================================
// 8. GENERAL KNOWLEDGE QUIZ
// =============================================
function initQuiz() {
    const startBtn = document.getElementById('quizStartBtn');
    const quizContent = document.getElementById('quizContent');
    const quizStart = document.getElementById('quizStart');
    const questionEl = document.getElementById('quizQuestion');
    const optionsEl = document.getElementById('quizOptions');
    const timerEl = document.getElementById('quizTimer');
    const progressEl = document.getElementById('quizProgress');
    const scoreEl = document.getElementById('quizScore');
    const nextBtn = document.getElementById('quizNextBtn');
    const resultEl = document.getElementById('quizResult');
    const subjectBtns = document.querySelectorAll('.quiz-subject-btn');

    if (!startBtn || !quizContent) return;

    // Quiz questions by subject
    const questions = {
        general: [
            { q: 'What is the capital of Sri Lanka?', options: ['Colombo', 'Kandy', 'Sri Jayawardenepura Kotte', 'Galle'], correct: 2 },
            { q: 'Who wrote the Sri Lankan national anthem?', options: ['Ananda Samarakoon', 'Mahagama Sekara', 'W. D. Amaradeva', 'Sunil Santha'], correct: 0 },
            { q: 'What is the highest mountain in Sri Lanka?', options: ['Adams Peak', 'Pidurutalagala', 'Kirigalpoththa', 'Knuckles'], correct: 1 },
            { q: 'In which year did Sri Lanka gain independence?', options: ['1948', '1950', '1947', '1945'], correct: 0 },
            { q: 'What is the official currency of Sri Lanka?', options: ['Rupee', 'Dollar', 'Rupiah', 'Ringgit'], correct: 0 },
            { q: 'Which ocean borders Sri Lanka?', options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'], correct: 2 },
            { q: 'What is the national flower of Sri Lanka?', options: ['Lotus', 'Blue Water Lily', 'Rose', 'Orchid'], correct: 1 },
            { q: 'Who was the first Prime Minister of Sri Lanka?', options: ['S. W. R. D. Bandaranaike', 'D. S. Senanayake', 'Sirimavo Bandaranaike', 'J. R. Jayewardene'], correct: 1 },
            { q: 'What is the main religion in Sri Lanka?', options: ['Hinduism', 'Islam', 'Buddhism', 'Christianity'], correct: 2 },
            { q: 'Which is the longest river in Sri Lanka?', options: ['Mahaweli', 'Kelani', 'Kalu', 'Walawe'], correct: 0 }
        ],
        math: [
            { q: 'What is the value of π (pi) to 2 decimal places?', options: ['3.14', '3.16', '3.12', '3.18'], correct: 0 },
            { q: 'What is the square root of 144?', options: ['10', '11', '12', '13'], correct: 2 },
            { q: 'What is 15% of 200?', options: ['25', '30', '35', '20'], correct: 1 },
            { q: 'What is the next prime number after 7?', options: ['8', '9', '10', '11'], correct: 3 },
            { q: 'How many degrees are in a right angle?', options: ['45°', '90°', '180°', '360°'], correct: 1 }
        ],
        science: [
            { q: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'NaCl', 'O2'], correct: 0 },
            { q: 'What planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correct: 1 },
            { q: 'What is the largest organ in the human body?', options: ['Heart', 'Liver', 'Brain', 'Skin'], correct: 3 },
            { q: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correct: 2 },
            { q: 'What is the speed of light approximately?', options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '100,000 km/s'], correct: 0 }
        ],
        english: [
            { q: 'What is the plural of "child"?', options: ['Childs', 'Childes', 'Children', 'Child\'s'], correct: 2 },
            { q: 'What type of word is "beautifully"?', options: ['Adjective', 'Adverb', 'Verb', 'Noun'], correct: 1 },
            { q: 'Which sentence is correct?', options: ['He go to school', 'He goes to school', 'He going to school', 'He gone to school'], correct: 1 },
            { q: 'What is a synonym for "happy"?', options: ['Sad', 'Angry', 'Joyful', 'Tired'], correct: 2 },
            { q: 'What is the past tense of "run"?', options: ['Run', 'Runned', 'Ran', 'Running'], correct: 2 }
        ]
    };

    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let timer = null;
    let timeLeft = 15;
    let isAnswered = false;
    let selectedSubject = 'general';

    // Subject selection
    subjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subjectBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSubject = btn.dataset.subject;
        });
    });

    // Start quiz
    startBtn.addEventListener('click', () => {
        currentQuestions = [...(questions[selectedSubject] || questions['general'])];
        currentIndex = 0;
        score = 0;
        isAnswered = false;
        
        // Shuffle questions
        currentQuestions.sort(() => Math.random() - 0.5);
        
        quizStart.style.display = 'none';
        quizContent.style.display = 'block';
        resultEl.style.display = 'none';
        
        showQuestion();
    });

    function showQuestion() {
        if (currentIndex >= currentQuestions.length) {
            showResult();
            return;
        }

        isAnswered = false;
        const q = currentQuestions[currentIndex];
        
        questionEl.textContent = q.q;
        progressEl.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
        scoreEl.textContent = `Score: ${score}/${currentQuestions.length}`;
        
        // Generate option letters
        const letters = ['A', 'B', 'C', 'D'];
        
        optionsEl.innerHTML = q.options.map((opt, i) => `
            <button class="quiz-option" data-index="${i}" onclick="selectQuizOption(this)">
                <span class="option-letter">${letters[i]}</span>
                ${opt}
            </button>
        `).join('');

        nextBtn.style.display = 'none';
        startTimer();
    }

    window.selectQuizOption = function(el) {
        if (isAnswered) return;
        isAnswered = true;
        clearInterval(timer);

        const idx = parseInt(el.dataset.index);
        const q = currentQuestions[currentIndex];
        const allOptions = optionsEl.querySelectorAll('.quiz-option');

        allOptions.forEach(opt => opt.classList.remove('selected'));

        // Highlight correct and wrong
        allOptions.forEach((opt, i) => {
            if (i === q.correct) {
                opt.classList.add('correct');
            } else if (i === idx && idx !== q.correct) {
                opt.classList.add('wrong');
            }
        });

        if (idx === q.correct) {
            score++;
            scoreEl.textContent = `Score: ${score}/${currentQuestions.length}`;
            el.classList.add('selected');
            showConfetti();
        }

        nextBtn.style.display = 'inline-flex';
    };

    function startTimer() {
        timeLeft = 15;
        timerEl.textContent = `⏱ ${timeLeft}s`;
        timerEl.classList.remove('warning');
        
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerEl.textContent = `⏱ ${timeLeft}s`;
            
            if (timeLeft <= 5) {
                timerEl.classList.add('warning');
            }
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                if (!isAnswered) {
                    isAnswered = true;
                    const q = currentQuestions[currentIndex];
                    const allOptions = optionsEl.querySelectorAll('.quiz-option');
                    allOptions.forEach((opt, i) => {
                        if (i === q.correct) {
                            opt.classList.add('correct');
                        }
                    });
                    nextBtn.style.display = 'inline-flex';
                }
            }
        }, 1000);
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        showQuestion();
    });

    function showResult() {
        clearInterval(timer);
        quizContent.style.display = 'none';
        resultEl.style.display = 'block';
        
        const percentage = Math.round((score / currentQuestions.length) * 100);
        let emoji = '🎉', msg = 'Excellent!';
        if (percentage < 40) { emoji = '💪'; msg = 'Keep Practicing!'; }
        else if (percentage < 70) { emoji = '👏'; msg = 'Good Effort!'; }
        else if (percentage < 90) { emoji = '🌟'; msg = 'Great Job!'; }
        
        resultEl.innerHTML = `
            <div class="quiz-result">
                <div style="font-size: 4rem; margin-bottom: 1rem;">${emoji}</div>
                <span class="quiz-result-score">${score}/${currentQuestions.length}</span>
                <p class="quiz-result-label">${msg} (${percentage}%)</p>
                <p style="color: var(--color-foreground-secondary); margin-top: 0.5rem;">
                    Keep learning with Zai Education Hub!
                </p>
                <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="restartQuiz()">
                    🔄 Try Again
                </button>
            </div>
        `;
        
        if (percentage >= 80) {
            showConfetti();
        }
    }

    window.restartQuiz = function() {
        const quizStart = document.getElementById('quizStart');
        const quizContent = document.getElementById('quizContent');
        const resultEl = document.getElementById('quizResult');
        
        quizStart.style.display = 'block';
        quizContent.style.display = 'none';
        resultEl.style.display = 'none';
    };
}

// =============================================
// 9. MEMORY GAME
// =============================================
function initMemoryGame() {
    const startBtns = document.querySelectorAll('.game-card .btn');
    const memoryGame = document.getElementById('memoryGame');
    const gameBackBtn = document.getElementById('gameBackBtn');
    const memoryGrid = document.getElementById('memoryGrid');
    const gameMoves = document.getElementById('gameMoves');
    const gameTimer = document.getElementById('gameTimer');
    const gameResult = document.getElementById('gameResult');

    if (!startBtns.length || !memoryGame) return;

    const emojis = ['🐶', '🐱', '🐸', '🦊', '🐻', '🐼', '🐨', '🦁'];
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let timer = null;
    let seconds = 0;
    let isLocked = false;

    startBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Hide all game cards, show memory game
            document.querySelectorAll('.game-card').forEach(c => c.style.display = 'none');
            memoryGame.classList.add('active');
            startGame();
        });
    });

    gameBackBtn.addEventListener('click', () => {
        memoryGame.classList.remove('active');
        document.querySelectorAll('.game-card').forEach(c => c.style.display = 'block');
        clearInterval(timer);
    });

    function startGame() {
        // Reset
        cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        seconds = 0;
        isLocked = false;
        
        gameMoves.textContent = 'Moves: 0';
        gameTimer.textContent = '⏱ 0s';
        gameResult.style.display = 'none';
        
        // Render grid
        memoryGrid.innerHTML = cards.map((emoji, i) => `
            <div class="memory-card" data-index="${i}" onclick="flipCard(this)">
                <div class="memory-card-inner">
                    <div class="memory-card-back">?</div>
                    <div class="memory-card-front">${emoji}</div>
                </div>
            </div>
        `).join('');

        // Start timer
        clearInterval(timer);
        timer = setInterval(() => {
            seconds++;
            gameTimer.textContent = `⏱ ${seconds}s`;
        }, 1000);
    }

    window.flipCard = function(card) {
        if (isLocked || card.classList.contains('flipped') || card.classList.contains('matched')) return;

        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            moves++;
            gameMoves.textContent = `Moves: ${moves}`;
            isLocked = true;

            const card1 = flippedCards[0];
            const card2 = flippedCards[1];
            const emoji1 = cards[card1.dataset.index];
            const emoji2 = cards[card2.dataset.index];

            if (emoji1 === emoji2) {
                // Match!
                setTimeout(() => {
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                    matchedPairs++;
                    flippedCards = [];
                    isLocked = false;

                    // Check win
                    if (matchedPairs === emojis.length) {
                        clearInterval(timer);
                        showGameResult();
                    }
                }, 500);
            } else {
                // No match
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards = [];
                    isLocked = false;
                }, 1000);
            }
        }
    };

    function showGameResult() {
        gameResult.style.display = 'block';
        gameResult.innerHTML = `
            <div style="text-align: center; margin-top: 1rem; padding: 1rem; 
                 background: rgba(16, 185, 129, 0.1); border-radius: 1rem;">
                <div style="font-size: 3rem;">🎉</div>
                <p style="font-weight: 700; color: var(--color-success);">You Won!</p>
                <p style="font-size: 0.875rem; color: var(--color-foreground-secondary);">
                    ${moves} moves | ${seconds}s
                </p>
                <button class="btn btn-primary btn-sm" style="margin-top: 0.5rem;" onclick="window.startGame()">
                    🔄 Play Again
                </button>
            </div>
        `;
        showConfetti();
    }

    // Expose startGame for replay
    window.startGame = startGame;
}

// =============================================
// 10. BACK TO TOP
// =============================================
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============================================
// 11. SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// =============================================
// 12. COUNTER ANIMATION
// =============================================
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 60);
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current + (target > 1000 ? '+' : '+');
    }, 25);
}

// =============================================
// 13. CONTACT CARDS (Click/Interaction)
// =============================================
function initContactCards() {
    document.querySelectorAll('.contact-card .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.contact-card');
            const platform = card.querySelector('h3').textContent;
            
            if (platform.includes('WhatsApp')) {
                showToast('📱 Opening WhatsApp...', 'info');
            } else if (platform.includes('Email')) {
                showToast('📧 Opening email client...', 'info');
            } else if (platform.includes('Telegram')) {
                showToast('✈️ Opening Telegram...', 'info');
            } else if (platform.includes('Phone')) {
                showToast('📞 Dialing number...', 'info');
            }
        });
    });
}

// =============================================
// 14. BOT CARDS
// =============================================
function initBotCards() {
    document.querySelectorAll('.bot-card .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.bot-card');
            const botName = card.querySelector('h3').textContent;
            
            if (botName.includes('WhatsApp')) {
                showToast('🤖 WhatsApp Bot is being set up! Coming soon.', 'info');
                window.open('https://wa.me/94750761016', '_blank');
            } else if (botName.includes('Telegram')) {
                showToast('🤖 Telegram Bot is being set up! Coming soon.', 'info');
                window.open('https://t.me/zaieditsofficial', '_blank');
            }
        });
    });
}

// =============================================
// 15. CONFETTI EFFECT
// =============================================
let confettiActiveCount = 0;
const CONFETTI_MAX = 150;

function showConfetti() {
    const colors = ['#0D9488', '#2DD4BF', '#D97706', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];
    const confettiCount = Math.min(50, CONFETTI_MAX - confettiActiveCount);
    if (confettiCount <= 0) return;
    
    confettiActiveCount += confettiCount;

    for (let i = 0; i < confettiCount; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 8 + 4 + 'px';
        piece.style.height = Math.random() * 8 + 4 + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.animationDuration = Math.random() * 2 + 2 + 's';
        piece.style.animationDelay = Math.random() * 1 + 's';
        
        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
            confettiActiveCount--;
        }, 4000);
    }
}

// =============================================
// 16. TOAST NOTIFICATION
// =============================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// =============================================
// 17. LAZY LOADING & PERFORMANCE
// =============================================
// Defer non-critical operations
window.addEventListener('load', () => {
    // Preload any lazy content
    console.log('🚀 Zai Education Hub loaded successfully!');
});

// Lazy loading ready for future images (add data-src to <img> tags when ready)
// IntersectionObserver pattern is available for images, videos, or iframes

// ============================================
// END OF MAIN.JS
// Made with ❤️ by Zai Creations
// ============================================
