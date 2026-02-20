import type { Metadata } from 'next';
import DetailedSolutions from '@/components/DetailedSolutions';

export const metadata: Metadata = {
    title: 'White Label Education Solutions | Contenu Labs',
    description: 'Comprehensive white-label competitive exam and academic solutions for coaching institutes and EdTech platforms.',
};

export default function WhiteLabelSolutionsPage() {
    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Our Services</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        White Label <span className="text-gradient">Education Solutions</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
                        Empower your institute with our comprehensive range of competitive exam and academic content solutions, fully branded under your name.
                    </p>
                </div>
            </section>

            <section className="section">
                <DetailedSolutions />
            </section>
        </>
    );
}
