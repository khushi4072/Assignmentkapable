import React, { useState, useEffect } from 'react';
import styles from './Testimonial.module.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: 'Alex Johnson',
            role: 'Product Director, TechCorp',
            content: 'Kapable transformed how our product team operates. We\'ve reduced our time-to-market by 40% while improving quality.',
            rating: 5,
            avatar: 'AJ'
        },
        {
            name: 'Sarah Chen',
            role: 'Head of Product, StartupXYZ',
            content: 'The collaboration features are game-changing. Our designers and developers finally speak the same language.',
            rating: 5,
            avatar: 'SC'
        },
        {
            name: 'Marcus Rodriguez',
            role: 'CTO, InnovateLabs',
            content: 'As a technical leader, Kapable gives me the visibility I need without micromanaging my team. Perfect balance.',
            rating: 5,
            avatar: 'MR'
        },
        {
            name: 'Priya Sharma',
            role: 'Founder, GrowthStudio',
            content: 'Started using Kapable as a solo founder. Now with a team of 10, it scales perfectly with our needs.',
            rating: 5,
            avatar: 'PS'
        },
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`section bg-gray-50 ${styles.testimonials}`}>
            <div className="container">
                <div className="text-center mb-12">
                    <div className={styles.sectionBadge}>Testimonials</div>
                    <h2 className={styles.sectionTitle}>Loved by product teams</h2>
                    <p className={styles.sectionDescription}>
                        Join thousands of product teams who have transformed their workflow with Kapable.
                    </p>
                </div>

                <div className={styles.testimonialContainer}>
                    <button
                        className={styles.navButton}
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className={styles.testimonialSlider}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
                            >
                                <div className={styles.quoteIcon}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M10 30V20C10 13.3726 15.3726 8 22 8H24M30 30V20C30 13.3726 24.6274 8 18 8H16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>

                                <p className={styles.testimonialContent}>"{testimonial.content}"</p>

                                <div className={styles.rating}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#F59E0B">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        {testimonial.avatar}
                                    </div>
                                    <div className={styles.authorInfo}>
                                        <h4 className={styles.authorName}>{testimonial.name}</h4>
                                        <p className={styles.authorRole}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={styles.navButton}
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Stats */}
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>10,000+</div>
                        <div className={styles.statLabel}>Teams worldwide</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>98%</div>
                        <div className={styles.statLabel}>Customer satisfaction</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>4.9/5</div>
                        <div className={styles.statLabel}>Average rating</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>24/7</div>
                        <div className={styles.statLabel}>Support available</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;