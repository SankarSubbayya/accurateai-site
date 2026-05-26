type Project = {
  name: string;
  blurb: string;
  tag: string;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    name: "Delphi",
    image: "/projects/delphi.png",
    imageAlt:
      "Delphi headline slide — 13.3% to 79.5%, +66.2 pp shift after a single news shock.",
    blurb:
      "Synthetic populations as a computational substrate. You ask any question — 'will the Fed cut rates?', 'pretest this tagline', 'stress-test this decision' — and dozens of Gemini 3.5 Flash sub-agents, each role-playing a different American persona generated from US Census demographics and grounded in live web, reason in parallel. In ~60 seconds you get a probabilistic forecast, the strongest reasons for and against, where demographics diverge, and a striking outlier quote — synthesized into a Wall Street Journal–style summary by a final Gemini call. Live-demoed with a sixty-percentage-point swing on one news shock.",
    tag: "Google I/O Hackathon · May 2026",
    liveUrl: "https://delphi-9fc.pages.dev",
    repoUrl: "https://github.com/SankarSubbayya/delphi",
  },
  {
    name: "Path to Care",
    image: "/projects/path_to_care.png",
    imageAlt: "Path to Care · AMD Developer Hackathon project poster.",
    blurb:
      "Multimodal, agentic triage decision-support for rural healthcare in the Global South. A phone photo plus a typed narrative becomes a top-3 condition guess, a Red/Yellow/Green urgency, and a structured pre-visit SOAP for the clinic doctor — contextualized by village distance, cost, and harvest season. Built in 24 hours on a single AMD Instinct MI300X. Never diagnoses.",
    tag: "AMD Developer Hackathon · May 2026",
    liveUrl: "https://pathtocare.pages.dev",
    repoUrl: "https://github.com/SankarSubbayya/path_to_care",
  },
  {
    name: "Sentinel Health",
    image: "/projects/sentinel_health.png",
    imageAlt: "Sentinel Health · Gemma 4 Good Hackathon project poster.",
    blurb:
      "Offline triage for community health workers in low-resource settings. Multimodal Gemma 4 + a deterministic safety layer + a WhatsApp handoff to the hub physician — runs entirely on a clinic laptop, no internet. Scoped to five grassroots emergencies: trauma, poisoning, snake bite, MI, stroke.",
    tag: "Gemma 4 Good Hackathon · May 2026",
    liveUrl: "https://sentinel-health.pages.dev",
    repoUrl: "https://github.com/SankarSubbayya/sentinel-health",
  },
  {
    name: "Agent Sentinel",
    image: "/projects/agent_sentinel.png",
    imageAlt: "Agent Sentinel · AI & Big Data Expo project poster.",
    blurb:
      "Governance plane for enterprise AI agents. Gates every tool call, signs the audit trail with hash-chained HMAC, and meters per-BU spend. Built on Gemini 2.5 Flash + Pro with Cached Content over full policy documents. The control plane between agentic pilots and production.",
    tag: "AI & Big Data Expo · San Jose · May 2026",
    liveUrl: "https://agent-sentinel.pages.dev",
    repoUrl: "https://github.com/SankarSubbayya/agent_sentinel",
  },
];

