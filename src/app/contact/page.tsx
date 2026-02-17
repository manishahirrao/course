'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import styles from './contact.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Contact Us</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Partner{' '}
                        <span className="text-gradient">with Us</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Get in touch to explore our comprehensive education content library. Schedule a demo today.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <div className="card" style={{ padding: '36px' }}>
                            <h2 className="heading-md" style={{ marginBottom: '24px' }}>Send us a Message</h2>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Company / Institute</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            placeholder="Your organization name"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Message *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'loading'} style={{ width: '100%' }}>
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'success' && (
                                    <p style={{ color: 'var(--accent-green)', marginTop: '12px', textAlign: 'center' }}>
                                        ✅ Message sent successfully! We&apos;ll get back to you soon.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p style={{ color: 'var(--accent-red)', marginTop: '12px', textAlign: 'center' }}>
                                        ❌ Failed to send. Please email us directly at contact@continuelabs.ai
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoColumn}>
                            <div className="card" style={{ padding: '28px' }}>
                                <h3 className="heading-sm">Contact Information</h3>
                                <div className={styles.infoList}>
                                    <div className={styles.infoItem}>
                                        <span>✉️</span>
                                        <div>
                                            <strong>Email</strong>
                                            <a href="mailto:contact@continuelabs.ai">contact@continuelabs.ai</a>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span>📞</span>
                                        <div>
                                            <strong>Phone</strong>
                                            <a href="tel:+919370781368">+91 9370781368</a>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span>🕐</span>
                                        <div>
                                            <strong>Business Hours</strong>
                                            <p>Mon - Sat: 9 AM - 7 PM IST</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span>📍</span>
                                        <div>
                                            <strong>Location</strong>
                                            <p>Remote-First Organization, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ padding: '28px', marginTop: '20px' }}>
                                <h3 className="heading-sm">Why Partner with Us?</h3>
                                <ul className={styles.benefitList}>
                                    <li>✅ 10,000+ ready study materials</li>
                                    <li>✅ Full white-label rights</li>
                                    <li>✅ Dedicated support team</li>
                                    <li>✅ Daily content updates</li>
                                    <li>✅ Custom content creation</li>
                                </ul>
                            </div>

                            <div className="card" style={{ padding: '28px', marginTop: '20px', background: 'rgba(59, 130, 246, 0.05)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                                <h3 className="heading-sm">Schedule a Demo</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                                    Book a personalized walkthrough of our content library and learn how we can power your platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            Frequently Asked{' '}
                            <span className="text-gradient">Questions</span>
                        </h2>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { q: 'What content formats do you provide?', a: 'We provide content in multiple formats including PDF, Word documents, and LMS-compatible formats. Our content can be customized and white-labeled for your brand.' },
                            { q: 'Can we white-label your content?', a: 'Yes, absolutely! All our content comes with full white-label rights. You can publish it under your brand name with complete freedom and no recurring royalties.' },
                            { q: 'What is your pricing model?', a: 'We offer flexible pricing models including per-subject pricing, bulk packages, and subscription plans. Contact us for a customized quote.' },
                            { q: 'Do you provide technical support?', a: 'Yes, we provide dedicated technical support for all our partners. Our team assists with content integration, LMS uploads, and format conversions.' },
                            { q: 'How often is content updated?', a: 'Our content is updated regularly to reflect the latest exam patterns and syllabus changes. Banking and competitive exam content is updated daily.' },
                            { q: 'Can we customize the content?', a: 'Yes, we offer both ready-made and custom content creation services. Our team can create bespoke study materials tailored to your specific requirements.' },
                        ].map((faq, i) => (
                            <details key={i} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>{faq.q}</summary>
                                <p className={styles.faqAnswer}>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
