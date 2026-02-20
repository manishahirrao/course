import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Education Content Insights | Contenu Labs',
    description: 'Insights, tips, and updates on education content, EdTech trends, and exam preparation strategies.',
};

const blogPosts = [
    {
        title: 'How White-Label Content Can Scale Your EdTech Platform',
        excerpt: 'Discover how education platforms are leveraging white-label study materials to grow their course library without building content from scratch.',
        date: 'Feb 10, 2026',
        category: 'EdTech',
        readTime: '5 min read',
    },
    {
        title: 'Complete Guide to Banking Exam Preparation 2026',
        excerpt: 'A comprehensive guide covering all major banking exams — IBPS PO, SBI Clerk, RBI Grade B — with preparation strategies and study plans.',
        date: 'Feb 5, 2026',
        category: 'Banking',
        readTime: '8 min read',
    },
    {
        title: 'Why Coaching Institutes Need a Digital Content Strategy',
        excerpt: 'The education landscape is changing rapidly. Learn why coaching institutes must adopt digital content to stay competitive.',
        date: 'Jan 28, 2026',
        category: 'Strategy',
        readTime: '6 min read',
    },
    {
        title: 'SSC CGL 2026: Updated Exam Pattern and Preparation Tips',
        excerpt: 'Everything you need to know about the new SSC CGL exam pattern, important topics, and expert preparation tips for 2026.',
        date: 'Jan 20, 2026',
        category: 'SSC',
        readTime: '7 min read',
    },
    {
        title: 'The Power of Daily Current Affairs in Competitive Exam Prep',
        excerpt: 'How daily current affairs content can dramatically improve student performance in banking, SSC, and UPSC exams.',
        date: 'Jan 15, 2026',
        category: 'Tips',
        readTime: '4 min read',
    },
    {
        title: 'LMS Integration: Getting Your Content Platform-Ready',
        excerpt: 'A technical guide on how to prepare educational content for seamless LMS integration and format conversion.',
        date: 'Jan 10, 2026',
        category: 'Technology',
        readTime: '6 min read',
    },
];

export default function BlogPage() {
    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Blog</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Insights &{' '}
                        <span className="text-gradient">Updates</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Latest insights on education content, EdTech trends, and exam preparation strategies from our expert team.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {blogPosts.map((post) => (
                            <article key={post.title} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '180px', background: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(59,130,246,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '3rem', opacity: 0.5 }}>📝</span>
                                </div>
                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                                        <span className="badge badge-blue" style={{ fontSize: '0.6875rem' }}>{post.category}</span>
                                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{post.readTime}</span>
                                    </div>
                                    <h3 className="heading-sm" style={{ lineHeight: 1.4 }}>{post.title}</h3>
                                    <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px', flex: 1 }}>{post.excerpt}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                                        <span style={{ color: 'var(--accent-blue-light)', fontSize: '0.875rem', fontWeight: 500 }}>Read More →</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Want Content{' '}
                        <span className="text-gradient">Updates in Your Inbox?</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Stay informed with the latest from Contenu Labs — delivered directly to your email.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
