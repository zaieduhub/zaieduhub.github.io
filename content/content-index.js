/* ============================================
   ZAI EDUCATION HUB - Content Index
   Loads all study content organized by:
   - Grade (A/L, O/L, Gr6-9, Gr1-5)
   - Medium (Sinhala, Tamil, English)
   - With source attribution for every item
   ============================================ */

// Content sources reference
const ZAI_SOURCES = {
    'nie': {
        name: 'National Institute of Education (NIE)',
        url: 'https://www.nie.ac.lk/',
        type: 'government',
        description: 'Official curriculum and syllabus documents'
    },
    'edupub': {
        name: 'Educational Publications Department',
        url: 'https://www.edupub.gov.lk/',
        type: 'government',
        description: 'Official school textbooks for all grades'
    },
    'doenets': {
        name: 'Department of Examinations, Sri Lanka',
        url: 'https://www.doenets.lk/',
        type: 'government',
        description: 'Past exam papers and marking schemes'
    },
    'ethaksalawa': {
        name: 'e-Thaksalawa - Ministry of Education',
        url: 'https://e-thaksalawa.moe.gov.lk/',
        type: 'government',
        description: 'National Learning Management System'
    },
    'channelnie': {
        name: 'Channel NIE - National Institute of Education',
        url: 'https://www.youtube.com/@ChannelNIE',
        type: 'government',
        description: 'Official video lessons for Sri Lankan curriculum'
    },
    'zai': {
        name: 'Zai Creations - Compiled Notes',
        url: 'https://zaieduhub.github.io/',
        type: 'compilation',
        description: 'Student-friendly compiled study notes by Zai Education Hub'
    }
};

