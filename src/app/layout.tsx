import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#040407",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Devansh Prajapati — AI/ML Developer & Software Engineer",
  description:
    "Portfolio of Devansh Prajapati, an AI/ML Developer and Software Engineer specializing in PyTorch, LangGraph Multi-Agent Systems, RAG Pipelines, and Cloud Deployments.",
  keywords: [
    "Devansh Prajapati",
    "AI Developer",
    "Machine Learning Engineer",
    "Generative AI",
    "LangGraph",
    "PyTorch",
    "RAG Pipeline",
    "Full Stack Developer",
    "MERN",
    "AWS",
  ],
  authors: [{ name: "Devansh Prajapati" }],
  openGraph: {
    title: "Devansh Prajapati — AI/ML Developer & Software Engineer",
    description:
      "AI/ML Developer building production AIOps, RAG pipelines, and intelligent multi-agent systems.",
    siteName: "Devansh Prajapati Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Prajapati — AI/ML Developer & Software Engineer",
    description:
      "AI/ML Developer building production AIOps, RAG pipelines, and intelligent multi-agent systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-cyan-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
