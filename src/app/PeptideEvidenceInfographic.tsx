type StageIconName = "plant" | "flask" | "analysis" | "screen" | "preclinical" | "clinical";

const stages: { number: string; title: string; description: string; icon: StageIconName }[] = [
  { number: "01", title: "Plant source", description: "Confirm botanical identity, plant part, and starting material", icon: "plant" },
  { number: "02", title: "Peptide generation", description: "Extraction, enzymatic hydrolysis, fermentation or isolation", icon: "flask" },
  { number: "03", title: "Characterization", description: "Sequence identification, HPLC purity, mass spectrometry", icon: "analysis" },
  { number: "04", title: "Bioactivity screening", description: "Mechanistic assays, enzyme inhibition, cellular responses", icon: "screen" },
  { number: "05", title: "Preclinical evaluation", description: "Reproducibility, exposure, stability, toxicity and model relevance", icon: "preclinical" },
  { number: "06", title: "Clinical translation", description: "Human outcomes, safety, dose, product relevance and evidence limitations", icon: "clinical" },
];

function StageIcon({ type }: { type: StageIconName }) {
  const common = { viewBox: "0 0 120 120", className: "h-24 w-24 sm:h-28 sm:w-28", fill: "none", "aria-hidden": true as const };
  switch (type) {
    case "plant":
      return <svg {...common}><path d="M61 102V30M61 72Q41 49 23 52Q28 79 61 84M61 60Q86 36 101 40Q97 66 61 73M61 45Q45 25 50 11Q72 19 70 43" stroke="#316d55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 52Q30 77 61 84Q59 58 23 52Z" fill="#8dc59d"/><path d="M101 40Q91 64 61 73Q62 49 101 40Z" fill="#72ae8a"/><path d="M50 11Q69 20 70 43Q50 41 50 11Z" fill="#b5d7ac"/><path d="M36 62L53 76M86 51L71 65" stroke="#e4f0e2" strokeWidth="1.8"/><path d="M38 103H84" stroke="#729882" strokeWidth="2.5" strokeLinecap="round"/></svg>;
    case "flask":
      return <svg {...common}><path d="M48 13H73M54 13V48L30 92Q24 103 39 105H82Q96 105 88 91L66 48V13" stroke="#365b60" strokeWidth="3.8" strokeLinecap="round"/><path d="M41 75Q61 67 81 75L94 98Q89 105 81 105H39Q29 105 31 97Z" fill="#a2c9ae" fillOpacity=".8"/><path d="M47 84Q58 79 70 86M64 95L66 93" stroke="#e1f4e2" strokeWidth="3" strokeLinecap="round"/><path d="M48 14H73" stroke="#365b60" strokeWidth="5" strokeLinecap="round"/><circle cx="66" cy="72" r="3" fill="#316d55"/><circle cx="52" cy="91" r="2" fill="#316d55"/></svg>;
    case "analysis":
      return <svg {...common}><path d="M15 95H105M19 20V95" stroke="#577987" strokeWidth="2" strokeLinecap="round"/><path d="M19 94H26L30 77L35 94H41L45 60L49 93H54L59 26L65 94H70L75 49L80 93H86L90 71L94 94H102" stroke="#185b78" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/><path d="M19 79H104M19 58H104M19 37H104" stroke="#d7e9ec" strokeWidth="1" strokeDasharray="3 4"/></svg>;
    case "screen":
      return <svg {...common}><ellipse cx="60" cy="85" rx="43" ry="17" fill="#d9ede3" stroke="#5b8a79" strokeWidth="3"/><path d="M17 85V71Q60 84 103 71V85" fill="#b8dbc6" fillOpacity=".7" stroke="#5b8a79" strokeWidth="3"/><ellipse cx="60" cy="71" rx="43" ry="17" fill="#eaf7ef" stroke="#5b8a79" strokeWidth="3"/><circle cx="43" cy="67" r="8" fill="#a5d0b4"/><circle cx="64" cy="75" r="8" fill="#a5d0b4"/><circle cx="79" cy="65" r="7" fill="#a5d0b4"/><path d="M76 12L94 31L72 53" stroke="#4a7b77" strokeWidth="7" strokeLinecap="round"/><path d="M91 29L72 48" stroke="#c3e3d4" strokeWidth="4" strokeLinecap="round"/><path d="M71 56Q63 67 70 68Q79 67 71 56Z" fill="#62a6aa"/></svg>;
    case "preclinical":
      return <svg {...common}><path d="M24 81Q16 45 52 44Q74 43 83 65Q99 69 98 80Q98 95 75 96H38Q24 96 24 81Z" fill="#eef2f0" stroke="#9baeb1" strokeWidth="2.5"/><circle cx="51" cy="43" r="14" fill="#eff3f1" stroke="#9baeb1" strokeWidth="2.5"/><circle cx="43" cy="35" r="9" fill="#f9eeee" stroke="#c6acac" strokeWidth="2.5"/><circle cx="66" cy="38" r="8" fill="#f9eeee" stroke="#c6acac" strokeWidth="2.5"/><circle cx="57" cy="49" r="2" fill="#334a50"/><circle cx="64" cy="55" r="2.5" fill="#c28d91"/><path d="M86 80Q108 76 109 59" stroke="#c6cbd0" strokeWidth="3" strokeLinecap="round"/><path d="M26 96V101M77 96V101" stroke="#8b9a9a" strokeWidth="3" strokeLinecap="round"/><path d="M74 18V28M84 12V28M94 5V28M104 16V28" stroke="#6aab89" strokeWidth="5" strokeLinecap="round"/></svg>;
    case "clinical":
      return <svg {...common}><circle cx="60" cy="33" r="15" fill="#528d80"/><circle cx="27" cy="45" r="11" fill="#8bb5a6"/><circle cx="93" cy="45" r="11" fill="#8bb5a6"/><path d="M35 100V76Q35 55 60 55Q85 55 85 76V100Z" fill="#528d80"/><path d="M8 99V72Q8 61 26 61Q34 61 37 66M112 99V72Q112 61 94 61Q86 61 83 66" stroke="#8bb5a6" strokeWidth="13" strokeLinecap="round"/><path d="M84 75L103 81V96Q101 108 94 112Q83 105 84 95Z" fill="#176a67" stroke="#ffffff" strokeWidth="2"/><path d="M90 94L94 98L101 90" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
}

export default function PeptideEvidenceInfographic() {
  return (
    <section id="insights" aria-labelledby="insights-heading" className="scroll-mt-32 border-b border-[#d6e5d9] bg-white px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#285f55] sm:text-sm">PhytoCliniq · Research Insights</p>
          <h2 id="insights-heading" className="mt-4 text-3xl font-semibold tracking-tight text-[#16334d] sm:text-4xl lg:text-[42px]">
            From Plant Protein to <span className="text-[#286f61]">Bioactive Peptide</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">The scientific evidence pathway — and where translation becomes challenging.</p>
        </div>

        <ol aria-label="Plant peptide research evidence pathway" className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {stages.map((stage) => (
            <li key={stage.number} className="relative flex flex-col items-center rounded-[22px] border border-[#e0ebe3] bg-[#fbfdfb] px-3 pb-6 pt-5 text-center shadow-sm shadow-[#d9e7dd]/30">
              <span className="absolute -top-3.5 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#347d6c] text-xs font-semibold text-white shadow-sm">{stage.number}</span>
              <div className="mt-2 flex h-32 w-32 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#eaf3ec)]">
                <StageIcon type={stage.icon} />
              </div>
              <h3 className="mt-3 min-h-12 text-base font-semibold leading-6 text-[#16334d]">{stage.title}</h3>
              <div aria-hidden="true" className="my-2 h-1 w-10 rounded-full bg-[#6faaa0]" />
              <p className="text-sm leading-[1.55] text-slate-600">{stage.description}</p>
            </li>
          ))}
        </ol>

        <aside className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-[#b9d8c7] bg-[#f0f7f1] px-5 py-6 sm:flex-row sm:items-center sm:px-8">
          <div aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b9d8c7] bg-white text-2xl text-[#286f61]">✦</div>
          <div>
            <h3 className="text-xl font-semibold text-[#286f61]">The PhytoCliniq principle</h3>
            <p className="mt-1 text-base leading-7 text-[#16334d]">
              <strong>Biological activity is not the same as demonstrated clinical benefit.</strong> Every conclusion must be matched to the specific material, study model, and quality of evidence.
            </p>
          </div>
        </aside>

        <div className="mt-7 text-center text-xs leading-6 text-slate-500">
          <p>Educational research framework; stages are illustrative, not evidence that a particular peptide has reached clinical use.</p>
          <p className="mt-2">
            Selected literature:{" "}
            <a className="font-medium text-[#285f55] underline underline-offset-2 hover:text-[#17483f]" target="_blank" rel="noopener noreferrer" href="https://doi.org/10.3389/fsufs.2021.769028">Ying et al., 2021</a>
            {" · "}
            <a className="font-medium text-[#285f55] underline underline-offset-2 hover:text-[#17483f]" target="_blank" rel="noopener noreferrer" href="https://doi.org/10.3389/fsufs.2024.1292297">Nirmal et al., 2024</a>
            {" · "}
            <a className="font-medium text-[#285f55] underline underline-offset-2 hover:text-[#17483f]" target="_blank" rel="noopener noreferrer" href="https://doi.org/10.3390/nu16193277">Sun et al., 2024</a>
          </p>
        </div>
      </div>
    </section>
  );
}
