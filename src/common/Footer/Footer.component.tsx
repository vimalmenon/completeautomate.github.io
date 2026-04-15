import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/admin', label: 'Admin' },
];

const socialLinks = [
  {
    href: 'https://youtube.com/@real_vimal_menon',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C22 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768C18.254 19 12 19 12 19s-6.254 0-7.814-.418a2.504 2.504 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.504 2.504 0 011.768-1.768C5.746 5 12 5 12 5s6.254 0 7.814.418zM10 15l5.197-3L10 9v6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: 'YouTube',
  },
  {
    href: 'https://reddit.com/r/completeautomate',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4.944 7.306a1.37 1.37 0 01.64 2.577 2.574 2.574 0 01-.378 1.343c-.597.983-1.74 1.593-3.206 1.816v.876a.75.75 0 01-1.5 0v-.876c-1.466-.223-2.609-.833-3.206-1.816a2.574 2.574 0 01-.378-1.343 1.37 1.37 0 01.64-2.577 1.37 1.37 0 011.17 2.065 2.03 2.03 0 00-.253.674c.193.508.874.966 2.027 1.17v-2.418a1.37 1.37 0 111.5 0v2.418c1.153-.204 1.834-.662 2.027-1.17a2.03 2.03 0 00-.253-.674 1.37 1.37 0 011.17-2.065zM8.37 10.63a.87.87 0 100 1.74.87.87 0 000-1.74zm7.26 0a.87.87 0 100 1.74.87.87 0 000-1.74z" />
      </svg>
    ),
    label: 'Reddit',
  },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-border/60 bg-surface/70 text-foreground backdrop-blur-xl">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xl font-semibold tracking-[-0.04em]">CompleteAutomate</p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
          Intelligent automation systems for teams that want cleaner operations and faster output.
        </p>
        <div className="mt-4 flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-full border border-border/60 bg-background/60 p-2 text-muted transition hover:border-primary/40 hover:text-primary"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <nav>
        <p className="mb-3 text-xs font-semibold tracking-[0.32em] text-muted uppercase">Links</p>
        <ul className="flex flex-col gap-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-sm text-muted md:text-right">
        <p>&copy; {new Date().getFullYear()} CompleteAutomate</p>
      </div>
    </div>
  </footer>
);
