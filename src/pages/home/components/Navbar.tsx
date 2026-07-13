import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
  { label: "AI Solutions Advisor", href: "#ai-advisor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10"
          : "bg-[#0a0a0a]/70 backdrop-blur-md"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-14 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <span
            className="text-[22px] md:text-[26px] font-bold tracking-tight text-accent-400"
            style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
          >
            Sans
            <span className="text-accent-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-white/80 hover:text-white transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Kode Mono', monospace" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[13px] font-medium px-5 py-2.5 rounded-full transition-all whitespace-nowrap bg-accent-400 hover:bg-accent-300 text-neutral-900"
            style={{ fontFamily: "'Kode Mono', monospace" }}
          >
            Contact us
            <i className="ri-arrow-right-line text-sm transition-transform group-hover:translate-x-0.5"></i>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white"
          aria-label="menu"
        >
          <i className={`${menuOpen ? "ri-close-line" : "ri-menu-line"} text-lg`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/10 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold text-white/90 hover:text-white transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Kode Mono', monospace" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-3 text-center bg-accent-400 text-neutral-900 text-sm font-medium px-4 py-3 rounded-full"
            style={{ fontFamily: "'Kode Mono', monospace" }}
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  );
}