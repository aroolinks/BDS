import Image from "next/image";

const logos = [
  { label: "Elementor", image: "/elementor.svg" },
  { label: "Shopify", image: "/shopify.svg" },
  { label: "WordPress", image: "/wordpress.svg" },

];

export default function ImageScroll() {
  return (
    <section className="border-y border-white/10 bg-[#111111] py-10 sm:py-12">
      <div className="overflow-hidden">
        <div className="logo-marquee flex w-max items-center gap-16 sm:gap-24">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.label}-${index}`}
              aria-hidden={index >= logos.length}
              className="relative h-8 w-24 shrink-0 sm:h-9 sm:w-28"
            >
              <Image
                src={logo.image}
                alt={logo.label}
                fill
                sizes="112px"
                className="object-contain brightness-0 invert opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
