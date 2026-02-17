import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
    BookIcon, CalendarIcon, CheckCircleIcon,
    DocumentTextIcon, ComputerIcon, SparklesIcon
} from '@/components/Icons';
import styles from '../solutions.module.css';

// Map string keys to Icon components
const iconMap: Record<string, React.ReactNode> = {
    'book': <BookIcon className={styles.iconWrapper} />, // We'll just use the icon directly, styling handled in JSX
    'calendar': <CalendarIcon />,
    'check': <CheckCircleIcon />,
    'document': <DocumentTextIcon />,
    'computer': <ComputerIcon />,
    'sparkles': <SparklesIcon />,
};

const solutionsData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    iconKey: string;
    features: { title: string; desc: string }[];
    benefits: string[];
    // New fields for alignment
    products?: { title: string; category: string; description: string }[];
    audience?: { title: string; description: string; items: string[] }[];
    delivery?: { formats: string[]; options: string[] };
    dailyContent?: {
        assignments: string[]; // Example text
        news: string[]; // Example text
        subjects: { title: string; type: string }[];
    };
}> = {
    'white-label-study-material': {
        title: 'White Label Study Material',
        subtitle: 'Production-ready content under your brand',
        description: 'Get comprehensive, exam-ready study materials that you can publish under your brand name. Our content covers all major competitive exams and academic curricula with full white-label rights and no recurring royalties.',
        iconKey: 'book',
        features: [
            { title: 'Complete Subject Coverage', desc: 'Study materials for Banking, SSC, CBSE, JEE, NEET, and more.' },
            { title: 'Multiple Formats', desc: 'Available in PDF, Word, and LMS-compatible formats.' },
            { title: 'Full White-Label Rights', desc: 'Publish under your brand with zero restrictions.' },
            { title: 'Regular Updates', desc: 'Content updated with latest exam patterns and syllabus changes.' },
            { title: 'Expert-Created Content', desc: 'Prepared by subject matter experts with exam experience.' },
            { title: 'Customizable Templates', desc: 'Adapt the content to match your brand guidelines.' },
        ],
        benefits: ['No content creation overhead', 'Instant product library', 'Full ownership rights', 'Daily content updates', 'Dedicated support team'],
        products: [
            { title: 'SSC Study Materials', category: 'Competitive Exams', description: 'Complete study materials for SSC CGL, CHSL, MTS, and other Staff Selection Commission exams.' },
            { title: 'Banking Study Materials', category: 'Competitive Exams', description: 'Comprehensive materials for IBPS, SBI, RBI exams covering Quant, Reasoning, English, and GA.' },
            { title: 'CBSE Study Materials', category: 'School Education', description: 'NCERT-aligned study materials for Classes 1-12 covering Maths, Science, Social Studies, English, and Hindi.' },
            { title: 'Railways Study Materials', category: 'Competitive Exams', description: 'Complete preparation materials for RRB NTPC, Group D, ALP, and other railway recruitment exams.' },
            { title: 'UPSC Study Materials', category: 'Civil Services', description: 'Comprehensive UPSC preparation materials covering Prelims and Mains with current affairs.' },
            { title: 'Teaching Exams', category: 'Eligibility Tests', description: 'Study materials for CTET, UGC NET, and other teaching eligibility tests with pedagogy content.' },
            { title: 'IIT-JEE Study Materials', category: 'Engineering', description: 'Comprehensive JEE Main and Advanced preparation materials covering Physics, Chemistry, and Maths.' },
            { title: 'NEET Study Materials', category: 'Medical', description: 'Complete NEET preparation materials covering Physics, Chemistry, and Biology with NCERT-based content.' },
        ],
        audience: [
            { title: 'EdTech Platforms', description: 'Launch your content library without building it from scratch.', items: ['Fast time to market', 'API integration support', 'Scalable delivery'] },
            { title: 'Coaching Institutes', description: 'Supplement classroom teaching with structured study material.', items: ['Print-ready formats', 'Digital distribution', 'Bulk licensing'] },
            { title: 'Publishers', description: 'Expand your catalog with ready-made content.', items: ['Flexible licensing', 'Copyright support', 'Publication-ready files'] },
        ],
        delivery: {
            formats: ['PDF documents (print & digital ready)', 'Word files (for select content)', 'Customizable templates'],
            options: ['Replace all branding elements', 'Customize color schemes', 'Add your copyright', 'No "Powered by" required'],
        },
    },
    'daily-learning-services': {
        title: 'Daily Learning Services',
        subtitle: 'Fresh content delivered every day',
        description: 'Skip the daily content creation hassle. We deliver professional PDF assignments, current affairs updates, and engaging Reel-style videos every single day — fully white-labeled for your brand.',
        iconKey: 'calendar',
        features: [
            { title: 'Daily Current Affairs', desc: 'Comprehensive current affairs digest delivered every morning.' },
            { title: 'Practice Assignments', desc: 'Daily practice PDFs with questions and detailed solutions.' },
            { title: 'Reel-Style Videos', desc: 'Engaging short-form video content for social media.' },
            { title: 'News Bulletins', desc: 'Curated news bulletins relevant to competitive exams.' },
            { title: 'Quiz Content', desc: 'Daily quizzes in multiple formats for your platform.' },
            { title: 'White-Labeled Delivery', desc: 'All content delivered with your branding applied.' },
        ],
        benefits: ['Save hours of daily work', 'Professional quality content', 'Social media ready', 'Increase student engagement', '7-day delivery'],
        dailyContent: {
            assignments: [
                "1. What is the total allocation for the Ministry of Defence in FY 2026–27?",
                "2. From which tax year will separate Income Computation and Disclosure Standards (ICDS) compliance be removed?",
                "3. According to Union Budget 2026–27, the first 'kartavya' announced focuses on:",
            ],
            news: [
                "NSO to Launch India’s First-Ever NHIS & ASISSE from April 2026",
                "IR Launched 1st-ever LNG diesel dual-fuel DEMU Train in Ahmedabad",
                "Daily Current Affairs Update! 🚀 Stay ahead with our daily news bulletin.",
            ],
            subjects: [
                { title: 'Reasoning', type: 'Bilingual PDF' },
                { title: 'English', type: 'Bilingual PDF' },
                { title: 'Quant', type: 'Bilingual PDF' },
                { title: 'General Studies', type: 'Bilingual PDF' },
                { title: 'Current Affairs', type: 'Bilingual PDF' },
            ],
        },
    },
    'software-platform-solutions': {
        title: 'Software Platform Solutions',
        subtitle: 'Technology solutions for education platforms',
        description: 'Complete EdTech software solutions including LMS integration, question upload services, format conversion, and custom platform development to power your education business.',
        iconKey: 'computer',
        features: [
            { title: 'LMS Integration', desc: 'Seamless content upload to any LMS platform.' },
            { title: 'Format Conversion', desc: 'Convert content between any required formats.' },
            { title: 'Question Upload Service', desc: 'Bulk question uploading with formatting.' },
            { title: 'API Integration', desc: 'Connect our content to your existing platform.' },
            { title: 'Custom Development', desc: 'Bespoke platform features built for your needs.' },
            { title: 'Technical Support', desc: '24/7 technical assistance for all integrations.' },
        ],
        benefits: ['Save development time', 'Expert integration team', 'Any platform compatible', 'Quick turnaround', 'Ongoing support'],
    },
    'mock-tests-and-assessments': {
        title: 'Mock Tests & Assessments',
        subtitle: 'Comprehensive testing solutions',
        description: 'Full-length mock tests with detailed solutions, sectional tests, and previous year paper analysis for all major competitive exams. Ready to deploy on any testing platform.',
        iconKey: 'check',
        features: [
            { title: 'Full-Length Mock Tests', desc: 'Complete exam simulation with timed tests.' },
            { title: 'Sectional Tests', desc: 'Topic-wise and section-wise practice tests.' },
            { title: 'Previous Year Papers', desc: 'Solved papers with detailed explanations.' },
            { title: 'Performance Analytics', desc: 'Detailed performance reports and analysis.' },
            { title: 'Difficulty Levels', desc: 'Questions categorized by difficulty level.' },
            { title: 'Latest Exam Patterns', desc: 'Updated to match current exam formats.' },
        ],
        benefits: ['150+ mock tests per exam', 'Detailed solutions', 'Latest patterns', 'Multi-format export', 'Regular updates'],
    },
    'custom-content-creation': {
        title: 'Custom Content Creation',
        subtitle: 'Bespoke content tailored to your needs',
        description: 'Beyond our extensive library, we create bespoke study materials, mock tests, and practice papers for any topic, exam, or subject — tailored to your exact requirements.',
        iconKey: 'sparkles',
        features: [
            { title: 'Custom Study Materials', desc: 'Tailored content for any subject or curriculum.' },
            { title: 'Custom Mock Tests', desc: 'Bespoke assessments for any exam pattern.' },
            { title: 'Custom Practice Papers', desc: 'Specialized worksheets and question sets.' },
            { title: 'Brand-Aligned Design', desc: 'Content designed to match your brand identity.' },
            { title: 'Subject Matter Experts', desc: 'Created by qualified professionals.' },
            { title: 'Revision Support', desc: 'Unlimited revisions until you are satisfied.' },
        ],
        benefits: ['Any subject or topic', 'Expert content team', 'Quick delivery', 'Unlimited revisions', 'Full ownership'],
    },
};

