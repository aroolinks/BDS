import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Digital Services | Berkshire Digital Studio",
  description:
    "Web, ecommerce, marketing, AI automation, branding, and ongoing website support for ambitious businesses.",
};

export default function ServicesRoute() {
  return (
    <>
      <Navbar />
      <ServicesPage />
      <Footer />
    </>
  );
}
