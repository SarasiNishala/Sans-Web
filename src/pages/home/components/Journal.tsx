import { useState } from "react";

const entries = [
  {
    id: "j-01",
    category: "Tech essay",
    title: "Why we moved from transformers to state-space models for real-time inference.",
    excerpt:
      "A technical deep-dive on the architecture decision that reduced our client's inference latency by 40% while maintaining accuracy above 98%.",
    date: "Jul 08, 2026",
    read: "12 min",
    author: "Dr. Arin Voss",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "j-02",
    category: "Engineering",
    title: "Building a zero-downtime migration for 40TB of production data.",
    excerpt:
      "How our platform team designed a blue-green migration pipeline that moved a fintech's entire data layer without a single failed request.",
    date: "Jun 14, 2026",
    read: "8 min",
    author: "Marcus Chen",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "j-03",
    category: "AI Research",
    title: "Fine-tuning LLMs on proprietary data: what actually works.",
    excerpt:
      "Our AI research lead shares the results of six months of experimentation with domain adaptation, RAG, and hybrid architectures.",
    date: "May 22, 2026",
    read: "15 min",
    author: "Lena Kowalski",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "j-04",
    category: "Product",
    title: "What we shipped in Q2 (and the one feature we killed).",
    excerpt:
      "Quarterly round-up — three platform releases, two open-source tools, and one feature we spent two sprints on before pulling the plug.",
    date: "Jul 01, 2026",
    read: "5 min",
    author: "Yuki Tanaka",
    image:
      "https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const filters = [
  "All",
  "Tech essay",
  "Engineering",
  "AI Research",
  "Product",
];

export default function Journal() {
  const [filter, setFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = filter === "All" ? entries : entries.filter((e) => e.category === filter);
  const [feature, ...rest] = filtered;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    window.setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section
      id="blog"
      className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-accent-400/10 blur-3xl pointer-events-none"></div>

      <div className="relative px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-[11px] font-mono-tech tracking-[0.18em] text-white/60 uppercase">
                The blog · vol. 14
              </span>
            </div>
            <h2 className="font-serif-display text-[44px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] text-balance">
              Notes from
              <br />
              <span className="italic text-white/55">the engineering floor.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[14px] md:text-[15px] leading-[1.65] text-white/65">
              Technical essays, architecture decisions, and product deep-dives — written
              by the engineers who ship the code, not the marketers who write about it.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-[12px] font-medium rounded-full transition-all whitespace-nowrap border ${
                filter === f
                  ? "bg-accent-400 text-neutral-900 border-accent-400"
                  : "bg-white/5 text-white/80 border-white/15 hover:bg-white/10 hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {feature && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7">
            <a
              href={`#${feature.id}`}
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                  <span className="text-[10.5px] font-mono-tech tracking-wider text-white/90 uppercase">
                    Featured · {feature.category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-3 text-[11px] font-mono-tech tracking-wider text-white/55 uppercase">
                  <span>{feature.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  <span>{feature.read} read</span>
                  <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  <span>By {feature.author}</span>
                </div>
                <h3 className="mt-3 font-serif-display text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.02em]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] leading-[1.65] text-white/65 max-w-xl">
                  {feature.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-white border-b border-white/30 group-hover:border-accent-400 group-hover:text-accent-400 pb-0.5 transition-colors whitespace-nowrap">
                  Read the essay
                  <i className="ri-arrow-right-up-line text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
                </span>
              </div>
            </a>

            <div className="lg:col-span-5 flex flex-col gap-4 md:gap-5">
              {rest.map((e) => (
                <a
                  key={e.id}
                  href={`#${e.id}`}
                  className="group grid grid-cols-[112px_1fr] sm:grid-cols-[140px_1fr] gap-4 p-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all"
                >
                  <div className="relative w-full h-28 sm:h-32 rounded-xl overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-col py-1 min-w-0">
                    <div className="flex items-center gap-2 text-[10.5px] font-mono-tech tracking-wider text-white/55 uppercase">
                      <span>{e.category}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30"></span>
                      <span>{e.read}</span>
                    </div>
                    <h4 className="mt-1.5 font-serif-display text-[18px] sm:text-[20px] leading-snug tracking-[-0.01em] text-white group-hover:text-accent-400 transition-colors">
                      {e.title}
                    </h4>
                    <span className="mt-auto text-[11px] text-white/45">
                      {e.date} · By {e.author}
                    </span>
                  </div>
                </a>
              ))}

              {filtered.length === 1 && (
                <div className="flex items-center justify-center text-center text-[13px] text-white/50 py-6 px-4 border border-dashed border-white/15 rounded-2xl">
                  No more entries in this category yet — check back soon.
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-16 md:mt-24 relative rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Dark tech workspace background"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30"></div>
          <div className="relative p-7 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <div className="text-[11px] font-mono-tech tracking-[0.18em] text-accent-400 uppercase mb-3">
                The dispatch · Monthly
              </div>
              <h3 className="font-serif-display text-[28px] md:text-[36px] leading-tight tracking-[-0.02em]">
                One technical email a month.
                <span className="italic text-white/55"> No fluff.</span>
              </h3>
              <p className="mt-2 text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                The best engineering essay from the blog, plus one open-source tool
                or architecture pattern we are exploring that month.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto md:min-w-[420px]"
            >
              <div className="flex-1 flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-5 pr-1.5 py-1.5">
                <i className="ri-mail-line text-white/55 text-base mr-2"></i>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent text-[14px] text-white placeholder-white/45 outline-none py-1.5"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-accent-400 hover:bg-accent-300 text-neutral-900 text-[13px] font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap"
                >
                  Subscribe
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
              <div className="text-[11px] text-white/50 sm:ml-2 whitespace-nowrap">
                {subscribed ? (
                  <span className="text-accent-400">
                    <i className="ri-check-line mr-1"></i>You are in.
                  </span>
                ) : (
                  <>4.1k engineers · No spam.</>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}