"use client";

import React, { useState, useEffect, useRef } from "react";

export default function IntelligenceCore() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Automatic fallback timeout so loader never gets permanently stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // 2. Strict Intersection Observer: immediately pause rendering when scrolled out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#040407] pointer-events-none"
      style={{
        contain: "paint layout size",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {/* Spline 3D Scene iframe - Lost Orb in the Mountains with Glowing Sun */}
      <iframe
        src="https://my.spline.design/lostorbinthemountains-E7Eun5mhvq0AnNXDeemar2mC/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full border-0 transition-opacity duration-700 translate-y-8 md:translate-y-16 translate-x-0 md:translate-x-24 lg:translate-x-40 scale-[1.12] pointer-events-none"
        onLoad={() => setIsLoaded(true)}
        title="Lost Orb in the Mountains - Spline 3D Scene"
        style={{
          visibility: isInView ? "visible" : "hidden",
          opacity: isInView ? 1 : 0,
          willChange: "transform",
          filter: "invert(1) hue-rotate(180deg) brightness(0.9) contrast(1.1) saturate(1.8)",
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Floating Non-Blocking Loading Pill */}
      {!isLoaded && (
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-orange-500/30 backdrop-blur-md pointer-events-none transition-opacity duration-500">
          <div className="w-4 h-4 rounded-full border-2 border-orange-500/20 border-t-orange-500 animate-spin" />
          <span className="text-[11px] font-mono tracking-wider text-orange-200 uppercase">
            Initializing Scene...
          </span>
        </div>
      )}
    </div>
  );
}
