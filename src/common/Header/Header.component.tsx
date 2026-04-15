'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderNavigation } from '../../data';
import { ThemeToggle } from '../ThemeToggle';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 text-foreground backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
            CompleteAutomate
          </span>
          <span className="hidden text-[0.7rem] tracking-[0.32em] text-muted uppercase md:inline">
            AI-Powered Automation
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/70 text-foreground transition hover:border-primary/50 hover:text-primary md:hidden"
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

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {HeaderNavigation.map((navigation) => {
              if (!navigation.hidden) {
                return (
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
                );
              }
              return null;
            })}
          </ul>
        </nav>
      </div>

      <nav
        className={`overflow-hidden border-t border-border/60 bg-background/95 transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4">
          {HeaderNavigation.map((navigation) => {
            if (!navigation.hidden) {
              return (
                <li key={navigation.url}>
                  <Link
                    href={navigation.url}
                    className={`block rounded-2xl border px-4 py-3 text-sm transition-colors duration-200 ${
                      isActive(navigation.url)
                        ? 'border-primary/40 bg-primary/10 font-semibold text-primary'
                        : 'border-border/60 bg-surface/60 hover:border-primary/30 hover:text-primary'
                    }`}
                    onClick={(): void => setMenuOpen(false)}
                  >
                    {navigation.label}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
    </header>
  );
};
