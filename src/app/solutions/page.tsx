import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'White-Label Education Solutions | Study Materials & Tests | Continue Labs',
    description: 'Comprehensive white-label education content solutions trusted by 500+ organizations.',
};

const allSolutions = [
    {
        icon: '📚',
        title: 'White Label Study Material',
        slug: 'white-label-study-material',
        desc: 'Production-ready study materials delivered under your brand. PDFs, notes, and comprehensive learning content for any exam or subject.',
        badge: 'Most Popular',
        badgeClass: 'badge-orange',
    },
    {
        icon: '📅',
        title: 'Daily Learning Services',
        slug: 'daily-learning-services',
        desc: 'Daily current affairs, practice assignments, and reel-style video content — all white-labeled and delivered to your platform every day.',
        badge: 'Daily',
        badgeClass: 'badge-green',
    },
    {
        icon: '✅',
        title: 'Mock Tests & Assessments',
        slug: 'mock-tests-and-assessments',
        desc: 'Full-length mock tests with detailed solutions, sectional tests, and previous year paper analysis for all major exams.',
        badge: 'Popular',
        badgeClass: 'badge-blue',
    },
    {
        icon: '📝',
        title: 'Previous Year Questions',
        slug: 'mock-tests-and-assessments',
        desc: 'Solved previous year question papers with detailed solutions and topic-wise analysis for all competitive exams.',
        badge: '',
        badgeClass: '',
    },
    {
        icon: '🖥️',
        title: 'Software Platform Solutions',
        slug: 'software-platform-solutions',
        desc: 'Complete EdTech software solutions including LMS integration, question upload services, and format conversion.',
        badge: 'Tech',
        badgeClass: 'badge-purple',
    },
    {
        icon: '📖',
        title: 'Publications & Licensing',
        slug: 'white-label-study-material',
        desc: 'Full licensing and publication rights for our content. Print or publish digitally under your own brand.',
        badge: '',
        badgeClass: '',
    },
    {
        icon: '🎨',
        title: 'Custom Content Creation',
        slug: 'custom-content-creation',
        desc: 'Bespoke study materials, mock tests, and practice papers created specifically for your requirements.',
        badge: 'Custom',
        badgeClass: 'badge-orange',
    },
];

export default function SolutionsPage() {
    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Solutions</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Continue Labs&apos;s Comprehensive{' '}
                        <span className="text-gradient">Education Infrastructure Solutions</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '650px', margin: '16px auto 0' }}>
                        Everything you need to build, scale, and manage your education content business — all under your brand.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">Our <span className="text-gradient">Solutions</span></h2>
                    </div>
                    <div className="grid-3" style={{ gap: '24px' }}>
                        {allSolutions.map((sol) => (
                            <Link
                                href={`/solutions/${sol.slug}`}
                                key={sol.title}
                                className="card"
                                style={{ padding: '32px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}
                            >
                                {sol.badge && <span className={`badge ${sol.badgeClass}`}>{sol.badge}</span>}
                                <div style={{ fontSize: '2.5rem' }}>{sol.icon}</div>
                                <h3 className="heading-sm">{sol.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{sol.desc}</p>
                                <span style={{ color: 'var(--accent-blue-light)', fontSize: '0.875rem', fontWeight: 500, marginTop: 'auto' }}>
                                    Learn More →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            Why Partners Choose{' '}
                            <span className="text-gradient">Continue Labs</span>
                        </h2>
                    </div>
                    <div className="grid-3">
                        {[
                            { icon: '🏆', title: 'Proven Track Record', desc: '500+ partners across India trust our content for their education platforms.' },
                            { icon: '🔒', title: 'Quality Assurance', desc: 'Every piece of content goes through multi-level review by subject matter experts.' },
                            { icon: '🤝', title: 'Dedicated Support', desc: 'Personalized account management with quick turnaround on all requests.' },
                        ].map((item) => (
                            <div key={item.title} className="card" style={{ textAlign: 'center', padding: '36px' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                                <h3 className="heading-sm">{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Partner with{' '}
                        <span className="text-gradient">Continue Labs Today</span>
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
