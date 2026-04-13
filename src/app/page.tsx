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

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Phytocliniq logo" className="h-18 w-auto rounded-md object-contain" />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-slate-600 transition hover:text-slate-900">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://phytocliniq.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white md:inline-flex"
            >
              Open App
            </a>
            <a
              href="#pricing"
              className="inline-flex rounded-xl bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-800"
            >
              Start Pilot
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-teal-800">
            Botanical decision support for nutraceutical teams
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Clear botanical ingredient decisions for product teams.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Phytocliniq turns scattered botanical research, formulation context, and documentation needs into structured ingredient briefs and comparison reports so scientific, formulation, and product teams can move faster with more clarity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://phytocliniq.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl bg-teal-700 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-teal-800"
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

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Structured briefs", "Ingredient-level decision outputs"],
              ["Comparison reports", "Side-by-side botanical review"],
              ["Startup-ready", "Premium shell + app workflow"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <div className="mt-1 text-sm text-slate-600">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-2xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">Sample Ingredient Brief</div>
                <div className="text-xs text-slate-500">Ginger • Menstrual Support • Internal review</div>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                Recommendation: Compare Further
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Evidence summary</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Human evidence appears moderate for menstrual discomfort support. Signal is promising, but dose and formulation details vary across the literature.
                </p>
              </div>
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Formulation notes</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Practical for capsule and tablet formats. Best used with clear form, dose, and support-oriented positioning language.
                </p>
              </div>
              <div className="rounded-2xl bg-stone-50 p-4 md:col-span-2">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Scorecard</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Ingredient Definition", "Strong"],
                    ["Evidence Strength", "Moderate"],
                    ["Safety Context", "Moderate"],
                    ["Formulation Practicality", "Strong"],
                    ["Positioning Readiness", "Moderate"],
                  ].map(([label, score]) => (
                    <div key={label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                      <span className="text-slate-700">{label}</span>
                      <span className="font-medium text-slate-900">{score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Product</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for teams deciding what to advance.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Phytocliniq is not a consumer wellness chatbot. It is a structured internal workflow for evaluating botanical ingredients before deeper formulation, positioning, documentation, and product development decisions move forward.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Ingredient Briefs",
              text: "Generate structured internal briefs with evidence summary, safety context, formulation notes, documentation expectations, positioning notes, and recommendation state.",
            },
            {
              title: "Comparison Reports",
              text: "Compare 2–5 botanicals side by side using the same scoring framework, so product teams can review options more consistently.",
            },
            {
              title: "Decision Framework",
              text: "Apply a fixed evaluation lens across evidence strength, ingredient definition, safety context, formulation practicality, and positioning readiness, with a compliance-aware review mindset.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sample-brief" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Sample brief</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                What the customer receives.
              </h2>
              <p className="mt-4 text-slate-600">
                A premium internal decision brief designed for product meetings — clear recommendation, clear scorecard, and concise sections that support faster ingredient review, formulation discussion, and documentation planning.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Recommendation banner",
                "5-pillar scorecard",
                "Evidence summary",
                "Safety context",
                "Formulation notes",
                "Positioning notes",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Start with pilots, then scale.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Simple pricing for early access, pilot testing, and founder-led onboarding, with a workflow designed for product, formulation, and scientific review teams.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border p-6 shadow-sm ${
                tier.featured
                  ? "border-teal-700 bg-teal-700 text-white shadow-lg shadow-teal-900/10"
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
                    <span className={`mt-0.5 h-2.5 w-2.5 rounded-full ${tier.featured ? "bg-white" : "bg-teal-700"}`} />
                    <span className={tier.featured ? "text-teal-50" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  tier.featured
                    ? "bg-white text-teal-700 hover:bg-stone-100"
                    : "bg-teal-700 text-white hover:bg-teal-800"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            [
              "Is Phytocliniq a consumer app?",
              "No. The product is designed as an internal decision-support workflow for nutraceutical and botanical product teams.",
            ],
            [
              "Does it replace legal or regulatory review?",
              "No. It is intended to support internal product evaluation, not to replace formal regulatory, legal, quality, or manufacturing review.",
            ],
            [
              "Can I already use the app?",
              "Yes. Early pilot users can access the current app while premium features and user accounts are being expanded.",
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

      <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="rounded-[28px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Start pilot</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Bring more clarity to botanical ingredient decisions and stronger discipline to formulation-facing review.
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Start with a pilot, review sample outputs, or open the current application to see the MVP in action.
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
                href="mailto:mana@phytocliniq.com"
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
            <img src="/logo.png" alt="Phytocliniq logo" className="h-8 w-auto rounded-md object-contain" />
            <span>© 2026 Phytocliniq. Evidence Made Clear.</span>
          </div>
          <div>Prepared for internal product review workflows. Not legal or regulatory advice.</div>
        </div>
      </footer>
    </main>
  );
}
