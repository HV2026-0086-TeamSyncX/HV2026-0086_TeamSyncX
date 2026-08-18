'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Circle,
  AlertCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  FileText,
  Tag,
  Copy,
  Check
} from 'lucide-react';
import { DocumentAnalysis, ActionChecklistItem } from '@/lib/types';
import MetricCard from '@/components/ui/MetricCard';

export default function OverviewTab({
  doc,
  onUpdateChecklist
}: {
  doc: DocumentAnalysis;
  onUpdateChecklist?: (updatedList: ActionChecklistItem[]) => void;
}) {
  const [checklist, setChecklist] = useState<ActionChecklistItem[]>(doc.summary.actionChecklist);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const toggleCheckItem = (id: string) => {
    const updated = checklist.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setChecklist(updated);
    if (onUpdateChecklist) onUpdateChecklist(updated);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const completedCount = checklist.filter((i) => i.completed).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Top KPI Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {doc.metrics.map((metric, idx) => (
          <MetricCard key={idx} data={metric} />
        ))}
      </div>

      {/* 2. Executive Summary & TL;DR */}
      <div className="bg-white dark:bg-[#121722] rounded-3xl p-6 sm:p-8 border border-[#DCE5F0] dark:border-white/10 shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#EBF2FE] dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#101828] dark:text-white tracking-tight">
              Executive Summary & Audit Findings
            </h3>
          </div>
          <button
            onClick={() => handleCopy(doc.summary.tldr, 'tldr')}
            className="text-xs text-[#8092A7] hover:text-[#101828] dark:hover:text-slate-200 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F7FC] dark:bg-white/5 border border-[#DCE5F0] dark:border-white/10 transition-colors"
          >
            {copiedKey === 'tldr' ? <Check className="w-3.5 h-3.5 text-[#2563EB] dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedKey === 'tldr' ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* TL;DR Box */}
        <div className="p-4 rounded-2xl bg-[#EBF2FE]/60 dark:bg-blue-950/30 border border-[#DCE5F0] dark:border-blue-900/40 text-[#101828] dark:text-slate-200 text-xs leading-relaxed font-medium mb-6">
          <span className="font-bold text-[#2563EB] dark:text-blue-400 mr-2 font-mono">EXECUTIVE TL;DR:</span>
          {doc.summary.tldr}
        </div>

        {/* Key Takeaways */}
        <div>
          <h4 className="text-xs font-bold text-[#8092A7] dark:text-slate-300 uppercase tracking-wider mb-3 font-mono">
            Core Findings & Critical Takeaways
          </h4>
          <div className="space-y-2.5">
            {doc.summary.keyTakeaways.map((takeaway, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFD] dark:bg-white/5 border border-[#DCE5F0] dark:border-white/5 text-xs text-[#101828] dark:text-slate-300 leading-relaxed"
              >
                <div className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                <p>{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Grid: Action Checklist & Extracted Key Entities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Action Item Checklist (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#121722] rounded-3xl p-6 sm:p-8 border border-[#DCE5F0] dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-emerald-400" />
              <h3 className="text-sm sm:text-base font-serif font-bold text-[#101828] dark:text-white tracking-tight">
                Recommended Action Checklist
              </h3>
            </div>
            <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#EBF2FE] text-[#2563EB] dark:bg-blue-950/60 dark:text-blue-300 border border-[#DCE5F0] dark:border-blue-800">
              {completedCount}/{checklist.length} Completed
            </span>
          </div>

          <div className="space-y-2.5">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCheckItem(item.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  item.completed
                    ? 'bg-[#F4F7FC]/50 dark:bg-white/5 border-[#DCE5F0] dark:border-white/5 opacity-60'
                    : 'bg-[#F8FAFD] dark:bg-[#121722] border-[#DCE5F0] dark:border-white/10 hover:border-[#2563EB] dark:hover:border-blue-500'
                }`}
              >
                <button className="mt-0.5 flex-shrink-0 text-[#8092A7] hover:text-[#2563EB] dark:hover:text-blue-400">
                  {item.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-emerald-400" />
                  ) : (
                    <Circle className="w-4 h-4 text-[#CBD5E1] dark:text-slate-600" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs font-medium leading-relaxed ${
                      item.completed ? 'line-through text-[#8092A7]' : 'text-[#101828] dark:text-slate-200'
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0 font-mono ${
                    item.priority === 'high'
                      ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50'
                      : item.priority === 'medium'
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50'
                      : 'bg-[#F4F7FC] dark:bg-white/10 text-[#53627A] dark:text-slate-400'
                  }`}
                >
                  {item.priority.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Extracted Entities & Metadata (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-[#121722] rounded-3xl p-6 sm:p-8 border border-[#DCE5F0] dark:border-white/10 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#101828] dark:text-white tracking-tight">
              Grounded Entities & Concepts
            </h3>
          </div>

          <div className="space-y-2.5">
            {(doc.extractedEntities || []).length > 0 ? (
              doc.extractedEntities.map((entity, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-[#F8FAFD] dark:bg-white/5 border border-[#DCE5F0] dark:border-white/5 flex items-center justify-between text-xs"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-semibold text-[#8092A7] dark:text-slate-500 uppercase tracking-wider block font-mono">
                      {entity.key}
                    </span>
                    <p className="font-bold text-[#101828] dark:text-slate-200 truncate mt-0.5">
                      {entity.value}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#EBF2FE] dark:bg-white/10 text-[#2563EB] dark:text-slate-400 border border-[#DCE5F0] dark:border-white/10 flex-shrink-0 font-semibold">
                    Pg {entity.page}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-4 rounded-2xl bg-[#F8FAFD] dark:bg-white/5 border border-[#DCE5F0] dark:border-white/5 text-xs text-[#53627A] dark:text-slate-400 leading-relaxed">
                <span className="font-bold text-[#101828] dark:text-white block mb-1 font-mono uppercase text-[10px]">Document Intelligence</span>
                <p>Domain: <strong className="text-[#2563EB] dark:text-blue-400">{doc.detectedDomain.toUpperCase()}</strong> ({doc.classificationDetails?.recommendedLens || 'Universal'}). Grounded across {doc.pageCount} page(s).</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
