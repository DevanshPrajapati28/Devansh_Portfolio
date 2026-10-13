"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, ChevronDown, FolderGit2, Briefcase } from "lucide-react";
import IntelligenceCore from "./IntelligenceCore";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 md:pt-32 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* 3D Cinematic Spline Scene Background */}
      <IntelligenceCore />

      {/* Main Hero Content - Left Aligned Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col justify-center items-start text-left pointer-events-auto py-8 md:py-16">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-orange-500/30 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#f97316]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-orange-200/90 font-medium">
              AI/ML DEVELOPER & FULL-STACK ENGINEER
            </span>
          </motion.div>

          {/* Large Editorial Headline - Devansh Prajapati */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-bold tracking-tight text-white leading-[0.93] select-none text-left"
            >
              DEVANSH
              <br />
              <span className="bg-gradient-to-r from-white via-amber-100 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                PRAJAPATI.
              </span>
            </motion.h1>
          </div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-base md:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed mb-9 text-left"
          >
            Architecting production-ready AI systems with <span className="text-white font-medium">PyTorch</span>,{" "}
            <span className="text-orange-300 font-medium">LangGraph multi-agent workflows</span>, enterprise{" "}
            <span className="text-white font-medium">RAG pipelines</span>, and scalable cloud infrastructure on AWS.
          </motion.p>

          {/* Interactive Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA - Featured Projects */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-zinc-950 font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_45px_rgba(249,115,22,0.65)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <FolderGit2 className="w-4 h-4 text-zinc-950" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA - Work Experience */}
            <a
              href="#experience"
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/60 backdrop-blur-xl text-zinc-200 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 border border-white/15 hover:border-orange-500/50 shadow-lg"
            >
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>Work Experience</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Telemetry & Status Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-6"
      >
        <div className="hidden md:flex items-center gap-2 text-zinc-400">
          <Terminal className="w-3.5 h-3.5 text-orange-400" />
          <span>INFORMATION TECHNOLOGY // AI/ML & SYSTEMS // CGPA: 8.10</span>
        </div>

        <a
          href="#intro"
          className="flex items-center gap-2 mx-auto md:mx-0 text-zinc-300 hover:text-white transition-colors duration-200 py-1"
        >
          <span className="tracking-widest uppercase text-[10px] font-medium">SCROLL TO DISCOVER</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-orange-400" />
        </a>

        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-zinc-300 uppercase tracking-widest text-[10px] font-medium">
            STATUS: READY TO COLLABORATE
          </span>
        </div>
      </motion.div>
    </section>
  );
}
