
const DISCOVERY_URL = "https://calendar.app.google/gKZQnTRR8rNChf7LA";
const DISCOVERY_LABEL = "Book a 20-Minute Discovery Call";

export default function PhytocliniqLandingPage() {
  const nav = ["Snapshot", "About", "Technology", "FAQ"];

  return (
    <main className="min-h-screen bg-[#f7faf7] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#f7faf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-5 md:gap-3 md:px-6 md:py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/brand-wordmark-approved.png?v=correct-logo-20261011" alt="PhytoCliniq" className="h-9 w-auto max-w-[145px] object-contain sm:h-11 sm:max-w-[185px] md:h-14 md:max-w-none lg:h-16" />
          </div>

          <nav aria-label="Primary sections" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:mana@phytocliniq.com"
              className="hidden rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white md:inline-flex"
            >Email Mana</a>
            <a
              href={DISCOVERY_URL}
              aria-label="Book a discovery call"
              className="inline-flex min-h-10 shrink-0 items-center rounded-md px-2 text-sm font-semibold text-[#285f55] underline decoration-[#9abca5] underline-offset-4 transition hover:text-[#1c4c45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285f55] md:hidden"
            >Book a Call</a>
            <a
              href={DISCOVERY_URL}
              className="hidden shrink-0 items-center justify-center rounded-xl bg-[#285f55] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1c4c45] md:inline-flex"
            >Book 20-Min Call</a>
          </div>
        </div>
        <nav aria-label="Mobile section navigation" className="border-t border-slate-200/80 bg-[#f7faf7] md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-1 px-3 py-1">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-lg px-1 py-2 text-center text-xs font-semibold text-[#285f55] transition hover:bg-[#e3eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285f55]"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,154,130,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(154,191,164,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-5 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-24">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-[#d1e2d5] bg-[#eef5ee] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#285f55]">
              PhytoCliniq · Botanical Scientific Advisory
            </span>
            <p className="mb-5 max-w-xl text-base font-semibold leading-6 text-[#285f55] sm:text-[17px]">
              Clinical Evidence &amp; Translational Insights for Medicinal Plants
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your botanical claims deserve stronger evidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Scientific evidence and claims-risk reviews for botanical food, wellness, and supplement brands. Understand what published research supports, identify potential claims concerns, and develop more defensible product messaging.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={DISCOVERY_URL} className="inline-flex w-full items-center justify-center rounded-2xl bg-[#285f55] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1c4c45] sm:w-auto">{DISCOVERY_LABEL}</a>
              <a href="#snapshot" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:border-[#285f55]">Explore the Claim-Risk Snapshot</a>
            </div>
            <p className="mt-6 text-sm text-slate-500">Human-led scientific review · Fixed fee $950 · 7-business-day delivery</p>
          </div>
          <div className="rounded-[32px] border border-[#d6e5d9] bg-white p-7 shadow-xl shadow-slate-200/60">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#285f55]">The evidence behind the claim</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight">A good botanical story is not the same as substantiated marketing.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Our review tests whether the claimed benefit fits the ingredient actually sold, how it is prepared, and the research behind it.</p>
            <div className="mt-6 grid gap-3">
              {[
                ["01", "Ingredient identity", "Species, plant part, preparation and dose"],
                ["02", "Research relevance", "Human evidence, study context and limitations"],
                ["03", "Claim interpretation", "Evidence gaps, risk flags and wording options"]
              ].map(([n, name, detail]) => (
                <div key={n} className="flex items-start gap-4 rounded-2xl bg-[#f7faf7] p-4">
                  <span className="font-semibold text-[#285f55]">{n}</span>
                  <div><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Scientific qualifications" className="border-y border-[#d6e5d9] bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-4 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:px-8">
          {[
            ["Doctoral researcher", "Pharmaceutical Sciences PhD Candidate"],
            ["Botanical research", "Phytochemistry and pharmacology"],
            ["Relevant training", "NSF Dietary Supplement Labeling Compliance course"],
          ].map(([heading, detail]) => (
            <div key={heading} className="border-b border-[#e3eee5] py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:py-2 sm:pr-4 sm:last:border-r-0">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#285f55]">{heading}</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-700">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="snapshot" className="scroll-mt-32 border-t border-slate-200 bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#285f55]">Flagship service</p>
          <div className="mt-4 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Claim-Risk Snapshot</h2>
                <span className="rounded-full bg-[#e8f2e9] px-4 py-2 text-sm font-semibold text-[#285f55]">$950 fixed fee</span>
              </div>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                A focused scientific review of your product's agreed public-facing claims, mapped against published evidence and delivered as a concise written report.
              </p>
              <h3 className="mt-7 font-semibold">What is included</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {[
                  "One botanical product, up to 10 agreed claims",
                  "Up to three agreed brand-controlled pages or marketing materials",
                  "Source-linked evidence and important study limitations",
                  "Prioritized preliminary risk flags and evidence gaps",
                  "Evidence-aligned wording options for further regulatory review",
                  "A written summary with practical next steps"
                ].map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#285f55]" />{item}</li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500">
                We distinguish ingredient forms, doses, and types of studies. A claim with limited evidence is not automatically unlawful, and a source-linked finding is not a regulatory sign-off.
              </p>
            </div>
            <aside className="rounded-[30px] border border-[#d3e4d6] bg-[#eff6f0] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#285f55]">Fixed-fee scientific review</p>
              <p className="mt-4 text-5xl font-semibold tracking-tight">$950</p>
              <p className="mt-2 text-sm text-slate-600">One product · Defined scope · Written deliverable</p>
              <div className="my-6 border-t border-[#d3e4d6]" />
              <p className="text-lg font-semibold">Delivered in 7 business days</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">The timeline starts when the scope is agreed and all required materials are received.</p>
              <a href={DISCOVERY_URL} className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[#285f55] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#1c4c45]">{DISCOVERY_LABEL}</a>
            </aside>
          </div>

          <div className="mt-10 rounded-[28px] border border-[#d3e4d6] bg-[#f7faf7] p-5 sm:p-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#285f55]">See what the review looks like</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">Illustrative Claim-Risk Snapshot excerpt</h3>
              </div>
              <span className="self-start rounded-full border border-[#d3e4d6] bg-white px-3 py-1 text-xs font-semibold text-[#285f55]">Fictional product · Not client work</span>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              An example of the evidence-to-claim reasoning in a paid review, not an assessment of a real brand or a complete report.
            </p>
            <details className="group mt-5 rounded-2xl border border-[#d3e4d6] bg-white p-4 sm:p-5">
              <summary className="cursor-pointer list-item text-sm font-semibold text-[#285f55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#285f55]">
                Open the sample claim assessment
              </summary>
              <div className="mt-5 grid gap-4 border-t border-[#e3eee5] pt-5 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Hypothetical product and claim</p>
                    <p className="mt-1 text-sm leading-6 text-slate-800">Ginger sparkling beverage: “Clinically proven to eliminate morning sickness.”</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Research relevance</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">
                      A systematic review of 12 randomized trials (1,278 participants) found improvement in pregnancy-related nausea with orally administered ginger, but not a statistically significant reduction in vomiting. Study preparations and doses cannot automatically substantiate this fictional beverage or an “eliminate” claim.
                    </p>
                    <a href="https://doi.org/10.1186/1475-2891-13-20" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex text-sm font-semibold text-[#285f55] underline underline-offset-2">
                      Source: Viljoen et al., 2014 · DOI ↗
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Preliminary flag</p>
                    <p className="mt-1 inline-flex rounded-lg bg-[#fbefe7] px-3 py-1 text-sm font-semibold text-[#904b2e]">High priority · Do not use as written</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      The claimed certainty and treatment implication exceed what this evidence establishes for an uncharacterized beverage. Product-specific formulation, dose, audience, and regulatory context require review.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Lower-risk wording direction</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">
                      “Made with ginger root” — only if factually correct. This is an ingredient description, not a substitute therapeutic claim; all proposed copy still requires context-specific review.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 border-t border-[#e3eee5] pt-4 text-xs leading-6 text-slate-500">
                Illustrative scientific and preliminary claims-risk reasoning only. Regulatory background:
                {" "}
                <a href="https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance" target="_blank" rel="noopener noreferrer" className="font-medium text-[#285f55] underline underline-offset-2">FTC substantiation guidance ↗</a>
                {" · "}
                <a href="https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/label-claims-conventional-foods-and-dietary-supplements" target="_blank" rel="noopener noreferrer" className="font-medium text-[#285f55] underline underline-offset-2">FDA food and supplement claim distinctions ↗</a>
              </p>
            </details>
          </div>
          <p className="mt-9 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
            Scientific evidence assessment and preliminary claims-risk identification only. Not legal advice, comprehensive food-label compliance, mandatory-label review, laboratory testing, or final regulatory sign-off. Third-party press coverage is not automatically a brand claim; its inclusion requires an agreed scope and consideration of the brand's use of that content.
          </p>
        </div>
      </section>

      <section id="process" aria-labelledby="process-heading" className="scroll-mt-32 border-b border-slate-200 bg-[#f0f6f1] px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#285f55]">Simple, defined-scope engagement</p>
          <h2 id="process-heading" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">A clear process from first conversation to your written evidence review.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Book a discovery call", "Use a complimentary 20-minute call to confirm whether a scientific review adds value."],
              ["02", "Agree on scope", "Confirm the product, up to 10 claims, selected materials, fee and exclusions."],
              ["03", "Scientific review", "The 7-business-day timeline begins after scope agreement and receipt of required materials."],
              ["04", "Receive your report", "Get source-linked evidence, prioritized flags, wording directions and written next steps."],
            ].map(([number, title, detail]) => (
              <div key={number} className="rounded-2xl border border-[#d3e4d6] bg-white p-5">
                <span className="text-sm font-semibold text-[#285f55]">{number}</span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
          <a href={DISCOVERY_URL} className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#285f55] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c4c45] sm:w-auto">
            {DISCOVERY_LABEL}
          </a>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
        <figure className="m-0 overflow-hidden rounded-[30px] border border-[#d6e5d9] bg-[#eef5ee] shadow-lg">
          <img
            src="/mana-kashuk-approved-headshot.jpg?v=20261011-exact"
            alt="Mana Kashuk, founder of PhytoCliniq, wearing a white blazer and sage blouse, with the approved PhytoCliniq logo"
            className="block h-auto w-full object-contain"
          />
          <figcaption className="border-t border-[#d6e5d9] px-5 py-4 text-center text-sm font-semibold leading-7 text-[#285f55]">
            Phytochemistry · Natural products · Pharmacology
          </figcaption>
        </figure>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#285f55]">The scientist behind the service</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Mana Kashuk, MSc, MBA</h2>
          <p className="mt-2 text-base font-semibold text-[#285f55]">Founder, PhytoCliniq</p>
          <p className="mt-1 text-sm font-medium leading-6 text-slate-600">Pharmaceutical Sciences PhD Candidate | Phytochemistry &amp; Pharmacology</p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Mana Kashuk is a pharmaceutical sciences doctoral researcher whose work spans phytochemistry, natural products, and pharmacology. Her doctoral research includes botanical extraction, fractionation, analytical characterization, and pharmacological evidence interpretation.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            PhytoCliniq combines evidence organization with human-led scientific review. Computational tools can accelerate the workflow; they do not replace examination of the underlying studies.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Relevant training includes NSF's Dietary Supplement Labeling Compliance course; this is not a credential for comprehensive conventional-food label sign-off.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#285f55]">
            <a href="https://www.linkedin.com/in/manakashuk" target="_blank" rel="noopener noreferrer" className="hover:underline">Mana on LinkedIn ↗</a>
            <a href="https://www.manakashuk.me/" target="_blank" rel="noopener noreferrer" className="hover:underline">Professional portfolio ↗</a>
            <a href="mailto:mana@phytocliniq.com" className="hover:underline">Email Mana ↗</a>
          </div>
        </div>
      </section>
      <section id="technology" className="scroll-mt-32 border-y border-slate-200 bg-[#f0f6f1] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#285f55]">Behind the scientific review</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Technology supports the work. Scientific judgment leads it.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              PhytoCliniq uses structured research workflows to organize botanical evidence and is developing internal ingredient-intelligence tools. These tools do not replace scientific assessment or regulatory and legal review.
            </p>
          </div>
          <a href="mailto:mana@phytocliniq.com?subject=PhytoCliniq%20Technology%20Inquiry" className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#285f55] px-5 py-3 text-sm font-semibold text-[#285f55] transition hover:bg-[#285f55] hover:text-white">
            Ask about technology
          </a>
        </div>
      </section>

      <section id="faq" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#285f55]">Frequently asked questions</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Before we work together</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {[
            [
              "What does the $950 Claim-Risk Snapshot include?",
              "One botanical product, up to 10 agreed claims, and up to three agreed brand-controlled pages or marketing materials. You receive a source-linked scientific review, preliminary claims-risk flags, and evidence-aligned wording options.",
            ],
            [
              "Does this replace legal or label-compliance review?",
              "No. The Snapshot is a scientific evidence and preliminary claims-risk review, not legal advice, comprehensive food or dietary supplement label compliance, or a final regulatory sign-off.",
            ],
            [
              "Can you assess statements made in an interview or article?",
              "Third-party press coverage is not automatically a brand claim. We can discuss whether and how that content is used by your brand, then agree in advance if it belongs in the review scope.",
            ],
            [
              "How quickly will I receive the report?",
              "The defined-scope written report is delivered within 7 business days after we agree on the scope and receive all required materials. The complimentary 20-minute discovery call helps determine fit before an engagement.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[32px] bg-[#194a44] px-8 py-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cfe6d5]">Start with a conversation</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Find out what the evidence supports.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#e0ece5]">A complimentary 20-minute discovery call helps us determine what your existing regulatory reviewer covers and whether a scientific claims review could add value.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={DISCOVERY_URL} className="inline-flex items-center justify-center rounded-2xl bg-[#508875] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#427863]">{DISCOVERY_LABEL}</a>
              <a href="mailto:mana@phytocliniq.com" className="text-center text-sm text-[#e2eee4] hover:underline">mana@phytocliniq.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/brand-wordmark-approved.png?v=correct-logo-20261011" alt="PhytoCliniq" className="h-8 w-auto object-contain" />
            <div className="flex flex-col gap-1">
              <span>© 2026 PHYTOCLINIQ</span>
              <span className="max-w-md text-sm leading-6 text-[#285f55]">
                Clinical Evidence &amp; Translational Insights for Medicinal Plants
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
              <span>Scientific assessment and preliminary claims-risk review, not legal advice or final label approval.</span>
              <a href="https://www.linkedin.com/in/manakashuk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#285f55] hover:underline">Founder: Mana Kashuk · LinkedIn ↗</a>
            </div>
        </div>
      </footer>
    </main>
  );
}
