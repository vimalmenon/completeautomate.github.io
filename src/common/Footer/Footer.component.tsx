import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/admin", label: "Admin" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-yellow-400/20 bg-black text-yellow-400">
      <div className="container mx-auto flex flex-col gap-8 p-8 md:flex-row md:justify-between">
        <div>
          <p className="text-xl font-bold">CompleteAutomate</p>
          <p className="mt-1 text-sm text-yellow-400/70">
            Assisting companies with automation.
          </p>
        </div>

        <nav>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-yellow-400/50">
            Links
          </p>
          <ul className="flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-yellow-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-yellow-400/50 md:text-right">
          <p>&copy; {new Date().getFullYear()} CompleteAutomate</p>
        </div>
      </div>
    </footer>
  );
};