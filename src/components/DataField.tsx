"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Database, Cpu, ArrowUpRight, Workflow } from "lucide-react";

const DataFieldCanvas = dynamic(() => import("./DataFieldCanvas"), {
  ssr: false,
});

function CanvasWaveFallback() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", onResize);

    let t = 0;
    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let j = 0; j < 8; j++) {
        ctx.beginPath();
        const yBase = height * 0.4 + j * 20;
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 + j * 0.04})`;
        ctx.lineWidth = 1.5;

        for (let x = 0; x < width; x += 15) {
          const y = yBase + Math.sin(x * 0.01 + t + j * 0.5) * 35;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />;
}

export default function DataField() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] py-28 overflow-hidden flex flex-col justify-between">
      {/* Background 3D Wavefield */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-70">
        {!inView ? null : hasWebGL === false ? <CanvasWaveFallback /> : <DataFieldCanvas />}
      </div>

      {/* Top Section Editorial Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400">
            SYSTEM FOUNDATION & AI DEPTH
          </span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Engineered with Rigor.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Designed for Scale.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            From training machine learning models in Scikit-Learn to orchestrating multi-agent state graphs in LangGraph,
            I build systems designed for deterministic reliability, low latency, and zero downtime.
          </p>
        </div>
      </div>

      {/* Bottom Floating Telemetry Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
        <div className="p-4 sm:p-6 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400">
              <Workflow className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400">MULTI-AGENT AIOPS</div>
              <div className="text-sm font-mono font-bold text-white">LangGraph + PyTorch + Fargate</div>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400">VECTOR & RAG PIPELINE</div>
              <div className="text-sm font-mono font-bold text-white">FAISS + PyMuPDF + Sentence-Transformers</div>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

          <a
            href="#skills"
            className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 uppercase tracking-wider"
          >
            <span>View Full Toolkit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