// Study Materials - Organized by Grade with Medium filter property
const ZAI_CONTENT_EXPANDED = {
    // ====================== A/L (Grades 12-13) ======================
    al: {
        'combined-maths': {
            name: 'Combined Maths',
            name_si: 'සංයුක්ත ගණිතය',
            name_ta: 'கூட்டுக் கணிதம்',
            icon: '📐',
            color: '#667eea',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            sourceUrl: 'https://zaieduhub.github.io/',
            description: 'Pure Mathematics and Applied Mathematics for A/L Science stream',
            units: [
                {
                    title: 'Pure Mathematics - Calculus',
                    title_si: 'පිරිසිදු ගණිතය - කලනය',
                    title_ta: 'தூய கணிதம் - நுண்கணிதம்',
                    topics: [
                        { title: 'Differentiation', source: 'zai' },
                        { title: 'Integration', source: 'zai' },
                        { title: 'Limits & Continuity', source: 'zai' }
                    ]
                },
                {
                    title: 'Pure Mathematics - Algebra',
                    title_si: 'පිරිසිදු ගණිතය - වීජ ගණිතය',
                    title_ta: 'தூய கணிதம் - இயற்கணிதம்',
                    topics: [
                        { title: 'Matrices', source: 'zai' },
                        { title: 'Complex Numbers', source: 'zai' }
                    ]
                },
                {
                    title: 'Applied Mathematics - Mechanics',
                    title_si: 'ව්‍යවහාරික ගණිතය - යාන්ත්‍ර විද්‍යාව',
                    title_ta: 'பயன்பாட்டு கணிதம் - விசையியல்',
                    topics: [
                        { title: "Newton's Laws of Motion", source: 'zai' },
                        { title: 'Projectile Motion', source: 'zai' }
                    ]
                }
            ]
        },
        'physics': {
            name: 'Physics',
            name_si: 'භෞතික විද්‍යාව',
            name_ta: 'இயற்பியல்',
            icon: '⚡',
            color: '#f093fb',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'A/L',
            description: 'Mechanics, Waves, Electricity & Magnetism for A/L Science stream',
            units: [
                {
                    title: 'Mechanics',
                    title_si: 'යාන්ත්‍ර විද්‍යාව',
                    title_ta: 'விசையியல்',
                    topics: [
                        { title: 'Forces & Equilibrium', source: 'zai' },
                        { title: 'Work, Energy & Power', source: 'zai' }
                    ]
                },
                {
                    title: 'Waves & Oscillations',
                    title_si: 'තරංග හා දෝලන',
                    title_ta: 'அலைகளும் அலைவுகளும்',
                    topics: [
                        { title: 'Simple Harmonic Motion', source: 'zai' },
                        { title: 'Wave Properties', source: 'zai' }
                    ]
                },
                {
                    title: 'Electricity & Magnetism',
                    title_si: 'විද්‍යුතය හා චුම්බකත්වය',
                    title_ta: 'மின்சாரமும் காந்தமும்',
                    topics: [
                        { title: 'DC Circuits', source: 'zai' }
                    ]
                }
            ]
        },
        'chemistry': {
            name: 'Chemistry',
            name_si: 'රසායන විද්‍යාව',
            name_ta: 'வேதியியல்',
            icon: '🧪',
            color: '#4facfe',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'A/L',
            description: 'Physical, Inorganic & Organic Chemistry for A/L Science stream',
            units: [
                {
                    title: 'Physical Chemistry',
                    title_si: 'භෞතික රසායනය',
                    title_ta: 'இயற்பியல் வேதியியல்',
                    topics: [
                        { title: 'Atomic Structure', source: 'zai' },
                        { title: 'Chemical Bonding', source: 'zai' }
                    ]
                },
                {
                    title: 'Inorganic Chemistry',
                    title_si: 'අකාබනික රසායනය',
                    title_ta: 'கனிம வேதியியல்',
                    topics: [
                        { title: 'Periodic Table Trends', source: 'zai' }
                    ]
                },
                {
                    title: 'Organic Chemistry',
                    title_si: 'කාබනික රසායනය',
                    title_ta: 'கரிம வேதியியல்',
                    topics: [
                        { title: 'Hydrocarbons', source: 'zai' }
                    ]
                }
            ]
        },
        'biology': {
            name: 'Biology',
            name_si: 'ජීව විද්‍යාව',
            name_ta: 'உயிரியல்',
            icon: '🧬',
            color: '#43e97b',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'A/L',
            description: 'Cell Biology, Genetics & Human Biology for A/L Science stream',
            units: [
                {
                    title: 'Cell Biology',
                    title_si: 'සෛල ජීව විද්‍යාව',
                    title_ta: 'உயிரணு உயிரியல்',
                    topics: [
                        { title: 'Cell Structure & Function', source: 'zai' },
                        { title: 'Cell Division', source: 'zai' }
                    ]
                },
                {
                    title: 'Genetics',
                    title_si: 'ප්‍රවේණි විද්‍යාව',
                    title_ta: 'மரபியல்',
                    topics: [
                        { title: 'DNA & RNA', source: 'zai' }
                    ]
                },
                {
                    title: 'Human Biology',
                    title_si: 'මානව ජීව විද්‍යාව',
                    title_ta: 'மனித உயிரியல்',
                    topics: [
                        { title: 'Human Body Systems', source: 'zai' }
                    ]
                }
            ]
        },
        'ict': {
            name: 'ICT',
            name_si: 'තොරතුරු හා සන්නිවේදන තාක්ෂණය',
            name_ta: 'தகவல் மற்றும் தொடர்பாடல் தொழில்நுட்பம்',
            icon: '💻',
            color: '#fa709a',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'A/L',
            description: 'Programming, Databases & Networking for A/L Technology stream',
            units: [
                {
                    title: 'Programming',
                    title_si: 'ක්‍රමලේඛන',
                    title_ta: 'நிரலாக்கம்',
                    topics: [
                        { title: 'Introduction to Programming', source: 'zai' },
                        { title: 'Data Structures', source: 'zai' }
                    ]
                },
                {
                    title: 'Databases',
                    title_si: 'දත්ත සමුදා',
                    title_ta: 'தரவுத்தளங்கள்',
                    topics: [
                        { title: 'Database Management Systems', source: 'zai' }
                    ]
                },
                {
                    title: 'Networks',
                    title_si: 'ජාල',
                    title_ta: 'வலையமைப்புகள்',
                    topics: [
                        { title: 'Computer Networks', source: 'zai' }
                    ]
                }
            ]
        },
        'accounting': {
            name: 'Accounting',
            name_si: 'ගණකාධිකරණය',
            name_ta: 'கணக்கியல்',
            icon: '📊',
            color: '#a18cd1',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'A/L - Commerce',
            description: 'Financial & Cost Accounting for A/L Commerce stream',
            units: [
                {
                    title: 'Financial Accounting',
                    topics: [
                        { title: 'Accounting Concepts', source: 'zai' },
                        { title: 'Financial Statements', source: 'zai' }
                    ]
                },
                {
                    title: 'Cost Accounting',
                    topics: [
                        { title: 'Cost Concepts', source: 'zai' }
                    ]
                }
            ]
        },
        'economics': {
            name: 'Economics',
            name_si: 'ආර්ථික විද්‍යාව',
            name_ta: 'பொருளியல்',
            icon: '💰',
            color: '#fbc2eb',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'A/L - Commerce',
            description: 'Microeconomics & Macroeconomics for A/L Commerce stream',
            units: [
                {
                    title: 'Microeconomics',
                    topics: [
                        { title: 'Demand & Supply', source: 'zai' },
                        { title: 'Market Structures', source: 'zai' }
                    ]
                },
                {
                    title: 'Macroeconomics',
                    topics: [
                        { title: 'National Income', source: 'zai' }
                    ]
                }
            ]
        },
        'business-studies': {
            name: 'Business Studies',
            name_si: 'ව්‍යාපාර අධ්‍යයන',
            name_ta: 'வணிகக் கல்வி',
            icon: '🏢',
            color: '#89f7fe',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'A/L - Commerce',
            description: 'Management & Marketing for A/L Commerce stream',
            units: [
                {
                    title: 'Management',
                    topics: [
                        { title: 'Functions of Management', source: 'zai' },
                        { title: 'Marketing', source: 'zai' }
                    ]
                }
            ]
        },
        'sinhala': {
            name: 'Sinhala',
            name_si: 'සිංහල',
            name_ta: 'சிங்களம்',
            icon: '📝',
            color: '#fddb92',
            mediums: ['si'],
            source: 'zai',
            grade: 'A/L - Arts',
            description: 'Sinhala Literature & Grammar for A/L Arts stream',
            units: [
                {
                    title: 'සාහිත්‍යය (Literature)',
                    topics: [
                        { title: 'කවි විශ්ලේෂණය', source: 'zai' },
                        { title: 'ගද්‍ය විශ්ලේෂණය', source: 'zai' }
                    ]
                },
                {
                    title: 'ව්‍යාකරණය (Grammar)',
                    topics: [
                        { title: 'නාම පද', source: 'zai' },
                        { title: 'ක්‍රියා පද', source: 'zai' }
                    ]
                }
            ]
        }
    },

    // ====================== O/L (Grades 10-11) ======================
    ol: {
        'mathematics': {
            name: 'Mathematics',
            name_si: 'ගණිතය',
            name_ta: 'கணிதம்',
            icon: '📐',
            color: '#667eea',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'O/L',
            description: 'Algebra, Geometry, Trigonometry, Statistics for O/L',
            units: [
                {
                    title: 'Number Theory & Algebra',
                    topics: [
                        { title: 'Sets & Real Numbers', source: 'zai' },
                        { title: 'Algebraic Expressions', source: 'zai' },
                        { title: 'Equations & Inequalities', source: 'zai' }
                    ]
                },
                {
                    title: 'Geometry',
                    topics: [
                        { title: 'Triangles & Quadrilaterals', source: 'zai' },
                        { title: 'Circles', source: 'zai' },
                        { title: 'Solid Geometry', source: 'zai' }
                    ]
                },
                {
                    title: 'Trigonometry & Statistics',
                    topics: [
                        { title: 'Trigonometric Ratios', source: 'zai' },
                        { title: 'Statistics & Probability', source: 'zai' }
                    ]
                }
            ]
        },
        'science': {
            name: 'Science',
            name_si: 'විද්‍යාව',
            name_ta: 'அறிவியல்',
            icon: '🔬',
            color: '#43e97b',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'O/L',
            description: 'Physics, Chemistry, Biology for O/L comprehensive science',
            units: [
                {
                    title: 'Physics',
                    title_si: 'භෞතික විද්‍යාව',
                    title_ta: 'இயற்பியல்',
                    topics: [
                        { title: 'Force & Motion', source: 'zai' },
                        { title: 'Energy & Work', source: 'zai' },
                        { title: 'Electricity', source: 'zai' },
                        { title: 'Light & Sound', source: 'zai' }
                    ]
                },
                {
                    title: 'Chemistry',
                    title_si: 'රසායන විද්‍යාව',
                    title_ta: 'வேதியியல்',
                    topics: [
                        { title: 'Matter & Properties', source: 'zai' },
                        { title: 'Elements & Compounds', source: 'zai' },
                        { title: 'Chemical Reactions', source: 'zai' }
                    ]
                },
                {
                    title: 'Biology',
                    title_si: 'ජීව විද්‍යාව',
                    title_ta: 'உயிரியல்',
                    topics: [
                        { title: 'Living Organisms', source: 'zai' },
                        { title: 'Plant Biology', source: 'zai' },
                        { title: 'Human Biology', source: 'zai' },
                        { title: 'Ecosystems', source: 'zai' }
                    ]
                }
            ]
        },
        'history': {
            name: 'History',
            name_si: 'ඉතිහාසය',
            name_ta: 'வரலாறு',
            icon: '📜',
            color: '#f6d365',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'O/L',
            description: 'Sri Lankan & World History for O/L',
            units: [
                {
                    title: 'Sri Lankan History',
                    topics: [
                        { title: 'Ancient Sri Lanka - Anuradhapura Period', source: 'zai' },
                        { title: 'Polonnaruwa & Medieval Period', source: 'zai' },
                        { title: 'Colonial Period', source: 'zai' },
                        { title: 'Independence & Modern Sri Lanka', source: 'zai' }
                    ]
                },
                {
                    title: 'World History',
                    topics: [
                        { title: 'Ancient Civilizations', source: 'zai' },
                        { title: 'World Wars', source: 'zai' },
                        { title: 'United Nations & Global Organizations', source: 'zai' }
                    ]
                }
            ]
        },
        'english': {
            name: 'English',
            name_si: 'ඉංග්‍රීසි',
            name_ta: 'ஆங்கிலம்',
            icon: '📖',
            color: '#a18cd1',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'O/L',
            description: 'English Language & Literature for O/L',
            units: [
                {
                    title: 'English Language',
                    topics: [
                        { title: 'Grammar & Parts of Speech', source: 'zai' },
                        { title: 'Tenses & Voice', source: 'zai' },
                        { title: 'Essay & Letter Writing', source: 'zai' },
                        { title: 'Comprehension Skills', source: 'zai' }
                    ]
                },
                {
                    title: 'English Literature',
                    topics: [
                        { title: 'Poetry Analysis', source: 'zai' },
                        { title: 'Short Stories', source: 'zai' },
                        { title: 'Drama & Prose', source: 'zai' }
                    ]
                }
            ]
        },
        'religion': {
            name: 'Religion',
            name_si: 'ආගම',
            name_ta: 'மதம்',
            icon: '🕊️',
            color: '#fbc2eb',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'O/L',
            description: 'Buddhism, Hinduism, Islam, Christianity for O/L',
            units: [
                {
                    title: 'Buddhism (බුදු දහම)',
                    mediums: ['si'],
                    topics: [
                        { title: 'Life of the Buddha', source: 'zai' },
                        { title: 'Dhamma - Core Teachings', source: 'zai' },
                        { title: 'Buddhist Ethics & Meditation', source: 'zai' }
                    ]
                },
                {
                    title: 'Hinduism (இந்து மதம்)',
                    mediums: ['ta'],
                    topics: [
                        { title: 'Hindu Deities & Philosophy', source: 'zai' },
                        { title: 'Hindu Ethics & Practices', source: 'zai' }
                    ]
                },
                {
                    title: 'Islam & Christianity',
                    mediums: ['si', 'ta', 'en'],
                    topics: [
                        { title: 'Core Beliefs & Practices', source: 'zai' }
                    ]
                }
            ]
        },
        'geography': {
            name: 'Geography',
            name_si: 'භූගෝල විද්‍යාව',
            name_ta: 'புவியியல்',
            icon: '🌍',
            color: '#89f7fe',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'O/L',
            description: 'Physical & Human Geography for O/L',
            units: [
                {
                    title: 'Physical Geography',
                    topics: [
                        { title: 'Earth Structure & Landforms', source: 'zai' },
                        { title: 'Climate & Weather', source: 'zai' },
                        { title: 'Natural Disasters', source: 'zai' }
                    ]
                },
                {
                    title: 'Human Geography',
                    topics: [
                        { title: 'Population & Settlements', source: 'zai' },
                        { title: 'Economic Activities', source: 'zai' },
                        { title: 'Sri Lanka - Regional Geography', source: 'zai' }
                    ]
                }
            ]
        }
    },

    // ====================== Grade 6-9 ======================
    grade6_9: {
        'mathematics-g6': {
            name: 'Mathematics (Gr 6-9)',
            name_si: 'ගණිතය (6-9 ශ්‍රේණි)',
            name_ta: 'கணிதம் (தரம் 6-9)',
            icon: '📐',
            color: '#667eea',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'Grade 6-9',
            description: 'Mathematics syllabus for junior secondary level',
            units: [
                {
                    title: 'Numbers & Operations',
                    topics: [
                        { title: 'Whole Numbers & Decimals', source: 'zai' },
                        { title: 'Fractions & Percentages', source: 'zai' },
                        { title: 'Integers & Rational Numbers', source: 'zai' }
                    ]
                },
                {
                    title: 'Algebra & Geometry',
                    topics: [
                        { title: 'Algebraic Expressions', source: 'zai' },
                        { title: 'Angles & Triangles', source: 'zai' },
                        { title: 'Perimeter & Area', source: 'zai' }
                    ]
                },
                {
                    title: 'Statistics & Probability',
                    topics: [
                        { title: 'Data Collection & Representation', source: 'zai' },
                        { title: 'Probability Basics', source: 'zai' }
                    ]
                }
            ]
        },
        'science-g6': {
            name: 'Science (Gr 6-9)',
            name_si: 'විද්‍යාව (6-9 ශ්‍රේණි)',
            name_ta: 'அறிவியல் (தரம் 6-9)',
            icon: '🔬',
            color: '#43e97b',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'Grade 6-9',
            description: 'Integrated Science for junior secondary level',
            units: [
                {
                    title: 'Life Science',
                    topics: [
                        { title: 'Plant Diversity', source: 'zai' },
                        { title: 'Animal Diversity', source: 'zai' },
                        { title: 'Human Body Systems', source: 'zai' }
                    ]
                },
                {
                    title: 'Physical Science',
                    topics: [
                        { title: 'Force & Motion', source: 'zai' },
                        { title: 'Energy Forms & Transfer', source: 'zai' },
                        { title: 'Sound & Light', source: 'zai' }
                    ]
                },
                {
                    title: 'Earth & Space',
                    topics: [
                        { title: 'Earth & Solar System', source: 'zai' },
                        { title: 'Weather & Climate', source: 'zai' },
                        { title: 'Natural Resources', source: 'zai' }
                    ]
                }
            ]
        },
        'english-g6': {
            name: 'English (Gr 6-9)',
            icon: '📖',
            color: '#a18cd1',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'Grade 6-9',
            description: 'English Language for junior secondary level',
            units: [
                {
                    title: 'Grammar & Vocabulary',
                    topics: [
                        { title: 'Parts of Speech Basics', source: 'zai' },
                        { title: 'Simple Tenses', source: 'zai' },
                        { title: 'Vocabulary Building', source: 'zai' }
                    ]
                },
                {
                    title: 'Reading & Writing',
                    topics: [
                        { title: 'Reading Comprehension', source: 'zai' },
                        { title: 'Paragraph Writing', source: 'zai' },
                        { title: 'Letter Writing', source: 'zai' }
                    ]
                }
            ]
        },
        'history-g6': {
            name: 'History (Gr 6-9)',
            icon: '📜',
            color: '#f6d365',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'Grade 6-9',
            description: 'Sri Lankan & World History for junior secondary',
            units: [
                {
                    title: 'Sri Lankan Heritage',
                    topics: [
                        { title: 'Ancient Kingdoms', source: 'zai' },
                        { title: 'Cultural Heritage', source: 'zai' },
                        { title: 'Independence Movement', source: 'zai' }
                    ]
                },
                {
                    title: 'World Civilizations',
                    topics: [
                        { title: 'Early Human Societies', source: 'zai' },
                        { title: 'Ancient Civilizations Overview', source: 'zai' }
                    ]
                }
            ]
        },
        'geography-g6': {
            name: 'Geography (Gr 6-9)',
            icon: '🌍',
            color: '#89f7fe',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'Grade 6-9',
            description: 'Physical and Human Geography for junior secondary',
            units: [
                {
                    title: 'Physical Geography',
                    topics: [
                        { title: 'Maps & Directions', source: 'zai' },
                        { title: 'Earth\'s Surface & Landforms', source: 'zai' }
                    ]
                },
                {
                    title: 'Sri Lanka Geography',
                    topics: [
                        { title: 'Provinces & Districts', source: 'zai' },
                        { title: 'Climate & Vegetation', source: 'zai' }
                    ]
                }
            ]
        }
    },

    // ====================== Grade 1-5 ======================
    grade1_5: {
        'mathematics-g1': {
            name: 'Mathematics (Gr 1-5)',
            icon: '🔢',
            color: '#667eea',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'Grade 1-5',
            description: 'Basic Mathematics for primary level',
            units: [
                {
                    title: 'Numbers & Counting',
                    topics: [
                        { title: 'Number Recognition (1-100)', source: 'zai' },
                        { title: 'Addition & Subtraction', source: 'zai' },
                        { title: 'Multiplication Tables', source: 'zai' },
                        { title: 'Division Basics', source: 'zai' }
                    ]
                },
                {
                    title: 'Shapes & Measurements',
                    topics: [
                        { title: 'Basic Shapes', source: 'zai' },
                        { title: 'Length & Weight', source: 'zai' },
                        { title: 'Time & Money', source: 'zai' }
                    ]
                }
            ]
        },
        'english-g1': {
            name: 'English (Gr 1-5)',
            icon: '📖',
            color: '#a18cd1',
            mediums: ['si', 'ta', 'en'],
            source: 'zai',
            grade: 'Grade 1-5',
            description: 'Basic English for primary level (starting Grade 3)',
            units: [
                {
                    title: 'Alphabet & Phonics',
                    topics: [
                        { title: 'Letters & Sounds', source: 'zai' },
                        { title: 'Simple Words & Spelling', source: 'zai' }
                    ]
                },
                {
                    title: 'Basic Grammar & Conversation',
                    topics: [
                        { title: 'Simple Sentences', source: 'zai' },
                        { title: 'Greetings & Introductions', source: 'zai' },
                        { title: 'Colors, Numbers & Days', source: 'zai' }
                    ]
                }
            ]
        },
        'sinhala-g1': {
            name: 'සිංහල (1-5 ශ්‍රේණි)',
            icon: '📝',
            color: '#fddb92',
            mediums: ['si'],
            source: 'zai',
            grade: 'Grade 1-5',
            description: 'මව්බස - සිංහල ප්‍රාථමික අධ්‍යාපනය',
            units: [
                {
                    title: 'අකුරු හා කියවීම',
                    topics: [
                        { title: 'හෝඩිය හඳුනා ගැනීම', source: 'zai' },
                        { title: 'වචන කියවීම', source: 'zai' },
                        { title: 'සරල වාක්‍ය', source: 'zai' }
                    ]
                },
                {
                    title: 'ලිවීම හා ගණන් කිරීම',
                    topics: [
                        { title: 'අකුරු ලිවීම', source: 'zai' },
                        { title: 'සංඛ්‍යා හඳුනා ගැනීම', source: 'zai' }
                    ]
                }
            ]
        },
        'tamil-g1': {
            name: 'தமிழ் (தரம் 1-5)',
            icon: '📝',
            color: '#fa709a',
            mediums: ['ta'],
            source: 'zai',
            grade: 'Grade 1-5',
            description: 'தாய்மொழி - தமிழ் ஆரம்பக் கல்வி',
            units: [
                {
                    title: 'எழுத்துகளும் வாசிப்பும்',
                    topics: [
                        { title: 'உயிர் எழுத்துகள்', source: 'zai' },
                        { title: 'மெய் எழுத்துகள்', source: 'zai' },
                        { title: 'சொற்கள் வாசித்தல்', source: 'zai' }
                    ]
                },
                {
                    title: 'எண்ணும் எழுதுதலும்',
                    topics: [
                        { title: 'எழுத்துகள் எழுதுதல்', source: 'zai' },
                        { title: 'எண்கள் அறிதல்', source: 'zai' }
                    ]
                }
            ]
        },
        'environment': {
            name: 'Environment (Gr 1-5)',
            name_si: 'පරිසරය (1-5 ශ්‍රේණි)',
            name_ta: 'சுற்றாடல் (தரம் 1-5)',
            icon: '🌿',
            color: '#43e97b',
            mediums: ['si', 'ta'],
            source: 'zai',
            grade: 'Grade 1-5',
            description: 'Environmental Studies for primary level',
            units: [
                {
                    title: 'Our Surroundings',
                    topics: [
                        { title: 'School & Home Environment', source: 'zai' },
                        { title: 'Plants & Animals Around Us', source: 'zai' },
                        { title: 'Weather & Seasons', source: 'zai' }
                    ]
                },
                {
                    title: 'Health & Safety',
                    topics: [
                        { title: 'Personal Hygiene', source: 'zai' },
                        { title: 'Food & Nutrition', source: 'zai' },
                        { title: 'Road Safety', source: 'zai' }
                    ]
                }
            ]
        }
    }
};

