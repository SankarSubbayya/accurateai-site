import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://accurateai.org"),
  title: "AccurateAI — open-source AI for healthcare, governance, and decision-support",
  description:
    "Open-source AI projects by Sankar Subbayya. Multimodal triage on AMD MI300X, offline clinical decision-support on Gemma 4, governance plane for enterprise AI agents. Each project ships with its eval, its safety net, and its source.",
  openGraph: {
    title: "AccurateAI",
    description:
      "Open-source AI for healthcare access, enterprise governance, and decision-support. Each project ships with its eval, its safety net, and its source.",
    url: "https://accurateai.org",
    siteName: "AccurateAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AccurateAI",
    description:
      "Open-source AI for healthcare, governance, and decision-support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
