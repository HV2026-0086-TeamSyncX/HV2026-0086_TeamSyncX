'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-black/[0.06] dark:border-white/[0.08] select-none bg-[var(--bg-canvas)] relative overflow-hidden transition-colors duration-300">
      {/* Background Subtle Dots */}
      <div className="absolute inset-0 bg-studio-dots pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl studio-card text-center relative overflow-hidden shadow-xl border border-black/10 dark:border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Instant Analysis</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] dark:text-white tracking-tight leading-tight mb-3 font-bold">
            Understand complex documents <br className="hidden sm:inline" />
            <span className="text-[#2563EB] dark:text-blue-400">in seconds.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#53627A] dark:text-slate-300 max-w-lg mx-auto leading-relaxed mb-8 font-sans">
            Upload any contract, research paper, bank statement, or invoice to extract clear answers, spatial citations, and structured tables.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="glass-button-emerald px-7 py-3 rounded-full text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 touch-target shadow-md"
            >
              <span>Launch Free Workspace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/login"
              className="studio-card px-6 py-3 rounded-full text-[#0F172A] dark:text-white text-xs sm:text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-all touch-target"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
