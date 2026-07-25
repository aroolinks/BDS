"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const platforms = [
  { label: "Elementor", image: "/elementor.png" },
  { label: "Shopify", image: "/shopify.png" },
  { label: "Wix", image: "/WIX.png" },
  { label: "Webflow", image: "/webflow.svg" },
  { label: "WooCommerce", image: "/WOOCOMMERCE.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PlatformGrid() {
  return (
    <section className="border-b border-white/10 bg-[#111111] py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Platforms & tools"
          title="Built on platforms we know inside out."
          description="We work hands-on with these platforms every day, so your project launches on a solid, well-supported foundation."
          align="center"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-3 md:grid-cols-5"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.label}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="group flex flex-col items-center justify-center gap-4 bg-[#111111] p-8 transition-colors duration-300 hover:bg-white/[0.03] md:p-10"
            >
              <div className="relative h-8 w-full">
                <Image
                  src={platform.image}
                  alt={platform.label}
                  fill
                  sizes="120px"
                  className="object-contain brightness-0 invert opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <span className="text-xs font-medium text-white/40 transition-colors duration-300 group-hover:text-[#ff5c00]">
                {platform.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
