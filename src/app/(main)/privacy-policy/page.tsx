import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Contenu Labs',
    description: 'Privacy Policy for CONTENU LABS MEDIA PVT. LTD. - how we collect, use, and protect your information.',
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
                        <p>CONTENU LABS MEDIA PVT. LTD. is a trusted White Label Content Providing company, which offers Test Series, Study Notes, Current Affairs, Magazines &amp; other services as per client&apos;s needs. We follow standard privacy policy for our client base approaching us for their work.</p>
                    </div>

                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>We Protect Your Privacy</h2>
                        <p>Our company is keen to keep the data of our customers confidential and maintain their privacy till the end. It is highly important for us that our customers can access our website without indulging into privacy breach in any of the ways.</p>
                    </div>

                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>We Facilitate Provision of Services and Products</h2>
                        <p>Our company collects your details just to render the provision facility of the needed products and services in any way. We never collect any unwanted data. So, you need to trust us while sharing details with us.</p>
                    </div>

                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>We Keep Your Information Highly Secured</h2>
                        <p>All the information that you will share with us, we keep it on highly secured servers. With regard to your specific enquiry, we might release your information to the third-party when we ourselves believe that the agency is fully complied with the Government rules, laws and related policies.</p>
                    </div>

                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>We Want Only Your Details</h2>
                        <p>While entering your details in the form, please make sure that it is correct and of your own. You are not allowed to fill the details of any other person without acquiring their consent. Our company requires the details such as your first and last name, email id and contact number. It will assist you to subscribe our services offered and even, ask for auxiliary services.</p>
                    </div>

                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>We Work Our Level Best to Keep Your Data Private</h2>
                        <p>It is the most important third party concern that we strive to keep our customer&apos;s information very confidential. Although, we can&apos;t make sure you about the online scams and cybercrime frauds that happened otherwise.</p>
                    </div>

                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>We Have Certain Rights</h2>
                        <p>Our company has all rights to revise our privacy policy anytime. If we made any changes in our privacy policy, we inform the changes to all our valuable clients through email.</p>
                    </div>

                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>Contact Us</h2>
                        <p>You can get in touch with us at:</p>
                        <p>
                            <a href="mailto:info@contenulabs.com" style={{ color: 'var(--accent-blue-light)' }}>info@contenulabs.com</a>
                            <br />
                            <a href="mailto:help@contenulabs.com" style={{ color: 'var(--accent-blue-light)' }}>help@contenulabs.com</a>
                        </p>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Last updated: February 2026</p>
                </div>
            </div>
        </section>
    );
}
