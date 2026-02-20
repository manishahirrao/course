import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'FAQ | Frequently Asked Questions | Contenu Labs',
    description: 'Frequently asked questions about Contenu Labs services including web development, mobile apps, SEO, digital marketing and more.',
};

const faqs = [
    {
        question: 'Do you offer IT services to your clients globally?',
        answer: 'Yes, we offer our web designing, web development, mobile app development, SEO services, SMO services, digital branding and promotion related services to clients across the world.',
    },
    {
        question: 'Does your company offer post designing and development maintenance services? What are its charges?',
        answer: 'We offer post designing and development maintenance services at affordable rates. If you have previously developed any product with us, kindly consult us for the charges.',
    },
    {
        question: 'How long will it take to complete a web development project?',
        answer: 'This is completely dependent on what project requirement you have. If it is a single page website, then we can deliver in a week. And, if it contains more number of pages, then we need to decide the time frame.',
    },
    {
        question: 'Do you offer web hosting services? How long will it take to set up a web hosting account?',
        answer: 'We offer reliable web hosting services. We need 1-2 days to set up a web hosting account depending on your requirements. It depends on factors like you need to apply a SSL certificate or Google Analytics code features.',
    },
    {
        question: 'What if I need customer support immediately?',
        answer: 'You don\'t need to worry for the customer support. Our expert team is available 24*7 to support you and solve your queries.',
    },
    {
        question: 'What makes your company unique from other IT companies in India?',
        answer: 'We develop 100% custom-build website as per your business needs. We are fully authentic, reliable, honest and affordable IT solution providers.',
    },
    {
        question: 'Are your websites SEO friendly?',
        answer: 'It is our responsibility to you as a client to ensure your website is visible online and rank at the top position on search engines like Google and Yahoo.',
    },
    {
        question: 'Do you update already made website as per the latest trends?',
        answer: 'Yes, we can update your already made website as per the latest trends. There are many ways to update your website, we choose the best functionality and make changes there in.',
    },
    {
        question: 'What is the agenda of charges per service? Do you charge project wise, monthly payment or work per hour?',
        answer: 'Following market standards, we offer competitive pricing for designing and developing websites and applications. For long-term projects, we expect monthly payment from our clients. Contact us for a detailed quote tailored to your needs.',
    },
];

export default function FAQPage() {
    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Support</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Find answers to common questions about our services and how we can help your business grow.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} className="card" style={{ padding: '28px 32px' }}>
                                <h3 className="heading-sm" style={{ marginBottom: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <span style={{ color: 'var(--accent-blue)', fontWeight: 700, minWidth: '28px' }}>Q{index + 1}.</span>
                                    {faq.question}
                                </h3>
                                <p className="text-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, paddingLeft: '40px' }}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Still Have <span className="text-gradient">Questions?</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Our team is available 24/7 to help you. Don&apos;t hesitate to reach out.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}
