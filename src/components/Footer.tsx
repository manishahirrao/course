import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                {/* Brand */}
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <div style={{ position: 'relative', width: '150px', height: '40px' }}>
                            <Image
                                src="/assets/continue-labs-logo.png"
                                alt="Continue Labs Logo"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left' }}
                            />
                        </div>
                    </Link>
                    <p className={styles.brandDesc}>
                        Your trusted partner for enterprise-grade white-label education content. We empower EdTech platforms, coaching institutes, and educational organizations with comprehensive study materials, mock tests, and assessment solutions.
                    </p>
                    <div className={styles.contactLinks}>
                        <a href="mailto:contact@continuelabs.ai" className={styles.contactLink}>
                            ✉️ contact@continuelabs.ai
                        </a>
                        <a href="tel:+919370781368" className={styles.contactLink}>
                            📞 +91 9370781368
                        </a>
                    </div>
                </div>

                {/* Our Solutions */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Our Solutions</h4>
                    <Link href="/solutions/white-label-study-material" className={styles.link}>White Label Study Material</Link>
                    <Link href="/solutions/daily-learning-services" className={styles.link}>Daily Learning Services</Link>
                    <Link href="/solutions/software-platform-solutions" className={styles.link}>Software Platform Solutions</Link>
                    <Link href="/solutions/mock-tests-and-assessments" className={styles.link}>Mock Tests &amp; Assessments</Link>
                    <Link href="/solutions/custom-content-creation" className={styles.link}>Custom Content Creation</Link>
                </div>

                {/* Products */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Products</h4>
                    <Link href="/products?tab=study-materials" className={styles.link}>Study Materials</Link>
                    <Link href="/products?tab=mock-tests" className={styles.link}>Mock Tests</Link>
                </div>

                {/* Content Coverage */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Content Coverage</h4>
                    <Link href="/content-coverage/academics" className={styles.link}>Academics</Link>
                    <Link href="/content-coverage/competitive-exams" className={styles.link}>Competitive Exams</Link>
                    <Link href="/content-coverage/computer-science" className={styles.link}>Computer Science</Link>
                    <Link href="/content-library" className={styles.link}>Sample Library</Link>
                </div>

                {/* Company */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Company</h4>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/contact" className={styles.link}>Contact Us</Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <p className={styles.copyright}>© 2026 Continue Labs. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <Link href="/refund-policy">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
