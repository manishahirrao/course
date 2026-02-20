'use client';

import { useState } from 'react';

const competitiveSolutions = [
    {
        title: "Study Materials",
        desc: "High-Quality Content, Ready to Brand – Syllabus-based, exam-focused notes and books, fully customizable with your institute's name. Research-backed, updated, and easy to understand.",
        icon: "📚"
    },
    {
        title: "Test Series",
        desc: "Practice that Delivers Results – Subject-wise, topic-wise, and full-length mock tests for UPSC, State PSC, SSC, Banking, Railways, and more. Includes detailed solutions based on the exact exam pattern.",
        icon: "📝"
    },
    {
        title: "Daily Current Affairs",
        desc: "Stay Updated, Daily – Concise, exam-oriented current affairs in bilingual format (Hindi & English), updated every day.",
        icon: "📰"
    },
    {
        title: "Weekly Current Affairs",
        desc: "Your Weekly News Capsule – One complete week's current affairs in one file, with PDF format and question bank for easy revision.",
        icon: "📅"
    },
    {
        title: "Monthly Current Affairs",
        desc: "One Month, One File, Complete Prep – Monthly magazine-style content with MCQs, analysis, and targeted exam coverage.",
        icon: "📖"
    },
    {
        title: "Daily Quiz for Your Application",
        desc: "Engage Your Students Everyday – Ready-to-use daily quizzes for your mobile app with instant results and detailed explanations.",
        icon: "🧠"
    },
    {
        title: "Daily Social Media Post",
        desc: "Content that Grabs Attention – Daily educational and motivational posts for Instagram, Facebook, and Telegram.",
        icon: "📱"
    },
    {
        title: "YouTube Thumbnail",
        desc: "Thumbnails That Get Clicks – Attractive, SEO-optimized, and eye-catching thumbnails for maximum engagement.",
        icon: "🖼️"
    },
    {
        title: "Customized Study Materials",
        desc: "Tailor-Made for Your Brand – Fully customized notes and books according to your syllabus and style, 100% plagiarism-free.",
        icon: "✍️"
    },
    {
        title: "Social Media Marketing",
        desc: "Grow Your Reach, Build Your Brand – Proven ad campaigns and organic growth strategies for educational businesses.",
        icon: "📢"
    },
    {
        title: "Video Editing",
        desc: "Turn Raw Footage into Impact – Professional video editing with intros, outros, subtitles, and effects.",
        icon: "🎬"
    },
    {
        title: "Graphic Design",
        desc: "Designs that Speak Your Brand – Posters, banners, and infographics created for the education niche.",
        icon: "🎨"
    },
    {
        title: "Website Design",
        desc: "Your Digital Identity, Perfected – Fast, responsive, and SEO-friendly websites for coaching institutes.",
        icon: "🌐"
    },
    {
        title: "Mobile App Development",
        desc: "Your Coaching, On Every Student's Phone – Android & iOS apps with live classes, test series, study material, and student management features.",
        icon: "📱"
    },
    {
        title: "Bulk SMS & Bulk WhatsApp SMS",
        desc: "Instant Communication, Maximum Reach – Send alerts and messages to thousands of students in just one click.",
        icon: "💬"
    },
    {
        title: "And Many More Services…",
        desc: "One Stop Solution for Coaching Institutes – Everything your institute needs, from content to technology and marketing, under one roof.",
        icon: "✨"
    }
];

