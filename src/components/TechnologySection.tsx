"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Cloud,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  GraduationCap,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const SKILLS_ROW_1 = [
  "Python",
  "JavaScript",
  "PyTorch",
  "LangGraph",
  "Generative AI",
  "RAG Pipelines",
  "FAISS Vector DB",
  "Scikit-Learn",
  "FastAPI",
  "Streamlit",
  "Natural Language Processing",
  "Deep Learning",
];

const SKILLS_ROW_2 = [
  "AWS ECS Fargate",
  "Terraform",
  "Docker",
  "GitHub Actions",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Flask",
  "Django",
  "NumPy & Pandas",
  "Sentence-Transformers",
  "Hugging Face",
];

const SKILL_CATEGORIES = [
  {
    icon: BrainCircuit,
    title: "AI, ML & Generative AI",
    spec: "PyTorch, LangGraph, RAG, LLMs",
    desc: "Machine Learning, NLP, Deep Learning, Model Evaluation, Feature Engineering, FAISS, PyTesseract OCR, Prompt Engineering.",
  },
  {
    icon: Code2,
    title: "Frameworks & Full-Stack",
    spec: "MERN, FastAPI, Flask, Django",
    desc: "React.js, Node.js, Express.js, Streamlit, Scikit-Learn, NumPy, Pandas, Matplotlib, Seaborn, RESTful API design.",
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & Databases",
    spec: "AWS Fargate, Docker, Terraform",
    desc: "PostgreSQL, MongoDB, MySQL, CI/CD with GitHub Actions, Vercel, Render, zero-downtime infrastructure.",
  },
  {
    icon: GraduationCap,
    title: "Education & Core CS",
    spec: "B.Tech in Information Technology (CGPA: 8.10)",
    desc: "B.Tech in IT (2023–Present). Data Structures, Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks.",
  },
];

export default function TechnologySection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400">
            COMPREHENSIVE TOOLKIT // ARSENAL
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Skills, Technologies & Education.
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl">
          A full-spectrum overview of languages, frameworks, AI libraries, and cloud infrastructure used across my projects and internships.
        </p>
      </div>

      {/* Infinite Horizontal Running Marquee Row 1 */}
      <div className="relative w-full overflow-hidden mb-4 py-2 border-y border-white/[0.04]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-6 w-max will-change-transform"
        >
          {[...SKILLS_ROW_1, ...SKILLS_ROW_1].map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-subtle border border-white/[0.06] text-xs font-mono text-zinc-300 hover:border-cyan-500/40 hover:text-white transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
              <span>{skill}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Horizontal Running Marquee Row 2 (Reverse) */}
      <div className="relative w-full overflow-hidden mb-20 py-2 border-b border-white/[0.04]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-6 w-max will-change-transform"
        >
          {[...SKILLS_ROW_2, ...SKILLS_ROW_2].map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-subtle border border-white/[0.06] text-xs font-mono text-zinc-400 hover:border-blue-500/40 hover:text-white transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#60a5fa]" />
              <span>{skill}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Structured Domain Specs Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat) => {
          const IconComp = cat.icon;
          return (
            <div
              key={cat.title}
              className="group p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] w-fit mb-5 text-cyan-400 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{cat.title}</h3>
                <div className="text-xs font-mono text-cyan-300 font-semibold mb-3">
                  {cat.spec}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">{cat.desc}</p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>PROFICIENCY</span>
                <span className="text-cyan-400">VERIFIED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
