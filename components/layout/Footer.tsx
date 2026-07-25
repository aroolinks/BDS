"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  // { label: "Portfolio", href: "/portfolio" }, // hidden for now
  { label: "Printing", href: "/printing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Design & Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "Shopify Development", href: "/services" },
  { label: "SEO & Growth Marketing", href: "/services" },
  { label: "Printing & Creative", href: "/printing" },
];

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  target?: string;
  icon: LucideIcon;
};

const contactDetails: ContactItem[] = [
  {
    label: "Location",
    value: "51 Longwood Avenue, Langley, Slough. SL3 8GH",
    href: "https://maps.google.com/?q=51%20Longwood%20Avenue%20Langley%20Slough%20SL3%208GH",
    target: "_blank",
    icon: MapPin,
  },
  { label: "Email", value: "hello@berkshiredigitalstudio.co.uk", href: "mailto:hello@berkshiredigitalstudio.co.uk", icon: Mail },
  { label: "Phone", value: "+44 07733 282138", href: "tel:+4407733282138", icon: Phone },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: BriefcaseBusiness },
  { label: "Instagram", href: "https://www.instagram.com", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com", icon: MessageCircle },
  { label: "X (Twitter)", href: "https://x.com", icon: Send },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
      className="relative isolate overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_15%_0%,rgba(255,92,0,0.07),transparent_45%),#111111]"
    >
      <div className="glow-float-slow pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#ff5c00]/10 blur-3xl" />
      <div className="glow-float pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#ff5c00]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rotate-12 rounded-[48px] border border-white/[0.04]" />

      <Container>
        <div className="py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.8fr_1fr_1fr]">
            <motion.div variants={reveal} transition={{ duration: 0.5 }} className="max-w-sm">
              <Link href="/" className="inline-block rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label="Berkshire Digital Studio home">
                <Image src="/logo.svg" alt="Berkshire Digital Studio" width={603} height={260} className="h-16 w-auto" />
              </Link>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Specialised in web design, mobile apps, Shopify stores and digital experiences that help ambitious businesses grow.
              </p>
            </motion.div>

            <motion.nav variants={reveal} transition={{ duration: 0.5 }} aria-label="Company navigation">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-white/55 transition-colors duration-300 hover:text-[#ff5c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.nav variants={reveal} transition={{ duration: 0.5 }} aria-label="Services navigation">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Services</h3>
              <ul className="mt-5 space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-white/55 transition-colors duration-300 hover:text-[#ff5c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div variants={reveal} transition={{ duration: 0.5 }}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">How to find us</h3>
              <address className="mt-5 space-y-4 not-italic">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.target}
                      rel={item.target ? "noreferrer" : undefined}
                      className="group flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors duration-300 group-hover:bg-[#ff5c00]/15 group-hover:text-[#ff5c00]">
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </span>
                      <span className="pt-1 text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white">
                        {item.value}
                      </span>
                    </a>
                  );
                })}
              </address>

              <div className="mt-6 flex items-center gap-2" aria-label="Social media links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors duration-300 hover:bg-[#ff5c00] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div variants={reveal} transition={{ duration: 0.5 }} className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-sm text-white/45 md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <p>© 2026 Berkshire Digital Studio. All rights reserved.</p>
              <p className="mt-1 text-xs text-white/35">
                Web Design / Mobile Apps / Shopify Development / SEO & Growth / Printing / Graphic Design / Branding / Digital Marketing / AI & Automation
              </p>
            </div>
            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
                {["Privacy Policy", "Terms & Conditions", "Cookies"].map((item) => (
                  <li key={item}>
                    <Link href="/" className="transition-colors duration-300 hover:text-[#ff5c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{item}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </Container>
    </motion.footer>
  );
}
