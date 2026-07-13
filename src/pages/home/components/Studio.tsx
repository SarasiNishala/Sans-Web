import { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Arin Voss",
    role: "CEO · Chief Architect",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Lena Kowalski",
    role: "CTO · AI/ML Research",
    image:
      "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Marcus Chen",
    role: "VP Engineering · Platform",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Product · Data",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const stats = [
  { value: "12", suffix: ".4", label: "Years building systems" },
  { value: "48", suffix: "", label: "Engineers across 6 cities" },
  { value: "340", suffix: "+", label: "Production deployments" },
  { value: "99", suffix: ".9%", label: "Average platform uptime" },
];

export default function Studio() {
  const [activeMember, setActiveMember] = useState(0);

  return (
    <section
      id="about"
      className="relative bg-[#f5f7f0] text-neutral-900 py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-accent-400/25 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 w-[460px] h-[460px] rounded-full bg-accent-500/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] rounded-full bg-accent-300/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-10 w-[380px] h-[380px] rounded-full bg-accent-600/20 blur-3xl pointer-events-none"></div>

      <div className="relative px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-accent-500 shadow-[0_0_0_4px_rgba(212,255,61,0.18)]"></span>
              <span className="text-[11px] font-mono-tech tracking-[0.18em] text-accent-700 uppercase font-semibold">
                About Sans. · est. 2014
              </span>
            </div>
            <h2 className="font-serif-display text-[44px] md:text-[64px] lg:text-[80px] leading-[0.98] tracking-[-0.03em] text-balance">
              An engineering
              <br />
              <span className="italic text-accent-600">culture built on</span>
              <br />
              precision & speed.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-neutral-700 max-w-md">
              Sans. started with a simple belief: enterprise software should feel
              effortless. Today we are 48 engineers, researchers, and product builders
              shipping autonomous systems for teams that refuse to compromise on performance.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-[13px] font-medium px-5 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Meet the team
                <i className="ri-arrow-right-up-line"></i>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-700 hover:text-neutral-900 border-b border-neutral-400 hover:border-neutral-900 pb-0.5 transition-colors whitespace-nowrap"
              >
                Our tech stack
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[5/4] lg:aspect-auto lg:h-[560px] group">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Sans. engineering team in a modern tech office"
              className="w-full h-full object-cover object-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-xs bg-white/85 backdrop-blur-xl rounded-xl p-4 border border-white/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-accent-500 text-neutral-900">
                  <i className="ri-map-pin-2-line text-sm"></i>
                </div>
                <div>
                  <div className="text-[11px] font-mono-tech tracking-wider text-neutral-500 uppercase">
                    London · HQ
                  </div>
                  <div className="text-[13px] font-medium text-neutral-900">
                    Tech City, Old Street 12
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500">Office hours</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech text-accent-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
                  Mon — Fri · 09 — 18h
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5 md:gap-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5"
                >
                  <div className="font-serif-display text-[40px] md:text-[44px] leading-none text-neutral-900">
                    {s.value}
                    <span className="text-accent-500">{s.suffix}</span>
                  </div>
                  <div className="mt-2 text-[12px] text-neutral-600 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-900 text-white rounded-2xl p-5 md:p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-mono-tech tracking-wider text-white/60 uppercase">
                  Leadership · 04 of 48
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      setActiveMember((p) => (p - 1 + teamMembers.length) % teamMembers.length)
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-accent-500 hover:text-neutral-900 hover:border-accent-500 transition-colors"
                    aria-label="previous"
                  >
                    <i className="ri-arrow-left-line text-sm"></i>
                  </button>
                  <button
                    onClick={() =>
                      setActiveMember((p) => (p + 1) % teamMembers.length)
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-accent-500 hover:text-neutral-900 hover:border-accent-500 transition-colors"
                    aria-label="next"
                  >
                    <i className="ri-arrow-right-line text-sm"></i>
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={teamMembers[activeMember].image}
                    alt={teamMembers[activeMember].name}
                    className="w-full h-full object-cover object-top transition-opacity duration-500"
                    draggable={false}
                  />
                </div>
                <div>
                  <div className="font-serif-display text-[24px] leading-tight">
                    {teamMembers[activeMember].name}
                  </div>
                  <div className="text-[12px] text-white/65 mt-1">
                    {teamMembers[activeMember].role}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                {teamMembers.map((m, i) => (
                  <button
                    key={m.name}
                    onClick={() => setActiveMember(i)}
                    className={`flex-1 h-1 rounded-full transition-colors ${
                      i === activeMember ? "bg-accent-400" : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`go to ${m.name}`}
                  ></button>
                ))}
              </div>

              <div className="mt-auto pt-5 grid grid-cols-3 gap-3 text-[11px] font-mono-tech tracking-wider text-white/55 uppercase">
                <span className="flex items-center gap-1.5">
                  <i className="ri-cpu-line"></i> London
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-server-line"></i> Berlin
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-global-line"></i> Singapore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}