import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Content Coverage | Academics, Competitive Exams & CS | Continue Labs',
    description: 'Explore our comprehensive content coverage across academics, competitive exams, and computer science.',
};

const categories = [
    {
        icon: '🎓',
        title: 'Academics',
        slug: 'academics',
        desc: 'CBSE, ICSE, State Board content for Classes 6-12. Complete NCERT-aligned study materials covering Mathematics, Science, Social Studies, English, and Hindi.',
        subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi', 'Computer Science'],
    },
    {
        icon: '🏆',
        title: 'Competitive Exams',
        slug: 'competitive-exams',
        desc: 'Banking (IBPS, SBI, RBI), SSC (CGL, CHSL, MTS), Railways, UPSC, State PSC, and other government exam preparation content.',
        subjects: ['Banking Exams', 'SSC Exams', 'Railway Exams', 'UPSC', 'State PSC', 'Insurance Exams'],
    },
    {
        icon: '💻',
        title: 'Computer Science',
        slug: 'computer-science',
        desc: 'Programming fundamentals, data structures, algorithms, web development, and IT certification preparation materials.',
        subjects: ['Programming', 'Data Structures', 'Algorithms', 'Web Development', 'Database', 'Networking'],
    },
];

export default function ContentCoveragePage() {
    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Content Coverage</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Comprehensive Content{' '}
                        <span className="text-gradient">for Every Domain</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Explore our ready-to-deploy content library spanning academics, competitive exams, and computer science.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {categories.map((cat) => (
                            <div key={cat.slug} className="card" style={{ padding: '40px' }}>
                                <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                    <div style={{ flex: '1 1 400px' }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{cat.icon}</div>
                                        <h2 className="heading-md">{cat.title}</h2>
                                        <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '12px' }}>{cat.desc}</p>
                                        <Link href={`/content-coverage/${cat.slug}`} className="btn btn-primary" style={{ marginTop: '24px' }}>
                                            Explore {cat.title} →
                                        </Link>
                                    </div>
                                    <div style={{ flex: '1 1 300px' }}>
                                        <h4 className="heading-sm" style={{ color: 'var(--accent-blue-light)', marginBottom: '16px' }}>Subjects Covered</h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                            {cat.subjects.map((sub) => (
                                                <div key={sub} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                                    <span style={{ color: 'var(--accent-green)' }}>✓</span> {sub}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Need Custom Content for{' '}
                        <span className="text-gradient">Your Specific Domain?</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        We create bespoke content for any subject, topic, or curriculum. Reach out to discuss your requirements.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}
