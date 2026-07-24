"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  BriefcaseBusiness,
  Car,
  Cog,
  GraduationCap,
  Hammer,
  Handshake,
  HeartHandshake,
  Rocket,
  SearchCheck,
  ShoppingBag,
  SlidersHorizontal,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "./IndustryCard";

type Industry = {
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  {
    title: "Construction & Trades",
    description:
      "Professional websites, SEO, quotation systems and lead generation for builders, contractors, roofing companies, electricians, plumbers, manufacturers and suppliers.",
    cta: "Explore Construction",
    icon: Hammer,
  },
  {
    title: "Healthcare & Care",
    description:
      "Modern websites and digital systems for care homes, supported living providers, healthcare consultants, dental clinics and recruitment-focused organisations.",
    cta: "Explore Healthcare",
    icon: HeartHandshake,
  },
  {
    title: "Engineering & Manufacturing",
    description:
      "Technical websites, automation, calculators and business systems built for engineering companies, manufacturers and industrial suppliers.",
    cta: "Explore Engineering",
    icon: Cog,
  },
  {
    title: "Professional Services",
    description:
      "Premium websites for consultants, accountants, solicitors, architects, surveyors, finance professionals and B2B companies.",
    cta: "Explore Professional Services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education & Training",
    description:
      "Websites and marketing for schools, colleges, tutors, apprenticeship providers, academies and online learning businesses.",
    cta: "Explore Education",
    icon: GraduationCap,
  },
  {
    title: "Restaurants & Takeaways",
    description:
      "Online ordering, table bookings, local SEO and digital marketing for restaurants, cafés, takeaways, dessert shops and hospitality businesses.",
    cta: "Grow My Restaurant",
    icon: UtensilsCrossed,
  },
  {
    title: "Retail & eCommerce",
    description:
      "Shopify, WooCommerce and high-converting eCommerce experiences for retail businesses and online brands.",
    cta: "Grow My Store",
    icon: ShoppingBag,
  },
  {
    title: "Property & Real Estate",
    description:
      "Lead generation websites for estate agents, property developers, letting agencies and commercial property businesses.",
    cta: "Explore Property",
    icon: Building2,
  },
  {
    title: "Automotive",
    description:
      "Professional websites, booking systems and local SEO for garages, mechanics, dealerships and automotive specialists.",
    cta: "Grow My Garage",
    icon: Car,
  },
  {
    title: "Startups & Technology",
    description:
      "Scalable websites and digital products for startups, SaaS companies and technology businesses.",
    cta: "Launch My Startup",
    icon: Rocket,
  },
];

const reasons = [
  {
    title: "Industry Expertise",
    text: "We get to the heart of your customer's decision-making journey and your sector's commercial realities.",
    icon: Award,
  },
  {
    title: "Custom Digital Solutions",
    text: "Your business is not a template. Every recommendation and experience is shaped around the outcome you need.",
    icon: SlidersHorizontal,
  },
  {
    title: "SEO Focused Development",
    text: "Technical quality and search visibility are considered from the outset, not added as an afterthought.",
    icon: SearchCheck,
  },
  {
    title: "Long-Term Partnership",
    text: "We stay close after launch, helping you measure progress and create your next opportunity.",
    icon: Handshake,
  },
];

const steps = ["Discover", "Plan", "Design", "Develop", "Launch", "Grow"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="relative flex min-h-[62vh] items-center py-20 md:py-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-24 top-6 h-72 w-72 rounded-full bg-[#111111]/[0.06] blur-3xl md:h-[32rem] md:w-[32rem]" />
          <div className="absolute bottom-0 left-[14%] h-44 w-44 rotate-45 rounded-[38px] border border-[#111111]/10 md:h-64 md:w-64" />
        </div>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#666666]">Industries</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.065em] text-[#111111] md:text-7xl lg:text-8xl">
              Choose Your Industry
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#666666] md:text-xl md:leading-9">
              Every industry has unique challenges, customer journeys and digital requirements. Explore tailored digital solutions, relevant case studies and proven strategies designed specifically for your business.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#industry-grid">Explore Industries</Button>
              <Button href="/contact" variant="secondary">Talk to an Expert</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="industry-grid" className="border-y border-[#E5E5E5] bg-[#F8F8F8]" aria-labelledby="industries-heading">
        <Container>
          <div className="py-20 md:py-28">
            <SectionHeading
              eyebrow="Tailored for your world"
              title="Digital expertise shaped around your industry."
              description="From technical buying journeys to local customer acquisition, we create the systems and experiences that make a meaningful difference."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              transition={{ staggerChildren: 0.08 }}
              className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3"
              id="industries-heading"
            >
              {industries.map((industry) => (
                <IndustryCard key={industry.title} {...industry} />
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="why-heading">
        <Container>
          <div className="py-20 md:py-28">
            <SectionHeading
              eyebrow="Why choose Berkshire Digital Studio"
              title="Sector-aware thinking. Meticulous execution."
              description="We combine the clarity of a specialist partner with the breadth of a full digital studio."
              align="center"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ staggerChildren: 0.1 }}
              className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
              id="why-heading"
            >
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <motion.article
                    key={reason.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="rounded-[25px] border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_36px_rgba(17,17,17,0.025)]"
                  >
                    <Icon className="h-6 w-6 text-[#111111]" strokeWidth={1.6} />
                    <h2 className="mt-7 text-xl font-semibold tracking-[-0.035em] text-[#111111]">{reason.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-[#666666]">{reason.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-[#111111] text-white" aria-labelledby="process-heading">
        <Container>
          <div className="py-20 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55">Our process</p>
            <h2 id="process-heading" className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
              A clear path from sector insight to lasting growth.
            </h2>
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
              className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/15 bg-white/15 md:grid-cols-6"
            >
              {steps.map((step, index) => (
                <motion.li
                  key={step}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className="relative min-h-48 bg-[#111111] p-6 md:p-7"
                >
                  <span className="text-xs font-semibold tracking-[0.25em] text-white/45">0{index + 1}</span>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{step}</h3>
                  {index < steps.length - 1 && <span className="absolute bottom-7 right-0 hidden h-px w-5 translate-x-1/2 bg-white/35 md:block" />}
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-20 md:pb-28 md:pt-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[34px] bg-[#F8F8F8] px-6 py-12 text-center md:px-12 md:py-18"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#666666]">Your next chapter</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#111111] md:text-6xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#666666]">
              Let&apos;s create a digital experience that helps your business stand out, attract more customers and grow with confidence.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact">Start Your Project</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
