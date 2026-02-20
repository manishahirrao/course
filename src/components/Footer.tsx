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
                                alt="Contenu Labs Logo"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left' }}
                            />
                        </div>
                    </Link>
                    <p className={styles.brandDesc}>
                        Your trusted partner for enterprise-grade white-label education content. We empower EdTech platforms, coaching institutes, and educational organizations with comprehensive study materials, mock tests, and assessment solutions.
                    </p>
                    <div className={styles.contactLinks}>
                        <a href="mailto:info@contenulabs.com" className={styles.contactLink}>
                            ✉️ info@contenulabs.com
                        </a>
                        <a href="mailto:Contenulabs@gmail.com" className={styles.contactLink}>
                            ✉️ Contenulabs@gmail.com
                        </a>
                        <a href="mailto:help@Contenulabs.com" className={styles.contactLink}>
                            ✉️ help@Contenulabs.com
                        </a>
                        <div className={styles.contactLink}>
                            📞 +91-8234050544, 9755317284, 7000791256
                        </div>
                    </div>
                </div>

                {/* Our Solutions */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Our Solutions</h4>
                    <Link href="/solutions" className={styles.link}>All Solutions</Link>
                    <Link href="/white-label-solutions" className={styles.link}>White Label Solutions</Link>
                    <Link href="/digital-marketing" className={styles.link}>Digital Marketing</Link>
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
                    <Link href="/digital-marketing" className={styles.link}>Digital Marketing</Link>
                </div>

                {/* Company */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Company</h4>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/contact" className={styles.link}>Contact Us</Link>
                    <Link href="/faq" className={styles.link}>FAQ</Link>
                    <Link href="/blog" className={styles.link}>Blog</Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <p className={styles.copyright}>© 2026 Contenu Labs. All rights reserved.</p>
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
