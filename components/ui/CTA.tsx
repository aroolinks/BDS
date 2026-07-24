import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-0">
      <div className="rounded-[32px] bg-[#0A0A0A] px-6 py-14 text-white md:px-10 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
              Let’s build something exceptional
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Ready to elevate your digital presence?
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
              From web design to Shopify launches and polished digital experiences, we help ambitious brands grow.
            </p>
          </div>
          <Button href="#contact" className="bg-white text-[#111111] hover:bg-[#f3f3f3]">
            Book a discovery call
          </Button>
        </div>
      </div>
    </section>
  );
}
