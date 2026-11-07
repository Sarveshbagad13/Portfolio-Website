import React, { useEffect, useRef, useState } from 'react';

export default function GlassCursor() {
  const dotRef = useRef(null);
  const lensRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const lensPos = useRef({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / coarse pointer devices (hide custom cursor on mobile/tablets)
    if (window.matchMedia('(pointer: coarse)').matches || !window.matchMedia('(hover: hover)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let rafId = null;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant pinpoint dot positioning (zero latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Check if mouse is hovering an interactive element
    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor="hover"]'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    // Smooth Lerp animation loop for the trailing glass lens
    const render = () => {
      // Lerp factor: 0.18 gives a fluid, elastic trailing glass lens
      lensPos.current.x += (mousePos.current.x - lensPos.current.x) * 0.18;
      lensPos.current.y += (mousePos.current.y - lensPos.current.y) * 0.18;

      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${lensPos.current.x}px, ${lensPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* ── 1. OUTER FLOATING GLASS LENS ── */}
      <div
        ref={lensRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform transition-all ease-out"
        style={{
          transitionDuration: '220ms',
          transitionProperty: 'width, height, background-color, border-color, box-shadow, transform',
          width: isHovered ? '68px' : isClicking ? '32px' : '42px',
          height: isHovered ? '68px' : isClicking ? '32px' : '42px',
        }}
      >
        <div
          className={`w-full h-full rounded-full relative flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? 'bg-amber-400/[0.08] backdrop-blur-[6px] border border-amber-400/70 shadow-[0_0_25px_rgba(245,158,11,0.35),inset_0_0_15px_rgba(245,158,11,0.15)]'
              : 'bg-white/[0.08] backdrop-blur-[4px] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_3px_rgba(255,255,255,0.5)]'
          }`}
        >
          {/* Subtle optical specular highlight curve (light glare in upper glass corner) */}
          <div
            className={`absolute top-1 left-2 w-2.5 h-1.5 rounded-full transition-opacity duration-200 pointer-events-none ${
              isHovered ? 'bg-amber-200/60 blur-[0.4px]' : 'bg-white/70 blur-[0.5px]'
            }`}
          />

          {/* Magnetic ripple ring when hovering */}
          {isHovered && (
            <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping opacity-40" />
          )}
        </div>
      </div>

      {/* ── 2. PINPOINT CENTER PRECISION DOT (Zero Latency) ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered
              ? 'w-2 h-2 bg-[#F59E0B] shadow-[0_0_10px_#F59E0B]'
              : isClicking
              ? 'w-1.5 h-1.5 bg-amber-300 scale-90'
              : 'w-1.5 h-1.5 bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]'
          }`}
        />
      </div>
    </div>
  );
}
