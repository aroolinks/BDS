import Link from "next/link";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

const contactDetails = [
  {
    label: "Email",
    value: "info@berkshiredigitalstudio.co.uk",
    href: "mailto:info@berkshiredigitalstudio.co.uk",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "07733282138",
    href: "tel:+447733282138",
    icon: Phone,
  },
  {
    label: "Address",
    value: "51 Longwood Avenue, Langley, Slough. SL3 8GH",
    href: "https://maps.google.com/?q=51%20Longwood%20Avenue%20Langley%20Slough%20SL3%208GH",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <main className="pb-16 pt-28 md:pt-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[32px] border border-[#E5E5E5] bg-[#F8F8F8] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#666666]">
              Contact us
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-[#111111] md:text-6xl">
              Let’s build the kind of digital presence your business deserves.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#666666]">
              Whether you need a website, Shopify storefront, mobile app, brand refresh, or print collateral, we’re here to help shape a polished solution that feels premium and performs with purpose.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:info@berkshiredigitalstudio.co.uk"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Email Us
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-[#E5E5E5] bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-[28px] border border-[#E5E5E5] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111111]"
                >
                  <div className="mt-1 rounded-full bg-[#F8F8F8] p-3 text-[#111111]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#666666]">
                      {item.label}
                    </div>
                    <div className="mt-2 text-lg font-medium text-[#111111] group-hover:text-[#111111]">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <section className="mt-8 rounded-[32px] border border-[#E5E5E5] bg-[#F8F8F8] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#666666]">
                Quick enquiry
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111111] md:text-4xl">
                Tell us what you need.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[#666666]">
                Share a few details and we’ll get back to you with the best next step for your project.
              </p>
            </div>

            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-[#666666]">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#111111]"
                  />
                </label>
                <label className="grid gap-2 text-sm text-[#666666]">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#111111]"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-[#666666]">
                Service
                <select className="rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#111111]">
                  <option>Web Design</option>
                  <option>Shopify Development</option>
                  <option>Mobile App</option>
                  <option>Printing Services</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm text-[#666666]">
                Project Details
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#111111]"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-[#666666]">
                  <MessageSquare className="h-4 w-4" />
                  Response within 1 working day
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
}
