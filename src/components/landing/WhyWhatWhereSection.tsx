'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Scale,
  CreditCard,
  BookOpen,
  FileSpreadsheet,
  ShieldAlert,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Building2,
  Compass,
  Layers,
  HelpCircle,
  Lightbulb,
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function WhyWhatWhereSection() {
  const [activePillar, setActivePillar] = useState<'what' | 'why' | 'where'>('what');

  const pillars = {
    what: {
      badge: '01 • THE PRODUCT',
      title: 'What is DocFin?',
      headline: 'A Universal Document Intelligence Studio.',
      summary:
        'DocFin is a multimodal document reasoning engine powered by Gemini 2.0. It ingests complex 500+ page PDFs, financial ledgers, scans, and contracts—extracting structured data tables, identifying hidden covenants, and generating plain-English executive memos with exact page-coordinate citations.',
      keyPoints: [
        {
          label: 'Spatial Coordinate Grounding',
          desc: 'Every key number, liability, and covenant is tied to exact x,y pixel bounding boxes on the original page.'
        },
        {
          label: 'Multimodal Parsing Engine',
          desc: 'Processes high-res scanned PDFs, mobile receipt photos, spreadsheets, audio calls, and slide decks.'
        },
        {
          label: 'Conversational Reasoning Canvas',
          desc: 'Chat freely with your documents, draft negotiation redlines, and export structured CSV/Markdown matrices.'
        }
      ],
      visualQuote: {
        tag: 'CORE CAPABILITY',
        text: 'Zero hallucination coordinate tensors. Ask any question and verify the exact page citation in real-time.'
      }
    },
    why: {
      badge: '02 • THE PROBLEM',
      title: 'Why Does It Exist?',
      headline: 'Crucial commitments stay buried in fine print.',
      summary:
        'Modern agreements and financial paperwork are deliberately dense. Manual human review is slow, error-prone, and misses high-stake risks: deposit forfeiture clauses, unannounced bank fees, missed GST input credits, and restrictive insurance exclusions.',
      keyPoints: [
        {
          label: 'Prevent Silent Capital Leakage',
          desc: 'Catches intraday bank surcharges, unutilized GSTR-3B tax deductions, and auto-renewal penalties.'
        },
        {
          label: 'Eliminate 5+ Hours of Transcribing',
          desc: 'Converts complex multi-column static PDF tables into clean structured CSV spreadsheets in milliseconds.'
        },
        {
          label: 'Protect Against Legal Traps',
          desc: 'Flags non-standard indemnity obligations, uncapped liabilities, and strict notice period deadlines.'
        }
      ],
      visualQuote: {
        tag: 'OPERATIONAL REALITY',
        text: '74% of commercial leases contain unflagged penalty clauses. DocFin instantly surfaces them with counter-clauses.'
      }
    },
    where: {
      badge: '03 • REAL-WORLD APPLICATION',
      title: 'Where is it Used?',
      headline: 'Across high-stakes professional sectors.',
      summary:
        'DocFin is deployed across accounting firms, legal teams, operations departments, and research institutions to automate rigorous document audits with zero setup.',
      keyPoints: [
        {
          label: 'Commercial Contracts & Leases',
          desc: 'Audit deposit forfeiture terms, lock-in periods, indemnity caps, and notice renewal milestones.'
        },
        {
          label: 'Banking Statements & Cash Flow',
          desc: 'Reconcile multi-account inflows, debit breakdowns, recurring fees, and generate dispute letters.'
        },
        {
          label: 'Supplier Invoices & Tax Filings',
          desc: 'Audit line-item unit rates, HSN tax codes, and verify 100% GSTR-3B input tax credit eligibility.'
        },
        {
          label: 'Academic Research & Benchmarks',
          desc: 'Extract empirical benchmark tables (BLEU/WMT), mathematical theorems, and dataset citations.'
        }
      ],
      visualQuote: {
        tag: 'DEPLOYMENT SCENE',
        text: 'From Fortune 500 audit teams to solo founders auditing vendor agreements before signing.'
      }
    }
  };

  const current = pillars[activePillar];

  return (
    <section id="what-why-where" className="py-20 sm:py-28 select-none bg-[var(--bg-canvas)] relative overflow-hidden transition-colors duration-300">
      {/* Background Subtle Coordinate Lines & Dot Matrix */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-70 dark:opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_60%,transparent_100%)]" />
      <div className="absolute inset-0 bg-hero-ambient pointer-events-none opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-card text-xs font-mono font-medium shadow-xs">
            <Compass className="w-3.5 h-3.5 text-blue-500" />
            <span>Foundational Manifesto</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#0F172A] dark:text-white tracking-tight leading-tight font-bold">
            Clarity for high-stakes documents.
          </h2>

          <p className="text-xs sm:text-sm text-[#53627A] dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
            Understand the essence of DocFin: what it does, why it matters, and where it protects your organization.
          </p>
        </div>

        {/* 3 Interactive Pillar Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-full studio-card border border-black/10 dark:border-white/10 gap-1 overflow-x-auto scrollbar-none">
            {[
              { id: 'what', label: '01 • What is DocFin?', icon: Sparkles },
              { id: 'why', label: '02 • Why It Matters', icon: Lightbulb },
              { id: 'where', label: '03 • Where It Is Used', icon: MapPin }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePillar(tab.id as any)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-serif font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap touch-target ${
                    activePillar === tab.id
                      ? 'bg-[#2563EB] text-white shadow-md'
                      : 'text-[#53627A] dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pillar Card Showcase (Google AI Studio & Editorial Precision) */}
        <div className="studio-card rounded-3xl p-6 sm:p-10 border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden relative group animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Headline & Editorial Narrative (6 cols) */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] dark:text-white leading-tight">
                {current.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[#53627A] dark:text-slate-300 leading-relaxed font-sans">
                {current.summary}
              </p>

              {/* Visual Quote Box */}
              <div className="mt-6 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
                  {current.visualQuote.tag}
                </span>
                <p className="font-serif text-[#0F172A] dark:text-slate-200 italic leading-relaxed text-xs sm:text-sm">
                  "{current.visualQuote.text}"
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/dashboard"
                  className="glass-button-emerald inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-xs font-bold transition-all touch-target shadow-xs"
                >
                  <span>Experience Interactive Studio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Structural Points & Architecture (6 cols) */}
            <div className="lg:col-span-6 space-y-3 text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Key Architectural Pillars
              </span>

              <div className="space-y-3">
                {current.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/[0.02] dark:bg-black/30 border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3 hover:border-black/20 dark:hover:border-white/20 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-[#0F172A] dark:text-white">
                        {point.label}
                      </h4>
                      <p className="text-[11px] text-[#53627A] dark:text-slate-400 mt-0.5 leading-relaxed font-sans">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Fast-Scan Grid (What / Why / Where Quick Overview) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          <div className="studio-card rounded-3xl p-6 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                What
              </span>
              <h4 className="text-base font-serif font-bold text-[#0F172A] dark:text-white mt-1 mb-2">
                Multimodal Reasoning Engine
              </h4>
              <p className="text-xs text-[#53627A] dark:text-slate-400 leading-relaxed font-sans">
                Deconstructs 500+ page contracts, bank statements, research papers, and invoices into structured data and spatial citations.
              </p>
            </div>
          </div>

          <div className="studio-card rounded-3xl p-6 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Why
              </span>
              <h4 className="text-base font-serif font-bold text-[#0F172A] dark:text-white mt-1 mb-2">
                Stop Hidden Liabilities & Traps
              </h4>
              <p className="text-xs text-[#53627A] dark:text-slate-400 leading-relaxed font-sans">
                Prevents missed deposit forfeiture clauses, unannounced bank fee surcharges, and lost GSTR-3B tax credit deductions.
              </p>
            </div>
          </div>

          <div className="studio-card rounded-3xl p-6 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Where
              </span>
              <h4 className="text-base font-serif font-bold text-[#0F172A] dark:text-white mt-1 mb-2">
                Every High-Stakes Sector
              </h4>
              <p className="text-xs text-[#53627A] dark:text-slate-400 leading-relaxed font-sans">
                Deployed by auditors, corporate counsel, SMB founders, and academic researchers for rapid, zero-hallucination audits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
