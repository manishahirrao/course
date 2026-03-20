'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useProducts } from '@/hooks/useProducts';

function ProductsContent() {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'study-materials';
    
    const { products, loading, error } = useProducts({ 
        category: tab as 'study-materials' | 'mock-tests' 
    });

    const getBadgeClass = (badge?: string) => {
        switch (badge) {
            case 'Bestseller': return 'badge-orange';
            case 'Popular': return 'badge-blue';
            case 'New': return 'badge-green';
            case 'Premium': return 'badge-purple';
            default: return 'badge-gray';
        }
    };

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
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '48px' }}>
                            <p>Loading products...</p>
                        </div>
                    ) : error ? (
                        <div style={{ textAlign: 'center', padding: '48px' }}>
                            <p style={{ color: 'var(--accent-red)' }}>Error: {error}</p>
                        </div>
                    ) : products.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '48px' }}>
                            <p>No products found in this category.</p>
                        </div>
                    ) : (
                        <div className="grid-3">
                            {products.map((product) => (
                                <div key={product.slug} className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        {product.badge && (
                                            <span className={`badge ${getBadgeClass(product.badge)}`}>
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ fontSize: '2.5rem' }}>{product.icon}</div>
                                    <h3 className="heading-sm">{product.title}</h3>
                                    <p className="text-sm" style={{ color: 'var(--accent-blue-light)' }}>{product.exam_type}</p>
                                    <p className="text-sm" style={{ color: 'var(--text-muted)', flex: 1 }}>{product.description}</p>
                                    {product.price && (
                                        <p className="text-lg" style={{ fontWeight: 600, color: 'var(--accent-green)' }}>
                                            ₹{product.price.toLocaleString()}
                                        </p>
                                    )}
                                    <Link href="/contact" className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }}>
                                        Get Quote
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
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
