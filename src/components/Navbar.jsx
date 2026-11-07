import portfolio from '../assets/portfolio_logo.png';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import resume from '../assets/Resume.pdf';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    let rafId = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);

          const sections = ['contact', 'journey', 'projects', 'skills', 'expertise', 'about', 'home'];
          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 260 && rect.bottom >= 100) {
                setActiveSection(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      setMobileOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? 'max-w-3xl px-3 py-2 rounded-full bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'max-w-5xl px-5 py-2.5 rounded-[28px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.15)]'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="shrink-0"
          >
            <img
              src={portfolio}
              alt="Logo"
              className={`transition-all duration-500 ${scrolled ? 'h-7' : 'h-9'}`}
            />
          </a>

          {/* ── Desktop Nav Links (inside the pill) ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId ||
                (sectionId === 'about' && activeSection === 'expertise');
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── Right side: CV + Mobile toggle ── */}
          <div className="flex items-center gap-3">
            <a
              href={resume}
              download="Sarvesh_Bagad_Resume.pdf"
              className={`hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-[#F59E0B] text-slate-950 px-5 py-2 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                  : 'bg-white/10 backdrop-blur-sm border border-white/15 text-white px-5 py-2.5 hover:bg-white/20'
              }`}
            >
              <FiDownload className="text-sm" />
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#0B0F19]/95 backdrop-blur-2xl" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-3xl font-bold text-white/80 hover:text-amber-400 transition-all duration-200"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={resume}
            download="Sarvesh_Bagad_Resume.pdf"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-[#F59E0B] text-slate-950 font-bold text-sm px-8 py-4 rounded-full"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : '0ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
              transition: 'all 300ms ease',
            }}
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
