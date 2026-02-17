import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Continue Labs',
    description: 'Privacy Policy for Continue Labs - how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="heading-xl" style={{ marginBottom: '40px' }}>
                    Privacy <span className="text-gradient">Policy</span>
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>1. Information We Collect</h2>
                        <p>We collect information you provide directly when you fill out contact forms, create a partner account, or communicate with us. This includes your name, email address, phone number, company name, and any messages you send.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>2. How We Use Your Information</h2>
                        <p>We use the collected information to respond to your inquiries, process partnership requests, send relevant content updates, and improve our services. We do not sell your personal information to third parties.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your personal information. Data is stored securely using encrypted connections and access controls.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>4. Cookies</h2>
                        <p>We use essential cookies for website functionality and analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>5. Your Rights</h2>
                        <p>You have the right to access, update, or delete your personal information at any time. Contact us at contact@continuelabs.ai to exercise these rights.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>6. Contact Us</h2>
                        <p>For any privacy-related concerns, reach us at <a href="mailto:contact@continuelabs.ai" style={{ color: 'var(--accent-blue-light)' }}>contact@continuelabs.ai</a></p>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Last updated: February 2026</p>
                </div>
            </div>
        </section>
    );
}
