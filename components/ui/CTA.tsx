import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-0">
      <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] px-6 py-14 text-white shadow-[0_0_120px_-40px_rgba(255,92,0,0.35)] md:px-10 md:py-16">
        <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-[#ff5c00]/10 blur-3xl" />
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff5c00]">
              Let’s build something exceptional
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Ready to elevate your digital presence?
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
              From web design to Shopify launches and polished digital experiences, we help ambitious brands grow.
            </p>
          </div>
          <Button href="#contact">Book a discovery call</Button>
        </div>
      </div>
    </section>
  );
}
