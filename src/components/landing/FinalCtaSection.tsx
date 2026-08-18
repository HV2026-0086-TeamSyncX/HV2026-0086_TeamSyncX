'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-28 sm:py-36 border-t border-black/[0.06] dark:border-white/[0.08] select-none bg-[var(--bg-canvas)] relative overflow-hidden transition-colors duration-300">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-emerald-ambient pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 sm:p-16 rounded-[36px] bg-gradient-to-b from-white/90 to-white/60 dark:from-[#0c1017]/95 dark:to-[#07090e]/90 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.6)] text-center relative overflow-hidden group">
          {/* Subtle Glow Rim */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-indigo-500/20 rounded-[36px] -z-10 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Instant Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F172A] dark:text-white tracking-tight leading-[1.1] mb-5 font-bold">
            Understand any document <br className="hidden sm:inline" />
            <span className="text-[#2563EB] dark:text-blue-400">in seconds.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#53627A] dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-10 font-sans">
            Upload any contract, research paper, bank statement, or invoice to extract clear answers, spatial citations, and structured tables.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="group px-9 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] border border-emerald-400/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Analyze a document</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/login"
              className="px-7 py-4 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-[#0F172A] dark:text-white text-sm font-semibold transition-all cursor-pointer backdrop-blur-md"
            >
              Sign in to account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
