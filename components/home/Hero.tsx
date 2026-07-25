"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const servicePills = ["Websites", "Commerce", "Digital systems", "Growth"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-[#111111]/[0.07] blur-3xl md:h-[34rem] md:w-[34rem]" />
        <div className="absolute bottom-0 left-[10%] h-52 w-52 rotate-45 rounded-[42px] border border-[#111111]/10 md:h-72 md:w-72" />
      </div>
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 pt-10 md:pt-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Berkshire Digital Studio
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl lg:text-8xl">
              Digital work that gives ambitious businesses momentum.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              We create distinct brands, high-performing websites, and smarter digital systems that help you attract more customers and grow with confidence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">Book a Discovery Call</Button>
              <Button href="/portfolio" variant="secondary">
                View Recent Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="rounded-[32px] bg-[#111111] p-6 text-white shadow-[0_28px_70px_rgba(17,17,17,0.16)] md:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Built for progress</span>
              <ArrowUpRight className="h-5 w-5 text-white/70" />
            </div>
            <p className="mt-12 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Clear strategy. Exceptional execution. Measurable impact.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2">
              {servicePills.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#111111] px-4 py-4 text-sm text-white/75">
                  <Check className="h-4 w-4 text-white" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