// Person + Organization schema for SEO / link previews. Goes inline in the
// homepage <body>; search engines pick it up regardless of position.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://accurateai.org/#sankar",
      name: "Sankaranarayanan Subbayya",
      alternateName: "Sankar Subbayya",
      url: "https://accurateai.org",
      sameAs: [
        "https://github.com/SankarSubbayya",
        "https://huggingface.co/sankara68",
        "https://linkedin.com/in/sankarsu",
        "https://sankarsubbayya.github.io",
      ],
      jobTitle: "AI Engineer & Architect",
      description:
        "Veteran AI engineer specializing in Generative AI, multi-agent orchestration, and autonomous systems.",
    },
    {
      "@type": "Organization",
      "@id": "https://accurateai.org/#org",
      name: "AccurateAI",
      url: "https://accurateai.org",
      founder: { "@id": "https://accurateai.org/#sankar" },
      sameAs: ["https://github.com/SankarSubbayya"],
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-16 sm:mb-20">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)] mb-4">
            <span
              className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)]"
              style={{ boxShadow: "0 0 0 4px rgba(185,28,28,0.12)" }}
              aria-hidden
            />
            AccurateAI · open source
          </p>
          <h1
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-[-0.025em] text-[color:var(--foreground)] mb-5"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
          >
            AI products,
            <br />
            built in plain <em className="text-[color:var(--accent)] font-normal not-italic">sight.</em>
          </h1>
          <p className="text-lg sm:text-xl text-[color:var(--muted)] max-w-2xl leading-relaxed">
            Open-source AI for healthcare access, enterprise governance, and
            clinical decision-support. Each project ships with its
            adversarial eval, its safety net, and its source — by{" "}
            <a
              href="https://github.com/SankarSubbayya"
              className="text-[color:var(--foreground)] hover:text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)] underline-offset-4"
            >
              Sankar Subbayya
            </a>
            .
          </p>
        </header>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            Projects
          </h2>
          <ul className="space-y-5">
            {projects.map((p) => (
              <li
                key={p.name}
                className="group bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl overflow-hidden transition-all hover:border-[color:var(--accent)]"
                style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.02)" }}
              >
                <a
                  href={p.liveUrl ?? p.repoUrl}
                  className="block aspect-[1200/630] bg-[color:var(--border)]/30 overflow-hidden"
                  aria-label={`Open ${p.name}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </a>
                <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[color:var(--accent)]">
                    {p.name}
                  </h3>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
                    {p.tag}
                  </span>
                </div>
                <p className="text-[color:var(--foreground)]/90 leading-relaxed mb-4">
                  {p.blurb}
                </p>
                <div className="flex flex-wrap gap-2 font-[family-name:var(--font-mono)] text-xs">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[color:var(--accent)] text-white hover:bg-[color:var(--foreground)] transition-colors"
                    >
                      Try demo →
                    </a>
                  )}
                  <a
                    href={p.repoUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
                  >
                    Source ↗
                  </a>
                </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            What ties them together
          </h2>
          <div className="text-[color:var(--foreground)]/90 leading-relaxed space-y-4">
            <p>
              <strong>Four projects, one posture: AI that names its own limits.</strong>
            </p>
            <p>
              Path to Care never produces a diagnosis. Sentinel Health never
              overrides a red flag. Agent Sentinel never lets a model bypass
              its policy gate. Delphi never claims certainty without showing
              where its personas disagreed. The safety layer is code, not a
              disclaimer.
            </p>
            <p>
              Every project ships an adversarially-authored test set and a
              measurable safety target — zero false-negatives on Red triage
              for{" "}
              <a
                href="https://github.com/SankarSubbayya/path_to_care/blob/main/results/tuned_metrics.json"
                className="underline decoration-[color:var(--accent-soft)] underline-offset-4 hover:text-[color:var(--accent)]"
              >
                Path to Care
              </a>
              , zero unauthorized tool calls for Agent Sentinel, reproducible
              demographic-divergence reporting for Delphi — plus a
              single-command demo. If you can&apos;t reproduce the claim on
              the repo, the claim doesn&apos;t count.
            </p>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <footer className="pt-8 border-t border-[color:var(--border)] flex flex-wrap justify-between items-baseline gap-3 text-sm text-[color:var(--muted)]">
          <span>
            AccurateAI · Sankar Subbayya · Apache-2.0
          </span>
          <div className="flex gap-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider">
            <a
              href="https://github.com/SankarSubbayya"
              className="hover:text-[color:var(--accent)]"
            >
              GitHub
            </a>
            <a
              href="https://huggingface.co/sankara68"
              className="hover:text-[color:var(--accent)]"
            >
              🤗 HF
            </a>
            <a
              href="https://linkedin.com/in/sankarsu"
              className="hover:text-[color:var(--accent)]"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
