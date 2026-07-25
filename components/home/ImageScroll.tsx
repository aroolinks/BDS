import Image from "next/image";
import Container from "@/components/ui/Container";

const logos = [
  { label: "WordPress", image: "/wordpress.jpg" },
  { label: "Elementor", image: "/elementor.png" },
  { label: "Shopify", image: "/shopify.png" },
  { label: "Wix", image: "/WIX.png" },
  { label: "Webflow", image: "/webflow.svg" },
  { label: "WooCommerce", image: "/WOOCOMMERCE.png" },
];

export default function ImageScroll() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <div className="overflow-hidden py-2">
          <div className="logo-marquee flex min-w-max items-center gap-10 px-5 sm:px-8">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.label}-${index}`}
                aria-hidden={index >= logos.length}
                className="flex min-w-[10rem] items-center justify-center px-6 py-1"
              >
                <div className="relative h-12 w-32 sm:h-14 sm:w-36">
                  <Image
                    src={logo.image}
                    alt={logo.label}
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}