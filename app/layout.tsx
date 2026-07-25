import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.berkshiredigitalstudio.co.uk"),
  title: "Berkshire Digital Studio",
  description:
    "Premium digital agency website design, Shopify development, mobile app development, printing services, and SEO support for ambitious brands.",
  keywords: [
    "Berkshire Digital Studio",
    "Web Design",
    "Shopify Development",
    "Mobile App Development",
    "Printing Services",
    "SEO",
  ],
  openGraph: {
    title: "Berkshire Digital Studio",
    description:
      "Premium digital experiences for ambitious brands.",
    type: "website",
    url: "https://www.berkshiredigitalstudio.co.uk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#111111] text-white">
        {children}
      </body>
    </html>
  );
}
