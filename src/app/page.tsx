'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import StudioBentoGrid from '@/components/landing/StudioBentoGrid';
import WhyWhatWhereSection from '@/components/landing/WhyWhatWhereSection';
import FinalCtaSection from '@/components/landing/FinalCtaSection';
import Footer from '@/components/landing/Footer';
import OnboardingModal from '@/components/ui/OnboardingModal';
import { Sparkles, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col transition-colors duration-200 relative">
      {/* 1. Global Navigation with Product Tour Trigger */}
      <Navbar onOpenTour={() => setIsTourOpen(true)} />

      {/* 2. Google AI Studio-Grade Streamlined Layout */}
      <main className="flex-1">
        {/* Interactive Studio Hero & Playground */}
        <HeroSection />

        {/* Studio Bento Grid: 1M Multimodal Window + Spatial Grounding + Persona Workflows */}
        <StudioBentoGrid />

        {/* Beautiful Aesthetic Manifesto: What, Why & Where Used */}
        <WhyWhatWhereSection />

        {/* Final Launch Studio CTA */}
        <FinalCtaSection />
      </main>

      {/* 3. Floating Interactive Tour Helper Button */}
      <div className="fixed bottom-6 right-6 z-40 animate-in fade-in select-none">
        <button
          onClick={() => setIsTourOpen(true)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/85 dark:bg-[#0E1210]/90 backdrop-blur-2xl border border-emerald-500/30 hover:border-emerald-500/60 shadow-xl shadow-emerald-950/15 text-xs font-bold text-[#0F172A] dark:text-[#F2F4F3] hover:text-emerald-700 dark:hover:text-emerald-400 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Interactive Product Tour & Helper Guide"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Sparkles className="w-3 h-3 animate-pulse" />
          </div>
          <span>Quick Tour</span>
        </button>
      </div>

      {/* 4. Onboarding Tour Modal */}
      <OnboardingModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onStartAudit={() => router.push('/dashboard')}
        onOpenSettings={() => router.push('/dashboard')}
      />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
