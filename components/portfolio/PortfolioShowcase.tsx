"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import PortfolioCard from "@/components/ui/PortfolioCard";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "Aurelia Launch",
    category: "Web Design",
    accent: "linear-gradient(135deg, #EDEDED, #D7D7D7)",
    summary:
      "Luxury brand positioning with a conversion-led launch page and refined storytelling.",
  },
  {
    title: "Northline Commerce",
    category: "Shopify",
    accent: "linear-gradient(135deg, #F4F4F4, #BEBEBE)",
    summary:
      "Premium storefront design with a cleaner purchase journey and stronger visual hierarchy.",
  },
  {
    title: "Vanta Mobility",
    category: "Mobile App",
    accent: "linear-gradient(135deg, #F6F6F6, #C8C8C8)",
    summary:
      "Streamlined customer app concept focused on usability, speed, and retention.",
  },
  {
    title: "Edition One Print",
    category: "Printing",
    accent: "linear-gradient(135deg, #EFEFEF, #D1D1D1)",
    summary:
      "Print collateral system built to elevate tactile brand experiences at every touchpoint.",
  },
  {
    title: "Horizon Studio",
    category: "Web Design",
    accent: "linear-gradient(135deg, #F7F7F7, #CECECE)",
    summary:
      "A polished portfolio site that balances editorial storytelling with clear CTAs.",
  },
  {
    title: "Atlas Retail",
    category: "Shopify",
    accent: "linear-gradient(135deg, #F3F3F3, #C3C3C3)",
    summary:
      "High-end commerce experience designed to improve discovery and customer confidence.",
  },
];

const filterOptions = [
  "All",
  "Web Design",
  "Shopify",
  "Mobile App",
  "Design & Printing",
  "Wordpress",
];

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-44 md:pb-24 md:pt-52 bg-[#111111] text-white">
      <div className="glow-float pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-[#ff5c00]/15 blur-3xl md:h-[28rem] md:w-[28rem]" />
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work built to feel premium and commercially effective."
          description="Filter through the showcase to explore the kinds of digital experiences we design and build."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {filterOptions.map((option) => {
            const isActive = option === activeFilter;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "border-[#ff5c00] bg-[#ff5c00] text-[#111111]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-[#ff5c00]/40 hover:text-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              accent={project.accent}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6 text-sm text-white/60">
            No projects match this filter yet.
          </div>
        )}
      </Container>
    </section>
  );
}
