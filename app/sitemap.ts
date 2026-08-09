import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [{ url: "https://micaelaauzmendi.com", lastModified, changeFrequency: "monthly", priority: 1 }];
}
