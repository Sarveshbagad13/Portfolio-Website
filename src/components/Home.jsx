import React, { useRef, useState, useEffect } from 'react';
import video from '../assets/video.mp4';
import { FaVolumeMute, FaVolumeUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Home() {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    let rafId = null;
    let isTicking = false;

    const onScroll = () => {
      if (!isTicking) {
        rafId = requestAnimationFrame(() => {
          const y = window.scrollY;
          // Only animate when hero is visible in viewport
          if (y < window.innerHeight + 100) {
            if (videoRef.current) {
              videoRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(1.08)`;
            }
            if (contentRef.current) {
              contentRef.current.style.opacity = Math.max(0, 1 - y / 650);
            }
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* ── VIDEO BG with parallax ── */}
      <video
        ref={videoRef}
        src={video}
        className="absolute inset-0 w-full h-full object-cover object-[38%_10%]"
        style={{ transform: 'translate3d(0, 0, 0) scale(1.08)', willChange: 'transform' }}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/50 via-transparent to-transparent" />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-end pb-24 sm:pb-28 lg:pb-32 px-8 sm:px-12 lg:px-20"
      >

        {/* Name + Title  */}
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] font-black tracking-tight leading-[0.9] text-white">
            Sarvesh
            <br />
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FBBF24, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Bagad
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/55 font-light max-w-lg leading-relaxed tracking-wide">
            Full Stack Developer & AI Engineer crafting
            <br className="hidden sm:block" />
            fast, intelligent digital experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.35)]"
          >
            View My Work
            <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-xl border border-white/15 text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/15 hover:border-white/25"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* ── LEFT EDGE: Vertical social strip ── */}
      <div
        className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-10"
      >
        <div className="w-px h-40 bg-gradient-to-b from-white/20 via-white/20 to-transparent" />
        <div className="w-px h-40 bg-gradient-to-b from-white/20 via-white/20 to-transparent" />
      </div>

      {/* ── RIGHT EDGE: Sound toggle ── */}
      <button
        onClick={toggleSound}
        className="absolute bottom-8 right-8 sm:right-12 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/8 backdrop-blur-xl border border-white/12 text-white/60 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-200"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
      </button>

      {/* ── BOTTOM: Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
