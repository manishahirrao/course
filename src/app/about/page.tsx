import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Continue Labs | Remote EdTech Content Experts | 500+ Partners',
    description: 'Learn about our completely remote team delivering world-class education solutions globally.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">About Us</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Building the Future of Education,{' '}
                        <span className="text-gradient">Remotely</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
                        A completely remote team of education specialists, content creators, and technology experts delivering world-class solutions to EdTech platforms and educational institutions across the globe.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
                        <Link href="/solutions" className="btn btn-primary btn-lg">Explore Our Solutions</Link>
                        <Link href="/contact" className="btn btn-secondary btn-lg">Get in Touch</Link>
                    </div>
                </div>
            </section>

            {/* Mission / Vision / Why Remote */}
            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎯</div>
                            <h2 className="heading-sm">Our Mission</h2>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                                To empower educational organizations with premium, scalable content solutions that enhance learning outcomes and operational efficiency, delivered by a distributed team of experts.
                            </p>
                        </div>
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔭</div>
                            <h2 className="heading-sm">Our Vision</h2>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                                To be the most trusted partner for educational content and technology solutions, setting new standards for quality, innovation, and remote collaboration in the EdTech industry.
                            </p>
                        </div>
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌍</div>
                            <h2 className="heading-sm">Why We Work Remotely</h2>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                                Our distributed team structure enables us to deliver exceptional results while maintaining work-life balance and accessing top talent globally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Remote Details */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            Why We Work{' '}
                            <span className="text-gradient">Remotely</span>
                        </h2>
                    </div>
                    <div className="grid-4">
                        {[
                            { icon: '🌐', title: 'Global Talent', desc: 'Access to the best education specialists and content creators from around the world' },
                            { icon: '⏰', title: '24/7 Productivity', desc: 'Distributed across time zones for continuous progress and faster delivery' },
                            { icon: '🚀', title: 'Agile & Efficient', desc: 'Streamlined processes and modern tools for maximum efficiency and quality' },
                            { icon: '⚖️', title: 'Work-Life Balance', desc: 'Happy team members deliver better results and innovative solutions' },
                        ].map((item) => (
                            <div key={item.title} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
                                <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{item.icon}</div>
                                <h3 className="heading-sm">{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Drives Us */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            What{' '}
                            <span className="text-gradient">Drives Us</span>
                        </h2>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                            Our values guide every decision we make and every solution we deliver.
                        </p>
                    </div>
                    <div className="grid-3">
                        {[
                            { icon: '⭐', title: 'Quality First', desc: 'We never compromise on quality. Every piece of content undergoes rigorous review and meets the highest educational standards.' },
                            { icon: '💡', title: 'Innovation', desc: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions to our partners.' },
                            { icon: '🔍', title: 'Transparency', desc: 'Clear communication, honest timelines, and transparent processes build lasting partnerships with our clients.' },
                            { icon: '🤝', title: 'Collaboration', desc: 'We work closely with our clients, understanding their unique needs and delivering tailored solutions.' },
                            { icon: '✅', title: 'Reliability', desc: 'Consistent delivery, meeting deadlines, and maintaining the highest standards of professional service.' },
                            { icon: '🌱', title: 'Impact', desc: 'We measure success by the positive impact our solutions have on learners and educational institutions.' },
                        ].map((item) => (
                            <div key={item.title} className="card" style={{ padding: '28px' }}>
                                <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{item.icon}</div>
                                <h3 className="heading-sm">{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            Trusted by{' '}
                            <span className="text-gradient">Educational Organizations</span>
                        </h2>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                            Our commitment to excellence has made us a preferred partner for EdTech platforms, coaching institutes, and publishers.
                        </p>
                    </div>
                    <div className="grid-3">
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div className="heading-xl text-gradient">100%</div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Remote Team</p>
                        </div>
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div className="heading-xl text-gradient">50+</div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Team Members</p>
                        </div>
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div className="heading-xl text-gradient">10+</div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Countries</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Ready to{' '}
                        <span className="text-gradient">Partner with Us?</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Join hundreds of education partners already scaling with our content solutions.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
