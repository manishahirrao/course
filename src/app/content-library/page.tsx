import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Content Library | Free Sample Study Materials | Continue Labs',
    description: 'Download free sample study materials, mock tests, and question banks to preview our content quality.',
};

const samples = [
    {
        icon: '🏦',
        title: 'Banking White-Label Study Materials',
        category: 'Banking',
        items: [
            'IBPS PO Complete Study Material Sample',
            'SBI Clerk Practice Set with Solutions',
            'RBI Grade B Quantitative Aptitude Notes',
            'Banking Current Affairs Monthly Digest',
        ],
    },
    {
        icon: '🏛️',
        title: 'SSC White-Label Study Materials',
        category: 'SSC',
        items: [
            'SSC CGL General Awareness Notes',
            'SSC CHSL English Language Practice',
            'SSC MTS Reasoning Sample Paper',
            'SSC CPO Quantitative Aptitude Guide',
        ],
    },
    {
        icon: '📚',
        title: 'CBSE White-Label Study Materials',
        category: 'CBSE',
        items: [
            'Class 10 Mathematics Chapter Notes',
            'Class 12 Physics Practice Problems',
            'Science Worksheets (Class 6-8)',
            'English Grammar & Composition Guide',
        ],
    },
    {
        icon: '⚙️',
        title: 'JEE/NEET Study Materials',
        category: 'Engineering',
        items: [
            'JEE Main Physics Formula Sheet',
            'JEE Advanced Chemistry Practice Set',
            'NEET Biology Chapter Summary',
            'Mathematics Problem Set (Calculus)',
        ],
    },
];

export default function ContentLibraryPage() {
    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-green">Free Samples</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Content{' '}
                        <span className="text-gradient">Library</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Download free samples to see why 500+ institutes trust our white-label content. Preview our quality before you partner.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '32px' }}>
                        {samples.map((sample) => (
                            <div key={sample.title} className="card" style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                    <div style={{ fontSize: '2.5rem' }}>{sample.icon}</div>
                                    <div style={{ flex: 1 }}>
                                        <span className="badge badge-red">FREE PDF</span>
                                        <h3 className="heading-sm" style={{ marginTop: '12px' }}>{sample.title}</h3>
                                        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {sample.items.map((item) => (
                                                <div
                                                    key={item}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        gap: '12px',
                                                        padding: '10px 16px',
                                                        background: 'var(--bg-primary)',
                                                        borderRadius: 'var(--radius-sm)',
                                                        border: '1px solid var(--border-color)',
                                                    }}
                                                >
                                                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                                    <button
                                                        className="btn btn-secondary btn-sm"
                                                        style={{ flexShrink: 0, padding: '6px 14px', fontSize: '0.75rem' }}
                                                    >
                                                        Preview
                                                    </button>
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
                        Ready to Access the{' '}
                        <span className="text-gradient">Full Library?</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Partner with us to get complete white-label access to our entire content library.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Become a Partner
                    </Link>
                </div>
            </section>
        </>
    );
}
