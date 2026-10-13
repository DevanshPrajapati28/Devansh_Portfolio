"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles, Mail } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "py-3 bg-[#06070c]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo - Devansh Prajapati */}
          <a
            href="#"
            className="group flex items-center gap-2 text-white tracking-[0.2em] font-semibold text-lg md:text-xl transition-all duration-300"
          >
            <span className="font-mono text-sm text-orange-400/80 font-normal">//</span>
            <span className="bg-gradient-to-r from-white via-zinc-200 to-orange-200 bg-clip-text text-transparent group-hover:to-orange-300 transition-all font-bold">
              DEVANSH
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel-subtle border border-white/[0.06]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase text-zinc-400 hover:text-white transition-colors duration-200 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-1/2 rounded-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => openContactModal()}
              className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium tracking-wider uppercase text-white overflow-hidden glass-pill border border-white/10 hover:border-orange-500/40 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Mail className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] z-40 p-6 bg-[#080910]/95 backdrop-blur-2xl border-b border-white/10 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium tracking-wider uppercase text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium text-xs uppercase tracking-widest shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Message Devansh</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
