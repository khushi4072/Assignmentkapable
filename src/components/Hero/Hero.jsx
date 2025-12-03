import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    {/* Badge */}
                    <div className={styles.badge}>
                        <span className={styles.badgeText}>New</span>
                        <span className={styles.badgeLabel}>Introducing AI Assistant</span>
                        <a href="#learn-more" className={styles.badgeLink}>
                            Learn more →
                        </a>
                    </div>

                    {/* Main Heading */}
                    <h1 className={styles.title}>
                        Build better products
                        <span className={styles.highlight}> faster</span>
                    </h1>

                    {/* Description */}
                    <p className={styles.description}>
                        Kapable helps product teams streamline their workflow, collaborate effectively,
                        and ship exceptional products that users love.
                    </p>

                    {/* CTA Buttons */}
                    <div className={styles.ctaGroup}>
                        <a href="#signup" className="btn btn-primary btn-lg">
                            Start free trial
                        </a>
                        <a href="#demo" className={`btn btn-secondary btn-lg ${styles.demoBtn}`}>
                            <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Watch demo
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className={styles.trust}>
                        <p className={styles.trustText}>Trusted by product teams at</p>
                        <div className={styles.companyLogos}>
                            {['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma'].map((company) => (
                                <div key={company} className={styles.companyLogo}>
                                    {company}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hero Image/Illustration */}
                <div className={styles.heroImage}>
                    <div className={styles.dashboardPreview}>
                        {/* Dashboard UI Elements */}
                        <div className={styles.dashboardHeader}>
                            <div className={styles.dashboardTabs}>
                                <div className={`${styles.tab} ${styles.activeTab}`}>Overview</div>
                                <div className={styles.tab}>Analytics</div>
                                <div className={styles.tab}>Settings</div>
                            </div>
                        </div>

                        <div className={styles.dashboardContent}>
                            {/* Metrics */}
                            <div className={styles.metricsGrid}>
                                <div className={styles.metricCard}>
                                    <div className={styles.metricLabel}>Active Users</div>
                                    <div className={styles.metricValue}>12,458</div>
                                    <div className={styles.metricTrend}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M4 12L12 4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M12 10V4H6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className={styles.trendUp}>+24%</span>
                                    </div>
                                </div>

                                <div className={styles.metricCard}>
                                    <div className={styles.metricLabel}>Sessions</div>
                                    <div className={styles.metricValue}>8,742</div>
                                    <div className={styles.metricTrend}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12 4L4 12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M4 6V12H10" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className={styles.trendDown}>-8%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chart */}
                            <div className={styles.chart}>
                                <div className={styles.chartBars}>
                                    {[40, 65, 80, 60, 45, 75, 90].map((height, i) => (
                                        <div
                                            key={i}
                                            className={styles.chartBar}
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;