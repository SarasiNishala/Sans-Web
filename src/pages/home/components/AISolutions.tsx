export default function AISolutions() {
  return (
    <section
      id="ai-advisor"
      className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-400/8 blur-3xl pointer-events-none"></div>

      <div className="relative px-6 md:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.18em] text-white/60 uppercase">
              AI Solutions Advisor
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"></span>
          </div>

          <h2 className="font-serif-display text-[44px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] text-balance">
            Not sure where to
            <br />
            <span className="italic text-white/60">start with AI?</span>
          </h2>

          <p className="mt-7 max-w-xl mx-auto text-[15px] md:text-[16px] leading-[1.65] text-white/70">
            Our AI Solutions Advisor helps you identify the highest-impact opportunities
            in your business — from automation to intelligence augmentation — and maps
            a clear, ROI-positive path to implementation.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              {
                icon: "ri-brain-line",
                title: "Opportunity Scan",
                desc: "Audit your workflows for AI-ready automation points.",
              },
              {
                icon: "ri-route-line",
                title: "Roadmap Design",
                desc: "Prioritized 90-day plan with clear milestones.",
              },
              {
                icon: "ri-line-chart-line",
                title: "ROI Modeling",
                desc: "Quantified impact before a single line of code.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-accent-400/30 transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-500/20 text-accent-400 mb-3 mx-auto">
                  <i className={`${item.icon} text-lg`}></i>
                </div>
                <h3 className="text-[14px] font-medium text-white mb-1">{item.title}</h3>
                <p className="text-[12px] text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-300 text-neutral-900 text-sm font-medium px-6 py-3.5 rounded-full transition-all whitespace-nowrap"
          >
            Book a free AI assessment
            <i className="ri-arrow-right-up-line text-base"></i>
          </a>
        </div>
      </div>
    </section>
  );
}