// ============================================
// CONTENT MERGE: Load grade-specific study notes
// ============================================

// Merge grade content into the expanded system
function mergeGradeContent(gradeKey, contentMap, contentData) {
    const grade = ZAI_CONTENT_EXPANDED[gradeKey];
    if (!grade) return;
    
    Object.entries(grade).forEach(([subjectKey, subject]) => {
        if (!subject.units) return;
        subject.units.forEach(unit => {
            if (!unit.topics) return;
            unit.topics.forEach(topic => {
                // Generate a key from the topic title for lookup
                const topicKey = topic.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                
                // Look up content from the grade-specific file
                const gradeContent = contentData[subjectKey];
                if (gradeContent && gradeContent[topicKey]) {
                    topic.content = gradeContent[topicKey];
                }
            });
        });
    });
}

// Merge all grade content
if (typeof OL_CONTENT !== 'undefined') mergeGradeContent('ol', 'mathematics', OL_CONTENT);
if (typeof G6_CONTENT !== 'undefined') mergeGradeContent('grade6_9', 'mathematics-g6', G6_CONTENT);
if (typeof G1_CONTENT !== 'undefined') mergeGradeContent('grade1_5', 'mathematics-g1', G1_CONTENT);

// ============================================
// CONTENT LOADER FUNCTIONS
// ============================================

