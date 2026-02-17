'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSlideshow.module.css';

const slides = [
    { src: '/assets/home-1.png', alt: 'Banking Exam Prep - Complete Study Material' },
    { src: '/assets/home-2.png', alt: 'SSC Study Material - Comprehensive Coverage' },
    { src: '/assets/home-3.png', alt: 'CBSE Content - All Subjects' },
    { src: '/assets/home-4.png', alt: 'Mock Tests & Assessments' },
];

export default function HeroSlideshow() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning || index === current) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [current, isTransitioning]);

    const nextSlide = useCallback(() => {
        goToSlide((current + 1) % slides.length);
    }, [current, goToSlide]);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className={styles.slideshow}>
            <div className={styles.slidesContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === current ? styles.slideActive : ''}`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 500px"
                            style={{ objectFit: 'contain' }}
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
