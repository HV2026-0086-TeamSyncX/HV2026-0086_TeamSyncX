'use client';

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import StudioBentoGrid from '@/components/landing/StudioBentoGrid';
import InteractiveRoiCalculator from '@/components/landing/InteractiveRoiCalculator';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Google AI Studio-Grade Streamlined Layout */}
      <main className="flex-1">
        {/* Interactive Studio Hero & Playground */}
        <HeroSection />

        {/* Studio Bento Grid: 1M Multimodal Window + Spatial Grounding + Persona Workflows */}
        <StudioBentoGrid />

        {/* Operational Model & ROI Slider */}
        <InteractiveRoiCalculator />

        {/* Final Launch Studio CTA */}
        <FinalCtaSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
