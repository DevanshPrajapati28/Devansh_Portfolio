"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Send, Check, Copy, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function ContactModal() {
  const { isOpen, closeContactModal, defaultSubject } = useContactModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "fallback">("idle");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultSubject) {
      setFormData((prev) => ({ ...prev, subject: defaultSubject }));
    }
  }, [defaultSubject]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeContactModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeContactModal]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("devansh2836@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "0edc9871-11a0-42f8-90d2-3fa9e5088af2";

    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "New Inquiry from Portfolio",
            message: formData.message,
            from_name: "Portfolio Contact Form",
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus("success");
          return;
        }
      } catch (err) {
        console.error("Web3Forms submission error:", err);
      }
    }

    // Seamless Fallback if no Web3Forms key is configured or network blocked:
    // Generate an automatic pre-filled Gmail or default mail link
    setTimeout(() => {
      setStatus("fallback");
    }, 600);
  };

  const openGmailDirect = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Devansh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=devansh2836@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const openMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Devansh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:devansh2836@gmail.com?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
    closeContactModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeContactModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-3xl bg-[#080911]/95 border border-white/10 shadow-[0_0_60px_rgba(249,115,22,0.12)] p-6 sm:p-8 overflow-hidden z-10"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] animate-pulse" />
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    Start a Conversation
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    DIRECT INBOX // devansh2836@gmail.com
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeContactModal}
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                <p className="text-sm text-zinc-300 max-w-sm leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been sent directly to Devansh. You will receive a response at{" "}
                  <span className="text-orange-300">{formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider uppercase transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            ) : status === "fallback" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6 flex flex-col items-center text-center space-y-5"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mt-1 leading-relaxed">
                    Click below to open your message pre-filled directly in Gmail or your default email app with one click:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <button
                    type="button"
                    onClick={openGmailDirect}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 font-semibold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all"
                  >
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={openMailtoDirect}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider border border-white/10 transition-colors"
                  >
                    <span>Default Mail App</span>
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {copied ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied devansh2836@gmail.com!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> Or copy email directly
                      </span>
                    )}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Name <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all font-sans"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Email <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Topic / Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI/ML Engineering Role / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all font-sans"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Your Message <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell Devansh about your team, project, or what you'd like to build together..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all font-sans resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* One-click copy raw email button */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <span className="text-emerald-400 inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied devansh2836@gmail.com!
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> Copy raw email
                      </span>
                    )}
                  </button>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-zinc-950 font-semibold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:shadow-[0_0_35px_rgba(249,115,22,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-zinc-950/20 border-t-zinc-950 rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
