"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Activity } from "lucide-react";

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const statementLines = [
    "TURNING COMPLEX DATA",
    "INTO SCALABLE",
    "AI SOLUTIONS.",
  ];

  const metrics = [
    {
      icon: Zap,
      label: "AIOps Incident Resolution",
      value: "45m → <5m",
      detail: "Mean time to diagnose reduced by ~90% with OpsPilot LangGraph pipeline",
    },
    {
      icon: Cpu,
      label: "RAG Retrieval Speedup",
      value: "90%",
      detail: "Information retrieval acceleration with PyMuPDF, FAISS & Streamlit",
    },
    {
      icon: Activity,
      label: "Predictive Accuracy",
      value: "0.85 – 0.90",
      detail: "R² score achieved on real estate valuation machine learning models",
    },
  ];

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative min-h-[85vh] w-full flex flex-col justify-center py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient radial flare */}
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-10">
        <span className="h-[1px] w-12 bg-cyan-400/60" />
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400">
          PHILOSOPHY & IMPACT // ABOUT DEVANSH
        </span>
      </div>

      {/* Oversized Statement Headline */}
      <div className="mb-10">
        {statementLines.map((line, idx) => (
          <div key={line} className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.0] ${idx === 2
                  ? "bg-gradient-to-r from-white via-cyan-100 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]"
                  : "text-white"
                }`}
            >
              {line}
            </motion.h2>
          </div>
        ))}
      </div>

      {/* Supporting Text with Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 text-xl sm:text-2xl md:text-2xl text-zinc-300 font-light leading-relaxed tracking-tight text-balance"
        >
          Currently pursuing my B.Tech in Information Technology (CGPA: 8.10). I specialize in bridging cutting-edge AI research with battle-tested cloud engineering,
          from multi-agent remediation architectures to high-throughput full-stack MERN platforms.
        </motion.p>
      </div>

      {/* Minimal Studio Metrics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/[0.08]"
      >
        {metrics.map((m) => {
          const IconComponent = m.icon;
          return (
            <div
              key={m.label}
              className="group p-6 rounded-2xl glass-panel-subtle hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)] transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {m.label}
                </span>
                <IconComponent className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-2">
                {m.value}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">{m.detail}</div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
