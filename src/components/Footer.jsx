import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';

function Footer() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: FaGithub,   href: 'https://github.com/Sarveshbagad13/',   label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sarvesh-bagad-42286228b/', label: 'LinkedIn' },
    { icon: FiMail,     href: 'mailto:bagadsarvesh13@gmail.com',    label: 'Email'    },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] text-white overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[480px] h-[480px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-700/8 rounded-full blur-3xl pointer-events-none" />

      {/* ── TOP ROW ── */}
      <div className="relative z-10 flex justify-between items-start px-8 sm:px-12 lg:px-20 pt-10 sm:pt-14">
        {/* Left: Specializations */}
        <div className="space-y-1.5">
          {['Full Stack Development', 'UI / UX Design', 'AI & Web Apps'].map((s) => (
            <p key={s} className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-slate-400">
              {s}
            </p>
          ))}
        </div>

        {/* Right: Status pill */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-slate-300 tracking-wide">
            Open for Opportunities
          </span>
        </div>
      </div>

      {/* ── CENTER NAME (perfectly centered) ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center select-none">
        {/* Amber underline accent above */}
        <div className="w-12 h-0.5 bg-amber-400 rounded-full mb-6 opacity-80" />

        <h1
          className="font-black leading-none tracking-tighter text-center"
          style={{
            fontSize: 'clamp(72px, 16vw, 240px)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 40%, #F59E0B 70%, #FBBF24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
          }}
        >
          Sarvesh
        </h1>

        {/* Tagline below name */}
        <p className="mt-5 text-sm sm:text-base text-slate-400 tracking-[0.22em] uppercase font-medium">
          Full Stack &amp; AI Developer
        </p>

        
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="relative z-10 px-8 sm:px-12 lg:px-20 pb-10 sm:pb-12">
        {/* Divider */}
        <div className="border-t border-white/8 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-slate-400 hover:text-amber-400 transition-colors duration-200 tracking-wide font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-400/10 transition-all duration-200"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-slate-500 tracking-wide text-center sm:text-right whitespace-nowrap">
            © 2026 Sarvesh Bagad · Built with React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
