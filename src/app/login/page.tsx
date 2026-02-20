'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './login.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Supabase Auth would go here when configured
            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
            if (supabaseUrl && supabaseUrl !== 'your_supabase_project_url') {
                const { createClient } = await import('@supabase/supabase-js');
                const supabase = createClient(
                    supabaseUrl,
                    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
                );
                const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
                if (authError) {
                    setError(authError.message);
                } else {
                    window.location.href = '/';
                }
            } else {
                setError('Authentication is not configured yet. Please update your Supabase credentials.');
            }
        } catch {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <Link href="/" className={styles.logo}>
                        <div style={{ position: 'relative', width: '200px', height: '60px' }}>
                            <Image
                                src="/assets/continue-labs-logo.png"
                                alt="Contenu Labs Logo"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                            />
                        </div>
                    </Link>
                    <h1 className="heading-md" style={{ marginTop: '20px' }}>Partner Login</h1>
                    <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                        Access your dashboard to manage content and orders.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <p style={{ color: 'var(--accent-red)', fontSize: '0.8125rem', textAlign: 'center' }}>
                            {error}
                        </p>
                    )}

                    <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%' }}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <p className="text-sm" style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '24px' }}>
                    Don&apos;t have a partner account?{' '}
                    <Link href="/contact" style={{ color: 'var(--accent-blue-light)', fontWeight: 500 }}>Contact us</Link>
                </p>
            </div>
        </div>
    );
}