// Get subjects for a grade, filtered by medium
// Falls back to original ZAI_CONTENT from data.js for display
function getGradeSubjects(grade, medium) {
    // Convert grade parameter to match data key
    const gradeKey = grade.replace('-', '_');
    
    // Try expanded content first (has mediums property for filtering)
    const expanded = ZAI_CONTENT_EXPANDED[gradeKey] || {};
    
    // Filter by medium if specified
    let filtered;
    if (medium) {
        filtered = Object.fromEntries(
            Object.entries(expanded).filter(([key, val]) => {
                return !val.mediums || val.mediums.includes(medium);
            })
        );
    } else {
        filtered = expanded;
    }
    
    // If no expanded content, fall back to original data.js
    if (Object.keys(filtered).length === 0 && typeof ZAI_CONTENT !== 'undefined') {
        const original = ZAI_CONTENT[gradeKey];
        if (original) return original;
    }
    
    return filtered;
}

// Get full subject content by grade and subject key
// Falls back to original ZAI_CONTENT from data.js for actual HTML notes
function getSubjectContent(gradeKey, subjectKey) {
    // Try expanded content first (has metadata but may lack note HTML)
    const expandedGrade = ZAI_CONTENT_EXPANDED[gradeKey];
    
    // Try original data.js content (has complete HTML study notes)
    const originalGrade = typeof ZAI_CONTENT !== 'undefined' ? ZAI_CONTENT[gradeKey] : null;
    const originalSubject = originalGrade ? originalGrade[subjectKey] : null;
    
    // If no expanded content exists, use original
    if (!expandedGrade || !expandedGrade[subjectKey]) {
        return originalSubject;
    }
    
    // If original has actual content (HTML notes), merge with expanded metadata
    if (originalSubject && originalSubject.units) {
        const merged = JSON.parse(JSON.stringify(expandedGrade[subjectKey]));
        // Copy the actual topic content from original
        merged.units.forEach((unit, ui) => {
            if (originalSubject.units[ui]) {
                unit.topics.forEach((topic, ti) => {
                    const origTopic = originalSubject.units[ui].topics[ti];
                    if (origTopic && origTopic.content) {
                        topic.content = origTopic.content;
                    }
                });
            }
        });
        return merged;
    }
    
    return expandedGrade[subjectKey] || null;
}

