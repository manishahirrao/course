import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund Policy | Contenu Labs',
    description: 'Refund Policy for Contenu Labs content purchases and services.',
};

export default function RefundPolicyPage() {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="heading-xl" style={{ marginBottom: '40px' }}>
                    Refund <span className="text-gradient">Policy</span>
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>1. Refund Eligibility</h2>
                        <p>Due to the digital nature of our products, refunds are evaluated on a case-by-case basis. Refund requests must be made within 7 days of purchase.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>2. When Refunds Apply</h2>
                        <p>Refunds may be issued if the delivered content significantly differs from the agreed specifications, if there are quality issues not resolved within our revision policy, or in case of duplicate payments.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>3. Non-Refundable Items</h2>
                        <p>Custom content creation services where work has commenced, daily learning services already delivered, and content that has been downloaded and used are generally non-refundable.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>4. Refund Process</h2>
                        <p>If you have any questions about our refund policy, please contact us at info@contenulabs.com with your order details and reason. We will review and respond within 3-5 business days. Approved refunds are processed within 7-10 business days.</p>
                    </div>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>5. Contact</h2>
                        <p>For refund inquiries, reach us at <a href="mailto:info@contenulabs.com" style={{ color: 'var(--accent-blue-light)' }}>info@contenulabs.com</a> or call <span style={{ color: 'var(--accent-blue-light)' }}>+91-8234050544, 9755317284, 7000791256</span>.</p>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Last updated: February 2026</p>
                </div>
            </div>
        </section>
    );
}
