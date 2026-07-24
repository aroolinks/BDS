import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const printingServices = [
  {
    title: "Business Cards Printing",
    description:
      "Premium business cards with crisp finishes, elevated materials, and professional presentation.",
  },
  {
    title: "Leaflets Printing",
    description:
      "Well-crafted leaflets for promotions, launches, and local campaigns that need to stand out.",
  },
  {
    title: "Banners Printing",
    description:
      "High-impact banners designed for events, storefronts, and announcements that demand visibility.",
  },
  {
    title: "Posters Printing",
    description:
      "Bold posters that combine strong layout, visual clarity, and polished print quality.",
  },
];

export default function PrintingPage() {
  return (
    <main className="pb-16 pt-28 md:pt-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#666666]">
            Printing Services
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[#111111] md:text-7xl">
            Printed materials that leave a lasting impression.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#666666]">
            From premium business cards to high-visibility banners, we help brands turn ideas into tactile, polished print experiences.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact">Request a Quote</Button>
            <Button href="/#portfolio" variant="secondary">
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {printingServices.map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_35px_rgba(17,17,17,0.04)]"
            >
              <span className="rounded-full bg-[#F8F8F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#666666]">
                Print Solution
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-[#111111]">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#666666]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[28px] border border-[#E5E5E5] bg-[#F8F8F8] p-6 md:p-8">
          <SectionHeading
            eyebrow="Why print with us"
            title="Material quality, layout clarity, and efficient production."
            description="We combine careful design thinking with practical production knowledge so every print product feels professional and brand-ready."
          />
        </div>
      </Container>
    </main>
  );
}
