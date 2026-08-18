'use client';

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import WhyItMattersSection from '@/components/landing/WhyItMattersSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import WhatDocFinFinds from '@/components/landing/WhatDocFinFinds';
import DocumentTypesSection from '@/components/landing/DocumentTypesSection';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      {/* 1. Minimal Production Navigation */}
      <Navbar />

      {/* 2. Focused Landing Page Structure (Direct Auth + Core Lenses, No Security/Pipeline/Pricing) */}
      <main className="flex-1">
        <HeroSection />
        <WhyItMattersSection />
        <HowItWorksSection />
        <WhatDocFinFinds />
        <DocumentTypesSection />
        <FinalCtaSection />
      </main>

      {/* 3. Institutional Footer */}
      <Footer />
    </div>
  );
}
