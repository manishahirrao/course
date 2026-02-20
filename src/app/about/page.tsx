import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About Contenu Labs | White Label EdTech Solutions | Founded 2018',
    description: 'Founded in 2018, Contenu Labs is India\'s leading white label study material platform. Empowering educators with IT services, educational content & digital media branding.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">About Us</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Your Study Material,{' '}
                        <span className="text-gradient">Your Brand — No Co-Branding</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
                        Empowering Educators with India&apos;s Leading White Label Study Material Platform
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
                        <Link href="/solutions" className="btn btn-primary btn-lg">Explore Our Solutions</Link>
                        <Link href="/contact" className="btn btn-secondary btn-lg">Get in Touch</Link>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className={styles.sectionIntro}>
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <h2 className="heading-lg">
                                About <span className="text-gradient">Contenu Labs</span>
                            </h2>
                        </div>
                        <p className="text-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'center' }}>
                            Founded in 2018, <strong>Contenu Labs</strong> is a group of young and talented tech savvy and professional engineers. We are skilled in designing and developing innovative and result-driven online experiences. Our company offers you the IT services, Educational Services and Digital Media Branding strategies that help you to extend your business to the next level. We continuously spread on the best run-through in the software development process and utilize the up-to-the-minute technology. We shape up fledgling and brilliant software tech-savvies to a world class level. We ensure customer happiness to the top of our capability by rendering our exceptional services at an affordable pricing!
                        </p>
                    </div>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span className="badge badge-blue">From the Founder</span>
                        <h2 className="heading-lg" style={{ marginTop: '16px' }}>
                            Welcome <span className="text-gradient">Message</span>
                        </h2>
                    </div>
                    <div className={styles.sectionIntro} style={{ marginTop: '32px' }}>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            Hello and welcome to <strong>Contenu Labs!</strong>
                        </p>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '16px' }}>
                            As the founder of this company, I am excited to have the opportunity to introduce you to our team and the services that we offer. Our group of young and talented professionals are passionate about technology and are dedicated to providing innovative solutions to our clients.
                        </p>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '16px' }}>
                            At <strong>Contenu Labs,</strong> we believe in continuous learning and staying up-to-date with the latest industry trends and technology. Our team is committed to providing exceptional services and helping our clients achieve their goals.
                        </p>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '16px' }}>
                            Whether you are looking for IT services, educational services, or digital media branding strategies, we have the expertise and experience to help you. We understand that every business is unique, which is why we offer customized solutions tailored to your specific needs.
                        </p>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '16px', fontWeight: 600 }}>
                            Thank you for considering Contenu Labs for your business needs. We are excited to work with you and help you take your business to the next level!
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="section">
                <div className="container">
                    <div className={styles.founderGrid}>
                        <div className={styles.founderImageWrapper}>
                            <Image
                                src="/assets/founder.jpeg"
                                alt="Sushil Kumar Singh"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.founderContent}>
                            <span className="badge badge-blue">Founder & Director</span>
                            <h2 className="heading-lg" style={{ marginTop: '16px' }}>
                                Sushil Kumar <span className="text-gradient">Singh</span>
                            </h2>
                            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '24px', lineHeight: 1.8 }}>
                                SUSHIL KUMAR SINGH is a technical guy who loves to build everything for people and around the people. He is an agile software engineer who is not only passionate for work, but also maintain perfect work-life balance. He loves programming and is addicted to learn new technologies!
                            </p>
                            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '16px', lineHeight: 1.8 }}>
                                He is a young and enthusiastic personality who has completed B.Tech from R.G.P.V. and set a goal to have his own IT foundation. He is also a motivational speaker, who loves to speak on general, Educational and technology based topics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            Vision & <span className="text-gradient">Mission</span>
                        </h2>
                    </div>
                    <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className={styles.cardPremium}>
                            <div className={styles.iconWrapper}>🔭</div>
                            <h2 className="heading-sm">Our Vision</h2>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                                Contenu Labs works closely with its potential client base and people aiming high to improve their productivity. Our company helps our clients to express their brand online and achieve their goals. We create perfect IT based solutions following the latest technology and trends to help you in visitor tracking, goal conversions and lead generation too. We work with you at every step of web designing and development to help you get the desired results with your website.
                            </p>
                        </div>
                        <div className={styles.cardPremium}>
                            <div className={styles.iconWrapper}>🎯</div>
                            <h2 className="heading-sm">Our Mission</h2>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                                When we founded Contenu Labs, we aim to make it a leading Content Development for Institutes in India. Our great values include 100% client satisfaction, quality, reliability, ethics and workaholic attitude. We work hard to develop and maintain long-term relationships with our potential clientele and make them happy with our service offerings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            How We <span className="text-gradient">Work</span>
                        </h2>
                    </div>
                    <div className="grid-4">
                        {[
                            { num: '1', title: 'Expert Content Creation', desc: 'Subject matter experts create and curate study materials covering essential topics and concepts required for competitive exams.' },
                            { num: '2', title: 'Regular Updates', desc: 'The study material is updated regularly to keep it up-to-date with the latest exam patterns and syllabus.' },
                            { num: '3', title: 'Comprehensive Test Series', desc: 'The company offers a wide range of test series to help candidates assess their knowledge and identify their strengths and weaknesses.' },
                            { num: '4', title: 'Real Exam Simulation', desc: 'The test series are designed to simulate the actual exam experience and provide valuable insights into the candidate\'s performance.' },
                            { num: '5', title: '100% Branding Policy', desc: 'The company offers 100% branding policy to ensure that all study material and test series are exclusively branded with the client\'s logo and information.' },
                            { num: '6', title: 'Customer Support', desc: 'The company provides customer support to resolve any issues or queries related to the study material or test series.' },
                            { num: '7', title: 'Multi-Platform Access', desc: 'Candidates can purchase study material or test series through the company\'s website or other online platforms.' },
                            { num: '8', title: 'Additional Resources', desc: 'The company may also provide additional resources such as online courses, coaching, and mentoring to help candidates prepare effectively for their exams.' },
                        ].map((item) => (
                            <div key={item.num} className={styles.cardPremium} style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', top: '16px', right: '16px',
                                    width: '36px', height: '36px', borderRadius: '50%',
                                    background: 'var(--gradient-primary)', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 700, fontSize: '0.9rem'
                                }}>
                                    {item.num}
                                </div>
                                <h3 className="heading-sm" style={{ paddingRight: '40px' }}>{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="card" style={{ textAlign: 'center', padding: '24px', marginTop: '40px', background: 'var(--bg-secondary)', borderColor: 'rgba(255,99,56,0.2)' }}>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                            Overall, the company&apos;s goal is to provide high-quality study material and test series to help candidates prepare effectively and improve their chances of success in competitive exams.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Makes Us Unique */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            What Makes Us <span className="text-gradient">Unique?</span>
                        </h2>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                            We are completely devoted to quality and on-time deliverables to our customers.
                        </p>
                    </div>
                    <div className="grid-3">
                        {[
                            { icon: '🤝', title: 'Honest & Friendly', desc: 'We are honest and friendly people who work for our clients on trust.' },
                            { icon: '❤️', title: 'Client Focused', desc: 'We love our client\'s and serve them what they are exactly looking for.' },
                            { icon: '💻', title: 'Modern Solutions', desc: 'We create modern and fully featured websites that can help business to get developed.' },
                            { icon: '⚙️', title: 'Tailored Services', desc: 'We offer services that are tailored as per your specific business pre-requisites.' },
                            { icon: '✅', title: 'Quality & Timely', desc: 'We are completely devoted to quality and on-time deliverables to our customers.' },
                            { icon: '🔥', title: 'Passionate', desc: 'We are passionate for work and this is our only key to success.' },
                        ].map((item) => (
                            <div key={item.title} className={styles.cardPremium}>
                                <div className={styles.iconWrapper}>{item.icon}</div>
                                <h3 className="heading-sm">{item.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">
                            Our Additional <span className="text-gradient">Services</span>
                        </h2>
                    </div>
                    <div className="grid-3">
                        {[
                            { icon: '🌐', title: 'Web Design' },
                            { icon: '💻', title: 'Web Development' },
                            { icon: '📱', title: 'Mobile App Development' },
                            { icon: '📈', title: 'Digital Marketing' },
                            { icon: '🎨', title: 'Graphic Design' },
                            { icon: '💬', title: 'Bulk SMS' },
                            { icon: '📲', title: 'Bulk WhatsApp SMS' },
                            { icon: '🖥️', title: 'Web Hosting' },
                            { icon: '🔌', title: 'WhatsApp API' },
                        ].map((item) => (
                            <div key={item.title} className="card" style={{ textAlign: 'center', padding: '28px 24px' }}>
                                <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{item.icon}</div>
                                <h3 className="heading-sm">{item.title}</h3>
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
                            <span className="text-gradient">500+ Customers</span>
                        </h2>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                            Our commitment to excellence has made us a preferred partner for coaching institutes, EdTech platforms, and educational organizations all over India.
                        </p>
                    </div>
                    <div className="grid-4">
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div className="heading-xl text-gradient">2018</div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Founded</p>
                        </div>
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div className="heading-xl text-gradient">500+</div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Customers</p>
                        </div>
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div className="heading-xl text-gradient">100%</div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Branding Policy</p>
                        </div>
                        <div className="card" style={{ textAlign: 'center', padding: '36px' }}>
                            <div className="heading-xl text-gradient">Pan India</div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Coverage</p>
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
                        Join 500+ coaching institutes and EdTech platforms already scaling with our white label content solutions.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
