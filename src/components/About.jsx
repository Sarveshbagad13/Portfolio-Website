import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.jpg';
import resume from '../assets/Resume.pdf';
import {
  FiDownload,
  FiArrowRight,
  FiMapPin,
} from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] text-white pt-16 sm:pt-20 pb-28 sm:pb-32 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Profile Showcase Card (Vertically Centered) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Animated Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-indigo-500 to-purple-600 rounded-[40px] blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

              {/* Glass Container */}
              <div className="relative rounded-[36px] bg-gradient-to-b from-white/10 via-white/5 to-white/10 p-3 sm:p-4 border border-white/20 backdrop-blur-2xl shadow-2xl">
                {/* Profile Image with subtle scale on hover */}
                <div className="relative rounded-[28px] overflow-hidden bg-slate-900 aspect-[4/5] sm:aspect-square flex items-center justify-center">
                  <img
                    src={ProfilePhoto}
                    alt="Sarvesh Bagad"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Shadow Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-bold flex items-center gap-1.5">
                      <FiMapPin className="text-amber-400" /> Pune, Maharashtra
                    </span>
                    <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded-full font-mono text-[10px] font-bold">
                      PICT Pune
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Eyebrow with Amber Dash */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-0.5 bg-[#F59E0B] rounded-full" />
              <span className="text-sm font-bold tracking-wide text-amber-400 uppercase">
                About Me
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Engineering Scalable Systems with{' '}
              <span className="text-[#F59E0B]">Precision & AI</span>
            </h2>

            {/* Bio Narrative */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Hi, I’m <strong className="text-white font-extrabold">Sarvesh Bagad</strong> — a passionate Full Stack & AI Developer and Electronics & Telecommunication engineering undergraduate at the prestigious{' '}
              <span className="text-amber-300 font-bold">Pune Institute of Computer Technology (PICT)</span> with an academic distinction of <span className="text-amber-300 font-bold">9.143 CGPA</span>.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
              I specialize in bridging the gap between pixel-perfect responsive user experiences and low-latency backend architectures. I love architecting systems that scale gracefully.
            </p>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/10 flex-wrap">
              <a
                href={resume}
                download="Sarvesh_Bagad_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FiDownload className="text-sm" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105"
              >
                <span>View Projects</span>
                <FiArrowRight className="text-sm text-amber-400" />
              </a>

              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href="https://github.com/Sarveshbagad13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
                  title="GitHub Profile"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="text-base text-sky-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition to Expertise Section Background (#FBFBFA) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 block"
        >
          <path
            fill="#FBFBFA"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
