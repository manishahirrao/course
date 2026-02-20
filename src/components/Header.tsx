'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerInner}`}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div style={{ position: 'relative', width: '180px', height: '50px' }}>
                        <Image
                            src="/assets/continue-labs-logo.png"
                            alt="Contenu Labs Logo"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'left' }}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>

                    <div className={styles.dropdown} onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
                        <Link href="/solutions" className={styles.navLink}>Solutions <span className={styles.chevron}>▾</span></Link>
                        {activeDropdown === 'solutions' && (
                            <div className={styles.dropdownMenu}>
                                <Link href="/white-label-solutions" className={styles.dropdownItem}>White Label Solutions</Link>
                                <Link href="/solutions/white-label-study-material" className={styles.dropdownItem}>White Label Study Material</Link>
                                <Link href="/solutions/daily-learning-services" className={styles.dropdownItem}>Daily Learning Services</Link>
                                <Link href="/solutions/software-platform-solutions" className={styles.dropdownItem}>Software Platform Solutions</Link>
                                <Link href="/solutions/mock-tests-and-assessments" className={styles.dropdownItem}>Mock Tests &amp; Assessments</Link>
                                <Link href="/solutions/custom-content-creation" className={styles.dropdownItem}>Custom Content Creation</Link>
                            </div>
                        )}
                    </div>

                    <div className={styles.dropdown} onMouseEnter={() => setActiveDropdown('products')} onMouseLeave={() => setActiveDropdown(null)}>
                        <Link href="/products" className={styles.navLink}>Products <span className={styles.chevron}>▾</span></Link>
                        {activeDropdown === 'products' && (
                            <div className={styles.dropdownMenu}>
                                <Link href="/products?tab=study-materials" className={styles.dropdownItem}>Study Materials</Link>
                                <Link href="/products?tab=mock-tests" className={styles.dropdownItem}>Mock Tests</Link>
                            </div>
                        )}
                    </div>

                    <div className={styles.dropdown} onMouseEnter={() => setActiveDropdown('content')} onMouseLeave={() => setActiveDropdown(null)}>
                        <Link href="/content-coverage" className={styles.navLink}>Content Coverage <span className={styles.chevron}>▾</span></Link>
                        {activeDropdown === 'content' && (
                            <div className={styles.dropdownMenu}>
                                <Link href="/content-coverage/academics" className={styles.dropdownItem}>Academics</Link>
                                <Link href="/content-coverage/competitive-exams" className={styles.dropdownItem}>Competitive Exams</Link>
                                <Link href="/content-coverage/computer-science" className={styles.dropdownItem}>Computer Science</Link>
                                <Link href="/digital-marketing" className={styles.dropdownItem}>Digital Marketing</Link>
                                <div className={styles.dropdownDivider} />
                                <Link href="/content-library" className={styles.dropdownItem}>Sample Library</Link>
                            </div>
                        )}
                    </div>

                    <div className={styles.dropdown} onMouseEnter={() => setActiveDropdown('more')} onMouseLeave={() => setActiveDropdown(null)}>
                        <span className={styles.navLink} style={{ cursor: 'pointer' }}>More <span className={styles.chevron}>▾</span></span>
                        {activeDropdown === 'more' && (
                            <div className={styles.dropdownMenu}>
                                <Link href="/blog" className={styles.dropdownItem}>Blog</Link>
                                <Link href="/about" className={styles.dropdownItem}>About</Link>
                                <Link href="/contact" className={styles.dropdownItem}>Contact</Link>
                            </div>
                        )}
                    </div>
                </nav>

                {/* CTA Buttons */}
                <div className={styles.ctas}>
                    <Link href="/content-library" className={`btn btn-secondary btn-sm ${styles.ctaBtn}`}>View Samples</Link>
                    <Link href="/login" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>Login</Link>
                </div>

                {/* Mobile Hamburger */}
                <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                    <span /><span /><span />
                </button>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className={styles.mobileMenu}>
                        <Link href="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Home</Link>
                        <button className={styles.mobileAccordion} onClick={() => toggleDropdown('m-solutions')}>
                            Solutions <span>{activeDropdown === 'm-solutions' ? '−' : '+'}</span>
                        </button>
                        {activeDropdown === 'm-solutions' && (
                            <div className={styles.mobileSubMenu}>
                                <Link href="/solutions" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600 }}>All Solutions</Link>
                                <Link href="/white-label-solutions" onClick={() => setMobileOpen(false)}>White Label Solutions</Link>
                                <Link href="/solutions/white-label-study-material" onClick={() => setMobileOpen(false)}>White Label Study Material</Link>
                                <Link href="/solutions/daily-learning-services" onClick={() => setMobileOpen(false)}>Daily Learning Services</Link>
                                <Link href="/solutions/software-platform-solutions" onClick={() => setMobileOpen(false)}>Software Platform Solutions</Link>
                                <Link href="/solutions/mock-tests-and-assessments" onClick={() => setMobileOpen(false)}>Mock Tests &amp; Assessments</Link>
                                <Link href="/solutions/custom-content-creation" onClick={() => setMobileOpen(false)}>Custom Content Creation</Link>
                            </div>
                        )}
                        <button className={styles.mobileAccordion} onClick={() => toggleDropdown('m-products')}>
                            Products <span>{activeDropdown === 'm-products' ? '−' : '+'}</span>
                        </button>
                        {activeDropdown === 'm-products' && (
                            <div className={styles.mobileSubMenu}>
                                <Link href="/products" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600 }}>All Products</Link>
                                <Link href="/products?tab=study-materials" onClick={() => setMobileOpen(false)}>Study Materials</Link>
                                <Link href="/products?tab=mock-tests" onClick={() => setMobileOpen(false)}>Mock Tests</Link>
                            </div>
                        )}
                        <button className={styles.mobileAccordion} onClick={() => toggleDropdown('m-content')}>
                            Content Coverage <span>{activeDropdown === 'm-content' ? '−' : '+'}</span>
                        </button>
                        {activeDropdown === 'm-content' && (
                            <div className={styles.mobileSubMenu}>
                                <Link href="/content-coverage" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600 }}>Overview</Link>
                                <Link href="/content-coverage/academics" onClick={() => setMobileOpen(false)}>Academics</Link>
                                <Link href="/content-coverage/competitive-exams" onClick={() => setMobileOpen(false)}>Competitive Exams</Link>
                                <Link href="/content-coverage/computer-science" onClick={() => setMobileOpen(false)}>Computer Science</Link>
                                <Link href="/digital-marketing" onClick={() => setMobileOpen(false)}>Digital Marketing</Link>
                                <Link href="/content-library" onClick={() => setMobileOpen(false)}>Sample Library</Link>
                            </div>
                        )}
                        <Link href="/blog" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Blog</Link>
                        <Link href="/about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>About</Link>
                        <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contact</Link>
                        <div className={styles.mobileCtas}>
                            <Link href="/content-library" className="btn btn-secondary" onClick={() => setMobileOpen(false)}>Samples</Link>
                            <Link href="/login" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Login</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
