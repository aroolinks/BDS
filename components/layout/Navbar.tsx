import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#111111]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="https://www.berkshiredigitalstudio.co.uk/"
          className="shrink-0"
          aria-label="Berkshire Digital Studio home"
        >
          <Image
            src="/logo-white.png"
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
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/#contact">Get Started</Button>
      </div>
    </header>
  );
}
