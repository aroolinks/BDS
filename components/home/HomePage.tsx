"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  LayoutGrid,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import Hero from "@/components/home/Hero";
import Container from "@/components/ui/Container";
import CTA from "@/components/ui/CTA";
import PortfolioCard from "@/components/ui/PortfolioCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Stats from "@/components/ui/Stats";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ImageScroll from "@/components/home/ImageScroll";

const services = [
  { icon: Palette, title: "Web Design", description: "Distinctive, conversion-led websites that make the right first impression." },
  { icon: Phone, title: "Mobile App Development", description: "Useful, refined mobile experiences built around real customer behaviour." },
  { icon: ShoppingBag, title: "Shopify Development", description: "High-performing storefronts that make every product and purchase feel effortless." },
  { icon: LayoutGrid, title: "Print & Creative", description: "Memorable brand collateral that carries your digital presence into the real world." },
  { icon: Search, title: "SEO & Growth", description: "Technical and strategic support that helps ambitious brands become easier to find." },
];

const reasons = [
  { icon: ShieldCheck, title: "Built with care", text: "Refined creative and robust technical foundations in equal measure." },
  { icon: TrendingUp, title: "Commercially minded", text: "We make decisions that support trust, enquiries, conversion, and growth." },
  { icon: Users, title: "Easy to work with", text: "A collaborative process with clear milestones and no unnecessary noise." },
  { icon: Globe, title: "Here for the long term", text: "Support and optimisation that keeps your digital presence moving forward." },
];

const portfolio = [
  { title: "Aurelia Launch", category: "Brand + Web", accent: "linear-gradient(135deg, #EDEDED, #D7D7D7)" },
  { title: "Northline Commerce", category: "Shopify", accent: "linear-gradient(135deg, #F4F4F4, #BEBEBE)" },
  { title: "Vanta Mobility", category: "Mobile App", accent: "linear-gradient(135deg, #F6F6F6, #C8C8C8)" },
];

const stats = [
  { value: "120+", label: "Projects launched" },
  { value: "96%", label: "Client retention" },
  { value: "4.9/5", label: "Average review" },
  { value: "18%", label: "Average growth uplift" },
];

const testimonials = [
  { quote: "They translated our vision into a refined digital experience that immediately felt enterprise-grade.", name: "Amelia Clarke", role: "Founder, Aurelia" },
  { quote: "Clear communication, excellent craft, and a premium finish from start to finish.", name: "Daniel Evans", role: "Operations Lead, Northline" },
  { quote: "The team balanced strategic thinking with beautiful design in a way that genuinely moved our business forward.", name: "Sofia Martin", role: "Marketing Director, Vanta" },
];

const faqs = [
  { question: "What kinds of projects do you take on?", answer: "We partner on high-end websites, Shopify builds, mobile apps, digital systems, and brand-aligned print and marketing materials." },
  { question: "Can you work with an existing brand?", answer: "Yes. We can refine, extend, and elevate an existing brand while making sure every new touchpoint feels coherent and considered." },
  { question: "How do you keep projects moving?", answer: "We work through clear milestones, decisive feedback cycles, and a focused delivery plan so everyone knows what happens next." },
];

const process = [
  ["01", "Discover", "We define the opportunity, goals, and customer journey."],
  ["02", "Design", "We shape a confident direction and an elegant experience."],
  ["03", "Develop", "We build the detail, systems, and performance into every layer."],
  ["04", "Launch", "We release with a polished handover and a clear plan for growth."],
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function HomePage() {
  return (
    <main id="top" className="overflow-hidden">
      <Hero />

      <ImageScroll />

  

      <section id="services" className="scroll-mt-24 bg-[#111111]">
        <Container>
          <div className="py-10 md:py-28">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Services" title="Everything you need to create meaningful digital momentum." description="Bring us one challenge or a wider ambition. We will help you choose the right path forward." />
              <Link href="/services" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-transform hover:text-white/80 hover:translate-x-1">Explore services <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ staggerChildren: 0.08 }} className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => <motion.div key={service.title} variants={fadeUp} transition={{ duration: 0.5 }}><ServiceCard {...service} /></motion.div>)}
            </motion.div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <SectionHeading eyebrow="Why Berkshire Digital Studio" title="A more considered way to move your business forward." description="We combine clear thinking, excellent craft, and a level of care that stays visible in the finished work." />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ staggerChildren: 0.1 }} className="grid gap-4 md:grid-cols-2">
              {reasons.map((reason) => { const Icon = reason.icon; return <motion.article key={reason.title} variants={fadeUp} transition={{ duration: 0.5 }} className="rounded-[25px] border border-white/10 bg-[#111111] p-6 shadow-[0_12px_36px_rgba(255,255,255,0.04)]"><Icon className="h-6 w-6 text-white" strokeWidth={1.6} /><h2 className="mt-7 text-xl font-semibold tracking-[-0.035em] text-white">{reason.title}</h2><p className="mt-3 text-sm leading-6 text-white/60">{reason.text}</p></motion.article>; })}
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="portfolio" className="border-y border-white/10 bg-[#111111]">
        <Container>
          <div className="py-20 md:py-28">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Selected work" title="Experiences designed to be remembered." description="A glimpse at how strategic direction and refined execution come together." /><Link href="/portfolio" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-transform hover:text-white/80 hover:translate-x-1">View portfolio <ArrowRight className="h-4 w-4" /></Link></div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ staggerChildren: 0.1 }} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{portfolio.map((item) => <motion.div key={item.title} variants={fadeUp} transition={{ duration: 0.5 }}><PortfolioCard {...item} /></motion.div>)}</motion.div>
          </div>
        </Container>
      </section>

      <section id="process" className="bg-[#111111] text-white">
        <Container>
          <div className="py-20 md:py-28"><p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55">Our process</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">Clear from the first conversation to the next stage of growth.</h2><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ staggerChildren: 0.1 }} className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/15 bg-white/15 md:grid-cols-4">{process.map(([number, title, text]) => <motion.article key={title} variants={fadeUp} transition={{ duration: 0.45 }} className="min-h-60 bg-[#111111] p-6 md:p-7"><p className="text-xs font-semibold tracking-[0.25em] text-white/45">{number}</p><h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{text}</p></motion.article>)}</motion.div></div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-20 md:py-28"><SectionHeading eyebrow="The impact" title="Built to help ambitious teams do more." description="The strongest results come from good decisions, consistently applied." align="center" /><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map((metric) => <Stats key={metric.label} {...metric} />)}</div></div>
        </Container>
      </section>

      <section className="bg-[#111111]">
        <Container>
          <div className="py-20 md:py-28"><SectionHeading eyebrow="Client perspective" title="What clients remember most." description="A premium experience is not only how it looks, but how it feels to work with the team behind it." /><div className="mt-12 grid gap-4 lg:grid-cols-3">{testimonials.map((item) => <TestimonialCard key={item.name} {...item} />)}</div></div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-24 bg-[#111111]">
        <Container>
          <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20"><SectionHeading eyebrow="FAQ" title="Common questions, answered clearly." description="If you have a specific question, we would be happy to talk it through." /><div className="divide-y divide-white/10 border-y border-white/10">{faqs.map((faq, index) => <details key={faq.question} open={index === 0} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-[-0.02em] text-white">{faq.question}<span className="text-2xl font-normal text-white/60 transition-transform duration-300 group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-1 pt-3 leading-7 text-white/60">{faq.answer}</p></details>)}</div></div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24 pb-20 pt-0 md:pb-28">
        <Container><CTA /></Container>
      </section>
    </main>
  );
}
