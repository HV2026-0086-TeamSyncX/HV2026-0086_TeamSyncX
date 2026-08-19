'use client';

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import WhyItMattersSection from '@/components/landing/WhyItMattersSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import WhoItIsForSection from '@/components/landing/WhoItIsForSection';
import WhatDocFinFinds from '@/components/landing/WhatDocFinFinds';
import InteractiveRoiCalculator from '@/components/landing/InteractiveRoiCalculator';
import DocumentTypesSection from '@/components/landing/DocumentTypesSection';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Structured Narrative Flow (What -> Why -> How -> Who -> Where -> ROI -> Lenses -> CTA) */}
      <main className="flex-1">
        {/* WHAT: Problem & Thesis Statement */}
        <HeroSection />

        {/* WHY: The Critical Need for Automated Document Intelligence */}
        <WhyItMattersSection />

        {/* HOW: 3-Stage Ingestion, Spatial Parsing & Grounded Synthesis */}
        <HowItWorksSection />

        {/* WHO: Target Personas (Accountants, Legal Counsel, SMBs, Researchers) */}
        <WhoItIsForSection />

        {/* WHERE: Real-World Discoveries & Automated AI Remedies */}
        <WhatDocFinFinds />

        {/* ROI: Quantified Hours Reclaimed & Financial Leakage Caught */}
        <InteractiveRoiCalculator />

        {/* LENSES: 6 Specialized Domain Extraction Engines */}
        <DocumentTypesSection />

        {/* FINAL CTA: Launch Workspace */}
        <FinalCtaSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
