import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Continue Labs',
    description: 'Terms of Service for using Continue Labs white-label education content.',
};

export default function TermsPage() {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="heading-xl" style={{ marginBottom: '40px' }}>
                    Terms of <span className="text-gradient">Service</span>
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
                        <p>By accessing and using Continue Labs&apos;s services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>2. Services</h2>
                        <p>Continue Labs provides white-label educational content including study materials, mock tests, question banks, and related services. Content is licensed for use under the terms of your partnership agreement.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>3. White-Label Rights</h2>
                        <p>Upon purchase, partners receive full white-label rights to publish the content under their brand name. This includes the right to modify, rebrand, and distribute the content to end users.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>4. Payment Terms</h2>
                        <p>Pricing is as quoted during the partnership discussion. Payments must be made as per the agreed schedule. All prices are in Indian Rupees unless otherwise stated.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>5. Intellectual Property</h2>
                        <p>All original content created by Continue Labs remains our intellectual property until purchased. Upon purchase, the specific content rights transfer as per the licensing agreement.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>6. Limitation of Liability</h2>
                        <p>Continue Labs shall not be liable for any indirect, incidental, or consequential damages arising from the use of our content or services.</p>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Last updated: February 2026</p>
                </div>
            </div>
        </section>
    );
}
