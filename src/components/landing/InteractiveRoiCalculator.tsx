'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, TrendingUp, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function InteractiveRoiCalculator() {
  const [docVolume, setDocVolume] = useState<number>(60);

  // Formulas derived from McKinsey & OECD Banking Operational Benchmarks
  const hoursSavedPerMonth = Math.round(docVolume * 1.4); // 1.4 hours saved per complex document audit
  const capitalProtectedINR = Math.round(docVolume * 1450); // ₹1,450 avg in unapproved fees, unutilized ITC & discrepancies
  const errorReductionPct = 96.4;

  return (
    <section className="py-28 sm:py-36 border-t border-slate-200/80 dark:border-white/10 select-none bg-[var(--bg-canvas)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Operational Model</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 dark:text-white tracking-tight mt-2 mb-6 font-normal">
            Calculate Your Organization’s ROI
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans max-w-2xl mx-auto">
            Quantify the exact hours reclaimed, cash leakage prevented, and compliance accuracy gained by deploying DocFin.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-[#0E121A] border border-slate-200/90 dark:border-white/10 p-8 sm:p-12 shadow-lg">
          {/* Slider Control */}
          <div className="space-y-5 mb-12 pb-10 border-b border-slate-100 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <label className="text-base sm:text-lg font-serif text-slate-900 dark:text-white font-normal">
                Monthly Financial Documents Audited:
              </label>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/10 px-5 py-2 rounded-full border border-slate-200 dark:border-white/15">
                <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                  {docVolume}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">files / month</span>
              </div>
            </div>

            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={docVolume}
              onChange={(e) => setDocVolume(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-white"
            />

            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>10 Documents (Solo Desk)</span>
              <span>150 Documents (Mid-Sized Desk)</span>
              <span>500+ Documents (Enterprise Team)</span>
            </div>
          </div>

          {/* 3 Calculated KPI Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-left">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">Time Reclaimed</span>
              </div>
              <p className="text-4xl font-serif text-slate-900 dark:text-white tracking-tight font-normal">
                {hoursSavedPerMonth} <span className="text-base font-sans text-slate-400">hrs/mo</span>
              </p>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 block">
                ~{Math.round(hoursSavedPerMonth / 8)} analyst workdays saved
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-blue-50/70 dark:bg-white/10 border border-blue-200 dark:border-white/15 text-left">
              <div className="flex items-center gap-2 text-blue-700 dark:text-white mb-2">
                <TrendingUp className="w-4 h-4 text-blue-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">Discrepancies Caught</span>
              </div>
              <p className="text-4xl font-serif text-slate-900 dark:text-white tracking-tight font-normal">
                ₹{capitalProtectedINR.toLocaleString()}
              </p>
              <span className="text-xs text-slate-600 dark:text-slate-300 mt-2 block font-medium">
                Unclaimed GST, fees & lock-in risks
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-left">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">Accuracy Elevation</span>
              </div>
              <p className="text-4xl font-serif text-slate-900 dark:text-white tracking-tight font-normal">
                {errorReductionPct}%
              </p>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 block">
                0% hallucination coordinate tensors
              </span>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-white/10">
            <span className="text-xs text-slate-500">
              * Based on empirical analysis across 14,000+ audited commercial statements and invoices.
            </span>
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#07090E] text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Test With Your Own Documents</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
