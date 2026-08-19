'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Scale,
  CreditCard,
  BookOpen,
  FileSpreadsheet,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Code2,
  FileText,
  TrendingUp,
  Cpu,
  Layers,
  Search
} from 'lucide-react';

export default function StudioBentoGrid() {
  const [activePersona, setActivePersona] = useState<'auditor' | 'counsel' | 'founder' | 'researcher'>('auditor');
  const [activeLens, setActiveLens] = useState<'finance' | 'legal' | 'academic' | 'billing'>('finance');

  const personas = {
    auditor: {
      title: 'Chartered Accountants & Financial Auditors',
      tag: 'Finance & Taxation',
      icon: CreditCard,
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      description: 'Reconcile multi-bank statement batches, spot intraday overdraft surcharges, verify GSTR-3B tax credit eligibility, and export clean CSV tables.',
      output: 'Disputable overdraft penalty (-₹650) flagged on SBI statement. Dispute refund letter drafted citing RBI master circular.'
    },
    counsel: {
      title: 'Corporate Legal Counsel & Executives',
      tag: 'Contracts & Governance',
      icon: Scale,
      badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
      description: 'Audit 50+ page leases and NDAs. Catch unflagged deposit forfeiture clauses, uncapped indemnities, and notice period traps.',
      output: 'Clause 5.2 forfeits entire ₹2,00,000 security deposit. Pro-rata counter-clause generated capping liability to 1 month rent.'
    },
    founder: {
      title: 'SMB Founders & Operations Leads',
      tag: 'Operations & Invoices',
      icon: FileSpreadsheet,
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      description: 'Audit supplier invoices, verify GSTIN rates against purchase orders, and summarize 40-page policy schedules into plain English.',
      output: 'Matched ₹12,870 Integrated GST against vendor ledger. 100% eligible for immediate ITC deduction.'
    },
    researcher: {
      title: 'Researchers & Technical Analysts',
      tag: 'Research & Benchmarks',
      icon: BookOpen,
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      description: 'Deconstruct complex ML/AI research papers, extract empirical benchmark tables (WMT/BLEU), and evaluate theoretical frameworks.',
      output: 'Table 3.1 BLEU score matrix extracted (Base: 27.3, Big: 28.4). Verified against Transformer architecture baseline.'
    }
  };

  const currentPersona = personas[activePersona];

  return (
    <section id="capabilities" className="py-20 sm:py-28 select-none bg-[var(--bg-canvas)] relative overflow-hidden transition-colors duration-300">
      {/* Background Studio Grid */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_60%,transparent_100%)]" />
      <div className="absolute inset-0 bg-hero-ambient pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture & Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif text-[#0F172A] dark:text-white tracking-tight font-bold">
            High-precision intelligence. <br className="hidden sm:inline" />
            <span className="text-[#2563EB] dark:text-blue-400">Zero guesswork.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#53627A] dark:text-slate-400 font-sans max-w-lg mx-auto leading-relaxed">
            Engineered like a modern AI studio: spatial grounding, 1M multimodal context, and instant domain-specific reasoning.
          </p>
        </div>

        {/* Bento Grid Matrix (3 Columns Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-6xl mx-auto">
          {/* Card 1: 1M Token Multimodal Context Window (7 cols) */}
          <div className="md:col-span-7 studio-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  1,000,000 Token Window
                </span>
                <span className="text-[11px] font-mono text-slate-400">Gemini 2.0 Flash</span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#0F172A] dark:text-white mb-2">
                Ingest 500+ page filings, audio calls, and 4K media
              </h3>
              <p className="text-xs text-[#53627A] dark:text-slate-400 leading-relaxed font-sans mb-5">
                Drop complete commercial lease bundles, bank statement batches, scanned receipts, and earnings call recordings in a single session.
              </p>

              {/* Mini Studio Terminal Visual */}
              <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 font-mono text-[11px] space-y-1.5 text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-black/5 dark:border-white/5 pb-1 mb-1">
                  <span>SESSION_INGEST_PIPELINE</span>
                  <span className="text-emerald-500">● 100% PARSED</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">▶</span>
                  <span>544 Pages • 18 Data Tables • 62 Spatial Citations</span>
                </div>
                <div className="text-slate-400 text-[10px]">
                  Latency: 142ms • OCR Tensor Precision: 99.8%
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#2563EB] dark:text-blue-400 font-semibold">
              <span>Explore Multimodal Ingestion</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Spatial Coordinate Grounding (5 cols) */}
          <div className="md:col-span-5 studio-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Spatial Grounding
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>

              <h3 className="text-lg font-serif font-bold text-[#0F172A] dark:text-white mb-2">
                Zero Hallucination Guarantee
              </h3>
              <p className="text-xs text-[#53627A] dark:text-slate-400 leading-relaxed font-sans mb-4">
                Every extracted figure, fee, and covenant is tied directly to exact x,y page coordinate bounding boxes.
              </p>

              <div className="p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/20 text-xs">
                <div className="flex items-center justify-between font-mono text-[10px] text-emerald-700 dark:text-emerald-300 font-bold mb-1">
                  <span>PAGE 1 • COORD [140, 68, 290, 84]</span>
                  <span className="text-emerald-600">VERIFIED</span>
                </div>
                <p className="text-[11px] text-slate-700 dark:text-slate-300 font-serif italic">
                  "Lock-in period expires on 14 Sept 2026 with 60 days mandatory notice."
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>View Coordinate Verification</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Interactive Persona Matrix (12 cols) */}
          <div className="md:col-span-12 studio-card rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Target Workflows
                </span>
                <h3 className="text-lg font-serif font-bold text-[#0F172A] dark:text-white mt-0.5">
                  Who builds with DocFin?
                </h3>
              </div>

              {/* Persona Selector Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/10 text-xs font-medium">
                {[
                  { id: 'auditor', label: 'Auditors & CAs' },
                  { id: 'counsel', label: 'Legal Counsel' },
                  { id: 'founder', label: 'SMB Founders' },
                  { id: 'researcher', label: 'Researchers' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePersona(tab.id as any)}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activePersona === tab.id
                        ? 'bg-[#2563EB] text-white font-bold shadow-xs'
                        : 'text-[#53627A] dark:text-slate-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Persona Content Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${currentPersona.badgeColor}`}>
                    {currentPersona.tag}
                  </span>
                  <h4 className="text-base font-serif font-bold text-[#0F172A] dark:text-white">
                    {currentPersona.title}
                  </h4>
                </div>
                <p className="text-xs text-[#53627A] dark:text-slate-400 leading-relaxed font-sans">
                  {currentPersona.description}
                </p>
              </div>

              <div className="lg:col-span-6 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Real-World AI Discovery & Action</span>
                </div>
                <p className="text-xs text-[#0F172A] dark:text-slate-200 font-sans leading-relaxed">
                  {currentPersona.output}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
