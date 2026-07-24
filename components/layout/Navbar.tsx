import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Printing", href: "/printing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#E5E5E5]/80 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/#top"
          className="shrink-0"
          aria-label="Berkshire Digital Studio home"
        >
          <Image
            src="/logo.png"
            alt="Berkshire Digital Studio"
            width={1040}
            height={334}
            preload
            className="h-[80px] w-auto md:h-[70px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#666666] transition-colors hover:text-[#111111]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
