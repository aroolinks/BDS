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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 md:px-7 md:py-3.5";
  const variants = {
    primary:
      "bg-[#111111] text-white hover:-translate-y-0.5 hover:bg-[#222222]",
    secondary:
      "border border-[#E5E5E5] bg-white text-[#111111] hover:-translate-y-0.5 hover:border-[#111111]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
