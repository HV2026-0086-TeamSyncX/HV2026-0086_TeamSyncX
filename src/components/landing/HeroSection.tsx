'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  AlertTriangle,
  Receipt,
  Sparkles,
  CheckCircle2,
  Scale,
  CreditCard,
  BookOpen,
  Zap,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  ChevronRight,
  TrendingUp,
  Clock
} from 'lucide-react';

export default function HeroSection() {
  const [activeDocType, setActiveDocType] = useState<'lease' | 'report' | 'statement' | 'invoice'>('lease');

  return (
    <section className="relative pt-32 sm:pt-40 pb-24 select-none bg-[var(--bg-canvas)] overflow-hidden transition-colors duration-300">
      {/* 1. Atmospheric Ambient Lighting & Subtle Dot Grid */}
      <div className="absolute inset-0 bg-hero-ambient pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_70%,transparent_100%)]" />
      <div className="absolute inset-0 bg-stardust pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clear Bold Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping" />
              <span>DocFin 2.0 • Multimodal Document Intelligence</span>
            </div>

            {/* High-Contrast Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-serif text-[#0F172A] dark:text-white tracking-tight leading-[1.1] sm:leading-[1.08] font-bold">
              Understand the details inside <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] via-indigo-500 to-blue-400">
                any complex document.
              </span>
            </h1>

            {/* High-Contrast Readable Paragraph */}
            <p className="text-sm sm:text-lg text-[#334155] dark:text-slate-300 leading-relaxed font-sans max-w-xl">
              DocFin extracts buried clauses, key numbers, financial ledgers, and obligations from contracts, research papers, bank statements, and invoices in seconds.
            </p>

            {/* Actions: Primary Emerald Pill CTA & Secondary Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/dashboard"
                className="group px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] border border-emerald-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] touch-target"
              >
                <span>Open Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/login"
                className="px-6 py-3 sm:py-3.5 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-[#0F172A] dark:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer backdrop-blur-md text-center touch-target"
              >
                Sign in to account
              </Link>
            </div>

            {/* Capability Trust Micro-Strip */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] text-[#64748B] dark:text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Zero Data Retention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Page-Grounded Citations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Multi-Format Reasoning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Interactive Document Intelligence Canvas (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-4 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#0c1017]/90 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.6)] text-left space-y-4 relative group">
              {/* Outer Subtle Gradient Rim Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-emerald-500/20 rounded-3xl -z-10 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Product Card Top Bar */}
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A] dark:text-white font-mono">
                    Live Document Audit
                  </span>
                </div>

                {/* Document Type Switcher */}
                <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/10 text-[10px] font-medium overflow-x-auto scrollbar-none">
                  {[
                    { id: 'lease', label: 'Contract' },
                    { id: 'report', label: 'Report' },
                    { id: 'statement', label: 'Statement' },
                    { id: 'invoice', label: 'Invoice' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDocType(tab.id as any)}
                      className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap touch-target ${
                        activeDocType === tab.id
                          ? 'bg-[#2563EB] text-white font-bold shadow-xs'
                          : 'text-[#53627A] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Document Findings Content */}
              {activeDocType === 'lease' && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs text-[#53627A] dark:text-slate-400 font-mono">
                    <span className="truncate max-w-[200px]">Commercial_Lease_Agreement.pdf</span>
                    <span className="text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      2 critical covenants
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs">
                    <div className="flex items-center justify-between text-rose-700 dark:text-rose-300 font-bold mb-0.5">
                      <span className="flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5" />
                        Deposit Forfeiture (Clause 5.2)
                      </span>
                      <span className="font-mono text-rose-600 dark:text-rose-400">₹2,00,000</span>
                    </div>
                    <p className="text-[11px] text-[#334155] dark:text-slate-300 leading-relaxed">
                      Forfeits entire deposit upon early exit. Pro-rata counter-clause generated capping liability to 1 month notice rent.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                    <div className="flex items-center justify-between text-[#0F172A] dark:text-white font-bold mb-0.5">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        Notice Period Deadline
                      </span>
                      <span className="font-mono text-[#2563EB] dark:text-blue-400">60 Days</span>
                    </div>
                    <p className="text-[11px] text-[#53627A] dark:text-slate-400 leading-relaxed">
                      Written notice required prior to lock-in renewal on 14 Sept 2026.
                    </p>
                  </div>
                </div>
              )}

              {activeDocType === 'report' && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs text-[#53627A] dark:text-slate-400 font-mono">
                    <span className="truncate max-w-[200px]">Q4_Corporate_Performance_Report.pdf</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      4 key metrics
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                    <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-300 font-bold mb-0.5">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Operating Margin Expansion
                      </span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400">+24.6% YoY</span>
                    </div>
                    <p className="text-[11px] text-[#334155] dark:text-slate-300 leading-relaxed">
                      Driven by automation of document review workflows across 12 branch offices.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                    <div className="flex items-center justify-between text-[#0F172A] dark:text-white font-bold mb-0.5">
                      <span className="flex items-center gap-1.5">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-500" />
                        Extracted Data Matrix
                      </span>
                      <span className="font-mono text-[#2563EB] dark:text-blue-400">18 Rows • CSV Ready</span>
                    </div>
                    <p className="text-[11px] text-[#53627A] dark:text-slate-400 leading-relaxed">
                      Table 3.1 regional headcount and revenue matrix converted into structured spreadsheet.
                    </p>
                  </div>
                </div>
              )}

              {activeDocType === 'statement' && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs text-[#53627A] dark:text-slate-400 font-mono">
                    <span className="truncate max-w-[200px]">Account_Statement_Jan2026.pdf</span>
                    <span className="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                      <CreditCard className="w-3 h-3" />
                      Fee Radar
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs">
                    <div className="flex items-center justify-between text-rose-700 dark:text-rose-300 font-bold mb-0.5">
                      <span className="flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Disputable Overdraft Penalty
                      </span>
                      <span className="font-mono text-rose-600 dark:text-rose-400">-₹650.00</span>
                    </div>
                    <p className="text-[11px] text-[#334155] dark:text-slate-300 leading-relaxed">
                      Intraday minimum balance penalty charged erroneously. Dispute letter drafted citing RBI master circular.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                    <div className="flex items-center justify-between text-[#0F172A] dark:text-white font-bold mb-0.5">
                      <span>Monthly Net Outflow</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400">₹84,210.00</span>
                    </div>
                    <p className="text-[11px] text-[#53627A] dark:text-slate-400 leading-relaxed">
                      Categorized across 4 recurring subscriptions, utilities, and tax payments.
                    </p>
                  </div>
                </div>
              )}

              {activeDocType === 'invoice' && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs text-[#53627A] dark:text-slate-400 font-mono">
                    <span className="truncate max-w-[200px]">Vendor_Invoice_INV-8492.pdf</span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                      <Receipt className="w-3 h-3" />
                      Tax Line Item
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs">
                    <div className="flex items-center justify-between text-purple-700 dark:text-purple-300 font-bold mb-0.5">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Eligible ITC Tax Credit
                      </span>
                      <span className="font-mono text-purple-600 dark:text-purple-400">₹12,870.00</span>
                    </div>
                    <p className="text-[11px] text-[#334155] dark:text-slate-300 leading-relaxed">
                      GSTIN match verified on GST portal. Eligible for 100% direct input tax deduction.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                    <div className="flex items-center justify-between text-[#0F172A] dark:text-white font-bold mb-0.5">
                      <span>Payment Due Date</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400">28 Aug 2026</span>
                    </div>
                    <p className="text-[11px] text-[#53627A] dark:text-slate-400 leading-relaxed">
                      Net-30 term agreement with 2% early settlement discount before 20 Aug.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
