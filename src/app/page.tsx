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

  const nav = ["Product", "Sample Brief", "Pricing", "FAQ"];

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
              href="https://phytocliniq.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white md:inline-flex"
            >
              Open App
            </a>
            <a
              href="#pricing"
              className="inline-flex rounded-2xl bg-[#2f6f63] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#275c53]"
            >
              Start Pilot
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(68,124,111,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,179,126,0.16),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-[#c9d8d3] bg-[#edf4f2] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#2f6f63]">
              Botanical decision support for nutraceutical teams
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Premium botanical intelligence for formulation-aware product decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              PHYTOCLINIQ turns scattered botanical research, formulation context, and documentation needs into structured ingredient briefs and comparison reports so scientific, formulation, and product teams can move faster with more clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://phytocliniq.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-[#2f6f63] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#275c53]"
              >
                Open App
              </a>
              <a
                href="#sample-brief"
                className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                View Sample Brief
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ["Structured briefs", "Clear internal outputs, not generic chat responses."],
                ["Formulation-aware", "Built for product, scientific, and documentation review."],
                ["Startup-ready", "Premium site outside, live app inside."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#dfece7] blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#efe2c7] blur-2xl" />
            <div className="relative rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
              <img
                src="/sample-brief-ginger.jpg"
                alt="Phytocliniq sample ingredient brief"
                className="h-auto w-full rounded-[24px] border border-slate-100 object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
              <div className="text-xs uppercase tracking-[0.16em] text-slate-500">Featured output</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">Ingredient Brief • Ginger for Menstrual Discomfort</div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">Product</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for teams deciding what to advance.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            PHYTOCLINIQ is not a consumer wellness chatbot. It is a structured internal workflow for evaluating botanical ingredients before deeper formulation, positioning, documentation, and product development decisions move forward.
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
            Start with pilots, then scale.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Simple pricing for early access, pilot testing, and founder-led onboarding, with a workflow designed for product, formulation, and scientific review teams.
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
                    Most popular
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
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  tier.featured
                    ? "bg-white text-[#2f6f63] hover:bg-stone-100"
                    : "bg-[#2f6f63] text-white hover:bg-[#275c53]"
                }`}
              >
                {tier.cta}
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

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-[32px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Start pilot</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Bring more clarity to botanical ingredient decisions and stronger discipline to formulation-facing review.
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Open the app, review the sample output, or start a pilot built for botanical product teams that need better evidence organization, clearer internal communication, and stronger documentation-aware review.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="https://phytocliniq.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-500"
              >
                Open App
              </a>
              <a
                href="mailto:hello@phytocliniq.com"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-400"
              >
                Contact Us
              </a>
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
          <div>Prepared for internal product review workflows. Not legal or regulatory advice.</div>
        </div>
      </footer>
    </main>
  );
}
