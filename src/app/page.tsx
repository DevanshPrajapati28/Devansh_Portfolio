"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureSection from "@/components/FeatureSection";
import TechnologySection from "@/components/TechnologySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { ContactModalProvider } from "@/context/ContactModalContext";

// Dynamically import DataField (Three.js 3D Section) with SSR disabled
const DataField = dynamic(() => import("@/components/DataField"), {
  ssr: false,
});

export default function Home() {
  return (
    <ContactModalProvider>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />

        <main className="relative flex flex-col w-full min-h-screen">
          {/* 1. Hero Section + 3D Intelligence Core */}
          <Hero />

          {/* 2. Editorial Philosophy Statement */}
          <IntroSection />

          {/* 3. Futuristic Floating AI Workspace Showcase */}
          <ProductShowcase />

          {/* 4. Large Editorial Features (Understands, Adapts, Acts) */}
          <FeatureSection />

          {/* 5. Second 3D Section: Flowing Particle Data Field */}
          <DataField />

          {/* 6. Technical Foundation & Marquee Capabilities */}
          <TechnologySection />

          {/* 7. Dramatic Full-Screen Final CTA */}
          <FinalCTA />
        </main>

        {/* 8. Minimal Studio Footer */}
        <Footer />

        {/* Global Interactive Contact Modal */}
        <ContactModal />
      </SmoothScroll>
    </ContactModalProvider>
  );
}
