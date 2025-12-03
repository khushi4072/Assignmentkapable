import React from 'react';
import styles from './Features.module.css';

const Features = () => {
    const features = [
        {
            icon: '🚀',
            title: 'Rapid Prototyping',
            description: 'Create interactive prototypes in minutes without writing a single line of code.',
            color: '#2563EB'
        },
        {
            icon: '👥',
            title: 'Team Collaboration',
            description: 'Real-time collaboration with your entire team, from designers to developers.',
            color: '#8B5CF6'
        },
        {
            icon: '📊',
            title: 'Advanced Analytics',
            description: 'Get actionable insights with powerful analytics and user behavior tracking.',
            color: '#10B981'
        },
        {
            icon: '🔗',
            title: 'Seamless Integration',
            description: 'Connect with your favorite tools like Figma, Slack, and Jira effortlessly.',
            color: '#F59E0B'
        },
        {
            icon: '🛡️',
            title: 'Enterprise Security',
            description: 'Bank-grade security with SOC2 compliance and granular access controls.',
            color: '#EF4444'
        },
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Optimized performance that ensures your prototypes load in milliseconds.',
            color: '#06B6D4'
        },
    ];

    return (
        <section className={`section ${styles.features}`}>
            <div className="container">
                <div className="text-center mb-12">
                    <div className={styles.sectionBadge}>Features</div>
                    <h2 className={styles.sectionTitle}>Everything you need to ship faster</h2>
                    <p className={styles.sectionDescription}>
                        A complete toolkit for modern product teams to design, build, and launch exceptional products.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div
                                className={styles.featureIcon}
                                style={{ backgroundColor: `${feature.color}15` }}
                            >
                                <span className={styles.icon} style={{ color: feature.color }}>
                                    {feature.icon}
                                </span>
                            </div>

                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                                <a href="#" className={styles.featureLink}>
                                    Learn more
                                    <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;