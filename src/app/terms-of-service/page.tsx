import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Contenu Labs',
    description: 'Terms and Conditions for using CONTENU LABS MEDIA PVT. LTD. services and website.',
};

export default function TermsPage() {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="heading-xl" style={{ marginBottom: '40px' }}>
                    Terms and <span className="text-gradient">Conditions</span>
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    <div>
                        <p>Read the given terms and conditions carefully, which is to be accepted by the user to access our website and ask us for any products or service offerings. This website is owned and monitored by CONTENU LABS MEDIA PVT. LTD., which has the right to revise the terms and conditions anytime without giving any prior notifications to users.</p>
                    </div>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '20px' }}>
                        <li>We agree that the information available on our website is obtained from the reliable resources.</li>
                        <li>All the data visible on CONTENU LABS MEDIA PVT. LTD. website including content, images, logo, designed page etc. belong to our company only.</li>
                        <li>We don&apos;t hold any responsibility for any information and product statements present on our website are true as per client&apos;s needs.</li>
                        <li>Company has the right to alter or discontinue the aspects of its website anytime including, features, design and even, content.</li>
                        <li>
                            Our company gives no assurance for certain things including, but not limited to:
                            <ul style={{ paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>User&apos;s site will meet pre-requisite requirements.</li>
                                <li>Content quality will meet user&apos;s necessities.</li>
                                <li>Site availability without any interruption.</li>
                                <li>Error-free and timely access to our website.</li>
                                <li>Results provided are accurate or unfailing.</li>
                            </ul>
                        </li>
                        <li>We reserve the right to use the user&apos;s information to give our users a more personalized online experience.</li>
                        <li>We keep the record of our client confidential and make sure that the information will not be disclosed to any third party.</li>
                        <li>The paramount importance to CONTENU LABS MEDIA PVT. LTD. is the user&apos;s right to privacy, communication and feedback given by happy clients.</li>
                        <li>We are not liable to the hardware or data loss occurred due to downloading of any material or content from our website.</li>
                        <li>We might allow you to copy, collect and distribute the materials herein for the solitary purpose of retrieving the details through World Wide Web. However, the usage of material provided on the website for any other purpose is unlawful and thereby strictly prohibited without our written consent.</li>
                        <li>CONTENU LABS MEDIA PVT. LTD. is free to utilize any idea, concept or technique in making products or offering service for any purpose.</li>
                        <li>We also have the right to refuse any membership to any user for any of the valid/invalid reasons without giving prior notice.</li>
                        <li>Our employees reserves the rights to terminate the project with a Client at any time without prior notice if he/she finds the client in breach of these Terms and Conditions.</li>
                        <li>We ensure you that these Terms and Conditions do not upset your legal rights as a consumer.</li>
                        <li>In support of the global outlook of the Internet, users have to agree to comply with the local rules and applicable laws according to the online conduct.</li>
                        <li>We take care of the safety of our employees, customers, and visitors too. Any intimidations, threatening behaviour or violence acts will not be tolerated at all.</li>
                    </ul>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Last updated: February 2026</p>
                </div>
            </div>
        </section>
    );
}
