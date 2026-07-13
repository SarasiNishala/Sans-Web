import { useState } from "react";

const projects = [
  {
    id: "001",
    title: "Nexus Finance — AI Risk Engine",
    client: "Nexus Finance",
    year: "2026",
    tag: "AI/ML",
    discipline: "Machine Learning · Data Pipeline",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400",
    accent: "#D4FF3D",
  },
  {
    id: "002",
    title: "Orbital Health — Patient Intelligence",
    client: "Orbital Health",
    year: "2025",
    tag: "Enterprise",
    discipline: "SaaS · NLP · Compliance",
    image:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1400",
    accent: "#A8CC30",
  },
  {
    id: "003",
    title: "Vertex Logistics — Predictive Routing",
    client: "Vertex Logistics",
    year: "2025",
    tag: "Infrastructure",
    discipline: "Cloud · GraphQL · Real-time",
    image:
      "https://images.pexels.com/photos/7567446/pexels-photo-7567446.jpeg?auto=compress&cs=tinysrgb&w=1400",
    accent: "#C2E835",
  },
  {
    id: "004",
    title: "Cipher Security — Threat Detection",
    client: "Cipher Security",
    year: "2024",
    tag: "Security",
    discipline: "AI · Anomaly Detection · SOC",
    image:
      "https://images.pexels.com/photos/5380668/pexels-photo-5380668.jpeg?auto=compress&cs=tinysrgb&w=1400",
    accent: "#D4FF3D",
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="case-studies" className="relative bg-[#0a0a0a] text-white py-24 md:py-32">
      <div className="px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-[11px] font-mono-tech tracking-[0.18em] text-white/60 uppercase">
                Case studies · 2024 — 2026
              </span>
            </div>
            <h2 className="font-serif-display text-[44px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] text-balance">
              Systems that <span className="italic text-white/60">deliver</span>
              <br />
              real outcomes.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[14px] md:text-[15px] leading-[1.65] text-white/65">
              A curated selection of enterprise deployments across fintech, healthtech,
              logistics, and cybersecurity — each one measured by uptime, throughput, and ROI.
            </p>
            <a
              href="#all-work"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-white/90 hover:text-accent-400 border-b border-white/30 hover:border-accent-400 pb-0.5 transition-colors whitespace-nowrap"
            >
              View full portfolio
              <i className="ri-arrow-right-up-line text-base"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
          {projects.map((p, idx) => (
            <a
              key={p.id}
              href={`#work-${p.id}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 ${
                idx % 3 === 0 ? "lg:translate-y-0" : ""
              } ${idx === 1 ? "lg:mt-10" : ""} ${idx === 3 ? "lg:mt-10" : ""}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: p.accent }}
                  ></span>
                  <span className="text-[10.5px] font-mono-tech tracking-wider text-white/90 uppercase">
                    {p.tag}
                  </span>
                </div>
                <div
                  className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-accent-400 text-neutral-900 transition-all duration-500 ${
                    hovered === p.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <i className="ri-arrow-right-up-line text-base"></i>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10.5px] font-mono-tech tracking-wider text-white/60 uppercase">
                      Case · {p.id} / {p.client}
                    </div>
                    <h3 className="mt-1 font-serif-display text-[22px] md:text-[26px] leading-tight text-white">
                      {p.title}
                    </h3>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="text-[10.5px] font-mono-tech text-accent-400 tracking-wider uppercase">
                      {p.year}
                    </div>
                    <div className="mt-0.5 text-[11px] text-white/75">{p.discipline}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 md:mt-20 overflow-hidden border-y border-white/10 py-5">
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-white/40 font-serif-display text-[28px] md:text-[36px] italic">
            {[
              "AI/ML systems",
              "Enterprise SaaS",
              "Cloud infrastructure",
              "Data pipelines",
              "Security platforms",
              "Real-time analytics",
              "AI/ML systems",
              "Enterprise SaaS",
              "Cloud infrastructure",
              "Data pipelines",
              "Security platforms",
              "Real-time analytics",
            ].map((label, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>{label}</span>
                <span className="w-2 h-2 rounded-full bg-accent-400"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}