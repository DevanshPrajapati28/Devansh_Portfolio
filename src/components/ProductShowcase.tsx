"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Brain,
  Zap,
  TrendingUp,
} from "lucide-react";

type Category = "all" | "ai" | "rag" | "ml" | "web";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  categoryLabel: string;
  badge: string;
  date: string;
  impactMetric: string;
  impactLabel: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "opspilot",
    title: "DevOps AI (OpsPilot)",
    subtitle: "Autonomous AIOps Multi-Agent Incident Remediation",
    category: "ai",
    categoryLabel: "Autonomous AI & Agents",
    badge: "LangGraph Multi-Agent",
    date: "OCT 2026",
    impactMetric: "45m → <5m",
    impactLabel: "MTTD Reduction (-90%)",
    description:
      "Architected an autonomous multi-agent incident diagnosis and remediation engine. Traverses cloud telemetry across AWS ECS Fargate clusters to identify root causes and execute verified, zero-downtime remediation workflows.",
    highlights: [
      "LangGraph multi-agent state graphs for deterministic root-cause analysis",
      "Automated CI/CD deployment on AWS ECS Fargate with Terraform & Docker",
      "Cut incident mean time to diagnose from ~45 minutes to under 5 minutes",
    ],
    stack: [
      "PyTorch",
      "LangGraph",
      "FastAPI",
      "AWS ECS Fargate",
      "Terraform",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/DevanshPrajapati28",
    liveUrl: "https://github.com/DevanshPrajapati28",
    featured: true,
  },
  {
    id: "medintel",
    title: "MedIntel AI Analyzer",
    subtitle: "Dense Vector RAG Pipeline & Medical OCR",
    category: "rag",
    categoryLabel: "RAG & NLP",
    badge: "FAISS Vector RAG",
    date: "JUNE 2026",
    impactMetric: "90% Faster",
    impactLabel: "Retrieval Acceleration",
    description:
      "End-to-end clinical document analysis and question-answering pipeline. Combines OCR extraction from medical records with dense vector similarity search to deliver instantaneous physician insights.",
    highlights: [
      "Automated PDF record extraction via PyTesseract OCR and PyMuPDF parsers",
      "Dense vector indexing using Sentence-Transformers into high-speed FAISS database",
      "Interactive clinical review interface boosting medical report analysis efficiency by 80%",
    ],
    stack: [
      "FAISS",
      "Sentence-Transformers",
      "PyTesseract OCR",
      "PyMuPDF",
      "Flask",
      "Streamlit",
      "Python",
    ],
    githubUrl: "https://github.com/DevanshPrajapati28",
    liveUrl: "https://github.com/DevanshPrajapati28",
  },
  {
    id: "realestate",
    title: "AI Real Estate Valuation",
    subtitle: "Predictive Machine Learning & Spatial Modeling",
    category: "ml",
    categoryLabel: "Machine Learning",
    badge: "Predictive ML",
    date: "OCT – DEC 2025",
    impactMetric: "0.85 – 0.90",
    impactLabel: "R² Accuracy Score",
    description:
      "Machine learning regression model trained on complex residential property datasets. Features robust exploratory data analysis, spatial correlation tuning, and an interactive Streamlit inference app.",
    highlights: [
      "Extensive data preprocessing, outlier normalization, and spatial correlation analysis",
      "Iterative regression model cross-validation achieving consistent 0.85–0.90 R² score",
      "Deployed interactive Streamlit web application reducing manual appraisal effort by ~70%",
    ],
    stack: [
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
      "Python",
    ],
    githubUrl: "https://github.com/DevanshPrajapati28",
    liveUrl: "https://github.com/DevanshPrajapati28",
  },
  {
    id: "mern-platform",
    title: "Logicminds Full-Stack Platform",
    subtitle: "High-Throughput MERN Architecture & REST APIs",
    category: "web",
    categoryLabel: "Full-Stack Web",
    badge: "Full-Stack MERN",
    date: "APR – JUN 2026",
    impactMetric: "< 45ms",
    impactLabel: "Database Query Latency",
    description:
      "Enterprise full-stack web application designed with decoupled Express.js route handlers, MongoDB query aggregation, and responsive React component architectures for zero layout shift.",
    highlights: [
      "Indexed MongoDB schemas and optimized aggregation queries for low latency",
      "Structured RESTful API design with secure token authentication and input validation",
      "Modular responsive React component tree ensuring 100% mobile and desktop fidelity",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "RESTful APIs",
      "JWT Auth",
    ],
    githubUrl: "https://github.com/DevanshPrajapati28",
    liveUrl: "https://github.com/DevanshPrajapati28",
  },
];

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "AI & Agents", value: "ai" },
  { label: "RAG & NLP", value: "rag" },
  { label: "Machine Learning", value: "ml" },
  { label: "Full-Stack MERN", value: "web" },
];

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400">
              FEATURED ENGINEERING // SELECTED WORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Flagship Projects.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-xl">
            Autonomous multi-agent workflows, dense vector RAG pipelines, and machine learning models engineered for real-world impact.
          </p>
        </div>

        {/* Clean Filter Chips */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full glass-panel-subtle border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${selectedCategory === cat.value
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
                }`}
            >
              {selectedCategory === cat.value && (
                <motion.div
                  layoutId="activeCategoryGlow"
                  className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-400/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured && selectedCategory === "all";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative rounded-3xl glass-panel border border-white/10 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.12)] ${isFeatured ? "bg-gradient-to-br from-white/[0.03] to-cyan-500/[0.04]" : ""
                  }`}
              >
                {/* Header row: Badge, Date, Impact Pill, Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{project.date}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Key metric badge */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        {project.impactMetric}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                        {project.impactLabel}
                      </span>
                    </div>

                    {/* GitHub link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span className="hidden sm:inline">GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Main Content Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-6 items-start">
                  {/* Left Column: Title & Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-300/80 mt-1 uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack chips */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.07] group-hover:border-white/15 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Architectural Highlights */}
                  <div className="lg:col-span-5 space-y-3 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>ENGINEERING HIGHLIGHTS</span>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
