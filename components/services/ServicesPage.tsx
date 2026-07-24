"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  CircleGauge,
  Layers3,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Service = {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Digital Experiences",
    description:
      "Create fast, modern and conversion-focused digital experiences that showcase your business and generate enquiries.",
    items: [
      "Website Design & Development",
      "Website Redesign",
      "Shopify Development",
      "Mobile App Development",
    ],
    icon: Layers3,
  },
  {
    title: "Growth & Marketing",
    description:
      "Increase visibility, attract qualified traffic and generate more leads through data-driven digital marketing.",
    items: [
      "Search Engine Optimisation (SEO)",
      "Local SEO",
      "Google Business Optimisation",
      "Google Ads (PPC)",
      "Email Marketing",
    ],
    icon: Search,
  },
  {
    title: "AI & Business Systems",
    description:
      "Automate repetitive tasks, streamline operations and connect your systems to improve efficiency and customer experience.",
    items: ["AI Automation", "CRM Integration", "Workflow Automation"],
    icon: Bot,
  },
  {
    title: "Branding & Creative",
    description:
      "Build a memorable brand with professional design, marketing materials and print solutions.",
    items: ["Brand Identity", "Graphic Design", "Printing Solutions"],
    icon: Palette,
  },
  {
    title: "Website Care & Support",
    description:
      "Keep your website secure, fast and performing at its best with proactive maintenance and technical support.",
    items: [
      "Website Maintenance",
      "Website Hosting",
      "Security Monitoring",
      "Performance Optimisation",
    ],
    icon: ShieldCheck,
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Thoughtful by design",
    text: "Every detail is shaped around clear messaging, intuitive journeys, and a premium impression.",
  },
  {
    icon: CircleGauge,
    title: "Built to perform",
    text: "We pair distinctive design with the technical foundations needed for speed, visibility, and growth.",
  },
  {
    icon: Rocket,
    title: "A partner for progress",
    text: "From first idea to ongoing optimisation, we make each next step clear and commercially focused.",
  },
];

const process = [
  ["01", "Discover", "We clarify your goals, audience, and the opportunity in front of you."],
  ["02", "Design", "We turn the strategy into an elegant, considered experience."],
  ["03", "Develop", "We build with care, precision, and long-term performance in mind."],
  ["04", "Launch", "We bring everything together for a confident, polished release."],
  ["05", "Grow", "We continue to improve, support, and expand what is working."],
];

const faqs = [
  {
    question: "Can you help us choose the right services?",
    answer:
      "Yes. We begin with your commercial goals, current challenges, and customer journey, then recommend the most valuable next steps.",
  },
  {
    question: "Do you work with businesses outside Berkshire?",
    answer:
      "Absolutely. We work with ambitious businesses throughout the UK and collaborate remotely when that suits the project.",
  },
  {
    question: "Can you support an existing website or brand?",
    answer:
      "Yes. We can improve, maintain, and extend an existing digital presence as well as deliver complete new platforms and identities.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer proactive website care, technical support, optimisation, and growth work to keep your investment moving forward.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="relative pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(17,17,17,0.09),transparent_24rem)]" />
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#666666]">
              Services
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-[#111111] md:text-7xl lg:text-8xl">
              Digital Services Designed to Help Your Business Grow
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#666666] md:text-xl md:leading-9">
              We build high-performing websites, eCommerce stores, mobile apps, marketing strategies, and business systems that help ambitious businesses attract more customers and scale with confidence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Get Started</Button>
              <Button href="/portfolio" variant="secondary">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="border-y border-[#E5E5E5] bg-[#F8F8F8]" aria-labelledby="services-heading">
        <Container>
          <div className="py-20 md:py-28">
            <SectionHeading
              eyebrow="What we do"
              title="The right expertise for your next stage of growth."
              description="Choose a focused engagement or bring the pieces together into a cohesive digital system."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              transition={{ staggerChildren: 0.1 }}
              className="mt-12 grid gap-5 lg:grid-cols-2"
              id="services-heading"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -6 }}
                    className={`group flex flex-col rounded-[30px] border border-[#E5E5E5] bg-white p-7 shadow-[0_16px_48px_rgba(17,17,17,0.03)] transition-shadow duration-300 hover:border-[#111111] hover:shadow-[0_24px_58px_rgba(17,17,17,0.09)] md:p-9 ${index === services.length - 1 ? "lg:col-span-2" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="rounded-2xl bg-[#111111] p-3.5 text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>
                      <span className="text-xs font-semibold tracking-[0.2em] text-[#666666]">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-[#111111] md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-xl leading-7 text-[#666666]">{service.description}</p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2" aria-label={`${service.title} services`}>
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#111111]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#111111] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      Explore Service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="why-heading">
        <Container>
          <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <SectionHeading
              eyebrow="Why Berkshire Digital Studio"
              title="A more considered way to move your business forward."
              description="We balance ambitious creative thinking with practical delivery, so your investment looks exceptional and works hard."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.12 }}
              className="grid gap-4"
              id="why-heading"
            >
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="flex gap-5 rounded-[24px] border border-[#E5E5E5] p-6 md:p-7"
                  >
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-[#111111]" strokeWidth={1.6} />
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#111111]">{reason.title}</h3>
                      <p className="mt-2 leading-7 text-[#666666]">{reason.text}</p>
                    </div>
                  </motion.div>
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
              Clear from first conversation to long-term growth.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/15 bg-white/15 md:grid-cols-5">
              {process.map(([number, title, text]) => (
                <div key={title} className="bg-[#111111] p-6 md:min-h-64 md:p-7">
                  <p className="text-xs font-semibold tracking-[0.25em] text-white/50">{number}</p>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-heading">
        <Container>
          <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="A little more clarity before we begin."
              description="If you have a specific question, we would be happy to talk it through."
            />
            <div id="faq-heading" className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-[-0.02em] text-[#111111] marker:content-none">
                    {faq.question}
                    <span className="text-2xl font-normal text-[#666666] transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pb-1 pt-3 leading-7 text-[#666666]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] bg-[#F8F8F8] px-6 py-12 text-center md:px-12 md:py-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#666666]">Let’s make progress</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#111111] md:text-6xl">
              Ready to turn your next idea into real momentum?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#666666]">
              Tell us where you want to go. We’ll help you find the clearest, most valuable way to get there.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Start a Conversation</Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
