import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Path to Care · Multimodal triage on AMD MI300X · AccurateAI",
  description:
    "Multimodal, agentic triage decision-support for rural healthcare in the Global South. Phone photo + typed narrative → top-3 conditions, Red/Yellow/Green urgency, structured pre-visit SOAP. Built in 24 hours on a single AMD Instinct MI300X. Never diagnoses.",
  alternates: { canonical: "https://accurateai.org/path-to-care" },
  openGraph: {
    title: "Path to Care",
    description:
      "Multimodal triage decision-support on AMD MI300X. Never diagnoses.",
    url: "https://accurateai.org/path-to-care",
    type: "article",
    images: [
      {
        url: "/path-to-care/lora_loss_curve.png",
        width: 1185,
        height: 699,
        alt: "Path to Care LoRA loss curve on MI300X.",
      },
    ],
  },
};

type LinkCard = {
  href: string;
  title: string;
  desc: string;
};

const tryItCards: LinkCard[] = [
  {
    href: "https://pathtocare.pages.dev",
    title: "Project landing (pathtocare.pages.dev)",
    desc: "The original single-page site with the full eval, fine-tuning detail, and the same content laid out as a standalone deployment.",
  },
  {
    href: "https://huggingface.co/spaces/sankara68/path-to-care",
    title: "Live demo on Hugging Face",
    desc: "Public, always-on Space. Upload a photo or describe in text — the Space HTTPs into the MI300X-hosted vLLM container for all model work.",
  },
  {
    href: "https://github.com/SankarSubbayya/path_to_care",
    title: "Source on GitHub",
    desc: "Full repo: orchestrator, MCP servers, LoRA training, eval harness, adversarial generator, Next.js frontend.",
  },
  {
    href: "https://huggingface.co/sankara68/path-to-care-triage-gemma4-lora",
    title: "LoRA adapter on HF Hub",
    desc: "The 180 MB triage adapter trained on MI300X. Load with PEFT or serve via vLLM --enable-lora.",
  },
];

type FineTuneRow = { label: string; value: React.ReactNode };

