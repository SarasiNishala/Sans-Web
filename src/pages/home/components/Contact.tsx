export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent-400/8 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-500/8 blur-3xl pointer-events-none"></div>

      <div className="relative px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-[11px] font-mono-tech tracking-[0.18em] text-white/60 uppercase">
                Contact
              </span>
            </div>
            <h2 className="font-serif-display text-[44px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] text-balance">
              Let us build
              <br />
              <span className="italic text-white/60">what is next.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] md:text-[16px] leading-[1.65] text-white/70">
              Tell us what you are building. We will reply within 24 hours with a
              clear assessment of how we can help — no sales theater, just engineering.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:hello@sans.tech"
                className="inline-flex items-center gap-3 text-[14px] text-white/80 hover:text-accent-400 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                  <i className="ri-mail-line text-sm"></i>
                </span>
                hello@sans.tech
              </a>
              <a
                href="tel:+442012345678"
                className="inline-flex items-center gap-3 text-[14px] text-white/80 hover:text-accent-400 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                  <i className="ri-phone-line text-sm"></i>
                </span>
                +44 20 1234 5678
              </a>
              <div className="inline-flex items-center gap-3 text-[14px] text-white/80">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                  <i className="ri-map-pin-line text-sm"></i>
                </span>
                Tech City, Old Street 12, London EC1V 9BD
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-tech tracking-wider text-white/50 uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none focus:border-accent-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-tech tracking-wider text-white/50 uppercase mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none focus:border-accent-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-mono-tech tracking-wider text-white/50 uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none focus:border-accent-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono-tech tracking-wider text-white/50 uppercase mb-2">
                  Project details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none focus:border-accent-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-300 text-neutral-900 text-sm font-medium px-6 py-3.5 rounded-full transition-all whitespace-nowrap"
              >
                Send message
                <i className="ri-arrow-right-up-line text-base"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="text-[18px] font-bold tracking-tight text-accent-400"
            style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
          >
            Sans<span className="text-accent-400">.</span>
          </span>
          <div className="flex items-center gap-6 text-[12px] text-white/40">
            <span>© 2026 Sans. Technologies</span>
            <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: "ri-twitter-x-line", label: "Twitter" },
              { icon: "ri-linkedin-line", label: "LinkedIn" },
              { icon: "ri-github-line", label: "GitHub" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-accent-400 hover:border-accent-400 transition-colors"
              >
                <i className={`${social.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}