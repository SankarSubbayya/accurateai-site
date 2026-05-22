import type { MetadataRoute } from "next";

// Required by Next 16 + `output: 'export'`: the metadata route must be
// statically generated at build time, not runtime.
export const dynamic = "force-static";

// Emits to /out/sitemap.xml at build time.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://accurateai.org/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
