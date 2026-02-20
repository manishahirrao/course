'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSlideshow.module.css';

const slides = [
    { src: '/assets/home-1.png', alt: 'Banking Exam Prep - Complete Study Material', label: 'Banking Exams' },
    { src: '/assets/home-2.png', alt: 'SSC Study Material - Comprehensive Coverage', label: 'SSC Materials' },
    { src: '/assets/home-3.png', alt: 'CBSE Content - All Subjects', label: 'CBSE Content' },
    { src: '/assets/home-4.png', alt: 'Mock Tests & Assessments', label: 'Mock Tests' },
];

const SLIDE_DURATION = 5000; // ms

export default function HeroSlideshow() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [progress, setProgress] = useState(0);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning || index === current) return;
        setIsTransitioning(true);
        setProgress(0);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 700);
    }, [current, isTransitioning]);

    const nextSlide = useCallback(() => {
        setIsTransitioning(true);
        setProgress(0);
        setCurrent((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 700);
    }, []);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Progress bar animation
    useEffect(() => {
        const step = 16; // ~60fps
        const increment = (step / SLIDE_DURATION) * 100;
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + increment;
            });
        }, step);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className={styles.slideshow}>
            {/* Ambient glow behind */}
            <div className={styles.ambientGlow} />

            {/* Main frame */}
            <div className={styles.frame}>
                {/* Top bar with dots */}
                <div className={styles.topBar}>
                    <div className={styles.windowDots}>
                        <span className={styles.windowDotRed} />
                        <span className={styles.windowDotYellow} />
                        <span className={styles.windowDotGreen} />
                    </div>
                    <span className={styles.topBarLabel}>{slides[current].label}</span>
                    <div className={styles.topBarBadge}>LIVE</div>
                </div>

                {/* Slides */}
                <div className={styles.slidesContainer}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`${styles.slide} ${index === current ? styles.slideActive : ''} ${index === (current - 1 + slides.length) % slides.length ? styles.slideExit : ''
                                }`}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 520px"
                                style={{ objectFit: 'contain' }}
                                priority={index === 0}
                            />
                        </div>
                    ))}

                    {/* Gradient overlay at bottom */}
                    <div className={styles.slideOverlay} />
                </div>

                {/* Progress bar */}
                <div className={styles.progressTrack}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Navigation dots */}
            <div className={styles.dots}>
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}: ${slide.label}`}
                    >
                        <span className={styles.dotLabel}>{slide.label}</span>
                    </button>
                ))}
            </div>

            {/* Floating stats badge */}
            <div className={styles.floatingBadge}>
                <span className={styles.floatingBadgeNumber}>500+</span>
                <span className={styles.floatingBadgeText}>Trusted Partners</span>
            </div>
        </div>
    );
}
