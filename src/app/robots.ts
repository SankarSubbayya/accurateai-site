import type { MetadataRoute } from "next";

// Required by Next 16 + `output: 'export'`: the metadata route must be
// statically generated at build time, not runtime.
export const dynamic = "force-static";

// Emits to /out/robots.txt at build time.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://accurateai.org/sitemap.xml",
  };
}
