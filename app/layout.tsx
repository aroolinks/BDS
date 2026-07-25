import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.berkshiredigitalstudio.co.uk"),
  title: "Website design & development Studio Berkshire",
  description:
    "Affordable website design and development in Berkshire. We build fast, modern, SEO-friendly websites and Shopify stores that help your business grow.",
  keywords: [
    "Berkshire Digital Studio",
    "Web Design",
    "Shopify Development",
    "Mobile App Development",
    "Printing Services",
    "SEO",
  ],
  openGraph: {
    title: "Website design & development Studio Berkshire",
    description:
      "Affordable website design and development in Berkshire. We build fast, modern, SEO-friendly websites and Shopify stores that help your business grow.",
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
