'use client';

import Link from 'next/link';
import { useSamples, trackDownload } from '@/hooks/useSamples';

export default function ContentLibraryPage() {
    const { samples, loading, error } = useSamples();

    const handleDownload = async (sampleId: string, fileUrl?: string) => {
        // Track the download
        await trackDownload(sampleId);
        
        // If file URL exists, trigger download
        if (fileUrl) {
            window.open(fileUrl, '_blank');
        } else {
            // Fallback - show contact form
            window.location.href = '/contact';
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'banking': return '🏦';
            case 'ssc': return '🏛️';
            case 'cbse': return '📚';
            case 'jee':
            case 'neet': return '⚙️';
            default: return '📄';
        }
    };
    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-green">Free Samples</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Content{' '}
                        <span className="text-gradient">Library</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Download free samples to see why 500+ institutes trust our white-label content. Preview our quality before you partner.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '48px' }}>
                            <p>Loading content samples...</p>
                        </div>
                    ) : error ? (
                        <div style={{ textAlign: 'center', padding: '48px' }}>
                            <p style={{ color: 'var(--accent-red)' }}>Error: {error}</p>
                        </div>
                    ) : samples.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '48px' }}>
                            <p>No content samples available at the moment.</p>
                        </div>
                    ) : (
                        <div className="grid-2" style={{ gap: '32px' }}>
                            {samples.map((sample) => (
                                <div key={sample.id} className="card" style={{ padding: '32px' }}>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ fontSize: '2.5rem' }}>{getCategoryIcon(sample.category)}</div>
                                        <div style={{ flex: 1 }}>
                                            <span className="badge badge-red">FREE PDF</span>
                                            <h3 className="heading-sm" style={{ marginTop: '12px' }}>{sample.title}</h3>
                                            <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                                                {sample.description}
                                            </p>
                                            <div style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'space-between',
                                                marginTop: '16px',
                                                padding: '12px 16px',
                                                background: 'var(--bg-primary)',
                                                borderRadius: 'var(--radius-sm)',
                                                border: '1px solid var(--border-color)',
                                            }}>
                                                <div>
                                                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                                        Downloads: {sample.download_count.toLocaleString()}
                                                    </span>
                                                </div>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => handleDownload(sample.id, sample.file_url)}
                                                    style={{ flexShrink: 0 }}
                                                >
                                                    Download PDF
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Ready to Access the{' '}
                        <span className="text-gradient">Full Library?</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Partner with us to get complete white-label access to our entire content library.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Become a Partner
                    </Link>
                </div>
            </section>
        </>
    );
}
