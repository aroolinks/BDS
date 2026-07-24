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
    <section className="py-20 md:py-24">
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
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-[#E5E5E5] bg-white text-[#666666] hover:border-[#111111] hover:text-[#111111]"
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
          <div className="mt-8 rounded-[24px] border border-[#E5E5E5] bg-[#F8F8F8] p-6 text-sm text-[#666666]">
            No projects match this filter yet.
          </div>
        )}
      </Container>
    </section>
  );
}