// Get source attribution for a content item
function getContentSource(sourceKey) {
    return ZAI_SOURCES[sourceKey] || ZAI_SOURCES['zai'];
}

// Get YouTube content for a specific medium
function getYouTubeByMedium(medium) {
    return ZAI_YOUTUBE[medium] || null;
}

// Get all government resource links
function getGovernmentResources() {
    return [
        {
            name: 'Department of Examinations - Past Papers',
            url: 'https://www.doenets.lk/',
            icon: '📄',
            color: '#667eea',
            description: 'Download free past exam papers for A/L, O/L and scholarship exams'
        },
        {
            name: 'e-Thaksalawa - Ministry of Education',
            url: 'https://e-thaksalawa.moe.gov.lk/',
            icon: '💻',
            color: '#43e97b',
            description: 'National Learning Management System with lessons and exercises'
        },
        {
            name: 'Educational Publications - Textbooks',
            url: 'https://www.edupub.gov.lk/',
            icon: '📚',
            color: '#f6d365',
            description: 'Free official textbooks for all grades in Sinhala, Tamil & English'
        },
        {
            name: 'Channel NIE - Video Lessons',
            url: 'https://www.youtube.com/@ChannelNIE',
            icon: '🎥',
            color: '#fa709a',
            description: 'Official video lessons by National Institute of Education'
        },
        {
            name: 'National Institute of Education',
            url: 'https://www.nie.ac.lk/',
            icon: '🎓',
            color: '#a18cd1',
            description: 'Curriculum documents, teacher guides & syllabus'
        },
        {
            name: 'PaperBank.lk',
            url: 'https://paperbank.lk/',
            icon: '📋',
            color: '#89f7fe',
            description: 'Past papers & model papers collection for all grades'
        }
    ];
}
