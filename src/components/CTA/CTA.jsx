import React, { useState } from 'react';
import styles from './CTA.module.css';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            alert(`Thank you! We've sent a trial invite to ${email}`);
            setEmail('');
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section className={`section ${styles.cta}`}>
            <div className="container">
                <div className={styles.ctaContent}>
                    <div className={styles.badge}>Get Started</div>

                    <h2 className={styles.title}>
                        Ready to transform your product workflow?
                    </h2>

                    <p className={styles.description}>
                        Join 10,000+ product teams who have already streamlined their process with Kapable.
                        Start your free 14-day trial today.
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your work email"
                                className={styles.emailInput}
                                required
                            />
                            <button
                                type="submit"
                                className={`btn btn-primary btn-lg ${styles.submitButton}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Start free trial'}
                            </button>
                        </div>

                        <p className={styles.formNote}>
                            No credit card required • Full access to all features • Cancel anytime
                        </p>
                    </form>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>14-day free trial</span>
                        </div>
                        <div className={styles.feature}>
                            <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>All features included</span>
                        </div>
                        <div className={styles.feature}>
                            <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Priority support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;