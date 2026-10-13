"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Phone, Sparkles, Check } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.35 });
  const { openContactModal } = useContactModal();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("devansh2836@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center py-28 px-6 md:px-12 overflow-hidden text-center"
    >
      {/* Dynamic Luminous Ambient Core */}
      <motion.div
        animate={
          isInView
            ? { scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }
            : { scale: 0.8, opacity: 0 }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle border border-cyan-500/20 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-300">
            CONNECT & COLLABORATE
          </span>
        </motion.div>

        {/* Dramatic Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.0] select-none"
        >
          READY TO BUILD
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-white to-sky-300 bg-clip-text text-transparent">
            SOMETHING GREAT?
          </span>
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-12 text-balance"
        >
          I am actively seeking AI/ML engineering roles, internships, and collaborative technical initiatives.
          Let’s discuss how I can bring value to your engineering team.
        </motion.p>

        {/* Contact Quick Action Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-10"
        >
          {/* Email (1-Click Copy & Tooltip) */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group p-5 rounded-2xl glass-panel border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all flex flex-col items-center text-center space-y-2 cursor-pointer w-full"
            title="Click to copy email address"
          >
            <div className="p-3 rounded-full bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
              {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5" />}
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              {copiedEmail ? "Copied to Clipboard!" : "Email (Click to Copy)"}
            </span>
            <span className="text-xs font-mono text-white font-semibold truncate max-w-full">
              {copiedEmail ? "devansh2836@gmail.com ✓" : "devansh2836@gmail.com"}
            </span>
          </button>

          {/* Phone */}
          <a
            href="tel:+918780873606"
            className="group p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex flex-col items-center text-center space-y-2"
          >
            <div className="p-3 rounded-full bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Phone</span>
            <span className="text-xs font-mono text-white font-semibold">+91 8780873606</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/devansh-prajapati-180b3a285/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex flex-col items-center text-center space-y-2"
          >
            <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">LinkedIn</span>
            <span className="text-xs font-mono text-white font-semibold">Devansh Prajapati</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/DevanshPrajapati28"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex flex-col items-center text-center space-y-2"
          >
            <div className="p-3 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform">
              <GithubIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">GitHub</span>
            <span className="text-xs font-mono text-white font-semibold">@DevanshPrajapati28</span>
          </a>
        </motion.div>

        {/* Primary Contact Modal Trigger Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            type="button"
            onClick={() => openContactModal()}
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-white text-zinc-950 font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-black hover:shadow-[0_0_40px_rgba(249,115,22,0.45)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
