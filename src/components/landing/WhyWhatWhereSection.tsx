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
  XCircle,
  FileText,
  Building2,
  Compass,
  Layers,
  HelpCircle,
  Lightbulb,
  MapPin,
  TrendingUp,
  Target
} from 'lucide-react';

export default function WhyWhatWhereSection() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'manifesto'>('comparison');

  const comparisonRows = [
    {
      feature: 'Spatial Grounding & Citations',
      legacy: 'None — Generates text without knowing where words exist',
      docfin: 'Exact [x, y] bounding box coordinate tensors on page',
      isAdvantage: true
    },
    {
      feature: 'Multi-Column Table Deconstruction',
      legacy: 'Fails / Scrambles columns into unstructured text blobs',
      docfin: 'Preserves grid hierarchy & exports 1-click clean CSV/Excel',
      isAdvantage: true
    },
    {
      feature: 'Context Horizon',
      legacy: 'Truncated to 4k–32k tokens (chokes on large documents)',
      docfin: '1,000,000 token multimodal window (500+ pages + audio/media)',
      isAdvantage: true
    },
    {
      feature: 'Remedy & Counter-Clause Drafting',
      legacy: 'Passive summary with no actionable legal/financial solutions',
      docfin: 'Drafts bilateral counter-clauses & formal RBI dispute memos',
      isAdvantage: true
    },
    {
      feature: 'Zero-Retention Privacy Vault',
      legacy: 'Public cloud model training on customer corporate files',
      docfin: 'Strict client-isolated memory; zero model training retention',
      isAdvantage: true
    }
  ];

  const metrics = [
    { label: 'Spatial Precision', val: '99.8%', desc: 'Verified coordinate tensor accuracy' },
    { label: 'Table Retyping', val: '0 sec', desc: 'Instant matrix to CSV conversion' },
    { label: 'Multimodal Context', val: '1.0M', desc: '500+ pages in a single live session' },
    { label: 'Reasoning Latency', val: '<800ms', desc: 'Sub-second neural response speed' }
  ];

  return (
    <section id="why-docfin" className="py-20 sm:py-28 select-none bg-[var(--bg-canvas)] relative overflow-hidden transition-colors duration-300">
      {/* Background Subtle Coordinate Lines */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-60 dark:opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_60%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-card text-xs font-mono font-medium shadow-xs">
            <Target className="w-3.5 h-3.5 text-blue-500" />
            <span>Benchmark Scorecard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#0F172A] dark:text-white tracking-tight leading-tight font-bold">
            Why DocFin beats flat OCR.
          </h2>

          <p className="text-xs sm:text-sm text-[#53627A] dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
            See how multimodal spatial reasoning transforms static documents into verifiable, interactive intelligence.
          </p>
        </div>

        {/* 4 Quantitative Scorecard Highlight Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="studio-card p-5 sm:p-6 rounded-3xl text-center space-y-1.5 shadow-aesthetic group hover:border-blue-500/30 transition-all">
              <span className="text-2xl sm:text-4xl font-mono font-bold text-[#2563EB] dark:text-blue-400 group-hover:scale-105 transition-transform inline-block">
                {m.val}
              </span>
              <h3 className="text-xs font-serif font-bold text-[#0F172A] dark:text-white">
                {m.label}
              </h3>
              <p className="text-[11px] text-[#53627A] dark:text-slate-400 font-sans leading-tight">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Direct Side-by-Side Comparative Matrix Table */}
        <div className="studio-card rounded-3xl p-6 sm:p-8 shadow-aesthetic-lg overflow-hidden border border-black/10 dark:border-white/10">
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08] mb-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Technical Matrix
              </span>
              <h3 className="text-lg font-serif font-bold text-[#0F172A] dark:text-white">
                Traditional OCR vs DocFin Multimodal Studio
              </h3>
            </div>
            <span className="hidden sm:inline text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              ● 100% Deterministic Grounding
            </span>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <table className="min-w-full text-left text-xs divide-y divide-black/[0.06] dark:divide-white/[0.08]">
              <thead>
                <tr className="text-slate-500 dark:text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 pr-4 font-semibold">Capability</th>
                  <th className="py-3 px-4 font-semibold text-rose-500">Legacy OCR & Chatbots</th>
                  <th className="py-3 pl-4 font-semibold text-blue-600 dark:text-blue-400">DocFin AI Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.05]">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-blue-50/30 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 pr-4 font-serif font-bold text-[#0F172A] dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                      <span>{row.legacy}</span>
                    </td>
                    <td className="py-3.5 pl-4 text-slate-900 dark:text-slate-200 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-[#0F172A] dark:text-white font-semibold">{row.docfin}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
