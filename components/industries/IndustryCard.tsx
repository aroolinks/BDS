"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

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
      className="group h-full"
    >
      <TiltCard className="flex h-full flex-col rounded-[26px] border border-white/10 bg-[#111111] p-6 shadow-[0_14px_44px_rgba(0,0,0,0.25)] transition-[border-color,box-shadow] duration-300 hover:border-[#ff5c00]/30 hover:shadow-[0_20px_50px_rgba(255,92,0,0.1)]">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.25 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-[#ff5c00]/15 group-hover:text-[#ff5c00]"
        >
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </motion.div>
        <h2 className="mt-7 text-xl font-semibold tracking-[-0.035em] text-white">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff5c00]"
        >
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </TiltCard>
    </motion.article>
  );
}
