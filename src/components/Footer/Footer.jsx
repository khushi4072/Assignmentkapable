import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const footerLinks = {
        Product: ['Features', 'Roadmap', 'Pricing', 'Changelog', 'API Docs'],
        Solutions: ['Startups', 'Enterprise', 'Agencies', 'Education', 'Non-profits'],
        Resources: ['Blog', 'Help Center', 'Community', 'Tutorials', 'Webinars'],
        Company: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
        Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'],
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Subscribed with: ${email}`);
            setEmail('');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* Main Footer Content */}
                <div className={styles.mainFooter}>
                    {/* Brand & Newsletter */}
                    <div className={styles.brandSection}>
                        <div className={styles.logo}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="#2563EB" />
                                <path d="M12 20L16 12L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 18H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span className={styles.logoText}>Kapable</span>
                        </div>

                        <p className={styles.tagline}>
                            Empowering product teams to build better, faster.
                        </p>

                        <div className={styles.newsletter}>
                            <h3 className={styles.newsletterTitle}>Stay in the loop</h3>
                            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className={styles.newsletterInput}
                                    required
                                />
                                <button type="submit" className={styles.newsletterButton}>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className={styles.linksGrid}>
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className={styles.linkColumn}>
                                <h3 className={styles.linkTitle}>{category}</h3>
                                <ul className={styles.linkList}>
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className={styles.link}>{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Bottom Footer */}
                <div className={styles.bottomFooter}>
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} Kapable. All rights reserved.
                    </div>

                    <div className={styles.socialLinks}>
                        {['Twitter', 'LinkedIn', 'GitHub', 'Discord', 'YouTube'].map((platform) => (
                            <a key={platform} href="#" className={styles.socialLink}>
                                {platform}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;