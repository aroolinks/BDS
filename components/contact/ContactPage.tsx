import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
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
    <main className="relative isolate overflow-hidden pb-16 pt-44 md:pt-52 bg-[#111111] text-white">
      <div className="glow-float pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-[#ff5c00]/15 blur-3xl md:h-[28rem] md:w-[28rem]" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] p-6 md:p-8">
            <div className="glow-float pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-[#ff5c00]/15 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff5c00]">
              Contact us
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
              Let’s build the kind of digital presence your business deserves.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
              Whether you need a website, Shopify storefront, mobile app, brand refresh, or print collateral, we’re here to help shape a polished solution that feels premium and performs with purpose.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:info@berkshiredigitalstudio.co.uk">Email Us</Button>
              <Button href="/portfolio" variant="secondary">
                View Portfolio
              </Button>
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
                  className="group flex items-start gap-4 rounded-[28px] border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff5c00]/30"
                >
                  <div className="mt-1 rounded-full bg-white/5 p-3 text-white transition-colors duration-300 group-hover:bg-[#ff5c00]/15 group-hover:text-[#ff5c00]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                      {item.label}
                    </div>
                    <div className="mt-2 text-lg font-medium text-white">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <section className="relative isolate mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="glow-float-slow pointer-events-none absolute -bottom-16 -left-16 -z-10 h-56 w-56 rounded-full bg-[#ff5c00]/10 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff5c00]">
                Quick enquiry
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                Tell us what you need.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-white/60">
                Share a few details and we’ll get back to you with the best next step for your project.
              </p>
            </div>

            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/60">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#ff5c00]/50"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/60">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#ff5c00]/50"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-white/60">
                Service
                <select className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition-colors focus:border-[#ff5c00]/50">
                  <option className="bg-[#111111] text-white">Web Design</option>
                  <option className="bg-[#111111] text-white">Shopify Development</option>
                  <option className="bg-[#111111] text-white">Mobile App</option>
                  <option className="bg-[#111111] text-white">Printing Services</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm text-white/60">
                Project Details
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#ff5c00]/50"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <MessageSquare className="h-4 w-4 text-[#ff5c00]" />
                  Response within 1 working day
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff5c00] px-6 py-3 text-sm font-semibold text-[#111111] shadow-[0_8px_28px_rgba(255,92,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5c00]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] active:translate-y-0"
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
