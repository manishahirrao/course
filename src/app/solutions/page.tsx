'use client';

import { useState } from 'react';
import Link from 'next/link';

// Note: Metadata export is not supported in client components.
// We should move this to a separate layout.tsx or similar if SEO is critical for this page title.
// For now, we'll omit the export or use a wrapper.
// Since this file was a server component before, let's keep it simple and just make it a client component for tabs.

const competitiveSolutions = [
    { title: 'Study Materials', desc: 'High-Quality Content, Ready to Brand – Syllabus-based, exam-focused notes and books, fully customizable with your institute’s name. Research-backed, updated, and easy to understroof.' },
    { title: 'Test Series', desc: 'Practice that Delivers Results – Subject-wise, topic-wise, and full-length mock tests for UPSC, State PSC, SSC, Banking, Railways, and more. Includes detailed solutions based on the exact exam pattern.' },
    { title: 'Daily Current Affairs', desc: 'Stay Updated, Daily – Concise, exam-oriented current affairs in bilingual format (Hindi & English), updated every day.' },
    { title: 'Weekly Current Affairs', desc: 'Your Weekly News Capsule – One complete week’s current affairs in one file, with PDF format and question bank for easy revision.' },
    { title: 'Monthly Current Affairs', desc: 'One Month, One File, Complete Prep – Monthly magazine-style content with MCQs, analysis, and targeted exam coverage.' },
    { title: 'Daily Quiz for Your Application', desc: 'Engage Your Students Everyday – Ready-to-use daily quizzes for your mobile app with instant results and detailed explanations.' },
    { title: 'Daily Social Media Post', desc: 'Content that Grabs Attention – Daily educational and motivational posts for Instagram, Facebook, and Telegram.' },
    { title: 'YouTube Thumbnail', desc: 'Thumbnails That Get Clicks – Attractive, SEO-optimized, and eye-catching thumbnails for maximum engagement.' },
    { title: 'Customized Study Materials', desc: 'Tailor-Made for Your Brand – Fully customized notes and books according to your syllabus and style, 100% plagiarism-free.' },
    { title: 'Social Media Marketing', desc: 'Grow Your Reach, Build Your Brand – Proven ad campaigns and organic growth strategies for educational businesses.' },
    { title: 'Video Editing', desc: 'Turn Raw Footage into Impact – Professional video editing with intros, outros, subtitles, and effects.' },
    { title: 'Graphic Design', desc: 'Designs that Speak Your Brand – Posters, banners, and infographics created for the education niche.' },
    { title: 'Website Design', desc: 'Your Digital Identity, Perfected – Fast, responsive, and SEO-friendly websites for coaching institutes.' },
    { title: 'Mobile App Development', desc: 'Your Coaching, On Every Student’s Phone – Android & iOS apps with live classes, test series, study material, and student management features.' },
    { title: 'Bulk SMS & Bulk WhatsApp SMS', desc: 'Instant Communication, Maximum Reach – Send alerts and messages to thousands of students in just one click.' },
    { title: 'And Many More Services…', desc: 'One Stop Solution for Coaching Institutes – Everything your institute needs, from content to technology and marketing, under one roof.' },
];

