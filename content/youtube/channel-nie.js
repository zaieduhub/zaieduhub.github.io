/* ============================================
   ZAI EDUCATION HUB - YouTube Content
   Channel NIE Videos by Medium
   Source: National Institute of Education, Sri Lanka
   ============================================ */

const ZAI_YOUTUBE = {
    'si': {
        name: 'සිංහල මාධ්‍ය',
        icon: '🇱🇰',
        channel: {
            name: 'Channel NIE',
            url: 'https://www.youtube.com/@ChannelNIE',
            attribution: 'National Institute of Education, Sri Lanka'
        },
        playlists: [
            {
                id: 'al-science-si',
                title: 'උසස් පෙළ - විද්‍යාව',
                grade: 'A/L',
                videos: [
                    { title: 'භෞතික විද්‍යාව - යාන්ත්‍ර විද්‍යාව', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_1', duration: '45:00', teacher: 'Channel NIE' },
                    { title: 'රසායන විද්‍යාව - පරමාණුක ව්‍යුහය', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_2', duration: '40:00', teacher: 'Channel NIE' },
                    { title: 'ජීව විද්‍යාව - සෛල ව්‍යුහය', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_3', duration: '50:00', teacher: 'Channel NIE' }
                ]
            },
            {
                id: 'ol-maths-si',
                title: 'සාමාන්‍ය පෙළ - ගණිතය',
                grade: 'O/L',
                videos: [
                    { title: 'වීජ ගණිතය - සරල කිරීම්', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_4', duration: '35:00', teacher: 'Channel NIE' },
                    { title: 'ජ්‍යාමිතිය - ත්‍රිකෝණ', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_5', duration: '40:00', teacher: 'Channel NIE' }
                ]
            }
        ]
    },
    'ta': {
        name: 'தமிழ் மொழி',
        icon: '🇱🇰',
        channel: {
            name: 'Channel NIE',
            url: 'https://www.youtube.com/@ChannelNIETamil',
            attribution: 'தேசிய கல்வி நிறுவனம், இலங்கை'
        },
        playlists: [
            {
                id: 'al-maths-ta',
                title: 'உயர்தரம் - கணிதம்',
                grade: 'A/L',
                videos: [
                    { title: 'வகை நுண்கணிதம் - வகைக்கெழு', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_TA_1', duration: '45:00', teacher: 'Channel NIE' },
                    { title: 'தொகை நுண்கணிதம் - தொகையீடு', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_TA_2', duration: '40:00', teacher: 'Channel NIE' }
                ]
            },
            {
                id: 'ol-science-ta',
                title: 'சாதாரண தரம் - அறிவியல்',
                grade: 'O/L',
                videos: [
                    { title: 'இயற்பியல் - விசையும் இயக்கமும்', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_TA_3', duration: '35:00', teacher: 'Channel NIE' },
                    { title: 'வேதியியல் - அணு அமைப்பு', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_TA_4', duration: '38:00', teacher: 'Channel NIE' }
                ]
            }
        ]
    },
    'en': {
        name: 'English Medium',
        icon: '🇬🇧',
        channel: {
            name: 'Channel NIE',
            url: 'https://www.youtube.com/@ChannelNIE',
            attribution: 'National Institute of Education, Sri Lanka'
        },
        playlists: [
            {
                id: 'al-physics-en',
                title: 'A/L - Physics',
                grade: 'A/L',
                videos: [
                    { title: 'Mechanics - Newton\'s Laws', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_EN_1', duration: '45:00', teacher: 'Channel NIE' },
                    { title: 'Waves - Simple Harmonic Motion', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_EN_2', duration: '40:00', teacher: 'Channel NIE' }
                ]
            },
            {
                id: 'ol-maths-en',
                title: 'O/L - Mathematics',
                grade: 'O/L',
                videos: [
                    { title: 'Algebra - Sets & Functions', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_EN_3', duration: '35:00', teacher: 'Channel NIE' },
                    { title: 'Geometry - Circles', url: 'https://www.youtube.com/watch?v=CHANNEL_NIE_EN_4', duration: '38:00', teacher: 'Channel NIE' }
                ]
            }
        ]
    }
};
