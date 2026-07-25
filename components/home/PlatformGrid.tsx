"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const platforms = [
  { label: "WordPress", image: "/wordpress.svg" },
  { label: "WooCommerce", image: "/woocommerce.svg" },
  { label: "Shopify", image: "/shopify.svg" },
  { label: "Elementor", image: "/elementor.svg" },
  { label: "Next.js", image: "/nextjs.svg" },
  { label: "React", image: "/react.svg" },
  { label: "Redux", image: "/redux.svg" },
  { label: "Node.js", image: "/nodejs.svg" },
  { label: "GraphQL", image: "/graphql.svg" },
  { label: "Tailwind CSS", image: "/tailwindcss.svg" },
  { label: "Laravel", image: "/laravel.svg" },
  { label: "PHP", image: "/php.svg" },
  { label: "Python", image: "/python.svg" },
  { label: "jQuery", image: "/jquery.svg" },
  { label: "Bootstrap", image: "/bootstrap.svg" },
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
          className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-4 md:grid-cols-5"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.label}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="group flex flex-col items-center justify-center gap-3 bg-[#111111] p-6 transition-colors duration-300 hover:bg-white/[0.03] md:p-8"
            >
              <div className="relative h-7 w-full">
                <Image
                  src={platform.image}
                  alt={platform.label}
                  fill
                  sizes="100px"
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
