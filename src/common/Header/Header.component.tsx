'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderNavigation } from '../../data';
import { Logo } from '../Logo';
import { ThemeToggle } from '../ThemeToggle';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setExpandedNav(null);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string): boolean =>
    mounted && (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const toggleExpand = (label: string): void => {
    setExpandedNav((prev) => (prev === label ? null : label));
  };

  const visibleNav = HeaderNavigation.filter((n) => !n.hidden);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 text-foreground backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2 leading-none sm:gap-3">
          <Logo size={36} />
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-[-0.04em] text-foreground sm:text-2xl">
              CompleteAutomate
            </span>
            <span className="hidden text-[0.7rem] tracking-[0.32em] text-muted uppercase md:inline">
              AI-Powered Automation
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <div className="sm:hidden">
            <ThemeToggle />
          </div>

          {/* Hamburger */}
          <button
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface/70 text-foreground transition hover:border-primary/50 hover:text-primary md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {visibleNav.map((navigation) => (
              <li key={navigation.url}>
                <Link
                  href={navigation.url}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-1 after:left-3 after:h-px after:bg-primary after:transition-all after:duration-200 hover:text-primary hover:after:w-[calc(100%-1.5rem)] ${
                    isActive(navigation.url)
                      ? 'bg-surface/70 text-primary after:w-[calc(100%-1.5rem)]'
                      : 'after:w-0'
                  }`}
                >
                  {navigation.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile: slide-in overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile: side drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-border/60 bg-background shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <span className="text-sm font-semibold tracking-[0.08em] text-foreground uppercase">
            Menu
          </span>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground transition hover:border-primary/50 hover:text-primary"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {visibleNav.map((navigation) => {
              const hasChildren = navigation.children && navigation.children.length > 0;
              const active = isActive(navigation.url);
              const isExpanded = expandedNav === navigation.label;

              if (hasChildren) {
                return (
                  <li key={navigation.url}>
                    <button
                      onClick={() => toggleExpand(navigation.label)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        active
                          ? 'bg-primary/10 font-semibold text-primary'
                          : 'text-foreground hover:bg-surface/70 hover:text-primary'
                      }`}
                    >
                      <span>{navigation.label}</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isExpanded && (
                      <ul className="ml-3 mt-1 space-y-0.5 border-l border-border/50 pl-3">
                        {navigation.children!.map((child) => {
                          const childActive =
                            mounted && pathname.startsWith(child.url.split('#')[0]);
                          return (
                            <li key={child.url}>
                              <Link
                                href={child.url}
                                onClick={() => setMenuOpen(false)}
                                className={`block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 ${
                                  childActive
                                    ? 'bg-primary/8 font-medium text-primary'
                                    : 'text-muted hover:bg-surface/70 hover:text-foreground'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={navigation.url}>
                  <Link
                    href={navigation.url}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      active
                        ? 'bg-primary/10 font-semibold text-primary'
                        : 'text-foreground hover:bg-surface/70 hover:text-primary'
                    }`}
                  >
                    {navigation.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-border/60 px-5 py-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} CompleteAutomate</p>
        </div>
      </div>
    </header>
  );
};
