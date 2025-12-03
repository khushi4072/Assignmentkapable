import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Products', href: '#products' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Resources', href: '#resources' },
        { label: 'Company', href: '#company' },
    ];

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="8" fill="#2563EB" />
                            <path d="M12 20L16 12L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 18H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className={styles.logoText}>Kapable</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={styles.navItems}>
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className={styles.navLink}>
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className={styles.ctaButtons}>
                        <a href="#login" className={`btn btn-secondary ${styles.loginBtn}`}>
                            Log in
                        </a>
                        <a href="#signup" className="btn btn-primary">
                            Get started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburger}></span>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <div className={styles.mobileMenuContent}>
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className={styles.mobileCta}>
                                <a href="#login" className={`btn btn-secondary ${styles.mobileLoginBtn}`}>
                                    Log in
                                </a>
                                <a href="#signup" className="btn btn-primary">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;