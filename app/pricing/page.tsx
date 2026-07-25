import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PricingPage from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | Berkshire Digital Studio",
  description:
    "Transparent website and ongoing support pricing. Website packages from £995 and monthly support from £49, with a fixed quote before any work starts.",
};

export default function PricingRoute() {
  return (
    <>
      <Navbar />
      <PricingPage />
      <Footer />
    </>
  );
}
