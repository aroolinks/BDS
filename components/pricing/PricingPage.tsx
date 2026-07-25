"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Stats from "@/components/ui/Stats";
import TiltCard from "@/components/ui/TiltCard";

const stats = [
  { value: "100+", label: "Websites launched" },
  { value: "£99", label: "Starting price" },
  { value: "100%", label: "UK-based team" },
  { value: "<3s", label: "Avg. load time" },
];

const heroPoints = ["Custom-Built for Your Business",
"No Templates or Generic Designs",
"SEO-Ready from Day One",
"Fully Responsive on All Devices",
"Fast, Secure & Easy to Manage",
"UK-Based Web Design Experts"];

const industries = [

  "Construction",
  "Engineering",
  "Education",
  "Professional Services",
  "Technology",
  "Retail",
  "Hospitality",
  "Start-ups",
  "Barbers & Salons",
  "Taxi & Chauffeur",
  "Care Homes",
  "Takeaways & Restaurants",
];

type ComparisonRow = {
  feature: string;
  single: string | boolean;
  starter: string | boolean;
  growth: string | boolean;
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Pages included", single: "1 page", starter: "Up to 5", growth: "Up to 12" },
  { feature: "Custom design", single: true, starter: true, growth: true },
  { feature: "Mobile responsive", single: true, starter: true, growth: true },
  { feature: "SEO fundamentals", single: false, starter: true, growth: true },
  { feature: "CMS (edit content)", single: false, starter: false, growth: true },
  { feature: "Blog setup", single: false, starter: false, growth: true },
  { feature: "E-commerce / bookings", single: false, starter: false, growth: false },
  { feature: "Custom integrations / CRM", single: false, starter: false, growth: true },
  { feature: "Turnaround", single: "1–3 days", starter: "1–2 weeks", growth: "2–3 weeks" },
  { feature: "Best for", single: "Brand new businesses", starter: "Small businesses", growth: "Growing businesses" },
];

const growthDeliverables = [
  "10–15 pages",
  "Bespoke page layouts",
  "Blog or resources section",
  "Case studies or project gallery",
  " Fully Responsive on all devices",
  "Enquiry forms",
  "SEO structure",
  "Ratings & reviews integration",
  "Google Analytics setup",
  "Speed optimisation",
  "Conversion-focused calls to action",
  "Three revision rounds",
 
];

const ecommerceFeatures = [
  "Shopify or WooCommerce setup",
  "Custom store design",
  "Mobile-friendly storefront",
  "Product & category setup",
  "Secure payment gateway integration",
  "Shipping & tax configuration",
  "Shopping cart & checkout optimisation",
  "Customer account functionality",
  "Discount codes & promotions",
  "Inventory management",
  "Product search & filtering",
  "SEO-friendly product pages",
  "Speed optimisation",
  "Google Analytics & GA4 setup",
  "Email marketing integration (Klaviyo/Mailchimp)",
  "Abandoned cart recovery",
  "Order notification emails",
  "Social media & Google Shopping integration",
  "Three revision rounds",
];

type Package = {
  name: string;
  priceLabel: string;
  priceSuffix?: string;
  wasPriceLabel?: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
};

const packages: Package[] = [
  {
    name: "Single Page Website",
    priceLabel: "£99*",
    wasPriceLabel: "£199",
    description: "For brand new businesses that just need a simple, professional presence online.",
    features: ["Single Page Website", "4 Scrollable Sections", "Fully Responsive",  "Social Media Integration", "One revision round"],
    badge: "Launch Offer",
  },
  {
    name: "Starter Website",
    priceLabel: "£599*",
     wasPriceLabel: "£799",
    description: "For new businesses or small businesses that need a professional online presence.",
    features: ["Up to 5 pages", "Mobile responsive design", "Contact form", "Basic SEO setup", "Google Maps integration", "Social media links", "Basic content structure", "Two revision round"],
  },
  {
    name: "Growth Website",
    priceLabel: "£1,250*",
     wasPriceLabel: "£1499",
    description: "For businesses that want a stronger website built to generate enquiries.",
    features: growthDeliverables,
    popular: true,
  },
];

