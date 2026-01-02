import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-black text-yellow-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CompleteAutomate
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-yellow-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
