"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IndustryCardProps = {
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
};

export default function IndustryCard({
  title,
  description,
  cta,
  icon: Icon,
}: IndustryCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-[26px] border border-white/10 bg-[#111111] p-6 shadow-[0_14px_44px_rgba(255,255,255,0.03)] transition-[border-color,box-shadow] duration-300 hover:border-white/20 hover:shadow-[0_22px_50px_rgba(255,255,255,0.05)]"
    >
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.25 }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white"
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </motion.div>
      <h2 className="mt-7 text-xl font-semibold tracking-[-0.035em] text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
      <Link
        href="/contact"
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1"
      >
        {cta}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
