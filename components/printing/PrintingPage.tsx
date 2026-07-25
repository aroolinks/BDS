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
    <main className="relative isolate overflow-hidden pb-16 pt-44 md:pt-52 bg-[#111111] text-white">
      <div className="glow-float pointer-events-none absolute -right-24 top-16 -z-10 h-80 w-80 rounded-full bg-[#ff5c00]/15 blur-3xl md:h-[28rem] md:w-[28rem]" />
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff5c00]">
            Printing Services
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
            Printed materials that leave a lasting impression.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
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
              className="rounded-[28px] border border-white/10 bg-[#111111] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:border-[#ff5c00]/30"
            >
              <span className="rounded-full bg-[#ff5c00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#ff5c00]">
                Print Solution
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[28px] border border-white/10 bg-[#111111] p-6 md:p-8">
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
