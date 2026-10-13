"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  GitBranch,
  Server,
  Database,
  Layers,
  Award,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Workflow,
  Sparkles,
} from "lucide-react";

export default function FeatureSection() {
  // Experience interactive state
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-36">
      {/* ========================================================================= */}
      {/* EXPERIENCE 01: LOGICMINDS BY PARII */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Experience Story */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl font-mono font-bold text-cyan-500/40">01</span>
            <span className="h-[1px] w-8 bg-cyan-400/30" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400">
              SOFTWARE DEVELOPER INTERN // APR 2026 – JUN 2026
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Logicminds by Parii.
          </h3>

          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            Designed and engineered scalable full-stack MERN (MongoDB, Express.js, React.js, Node.js)
            applications with robust RESTful APIs for efficient client-server communication.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Engineered backend business logic, optimized high-throughput database queries, and integrated
            responsive frontend interfaces to deliver seamless data flow and measurably improved application performance.
          </p>

          <div className="pt-4 flex flex-wrap gap-2.5">
            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "RESTful APIs",
              "Query Optimization",
              "Full-Stack MERN",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Architecture Panel */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2 text-cyan-400">
                <Server className="w-3.5 h-3.5" />
                MERN ARCHITECTURE PIPELINE
              </span>
              <span className="text-zinc-500">CLIENT-SERVER MATRIX</span>
            </div>

            <div className="py-6 space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 font-semibold flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    Database Query Optimization
                  </span>
                  <span className="text-emerald-400 text-[10px] uppercase">OPTIMIZED</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  Indexed MongoDB collections and aggregated queries for sub-50ms roundtrip responses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 font-semibold flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5 text-sky-400" />
                    RESTful API Services
                  </span>
                  <span className="text-sky-400 text-[10px] uppercase">STABLE</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  Structured Express.js route handlers with input validation, token auth, and decoupled controllers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 font-semibold flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    React.js Responsive Interface
                  </span>
                  <span className="text-emerald-400 text-[10px] uppercase">100% RESPONSIVE</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  Modular component trees with declarative state synchronization for zero layout shift.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>LATENCY: &lt; 45ms</span>
              <span className="text-cyan-400">STATUS: PRODUCTION COMPLETE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* EXPERIENCE 02: INFOSYS SPRINGBOARD (Visual Left / Text Right) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual ML Calibration */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2 text-sky-400">
                <Cpu className="w-3.5 h-3.5" />
                PREDICTIVE VALUATION MODEL
              </span>
              <span className="text-zinc-500">STREAMLIT DEPLOYMENT</span>
            </div>

            <div className="py-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-mono text-zinc-400 mb-1">R² ACCURACY SCORE</div>
                  <div className="text-2xl font-mono font-bold text-white">0.85 – 0.90</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-1">High Confidence</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-mono text-zinc-400 mb-1">MANUAL APPRAISAL EFFORT</div>
                  <div className="text-2xl font-mono font-bold text-cyan-400">-70%</div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-1">Efficiency Gain</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-zinc-300 font-semibold">
                  ML Pipeline Execution:
                </div>
                <div className="text-xs font-mono text-zinc-400 space-y-1">
                  <div>1. Data Preprocessing & Outlier Filtering (NumPy, Pandas)</div>
                  <div>2. Exploratory Data Analysis & Spatial Correlations (Seaborn)</div>
                  <div>3. Regression Model Training & Cross-Validation (Scikit-Learn)</div>
                  <div>4. Real-Time Interactive Prediction Engine (Streamlit)</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>FRAMEWORK: SCIKIT-LEARN + STREAMLIT</span>
              <span className="text-sky-300">INTERNSHIP COMPLETED</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Content */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl font-mono font-bold text-sky-500/40">02</span>
            <span className="h-[1px] w-8 bg-sky-400/30" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-400">
              AI/ML INTERN // SEP 2025 – NOV 2025
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Infosys Springboard.
          </h3>

          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            Developed a machine learning–based real estate valuation solution using data preprocessing,
            exploratory data analysis (EDA), and iterative model implementation.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Collaborated on engineering, tuning, and deploying an interactive Streamlit application enabling
            real-time user predictions and interactive model evaluation directly in the browser.
          </p>

          <div className="pt-4 flex flex-wrap gap-2.5">
            {[
              "Machine Learning",
              "Exploratory Data Analysis",
              "Feature Engineering",
              "Scikit-Learn",
              "Streamlit",
              "Pandas & NumPy",
              "Model Evaluation",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 03: HACKATHONS & ACHIEVEMENTS */}
      {/* ========================================================================= */}
      <div id="achievements" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Achievements Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl font-mono font-bold text-cyan-500/40">03</span>
            <span className="h-[1px] w-8 bg-cyan-400/30" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400">
              COMPETITIVE EXCELLENCE // RECOGNITIONS
            </span>
          </div>

          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Hackathons & Achievements.
          </h3>

          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            Demonstrating leadership, rapid prototyping, and algorithmic problem-solving under intense competitive pressure.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            From leading teams to 1st place in national-level internal hackathons to ranking in the top tier of 300+ university teams,
            I thrive in high-stakes technical environments.
          </p>

          <div className="pt-4 flex flex-wrap gap-2.5">
            {[
              "Team Leadership",
              "Smart India Hackathon",
              "DA-IICT Hackathon",
              "IIT Bombay Eureka",
              "Rapid Prototyping",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements Cards */}
        <div className="lg:col-span-6 space-y-4">
          {/* Card 1: Smart India Hackathon */}
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 shadow-xl bg-cyan-500/[0.03] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Smart India Hackathon 2024–25</h4>
                  <span className="text-xs font-mono text-cyan-300">Team Lead // 1st Place</span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                1st / 100+ Teams
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              Secured 1st place among 100+ competing engineering teams in the internal university hackathon, leading the team from conceptualization to full prototype delivery.
            </p>
          </div>

          {/* Card 2: DA-IICT Hackathon */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/[0.05] text-sky-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">DA-IICT Hackathon 2024 & 2025</h4>
                  <span className="text-xs font-mono text-zinc-400">Competitive Finalist</span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.05] text-zinc-300 border border-white/10">
                Top 20 / 300+ Teams
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              Ranked in the top 20 out of 300+ inter-university teams across two consecutive years, demonstrating consistent problem-solving and full-stack technical agility.
            </p>
          </div>

          {/* Card 3: Eureka 2024 (IIT Bombay) */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/[0.05] text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Eureka 2024 (IIT Bombay)</h4>
                  <span className="text-xs font-mono text-zinc-400">Asia's Largest Startup Challenge</span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.05] text-zinc-300 border border-white/10">
                Top 500 / 25,000+ Startups
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              Selected among the top 500 out of 25,000+ startups across Asia in Asia’s largest business and startup fundraising competition hosted by E-Cell, IIT Bombay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