const academicSolutions = [
    { title: 'Study Materials', desc: 'High-Quality Content, Ready to Brand – Class 6th to 12th syllabus-based notes and IIT-JEE, NEET-focused materials with clear explanations, solved examples, and exam-oriented coverage.' },
    { title: 'Test Series', desc: 'Practice that Delivers Results – Chapter-wise, topic-wise, and full-length tests for school boards, IIT-JEE, NEET, NTSE, and Olympiads with detailed solutions.' },
    { title: 'Daily Academic Updates', desc: 'Stay Updated, Daily – Academic tips, study hacks, and important questions delivered daily to keep students on track.' },
    { title: 'Weekly Revision Capsules', desc: 'Your Weekly Knowledge Boost – Quick revision of the entire week’s syllabus with key points and practice questions.' },
    { title: 'Monthly Academic Compilations', desc: 'One Month, One File, Complete Prep – Monthly revision booklets with key concepts, formulas, MCQs, and previous year questions.' },
    { title: 'Daily Quiz for Your Application', desc: 'Engage Your Students Everyday – Daily subject-based quizzes for Maths, Science, Physics, Chemistry, Biology, and General Knowledge with instant evaluation.' },
    { title: 'Daily Social Media Post', desc: 'Content that Grabs Attention – Academic and motivational posts for Instagram, Facebook, and Telegram to inspire students.' },
    { title: 'YouTube Thumbnail', desc: 'Thumbnails That Get Clicks – Eye-catching and subject-relevant thumbnails for lectures, crash courses, and tips videos.' },
    { title: 'Customized Study Materials', desc: 'Tailor-Made for Your Brand – Fully customized academic notes, diagrams, and solved questions designed to match your curriculum.' },
    { title: 'Social Media Marketing', desc: 'Grow Your Reach, Build Your Brand – Targeted campaigns for academic institutes to boost enrollments and online presence.' },
    { title: 'Video Editing', desc: 'Turn Raw Footage into Impact – Educational videos edited with animations, subtitles, and engaging visual explanations.' },
    { title: 'Graphic Design', desc: 'Designs that Speak Your Brand – Posters, charts, and infographics for schools and coaching centers.' },
    { title: 'Website Design', desc: 'Your Digital Identity, Perfected – Mobile-friendly academic websites with online classes, study materials, and student portals.' },
    { title: 'Mobile App Development', desc: 'Your Coaching, On Every Student’s Phone – Learning apps with live classes, tests, homework tracking, and performance analytics.' },
    { title: 'Bulk SMS & Bulk WhatsApp SMS', desc: 'Instant Communication, Maximum Reach – Homework reminders, test alerts, and announcements sent to thousands of students instantly.' },
    { title: 'And Many More Services…', desc: 'One Stop Solution for Academic Institutes – Content, technology, and marketing services all in one place.' },
];

export default function SolutionsPage() {
    const [activeTab, setActiveTab] = useState<'competitive' | 'academic'>('competitive');

    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Solutions</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Contenu Labs&apos;s Comprehensive{' '}
                        <span className="text-gradient">Education Infrastructure Solutions</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '650px', margin: '16px auto 0' }}>
                        Everything you need to build, scale, and manage your education content business — all under your brand.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
                        <div style={{
                            display: 'inline-flex',
                            background: 'var(--bg-secondary)',
                            padding: '4px',
                            borderRadius: '12px',
                            gap: '8px'
                        }}>
                            <button
                                onClick={() => setActiveTab('competitive')}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: activeTab === 'competitive' ? 'var(--input-bg)' : 'transparent',
                                    color: activeTab === 'competitive' ? 'var(--text-primary)' : 'var(--text-muted)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: activeTab === 'competitive' ? 'var(--shadow-sm)' : 'none'
                                }}
                            >
                                Competitive Exam Solutions
                            </button>
                            <button
                                onClick={() => setActiveTab('academic')}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: activeTab === 'academic' ? 'var(--input-bg)' : 'transparent',
                                    color: activeTab === 'academic' ? 'var(--text-primary)' : 'var(--text-muted)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: activeTab === 'academic' ? 'var(--shadow-sm)' : 'none'
                                }}
                            >
                                Academic Solutions
                            </button>
                        </div>
                    </div>

                    <div className="section-header">
                        <h2 className="heading-lg">
                            {activeTab === 'competitive' ? 'Competitive Exam' : 'Academic'} <span className="text-gradient">Solutions</span>
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
                            {activeTab === 'competitive'
                                ? 'Exams Covered: UPSC, State PSC, Teaching Exams, Railway Exams, SSC, Banking, and all other State & Central competitive exams.'
                                : 'Exams Covered: Class 6th–12th (All Boards), IIT-JEE, NEET, NTSE, Olympiads, and other academic competitive exams.'}
                        </p>
                    </div>

                    <div className="grid-3" style={{ gap: '24px' }}>
                        {(activeTab === 'competitive' ? competitiveSolutions : academicSolutions).map((sol, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                            >
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    background: 'var(--bg-secondary)', color: 'var(--accent-blue)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 700, marginBottom: '8px'
                                }}>
                                    {index + 1}
                                </div>
                                <h3 className="heading-sm">{sol.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{sol.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '48px', padding: '32px', background: 'var(--bg-secondary)', borderRadius: '16px', textAlign: 'center' }}>
                        <p className="text-md" style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>
                            Speciality: All content is in white-label format so you can publish it with your own brand name.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Partner with{' '}
                        <span className="text-gradient">Contenu Labs Today</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Start scaling your content library with our white-label solutions.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}

