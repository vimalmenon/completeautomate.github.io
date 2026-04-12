import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/admin", label: "Admin" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary/20 bg-surface-dark text-primary">
      <div className="container mx-auto flex flex-col gap-8 p-8 md:flex-row md:justify-between">
        <div>
          <p className="text-xl font-bold">CompleteAutomate</p>
          <p className="mt-1 text-sm text-primary/70">
            Assisting companies with automation.
          </p>
        </div>

        <nav>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/50">
            Links
          </p>
          <ul className="flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-primary/50 md:text-right">
          <p>&copy; {new Date().getFullYear()} CompleteAutomate</p>
        </div>
      </div>
    </footer>
  );
};