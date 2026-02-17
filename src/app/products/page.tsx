'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const studyMaterials = [
    { icon: '🏦', title: 'Banking Study Material', sub: 'IBPS, SBI, RBI', desc: 'Complete study materials for all banking exams with PYQs and practice papers', badge: 'Bestseller', badgeClass: 'badge-orange', price: '₹2,999', slug: 'ibps-po-study-material' },
    { icon: '🏛️', title: 'SSC Study Material', sub: 'CGL, CHSL, MTS', desc: 'Comprehensive SSC exam preparation materials with detailed solutions', badge: 'Popular', badgeClass: 'badge-blue', price: '₹2,499', slug: 'ssc-cgl-study-material' },
    { icon: '📚', title: 'CBSE Class 6-12', sub: 'All Subjects', desc: 'NCERT-aligned study materials for Classes 6-12 covering all subjects', badge: 'New', badgeClass: 'badge-green', price: '₹1,999', slug: 'cbse-class-6-12-study-material' },
    { icon: '⚙️', title: 'IIT-JEE Study Material', sub: 'Main & Advanced', desc: 'Complete JEE preparation with Physics, Chemistry, and Mathematics', badge: 'Premium', badgeClass: 'badge-purple', price: '₹3,999', slug: 'jee-main-study-material' },
];

const mockTests = [
    { icon: '🏦', title: 'Banking Mock Tests', sub: 'IBPS, SBI, RBI', desc: 'Full-length mock tests for all banking exams with detailed solutions', badge: 'Bestseller', badgeClass: 'badge-orange', price: '₹1,499', slug: 'banking-mock-tests' },
    { icon: '🏛️', title: 'SSC Mock Tests', sub: 'CGL, CHSL, MTS', desc: 'Comprehensive mock test series for SSC exams', badge: 'Popular', badgeClass: 'badge-blue', price: '₹1,299', slug: 'ssc-mock-tests' },
];

function ProductsContent() {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'study-materials';

    const products = tab === 'mock-tests' ? mockTests : studyMaterials;

    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Products</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        White Label{' '}
                        <span className="text-gradient">Study Material & Mock Tests</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Explore our comprehensive library of white-label educational content. Buy high-quality study materials and mock tests.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Tab Filters */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
                        <Link
                            href="/products?tab=study-materials"
                            className={`btn ${tab === 'study-materials' ? 'btn-primary' : 'btn-secondary'}`}
                        >
                            📚 Study Materials
                        </Link>
                        <Link
                            href="/products?tab=mock-tests"
                            className={`btn ${tab === 'mock-tests' ? 'btn-primary' : 'btn-secondary'}`}
                        >
                            ✅ Mock Tests
                        </Link>
                    </div>

                    {/* Products Grid */}
                    <div className="grid-3">
                        {products.map((product) => (
                            <div key={product.slug} className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <span className={`badge ${product.badgeClass}`}>{product.badge}</span>
                                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--accent-blue-light)' }}>{product.price}</span>
                                </div>
                                <div style={{ fontSize: '2.5rem' }}>{product.icon}</div>
                                <h3 className="heading-sm">{product.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--accent-blue-light)' }}>{product.sub}</p>
                                <p className="text-sm" style={{ color: 'var(--text-muted)', flex: 1 }}>{product.desc}</p>
                                <Link href="/contact" className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }}>
                                    Get Quote
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="section" style={{ textAlign: 'center' }}>Loading products...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