const supportTiers = [
  {
    name: "Website Care",
    priceLabel: "£49",
    features: ["Hosting support", "Updates", "Backups", "Security checks", "Small technical fixes"],
  },
  {
    name: "Growth Support",
    priceLabel: "£99",
    features: ["Website updates", "SEO support", "Blog uploads", "Analytics review", "Monthly performance check"],
  },
];

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Website packages start at £99 for a Single Page site, £599 for a Starter site (up to 5 pages) and £1,250 for a Growth site (up to 12 pages with a CMS). Every quote is fixed before any work starts, so there are no surprises.",
  },
  {
    question: "Do you only work with certain industries?",
    answer: "No. We work across a wide range of sectors, including care, construction, engineering, education, professional services, technology, retail, hospitality and start-ups. Every project is tailored to the way your industry actually sells and converts.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. Whether you need a full rebuild or a focused refresh, we can assess your current site and recommend the right package — most redesigns fit comfortably into our Starter or Growth packages depending on scope.",
  },
  {
    question: "Can you help with AI?",
    answer: "Yes. AI assistants, chatbots and automation can be built into your Growth website or added as a tailored add-on — get in touch and we'll scope out what makes sense for your business.",
  },
  {
    question: "Do you offer monthly support?",
    answer: "Yes. Once your site is live, our monthly Website Care and Growth Support packages keep it fast, secure and improving — starting from £49 a month.",
  },
  {
    question: "Can you help with SEO?",
    answer: "Yes. Every package includes SEO fundamentals from the ground up, and our Growth Support package adds ongoing SEO support as your rankings and traffic evolve.",
  },
  {
    question: "Can you build custom tools?",
    answer: "Yes. Custom calculators, booking systems, CRM integrations and automation workflows can be added to a Growth website as a tailored add-on — get in touch and we'll quote it separately.",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function PricingPage() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="relative isolate overflow-hidden pb-20 pt-20 md:pb-28 md:pt-28 bg-[#111111] text-white">
        <div className="glow-float pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-[#ff5c00]/15 blur-3xl md:h-[32rem] md:w-[32rem]" />
        <Container>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }} className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff5c00]">Pricing</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.065em] text-white md:text-7xl">
             Professional Website Design That Fits Your Budget
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl md:leading-9">
              Affordable Website Design Packages from £99 with monthly website support from just £49. Every project starts with a tailored consultation to understand your business goals. We customise each website package to your specific requirements and provide a clear, fixed quote before any work begins—no hidden costs, no surprises.
                        </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  <Check className="h-4 w-4 text-[#ff5c00]" />
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#packages">View Packages</Button>
              <Button href="/contact" variant="secondary">
                Get a Tailored Proposal
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((metric) => (
              <motion.div key={metric.label} variants={fadeUp} transition={{ duration: 0.4 }}>
                <Stats {...metric} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#111111] py-10 sm:py-12">
        <Container>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.32em] text-[#ff5c00]">
            Trusted across industries
          </p>
        </Container>
        <div className="marquee-fade overflow-hidden py-2">
          <div className="logo-marquee flex w-max items-center gap-4">
            {[...industries, ...industries].map((industry, index) => (
              <span
                key={`${industry}-${index}`}
                aria-hidden={index >= industries.length}
                className="shrink-0 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/60"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="relative isolate overflow-hidden bg-[#111111]">
        <div className="glow-float-slow pointer-events-none absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#ff5c00]/10 blur-3xl md:h-96 md:w-96" />
        <Container>
          <div className="py-20 md:py-28">
            <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] p-6 shadow-[0_0_120px_-40px_rgba(255,92,0,0.35)] md:p-10">
              <div className="glow-float pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-[#ff5c00]/15 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff5c00]">Quick pricing summary</p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
                Berkshire Digital Studio website packages start at <strong className="text-white">£599</strong> for a Starter website (up to 5 pages) and <strong className="text-white">£1,250</strong> for a Growth website (up to 12 pages with CMS). Monthly maintenance costs <strong className="text-white">£25–£75/month</strong>. All prices are + VAT.
              </p>
            </div>
          </div>
        </Container>
      </section> */}

      <section id="compare" className="relative isolate overflow-hidden border-y border-white/10 bg-[#111111]">
        <div className="glow-float pointer-events-none absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-[#ff5c00]/10 blur-3xl md:h-[26rem] md:w-[26rem]" />
        <Container>
          <div className="py-20 md:py-28">
            <SectionHeading
              eyebrow="Compare Our Packages"
              title="Find the Right Website Package for Your Business"
              description="Compare our website packages to see what's included. Every package is fully tailored to your business, with our most popular option highlighted below."
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border-b border-white/10 pb-4 pr-4 text-sm font-semibold text-white/50">Feature</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className={`border-b pb-4 px-4 text-center ${pkg.popular ? "border-[#ff5c00]/40" : "border-white/10"}`}>
                        {pkg.popular && (
                          <span className="mb-1 inline-block rounded-full bg-[#ff5c00] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#111111]">
                            Popular
                          </span>
                        )}
                        {!pkg.popular && pkg.badge && (
                          <span className="mb-1 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/70">
                            {pkg.badge}
                          </span>
                        )}
                        <div className="text-base font-semibold text-white">{pkg.name.replace(" Website", "").replace(" & Systems", "")}</div>
                        <div className="text-sm font-normal text-white/50">
                          {pkg.wasPriceLabel && <span className="mr-1 line-through text-white/30">{pkg.wasPriceLabel}</span>}
                          {pkg.priceLabel}
                          {pkg.priceSuffix}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5">
                      <td className="py-4 pr-4 text-sm text-white/70">{row.feature}</td>
                      {[row.single, row.starter, row.growth].map((value, index) => (
                        <td
                          key={index}
                          className={`px-4 py-4 text-center text-sm ${packages[index].popular ? "bg-[#ff5c00]/[0.03]" : ""}`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="mx-auto h-4 w-4 text-[#ff5c00]" strokeWidth={2.5} />
                            ) : (
                              <Minus className="mx-auto h-4 w-4 text-white/20" />
                            )
                          ) : (
                            <span className="text-white/70">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#111111] text-white">
        <div className="glow-float-slow pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-[#ff5c00]/10 blur-3xl md:h-96 md:w-96" />
        <Container>
          <div className="py-20 md:py-28">
            <SectionHeading
              eyebrow="Professional Website Package"
              title="Everything Included in Our Growth Website Package"
              description="Discover everything included in our most popular website design package, featuring custom design, SEO optimisation, fast performance, and conversion-focused features. From £1,250."
            />
            <TiltCard className="mt-12 rounded-[28px] border border-[#ff5c00]/25 bg-[#111111] p-6 md:p-10">
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {growthDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm leading-6 text-white">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5c00]" strokeWidth={2} />
                    {item}
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </Container>
      </section>

      <section id="packages" className="relative isolate overflow-hidden border-y border-white/10 bg-[#111111]">
        <div className="glow-float pointer-events-none absolute -left-20 top-0 -z-10 h-72 w-72 rounded-full bg-[#ff5c00]/10 blur-3xl md:h-96 md:w-96" />
        <Container>
          <div className="py-20 md:py-28">
            <SectionHeading
              eyebrow="Investment"
              title="Website packages built around value."
              description="Clear, honest pricing. Every package is a starting point — we tailor the detail to your business."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: 0.1 }}
              className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {packages.map((pkg) => (
                <motion.div key={pkg.name} variants={fadeUp} transition={{ duration: 0.5 }} className="h-full">
                  <TiltCard
                    className={`relative flex h-full flex-col rounded-[28px] border p-6 md:p-8 ${
                      pkg.popular ? "border-[#ff5c00]/40 bg-[#ff5c00]/[0.03] shadow-[0_20px_60px_rgba(255,92,0,0.12)]" : "border-white/10 bg-[#111111]"
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ff5c00] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#111111]">
                        Most Popular
                      </span>
                    )}
                    {!pkg.popular && pkg.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#111111]">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{pkg.name}</h3>
                    <div className="mt-4 flex flex-wrap items-baseline gap-1">
                      <span className="text-xs text-white/50">From</span>
                      {pkg.wasPriceLabel && (
                        <span className="text-lg text-white/30 line-through">{pkg.wasPriceLabel}</span>
                      )}
                      <span className="text-4xl font-semibold tracking-[-0.03em] text-white">
                        {pkg.priceLabel}
                      </span>
                      {pkg.priceSuffix && <span className="text-lg text-white/50">{pkg.priceSuffix}</span>}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/60">{pkg.description}</p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-white/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5c00]" strokeWidth={2} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href="/contact" variant={pkg.popular ? "primary" : "secondary"} className="w-full">
                        Get a Tailored Proposal
                      </Button>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-6 text-center text-xs text-white/40">
              * Domain registration and hosting prices are not included in this package.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <TiltCard className="rounded-[28px] border border-white/10 bg-[#111111] p-6 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">Shopify &amp; WooCommerce Websites</h3>
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                          <Image src="/shopify.svg" alt="Shopify" width={32} height={32} className="h-4 w-4 object-contain brightness-0 invert opacity-80" />
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                          <Image src="/woocommerce.svg" alt="WooCommerce" width={32} height={32} className="h-4 w-4 object-contain brightness-0 invert opacity-80" />
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                      Every store is different, so pricing depends on your product range, integrations and requirements. Tell us what you need and we&apos;ll come back with a fixed quote.
                    </p>
                  </div>
                  <Button href="/contact" className="shrink-0">
                    Get a Custom Quote
                  </Button>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {ecommerceFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-white/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5c00]" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-0">
        <Container>
          <div className="py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] px-6 py-12 text-center shadow-[0_0_120px_-40px_rgba(255,92,0,0.35)] md:px-12 md:py-16"
            >
              <div className="glow-float pointer-events-none absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-[#ff5c00]/10 blur-3xl md:h-[26rem] md:w-[26rem]" />
              <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5c00]/10 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff5c00]">Not sure which package is right for you?</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Tell us about your business and we&apos;ll recommend the right package.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">
                Answer a few quick questions and we&apos;ll come back with the right package, features and budget for your business.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact">
                  Get a Tailored Proposal <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden border-y border-white/10 bg-[#111111] text-white">
        <div className="glow-float-slow pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#ff5c00]/10 blur-3xl md:h-96 md:w-96" />
        <Container>
          <div className="py-20 md:py-28">
            <SectionHeading
              eyebrow="Ongoing support"
              title="Keep improving after launch."
              description="Your website is never really finished. Our monthly packages keep it fast, secure and always improving."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ staggerChildren: 0.1 }}
              className="mt-12 grid gap-5 md:grid-cols-2"
            >
              {supportTiers.map((tier) => (
                <motion.div key={tier.name} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <TiltCard className="flex h-full flex-col rounded-[26px] border border-white/10 bg-[#111111] p-6 md:p-8">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">{tier.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-xs text-white/50">From</span>
                      <span className="text-3xl font-semibold tracking-[-0.03em] text-white">{tier.priceLabel}</span>
                      <span className="text-sm text-white/50">/month</span>
                    </div>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-white/70">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5c00]" strokeWidth={2} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="secondary" className="mt-6 w-full">
                      Start — From {tier.priceLabel}/month
                    </Button>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-heading">
        <Container>
          <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered."
              description="If you have a specific question, we would be happy to talk it through."
            />
            <div id="faq-heading" className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-[-0.02em] text-white marker:content-none">
                    {faq.question}
                    <span className="text-2xl font-normal text-white/60 transition-all duration-300 group-open:rotate-45 group-open:text-[#ff5c00]">+</span>
                  </summary>
                  <p className="max-w-2xl pb-1 pt-3 leading-7 text-white/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
