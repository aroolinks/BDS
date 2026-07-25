import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] active:translate-y-0 md:px-7 md:py-3.5";
  const variants = {
    primary:
      "bg-white text-[#111111] shadow-[0_8px_24px_rgba(255,255,255,0.12)] hover:bg-[#f3f3f3] hover:-translate-y-0.5",
    secondary:
      "border border-white/20 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