const academicSolutions = [
    {
        title: "Study Materials",
        desc: "High-Quality Content, Ready to Brand – Class 6th to 12th syllabus-based notes and IIT-JEE, NEET-focused materials with clear explanations, solved examples, and exam-oriented coverage.",
        icon: "📚"
    },
    {
        title: "Test Series",
        desc: "Practice that Delivers Results – Chapter-wise, topic-wise, and full-length tests for school boards, IIT-JEE, NEET, NTSE, and Olympiads with detailed solutions.",
        icon: "📝"
    },
    {
        title: "Daily Academic Updates",
        desc: "Stay Updated, Daily – Academic tips, study hacks, and important questions delivered daily to keep students on track.",
        icon: "🔔"
    },
    {
        title: "Weekly Revision Capsules",
        desc: "Your Weekly Knowledge Boost – Quick revision of the entire week's syllabus with key points and practice questions.",
        icon: "💊"
    },
    {
        title: "Monthly Academic Compilations",
        desc: "One Month, One File, Complete Prep – Monthly revision booklets with key concepts, formulas, MCQs, and previous year questions.",
        icon: "📚"
    },
    {
        title: "Daily Quiz for Your Application",
        desc: "Engage Your Students Everyday – Daily subject-based quizzes for Maths, Science, Physics, Chemistry, Biology, and General Knowledge with instant evaluation.",
        icon: "🧠"
    },
    {
        title: "Daily Social Media Post",
        desc: "Content that Grabs Attention – Academic and motivational posts for Instagram, Facebook, and Telegram to inspire students.",
        icon: "📱"
    },
    {
        title: "YouTube Thumbnail",
        desc: "Thumbnails That Get Clicks – Eye-catching and subject-relevant thumbnails for lectures, crash courses, and tips videos.",
        icon: "🖼️"
    },
    {
        title: "Customized Study Materials",
        desc: "Tailor-Made for Your Brand – Fully customized academic notes, diagrams, and solved questions designed to match your curriculum.",
        icon: "✍️"
    },
    {
        title: "Social Media Marketing",
        desc: "Grow Your Reach, Build Your Brand – Targeted campaigns for academic institutes to boost enrollments and online presence.",
        icon: "📢"
    },
    {
        title: "Video Editing",
        desc: "Turn Raw Footage into Impact – Educational videos edited with animations, subtitles, and engaging visual explanations.",
        icon: "🎬"
    },
    {
        title: "Graphic Design",
        desc: "Designs that Speak Your Brand – Posters, charts, and infographics for schools and coaching centers.",
        icon: "🎨"
    },
    {
        title: "Website Design",
        desc: "Your Digital Identity, Perfected – Mobile-friendly academic websites with online classes, study materials, and student portals.",
        icon: "🌐"
    },
    {
        title: "Mobile App Development",
        desc: "Your Coaching, On Every Student's Phone – Learning apps with live classes, tests, homework tracking, and performance analytics.",
        icon: "📱"
    },
    {
        title: "Bulk SMS & Bulk WhatsApp SMS",
        desc: "Instant Communication, Maximum Reach – Homework reminders, test alerts, and announcements sent to thousands of students instantly.",
        icon: "💬"
    },
    {
        title: "And Many More Services…",
        desc: "One Stop Solution for Academic Institutes – Content, technology, and marketing services all in one place.",
        icon: "✨"
    }
];

export default function DetailedSolutions() {
    const [activeTab, setActiveTab] = useState<'competitive' | 'academic'>('competitive');

    const solutions = activeTab === 'competitive' ? competitiveSolutions : academicSolutions;

    // Competitive Exams list from original file
    const competitiveExams = "UPSC, State PSC, Teaching Exams, Railway Exams, SSC, Banking, and all other State & Central competitive exams.";

    // Academic Exams list from original file
    const academicExams = "Class 6th–12th (All Boards), IIT-JEE, NEET, NTSE, Olympiads, and other academic competitive exams.";

    return (
        <div className="container">
            <div className="section-header" style={{ marginBottom: '40px' }}>
                <h2 className="heading-lg">Detailed <span className="text-gradient">Service Offerings</span></h2>
                <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
                    Explore our comprehensive range of white-label solutions tailored for your institute's needs.
                </p>
            </div>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setActiveTab('competitive')}
                    className={`btn ${activeTab === 'competitive' ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ minWidth: '200px' }}
                >
                    Competitive Exam Solutions
                </button>
                <button
                    onClick={() => setActiveTab('academic')}
                    className={`btn ${activeTab === 'academic' ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ minWidth: '200px' }}
                >
                    Academic Solutions
                </button>
            </div>

            {/* Content Grid */}
            <div className="grid-3" style={{ gap: '24px' }}>
                {solutions.map((item, index) => (
                    <div key={index} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                        <h3 className="heading-sm" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                        <p className="text-sm" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Additional Info / Footer for this section */}
            <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <h3 className="heading-sm" style={{ marginBottom: '12px' }}>Exams Covered</h3>
                <p className="text-md" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    {activeTab === 'competitive' ? competitiveExams : academicExams}
                </p>
                <div style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--accent-blue-light)', color: 'white', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600 }}>
                    Speciality: 100% White-Label (Your Brand Name)
                </div>
            </div>
        </div>
    );
}
