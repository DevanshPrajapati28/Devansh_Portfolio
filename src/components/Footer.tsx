"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Footer() {
  const { openContactModal } = useContactModal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("devansh2836@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "GitHub", href: "https://github.com/DevanshPrajapati28", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/devansh-prajapati-180b3a285/", external: true },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030306] py-16 px-6 md:px-12 lg:px-20 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
        {/* Brand logo & tagline */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white tracking-[0.2em] font-semibold text-lg">
            <span className="font-mono text-sm text-orange-400/80 font-normal">//</span>
            <span>DEVANSH PRAJAPATI</span>
          </div>
          <p className="text-zinc-500 font-mono text-[11px] max-w-sm leading-relaxed">
            AI/ML Developer & Software Engineer. B.Tech in IT (CGPA: 8.10). Specializing in autonomous multi-agent systems and scalable full-stack architectures.
          </p>
        </div>

        {/* Navigation links & Contact trigger */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>{link.name}</span>
              {link.external && (
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-orange-400 transition-colors" />
              )}
            </a>
          ))}

          {/* Interactive Email Modal Trigger */}
          <button
            type="button"
            onClick={() => openContactModal()}
            className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
          >
            <span>Message Devansh</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* System telemetry status */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] font-mono text-[10px] text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-zinc-300">OPEN TO WORK</span>
          <span className="text-zinc-600">//</span>
          <span className="text-orange-400">AI/ML ENGINEER</span>
        </div>
      </div>

      {/* Bottom legal & copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-600">
        <div>© {new Date().getFullYear()} DEVANSH PRAJAPATI. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-6">
          <span>+91 8780873606</span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            title="Click to copy email address"
          >
            {copied ? (
              <span className="text-emerald-400 inline-flex items-center gap-1 font-semibold">
                <Check className="w-3 h-3" /> Copied to clipboard!
              </span>
            ) : (
              <span className="inline-flex items-center gap-1">
                devansh2836@gmail.com
                <Copy className="w-3 h-3 opacity-60" />
              </span>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}