export async function generateStaticParams() {
    return Object.keys(solutionsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const solution = solutionsData[slug];
    if (!solution) return { title: 'Not Found' };
    return {
        title: `${solution.title} | Continue Labs`,
        description: solution.description,
    };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const solution = solutionsData[slug];
    if (!solution) notFound();

    const IconComponent = iconMap[solution.iconKey] || iconMap['book'];

    return (
        <>
            <section className={styles.hero}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                        <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ width: '40px', height: '40px' }}>{IconComponent}</div>
                        </div>
                    </div>
                    <h1 className="heading-xl">
                        <span className="text-gradient">{solution.title}</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '650px', margin: '16px auto 0' }}>
                        {solution.subtitle}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p className="text-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            {solution.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: '40px' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">Key <span className="text-gradient">Features</span></h2>
                    </div>
                    <div className="grid-3">
                        {solution.features.map((feature) => (
                            <div key={feature.title} className={styles.featureCard}>
                                <h3 className="heading-sm">{feature.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Content Sections */}
            {solution.dailyContent && (
                <section className="section">
                    <div className="container">
                        <div className="grid-2">
                            <div className="card" style={{ background: '#fffbeb', borderColor: '#fcd34d' }}>
                                <span className="badge badge-orange" style={{ marginBottom: '16px' }}>Assignment Example</span>
                                {solution.dailyContent.assignments.map((item, i) => (
                                    <p key={i} className="text-md" style={{ marginBottom: '12px', fontFamily: 'serif' }}>{item}</p>
                                ))}
                            </div>
                            <div className="card" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                                <span className="badge badge-blue" style={{ marginBottom: '16px' }}>Daily News Bulletin</span>
                                {solution.dailyContent.news.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                                        <span>📰</span>
                                        <p className="text-md" style={{ fontWeight: 500 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="section-header" style={{ marginTop: '80px' }}>
                            <h2 className="heading-lg">What You Get <span className="text-gradient">Daily</span></h2>
                        </div>
                        <div className="grid-3" style={{ justifyContent: 'center' }}>
                            {solution.dailyContent.subjects.map((sub) => (
                                <div key={sub.title} className={styles.featureCard} style={{ textAlign: 'center' }}>
                                    <h3 className="heading-sm">{sub.title}</h3>
                                    <p className="text-sm" style={{ color: 'var(--accent-blue)' }}>{sub.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Product Catalog (White Label) */}
            {solution.products && (
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="heading-lg">Our Study Material <span className="text-gradient">Products</span></h2>
                        </div>
                        <div className="grid-2">
                            {solution.products.map((prod) => (
                                <div key={prod.title} className={styles.solutionCard} style={{ padding: '24px' }}>
                                    <div>
                                        <span className="text-sm" style={{ color: 'var(--accent-blue)', fontWeight: 600, textTransform: 'uppercase' }}>{prod.category}</span>
                                        <h3 className="heading-md" style={{ margin: '8px 0' }}>{prod.title}</h3>
                                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{prod.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Audience (White Label) */}
            {solution.audience && (
                <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="heading-lg">Who This Is <span className="text-gradient">For</span></h2>
                        </div>
                        <div className="grid-3">
                            {solution.audience.map((aud) => (
                                <div key={aud.title} className="card">
                                    <h3 className="heading-md" style={{ marginBottom: '12px' }}>{aud.title}</h3>
                                    <p className="text-sm" style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>{aud.description}</p>
                                    <ul style={{ listStyle: 'none' }}>
                                        {aud.items.map((it) => (
                                            <li key={it} style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', marginBottom: '8px' }}>
                                                <span style={{ color: 'var(--accent-green)' }}>✓</span> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="section-header">
                            <h2 className="heading-lg">Key <span className="text-gradient">Benefits</span></h2>
                        </div>
                        <div className="grid-2">
                            {solution.benefits.map((benefit) => (
                                <div key={benefit} className={styles.benefitCard}>
                                    <div className={styles.checkIcon}>
                                        <CheckCircleIcon width="24" height="24" />
                                    </div>
                                    <span className="text-md" style={{ fontWeight: 500 }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery (White Label) */}
            {solution.delivery && (
                <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <div className="grid-2">
                            <div>
                                <h3 className="heading-lg" style={{ marginBottom: '24px' }}>Content Formats</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    {solution.delivery.formats.map((fmt) => (
                                        <li key={fmt} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '12px' }}>
                                            <DocumentTextIcon width="20" height="20" style={{ color: 'var(--accent-blue)' }} /> {fmt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="heading-lg" style={{ marginBottom: '24px' }}>White-Label Options</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    {solution.delivery.options.map((opt) => (
                                        <li key={opt} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '12px' }}>
                                            <CheckCircleIcon width="20" height="20" style={{ color: 'var(--accent-green)' }} /> {opt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Ready to Get Started with{' '}
                        <span className="text-gradient">{solution.title}</span>?
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Contact us today to learn more about this solution and how it can transform your education business.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                        <Link href="/solutions" className="btn btn-secondary btn-lg">All Solutions</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
