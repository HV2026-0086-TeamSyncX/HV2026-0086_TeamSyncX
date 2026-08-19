'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  UploadCloud,
  Key,
  CheckCircle2,
  ArrowRight,
  X,
  FileSearch,
  Zap
} from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartAudit: () => void;
  onOpenSettings: () => void;
}

export default function OnboardingModal({
  isOpen,
  onClose,
  onStartAudit,
  onOpenSettings
}: OnboardingModalProps) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/65 backdrop-blur-2xl animate-in fade-in select-none">
      {/* Liquid Glass Modal Window */}
      <div className="liquid-glass-modal rounded-[24px] sm:rounded-[32px] w-full max-w-lg text-white overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-250 group max-h-[92vh] overflow-y-auto">
        {/* Ambient Fluid Glow */}
        <div className="absolute top-0 left-1/4 w-56 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-1/4 w-56 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all z-10 cursor-pointer backdrop-blur-md touch-target"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Step Indicator */}
        <div className="flex gap-2 px-6 sm:px-8 pt-5 sm:pt-7">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                step >= s
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Welcome */}
        {step === 1 && (
          <div className="p-4 sm:p-6 sm:p-8 space-y-5 sm:space-y-6 text-center animate-in fade-in">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-indigo-500/20 border border-white/20 text-blue-300 mx-auto flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-lg sm:text-2xl font-serif font-bold text-white tracking-tight">
                Welcome to DocFin
              </h3>
              <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm mx-auto font-sans">
                DocFin ingests dense documents, extracts structured data tables, flags liability clauses, and provides 100% grounded answers with page coordinate citations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1 text-center text-xs">
              <div className="p-3 sm:p-3.5 rounded-2xl liquid-glass-card flex sm:flex-col items-center gap-2.5 sm:gap-1">
                <FileSearch className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span className="font-semibold text-[11px] text-white block">Multimodal OCR</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl liquid-glass-card flex sm:flex-col items-center gap-2.5 sm:gap-1">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-[11px] text-white block">Grounded RAG</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl liquid-glass-card flex sm:flex-col items-center gap-2.5 sm:gap-1">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                <span className="font-semibold text-[11px] text-white block">0 Hallucinations</span>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="liquid-glass-button w-full py-3 sm:py-3.5 px-4 rounded-full text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-102 active:scale-98 touch-target"
            >
              <span>Next: API & Engine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: API Keys */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in fade-in">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600/30 to-teal-500/20 border border-white/20 text-emerald-300 mx-auto flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <Key className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                Live Cloud Engine Connected
              </h3>
              <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm mx-auto font-sans">
                DocFin is pre-configured with Google Gemini 1.5/2.0 Flash, Qdrant Cloud Vector Database, and Upstash Redis. You can also add custom BYOK keys anytime in Settings.
              </p>
            </div>

            <div className="p-4 rounded-2xl liquid-glass-card text-left space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Gemini Engine:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active (2.0 Flash)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Qdrant Vectors:</span>
                <span className="text-emerald-400 font-bold">Online (docfin_documents)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Redis Acceleration:</span>
                <span className="text-emerald-400 font-bold">Connected (&lt;10ms)</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { onClose(); onOpenSettings(); }}
                className="flex-1 py-3 px-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Configure Keys
              </button>
              <button
                onClick={() => setStep(3)}
                className="liquid-glass-button flex-1 py-3 px-4 rounded-full text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-102 active:scale-98"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Ready to Upload */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in fade-in">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600/30 to-emerald-400/20 border border-white/20 text-emerald-300 mx-auto flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <UploadCloud className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                You&apos;re All Set!
              </h3>
              <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm mx-auto font-sans">
                Drop your first file (PDF, Contract, Tax Invoice, Bank Statement, Photo, or Sheet) to run an instantaneous spatial audit.
              </p>
            </div>

            <div className="space-y-2.5 text-left text-xs text-slate-300 liquid-glass-card p-4 sm:p-5 rounded-2xl font-sans">
              <p className="flex items-center gap-2.5">
                <span className="font-mono text-blue-400 font-bold">1.</span> Drag & drop or click anywhere to upload
              </p>
              <p className="flex items-center gap-2.5">
                <span className="font-mono text-blue-400 font-bold">2.</span> Click <strong className="text-white">[+]</strong> in the prompt bar for 1-click super-actions
              </p>
              <p className="flex items-center gap-2.5">
                <span className="font-mono text-blue-400 font-bold">3.</span> Grounded citations and CSV tables generated in seconds
              </p>
            </div>

            <button
              onClick={() => { onClose(); onStartAudit(); }}
              className="liquid-glass-button w-full py-3.5 px-4 rounded-full text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-102 active:scale-98"
            >
              <span>Launch Workspace Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
