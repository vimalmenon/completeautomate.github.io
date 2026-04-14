"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderNavigation } from "../../data";


export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-surface-dark text-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-bold">
            CompleteAutomate
          </span>
          <span className="hidden text-xs tracking-wide text-primary/60 md:inline">
            AI-Powered Automation
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {HeaderNavigation.map((navigation) => (
              <li key={navigation.url}>
                <Link
                  href={navigation.url}
                  className={`relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-200 hover:text-accent hover:after:w-full ${isActive(navigation.url)
                    ? "font-semibold text-accent after:w-full"
                    : "after:w-0"
                    }`}
                >
                  {navigation.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav
        className={`overflow-hidden border-t border-primary/20 transition-all duration-300 md:hidden ${menuOpen ? "max-h-64" : "max-h-0"
          }`}
      >
        <ul className="container mx-auto flex flex-col gap-1 p-4">
          {HeaderNavigation.map((navigation) => (
            <li key={navigation.url}>
              <Link
                href={navigation.url}
                className={`block rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-primary/10 ${isActive(navigation.url)
                  ? "font-semibold text-accent"
                  : ""
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {navigation.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};