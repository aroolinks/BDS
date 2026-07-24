import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import IndustriesPage from "@/components/industries/IndustriesPage";

export const metadata: Metadata = {
  title: "Industries | Berkshire Digital Studio",
  description:
    "Tailored websites, digital systems, and growth strategies for ambitious businesses across a range of industries.",
};

export default function IndustriesRoute() {
  return (
    <>
      <Navbar />
      <IndustriesPage />
      <Footer />
    </>
  );
}
