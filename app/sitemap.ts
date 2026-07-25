import type { MetadataRoute } from "next";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/industries", priority: 0.8 },
  // { path: "/portfolio", priority: 0.8 }, // hidden for now
  { path: "/printing", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `https://www.berkshiredigitalstudio.co.uk${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
