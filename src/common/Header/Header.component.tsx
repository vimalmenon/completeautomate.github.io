'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}
      role="banner"
    >
      <nav
        className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo Section */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-1 text-2xl font-bold focus:outline-none"
            aria-label="CompleteAutomate Home"
            onClick={handleNavClick}
          >
            <span className="text-gray-900">Complete</span>
            <span className="text-blue-600">Automate</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8" role="menubar">
            {navItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          type="button"
          tabIndex={0}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <nav
        id="mobile-menu"
        className={`md:hidden fixed left-0 right-0 top-20 bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <ul className="flex flex-col gap-4 p-6" role="menubar">
          {navItems.map((item) => (
            <li key={item.label} role="none">
              <Link
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium block"
                role="menuitem"
                onClick={handleNavClick}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 top-20 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
          tabIndex={-1}
        ></div>
      )}
    </header>
  );
};
