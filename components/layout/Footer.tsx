"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#process" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

const contactDetails: ContactItem[] = [
  { label: "Location", value: "51 Longwood Avenue, Langlye, Slough. SL3 8GH", icon: MapPin },

  { label: "Email", value: "hello@berkshiredigitalstudio.co.uk", href: "mailto:hello@berkshiredigitalstudio.co.uk", icon: Mail },
  { label: "Phone", value: "+44 07733 282138", href: "tel:+4407733282138", icon: Phone },

];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: BriefcaseBusiness },
  { label: "Instagram", href: "https://www.instagram.com", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com", icon: MessageCircle },
  { label: "X (Twitter)", href: "https://x.com", icon: Send },
  { label: "GitHub", href: "https://github.com", icon: Terminal },
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
      className="border-t border-white/15 bg-[#111111]"
    >
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid gap-12 text-center lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:text-left">
            <motion.div variants={reveal} transition={{ duration: 0.5 }} className="max-w-sm lg:justify-self-start">
              <Link href="/" className="inline-block text-lg font-semibold tracking-[-0.04em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Berkshire Digital Studio
              </Link>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Crafting premium websites, mobile apps, Shopify stores and digital experiences that help ambitious businesses grow.
              </p>
            </motion.div>

            <motion.nav variants={reveal} transition={{ duration: 0.5 }} aria-label="Footer navigation" className="lg:justify-self-center">
              <ul className="flex max-w-md flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
                {navigation.map((item, index) => (
                  <motion.li key={item.label} variants={reveal} transition={{ duration: 0.35, delay: index * 0.04 }}>
                    <Link href={item.href} className="group relative text-sm text-white/60 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.address variants={reveal} transition={{ duration: 0.5 }} className="not-italic lg:justify-self-end">
              <ul className="space-y-3">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = <><Icon className="h-4 w-4 shrink-0" strokeWidth={1.7} /><span>{item.value}</span></>;
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                          {content}
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2.5 text-sm text-white/60">{content}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.address>
          </div>

          <motion.div variants={reveal} transition={{ duration: 0.5 }} className="mt-12 flex justify-center lg:justify-start">
            <div className="flex items-center gap-2" aria-label="Social media links">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors duration-300 hover:bg-white hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={reveal} transition={{ duration: 0.5 }} className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-center text-sm text-white/55 md:flex-row md:items-center md:justify-between md:text-left">
            <p>© 2026 Berkshire Digital Studio. All rights reserved.</p>
            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
                {["Privacy Policy", "Terms & Conditions", "Cookies"].map((item) => (
                  <li key={item}>
                    <Link href="/" className="transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{item}</Link>
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