const fineTuneRows: FineTuneRow[] = [
  { label: "Base model", value: (<><code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">google/gemma-4-31B-it</code> (multimodal, dense)</>) },
  { label: "Adapter", value: (<>LoRA · <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">r=16</code>, <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">alpha=32</code>, <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">dropout=0.05</code>, <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">bias=none</code></>) },
  { label: "Target modules", value: (<>language-model self-attention (<code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">q_proj</code>, <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">k_proj</code>, <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">v_proj</code>, <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">o_proj</code>)</>) },
  { label: "Trainable parameters", value: "45.0 M of 31.3 B (0.14%)" },
  { label: "Training rows", value: "21 (image + SOAP + village context → urgency + reasoning)" },
  { label: "Epochs · effective batch size", value: "2 · 4" },
  { label: "Wall-clock time", value: "32 seconds" },
  { label: "Training loss", value: "3.90 → 0.58" },
];

export default function PathToCare() {
  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-xs font-mono text-[color:var(--muted)] mb-6">
          <a href="/" className="hover:text-[color:var(--accent)]">accurateai.org</a>
          {" / "}
          <span className="text-[color:var(--foreground)]">path-to-care</span>
        </p>

        <header className="mb-16 sm:mb-20">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)] mb-4">
            <span
              className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)]"
              style={{ boxShadow: "0 0 0 4px rgba(185,28,28,0.12)" }}
              aria-hidden
            />
            AMD Developer Hackathon · 2026
          </p>
          <h1
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-[-0.025em] text-[color:var(--foreground)] mb-5"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
          >
            Path to Care
          </h1>
          <p className="text-lg sm:text-xl text-[color:var(--muted)] max-w-2xl leading-relaxed">
            Multimodal, agentic triage decision-support for rural healthcare in
            the Global South. A phone photo plus a typed narrative becomes a
            top-3 condition guess, a Red / Yellow / Green urgency, and a
            structured pre-visit SOAP for the clinic doctor — contextualized by
            village distance, cost, and harvest season.{" "}
            <strong className="text-[color:var(--foreground)]">It never diagnoses.</strong>
          </p>
          <div className="flex flex-wrap gap-2 font-[family-name:var(--font-mono)] text-xs mt-6">
            <a
              href="https://huggingface.co/spaces/sankara68/path-to-care"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[color:var(--accent)] text-white hover:bg-[color:var(--foreground)] transition-colors"
            >
              Try demo on Hugging Face →
            </a>
            <a
              href="https://github.com/SankarSubbayya/path_to_care"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
            >
              Source ↗
            </a>
            <a
              href="https://pathtocare.pages.dev/slides/path_to_care.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
            >
              Slides (PDF) ↗
            </a>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            What it does
          </h2>
          <p className="text-[color:var(--foreground)]/90 leading-relaxed mb-4">
            A community health worker (or the patient) sends a phone photo of a
            skin lesion plus a short text history. Path to Care runs the image
            and narrative through a multimodal agentic pipeline and returns:
          </p>
          <ul className="space-y-2 pl-6 mb-5 list-disc marker:text-[color:var(--accent)] text-[color:var(--foreground)]/90 leading-relaxed">
            <li><strong>Top-3 conditions</strong> with confidence — never a single class label.</li>
            <li><strong>Red / Yellow / Green</strong> urgency, with the rule-based safety net only ever escalating, never relaxing.</li>
            <li><strong>Structured SOAP</strong> note for the clinic physician — chief complaint, HPI, exam, red flags, patient concerns.</li>
            <li><strong>Patient framing</strong> that names the cost-of-care tradeoff in the patient&apos;s own numbers (transport ₹, daily wage ₹, distance km).</li>
          </ul>
          <p className="text-[color:var(--foreground)]/90 leading-relaxed">
            Every patient-facing string passes through a deterministic{" "}
            <em>cardinal-rule</em> rewriter that strips diagnostic phrasing
            (<code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">&quot;you have X&quot;</code> → <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">&quot;signs suggest X&quot;</code>) before it leaves the API. The output is decision support, not a diagnosis.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            Architecture
          </h2>
          <ul className="space-y-2 pl-6 mb-5 list-disc marker:text-[color:var(--accent)] text-[color:var(--foreground)]/90 leading-relaxed">
            <li>
              <strong>Multimodal Gemma 4 31B-it</strong> serves both the image
              classifier and the triage reasoner from one set of weights on a
              single AMD Instinct MI300X (192 GB VRAM, ROCm).
            </li>
            <li>
              <strong>Qwen 2.5-7B-Instruct</strong> handles text-only SOAP
              extraction via a DSPy <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">NarrativeToSOAP</code> signature.
            </li>
            <li>
              <strong>LoRA SFT on MI300X</strong> — supervised fine-tune of the
              triage head; 32 s wall-clock, loss 3.90 → 0.58 in two epochs.
              45 M trainable parameters (0.14 % of 31.3 B). Served via vLLM{" "}
              <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">--enable-lora</code>.
            </li>
            <li>
              <strong>DSPy ReAct orchestrator</strong> coordinates five MCP
              servers: image classifier, SOAP extractor, village context, triage
              reasoner, and camera capture.
            </li>
            <li>
              <strong>vLLM (ROCm) in Docker</strong> for serving — OpenAI-compatible
              API on <code className="font-mono text-sm bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">:8000</code>. The Next.js frontend talks to it directly.
            </li>
            <li>
              <strong>Adversarial test set</strong> — 30 hand-authored cases
              (10 R / 10 Y / 10 G) with red-flag, contradiction, and
              off-distribution variants. Held out from training.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            Fine-tuning on MI300X
          </h2>
          <p className="text-[color:var(--foreground)]/90 leading-relaxed mb-4">
            The triage head is a LoRA SFT pass over Gemma 4 31B-it, run end to
            end on a single AMD Instinct MI300X. Two epochs, twenty-one training
            examples, finished in 32 seconds. Training script in{" "}
            <a className="text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)] underline-offset-4" href="https://github.com/SankarSubbayya/path_to_care/blob/main/training/lora_sft.py">training/lora_sft.py</a>;
            full log in{" "}
            <a className="text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)] underline-offset-4" href="https://github.com/SankarSubbayya/path_to_care/blob/main/logs/lora_train.log">logs/lora_train.log</a>.
          </p>
          <figure className="my-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/path-to-care/lora_loss_curve.png"
              alt="LoRA SFT loss curve — Path to Care, Gemma 4 31B-it on AMD MI300X. Cross-entropy loss falls from 3.90 at step 1 to 0.58 at step 10 across two epochs, in 32 seconds wall-clock."
              loading="lazy"
              className="w-full h-auto block border border-[color:var(--border)] rounded-xl bg-[color:var(--surface)]"
            />
            <figcaption className="mt-2 text-xs text-[color:var(--muted)] text-center">
              Training loss across the 32-second run on MI300X. Loss 3.90 → 0.58
              over 10 optimizer steps · 2 epochs · effective batch size 4.
            </figcaption>
          </figure>
          <table className="w-full border-collapse text-sm bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl overflow-hidden">
            <thead>
              <tr>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Parameter</th>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Value</th>
              </tr>
            </thead>
            <tbody>
              {fineTuneRows.map((row, i) => (
                <tr key={row.label} className={i < fineTuneRows.length - 1 ? "border-b border-[color:var(--border)]" : ""}>
                  <td className="px-4 py-2.5 align-top text-[color:var(--foreground)]">{row.label}</td>
                  <td className="px-4 py-2.5 align-top text-[color:var(--foreground)]">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[color:var(--muted)] mt-3 leading-relaxed">
            Adapter weights on Hugging Face Hub at{" "}
            <a className="text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)] underline-offset-4" href="https://huggingface.co/sankara68/path-to-care-triage-gemma4-lora">sankara68/path-to-care-triage-gemma4-lora</a>.
            The eval delta from this adapter is the{" "}
            <strong className="text-[color:var(--foreground)]">+7 pp top-1 accuracy lift</strong> on the SCIN top-16 holdout in the Results table below.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            Results
          </h2>
          <p className="text-[color:var(--foreground)]/90 leading-relaxed mb-5">
            Two complementary evaluations: a 30-case adversarial test set
            authored to probe the safety property (red flags, contradictions,
            off-distribution variants), and a 100-case held-out slice of the
            SCIN dermatology dataset to probe image-grounded classification.
          </p>

          <h3 className="font-semibold text-base mb-2 text-[color:var(--foreground)]">Triage urgency · 30 adversarial cases</h3>
          <p className="text-sm text-[color:var(--muted)] mb-3">
            Reward <code className="font-mono text-xs bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">R = 1.0</code> exact /{" "}
            <code className="font-mono text-xs bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">0.5</code> adjacent /{" "}
            <code className="font-mono text-xs bg-[color:var(--accent-bg)] text-[color:var(--accent)] px-1.5 py-0.5 rounded">0.0</code> off-by-two.
          </p>
          <table className="w-full border-collapse text-sm bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl overflow-hidden mb-2">
            <thead>
              <tr>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Run</th>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Mean reward</th>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Exact match</th>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">FN Red → Green</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[color:var(--border)]">
                <td className="px-4 py-2.5">Zero-shot baseline (Gemma 4 31B)</td>
                <td className="px-4 py-2.5 font-semibold">0.983</td>
                <td className="px-4 py-2.5 font-semibold">96.7%</td>
                <td className="px-4 py-2.5 font-semibold">0.0%</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">LoRA-tuned (180 MB adapter)</td>
                <td className="px-4 py-2.5 font-semibold">0.983</td>
                <td className="px-4 py-2.5 font-semibold">96.7%</td>
                <td className="px-4 py-2.5 font-semibold">0.0%</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-[color:var(--muted)] mb-7">
            Both runs hit the same ceiling — the single residual error is a
            Yellow → Green slip; no Red was missed. The headline here is the
            false-negative{" "}
            <strong className="text-[color:var(--foreground)]">Red → Green rate at 0.0%</strong> —
            the safety property that matters in the field.
          </p>

          <h3 className="font-semibold text-base mb-2 text-[color:var(--foreground)]">Image classification · SCIN top-16, 100-case holdout</h3>
          <p className="text-sm text-[color:var(--muted)] mb-3">
            Top-1 accuracy on a held-out slice of the Stanford{" "}
            <a className="text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)] underline-offset-4" href="https://github.com/google-research-datasets/scin">SCIN</a>{" "}
            dermatology dataset, restricted to the 16 most-frequent conditions.
          </p>
          <table className="w-full border-collapse text-sm bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl overflow-hidden mb-2">
            <thead>
              <tr>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Run</th>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Top-1 accuracy</th>
                <th className="text-left font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--accent)] bg-[color:var(--accent-bg)] px-4 py-2.5 border-b-2 border-[color:var(--accent-soft)]">Δ vs baseline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[color:var(--border)]">
                <td className="px-4 py-2.5">Zero-shot baseline (Gemma 4 31B)</td>
                <td className="px-4 py-2.5 font-semibold">28.0%</td>
                <td className="px-4 py-2.5">—</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">LoRA-tuned (same 180 MB adapter)</td>
                <td className="px-4 py-2.5 font-semibold">35.0%</td>
                <td className="px-4 py-2.5 font-semibold">+7.0 pp / +25% rel</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-[color:var(--muted)]">
            A 32-second LoRA training run on the MI300X moved top-1 from 28% to
            35% — a real learning signal beyond the saturated triage table
            above. Per-case results in{" "}
            <a className="text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)] underline-offset-4" href="https://github.com/SankarSubbayya/path_to_care/blob/main/results/scin_top16_topk_tuned.json">results/scin_top16_topk_tuned.json</a>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            Try it
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 list-none p-0">
            {tryItCards.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="block bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl p-5 hover:border-[color:var(--accent)] hover:-translate-y-px transition-all"
                  style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.02)" }}
                >
                  <div className="font-semibold text-[15px] mb-1 text-[color:var(--foreground)]">{c.title}</div>
                  <div className="text-[13px] text-[color:var(--muted)] leading-snug">{c.desc}</div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--foreground)] mb-6 pb-2 border-b border-[color:var(--border)]">
            The cardinal rule
          </h2>
          <blockquote className="border-l-4 border-[color:var(--accent)] bg-[color:var(--accent-bg)] pl-5 pr-4 py-3.5 my-2 text-[color:var(--foreground)] italic text-lg leading-relaxed">
            The system never produces diagnostic statements. Always{" "}
            <em>&quot;signs suggest infection&quot;</em>, never{" "}
            <em>&quot;you have cellulitis.&quot;</em> Image output is always
            top-3 with confidence, never a single class label, never binary
            sick / healthy.
          </blockquote>
          <p className="text-[color:var(--foreground)]/90 leading-relaxed mt-5">
            Enforcement is defense-in-depth: a system-prompt rule, a
            deterministic regex rewriter on every model output, and a unit-test
            suite that fails the build on diagnostic phrasing. This is not a
            disclaimer. It is enforced code.
          </p>
          <div className="mt-5 px-5 py-3.5 bg-[color:var(--accent-bg)]/40 border-l-[3px] border-[color:var(--accent)] rounded-r-md text-sm text-[color:var(--muted)]">
            Decision-support tool. Not a diagnostic system. Always consult a
            qualified physician.
          </div>
        </section>

        <footer className="pt-8 border-t border-[color:var(--border)] flex flex-wrap justify-between items-baseline gap-3 text-sm text-[color:var(--muted)]">
          <span>
            <a href="/" className="hover:text-[color:var(--accent)]">← Back to accurateai.org</a>
          </span>
          <span className="font-mono text-xs">Apache-2.0 · AMD Developer Hackathon · May 2026</span>
        </footer>
      </main>
    </div>
  );
}
