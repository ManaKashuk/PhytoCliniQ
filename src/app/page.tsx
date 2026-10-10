
const DISCOVERY_URL = "https://calendar.app.google/gKZQnTRR8rNChf7LA";
const DISCOVERY_LABEL = "Book a 20-Minute Discovery Call";

export default function PhytocliniqLandingPage() {
  const pricing = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "For solo founders, consultants, and light product exploration.",
      features: [
        "Up to 5 ingredient briefs / month",
        "Up to 2 comparison reports / month",
        "Markdown export",
        "Email support",
      ],
      cta: "Start Basic",
    },
    {
      name: "Pro",
      price: "$149",
      period: "/month",
      description: "For active nutraceutical teams evaluating ingredients more often.",
      features: [
        "Up to 20 ingredient briefs / month",
        "Up to 10 comparison reports / month",
        "Priority export workflow",
        "Saved project history",
      ],
      cta: "Start Pro",
      featured: true,
    },
    {
      name: "Plus",
      price: "$399",
      period: "/month",
      description: "For suppliers, consultants, and premium pilot customers.",
      features: [
        "Higher usage limits",
        "Custom report templates",
        "Pilot onboarding support",
        "Priority review and support",
      ],
      cta: "Book Plus",
    },
  ];

  const nav = ["Snapshot", "About", "Technology", "FAQ"];

  const productCards = [
    {
      title: "Ingredient Briefs",
      text: "Generate structured internal briefs with evidence summary, safety context, formulation notes, documentation expectations, positioning notes, and recommendation state.",
    },
    {
      title: "Comparison Reports",
      text: "Compare botanicals side by side using the same scoring framework so product teams can review options more consistently.",
    },
    {
      title: "Framework",
      text: "Apply a fixed evaluation lens across evidence strength, ingredient definition, safety context, formulation practicality, positioning readiness, and documentation discipline.",
    },
  ];

  const workflow = [
    ["01", "Select ingredient", "Choose the botanical, use case, and product context."],
    ["02", "Review structured output", "Get a formatted internal brief instead of a loose AI summary."],
    ["03", "Advance with discipline", "Use the brief for formulation, scientific, and positioning discussion."],
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#f6f3ec]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Phytocliniq logo" className="h-16 w-auto object-contain" />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
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
              className="inline-flex rounded-2xl bg-[#2f6f63] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#275c53]"
            >Book 20-Min Call</a>
          </div>
        </div>
      </header>


      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(68,124,111,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(201,179,126,0.16),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-[#c9d8d3] bg-[#edf4f2] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#2f6f63]">
              PhytoCliniq · Botanical Scientific Advisory
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your botanical claims deserve stronger evidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Scientific evidence and claims-risk reviews for botanical food, wellness, and supplement brands. Understand what published research supports, identify potential claims concerns, and develop more defensible product messaging.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DISCOVERY_URL} className="inline-flex items-center justify-center rounded-2xl bg-[#2f6f63] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#275c53]">{DISCOVERY_LABEL}</a>
              <a href="#snapshot" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:border-[#2f6f63]">Explore the Claim-Risk Snapshot</a>
            </div>
            <p className="mt-6 text-sm text-slate-500">Human-led scientific review · Defined scope · 7-business-day delivery</p>
          </div>
          <div className="rounded-[32px] border border-[#d8e3dd] bg-white p-7 shadow-xl shadow-slate-200/60">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">The evidence behind the claim</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight">A good botanical story is not the same as substantiated marketing.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Our review tests whether the claimed benefit fits the ingredient actually sold, how it is prepared, and the research behind it.</p>
            <div className="mt-6 grid gap-3">
              {[
                ["01", "Ingredient identity", "Species, plant part, preparation and dose"],
                ["02", "Research relevance", "Human evidence, study context and limitations"],
                ["03", "Claim interpretation", "Evidence gaps, risk flags and wording options"]
              ].map(([n, name, detail]) => (
                <div key={n} className="flex items-start gap-4 rounded-2xl bg-[#f6f3ec] p-4">
                  <span className="font-semibold text-[#2f6f63]">{n}</span>
                  <div><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="snapshot" className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Flagship service</p>
          <div className="mt-4 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Claim-Risk Snapshot</h2>
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
                  <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2f6f63]" />{item}</li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500">
                We distinguish ingredient forms, doses, and types of studies. A claim with limited evidence is not automatically unlawful, and a source-linked finding is not a regulatory sign-off.
              </p>
            </div>
            <aside className="rounded-[30px] border border-[#cddfd8] bg-[#eef5f2] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Fixed-fee scientific review</p>
              <p className="mt-4 text-5xl font-semibold tracking-tight">$950</p>
              <p className="mt-2 text-sm text-slate-600">One product · Defined scope · Written deliverable</p>
              <div className="my-6 border-t border-[#cddfd8]" />
              <p className="text-lg font-semibold">Delivered in 7 business days</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">The timeline starts when the scope is agreed and all required materials are received.</p>
              <a href={DISCOVERY_URL} className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[#2f6f63] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#275c53]">{DISCOVERY_LABEL}</a>
              <p className="mt-4 text-xs leading-5 text-slate-600">Introductory pilot pricing may be available after a discovery conversation.</p>
            </aside>
          </div>
          <p className="mt-9 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
            Scientific evidence assessment and preliminary claims-risk identification only. Not legal advice, comprehensive food-label compliance, mandatory-label review, laboratory testing, or final regulatory sign-off. Third-party press coverage is not automatically a brand claim; its inclusion requires an agreed scope and consideration of the brand's use of that content.
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
        <div className="relative min-h-[350px] rounded-[30px] bg-[#dfece7] bg-[url('/mana-lab.png')] bg-cover bg-center shadow-lg">
          <span className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2 text-xs font-semibold text-[#2f6f63] shadow-sm">Phytochemistry · Natural products · Pharmacology</span>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">The scientist behind the service</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Mana Kashuk, MSc, MBA</h2>
          <p className="mt-2 text-base font-semibold text-[#2f6f63]">Founder, PhytoCliniq</p>
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
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#2f6f63]">
            <a href="https://www.linkedin.com/in/manakashuk" target="_blank" rel="noopener noreferrer" className="hover:underline">Mana on LinkedIn ↗</a>
            <a href="https://www.manakashuk.me/" target="_blank" rel="noopener noreferrer" className="hover:underline">Professional portfolio ↗</a>
            <a href="mailto:mana@phytocliniq.com" className="hover:underline">Email Mana ↗</a>
          </div>
        </div>
      </section>
      <section id="technology" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Technology · Additional capability</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Botanical intelligence tools for product teams.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            In addition to the scientific advisory service, PhytoCliniq develops structured internal tools for ingredient briefs and comparison workflows. Software does not replace scientific, regulatory, or legal review.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {productCards.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Why it matters</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Better than a loose AI summary.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The value is not just summarization. The value is a repeatable decision workflow: ingredient identity, evidence strength, safety context, formulation practicality, positioning readiness, and documentation discipline in one format.
            </p>
            <div className="mt-6 rounded-2xl bg-[#f6f3ec] p-5">
              <div className="text-xs uppercase tracking-[0.16em] text-slate-500">Best-fit users</div>
              <div className="mt-3 grid gap-3 text-sm text-slate-700">
                <div>Scientific affairs teams</div>
                <div>Formulation and product development teams</div>
                <div>Ingredient suppliers and technical consultants</div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-[#eef4f2] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Workflow</p>
            <div className="mt-6 grid gap-4">
              {workflow.map(([step, title, text]) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/80 bg-white/80 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2f6f63] text-sm font-semibold text-white">
                    {step}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sample-brief" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Sample brief</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Show the output, not just the idea.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A premium internal decision brief designed for product meetings — clear recommendation, clear scorecard, and concise sections that support faster ingredient review, formulation discussion, and documentation planning.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Recommendation banner",
                  "Ingredient identity block",
                  "Evidence summary",
                  "Safety and cautions",
                  "Positioning notes",
                  "Documentation notes",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f3ec] px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-[#faf8f3] p-4 shadow-inner">
              <img
                src="/sample-brief-ginger.jpg"
                alt="Phytocliniq ginger sample brief"
                className="h-auto w-full rounded-[22px] border border-slate-200 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Software plans for ongoing ingredient intelligence.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Separate from the fixed-fee Claim-Risk Snapshot, these are early-access software tiers for internal botanical-ingredient research workflows. Confirm availability and capabilities before purchasing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border p-6 shadow-sm ${
                tier.featured
                  ? "border-[#2f6f63] bg-[#2f6f63] text-white shadow-lg shadow-[#244f47]/10"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className={`mt-2 text-sm leading-6 ${tier.featured ? "text-teal-50" : "text-slate-600"}`}>
                    {tier.description}
                  </p>
                </div>
                {tier.featured && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                    Featured tier
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-semibold">{tier.price}</span>
                <span className={`pb-1 text-sm ${tier.featured ? "text-teal-100" : "text-slate-500"}`}>{tier.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className={`mt-0.5 h-2.5 w-2.5 rounded-full ${tier.featured ? "bg-white" : "bg-[#2f6f63]"}`} />
                    <span className={tier.featured ? "text-teal-50" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:mana@phytocliniq.com?subject=Software%20Pilot%20Inquiry"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  tier.featured
                    ? "bg-white text-[#2f6f63] hover:bg-stone-100"
                    : "bg-[#2f6f63] text-white hover:bg-[#275c53]"
                }`}
              >
                Ask about this plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            [
              "Is PHYTOCLINIQ a consumer app?",
              "No. The product is designed as an internal decision-support workflow for nutraceutical and botanical product teams.",
            ],
            [
              "Does it replace legal or regulatory review?",
              "No. It is intended to support internal product evaluation, not to replace formal regulatory, legal, quality, or manufacturing review.",
            ],
            [
              "Why does this matter for formulation teams?",
              "Because ingredient decisions are not only about literature. They also affect product fit, supporting documentation, positioning discipline, and the path to formulation.",
            ],
            [
              "What does the app produce?",
              "Ingredient briefs, comparison reports, and a repeatable scoring workflow for internal decision-making across product, formulation, and scientific review functions.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{q}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>


      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[32px] bg-slate-900 px-8 py-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Start with a conversation</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Find out what the evidence supports.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">A complimentary 20-minute discovery call helps us determine what your existing regulatory reviewer covers and whether a scientific claims review could add value.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={DISCOVERY_URL} className="inline-flex items-center justify-center rounded-2xl bg-teal-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-teal-500">{DISCOVERY_LABEL}</a>
              <a href="mailto:mana@phytocliniq.com" className="text-center text-sm text-teal-200 hover:underline">mana@phytocliniq.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Phytocliniq logo" className="h-8 w-auto object-contain" />
            <span>© 2026 PHYTOCLINIQ. Evidence Made Clear.</span>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
              <span>Scientific assessment and preliminary claims-risk review, not legal advice or final label approval.</span>
              <a href="https://www.linkedin.com/in/manakashuk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2f6f63] hover:underline">Founder: Mana Kashuk · LinkedIn ↗</a>
            </div>
        </div>
      </footer>
    </main>
  );
}
