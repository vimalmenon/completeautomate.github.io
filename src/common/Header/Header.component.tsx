'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when link is clicked
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Handle keyboard escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`${styles.header} ${isSticky ? styles.sticky : ''}`}
      role="banner"
    >
      <nav
        className={styles.navbar}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="CompleteAutomate Home"
          >
            <span className={styles.logoText}>Complete</span>
            <span className={styles.logoHighlight}>Automate</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navList} role="menubar">
            {navItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  className={styles.navLink}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles.mobileNavList} role="menubar">
          {navItems.map((item) => (
            <li key={item.label} role="none">
              <Link
                href={item.href}
                className={styles.mobileNavLink}
                role="menuitem"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li role="none" className={styles.mobileCTAContainer}>
            <Link
              href="/consultation"
              className={styles.mobileCTAButton}
              role="button"
              onClick={handleNavClick}
            >
              Get Free Consultation
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={styles.menuOverlay}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};
