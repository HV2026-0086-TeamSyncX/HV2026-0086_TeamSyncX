'use client';

import React, { useState } from 'react';
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Bookmark,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { DocumentAnalysis } from '@/lib/types';

export default function DocumentViewer({
  doc,
  activePage = 1,
  highlightText = ''
}: {
  doc: DocumentAnalysis;
  activePage?: number;
  highlightText?: string;
}) {
  const [currentPage, setCurrentPage] = useState(activePage);
  const [zoom, setZoom] = useState(100);

  const totalPages = doc.pageCount || 4;

  return (
    <div className="bg-[#0b0e14] text-slate-100 rounded-2xl border border-white/10 flex flex-col h-full overflow-hidden shadow-md">
      {/* Viewer Header */}
      <div className="p-3 bg-[#07090e] border-b border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 truncate">
          <FileText className="w-4 h-4 text-[#52B788] flex-shrink-0" />
          <span className="font-semibold text-slate-200 truncate">{doc.name}</span>
        </div>

        {/* Zoom & Page Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10">
            <button
              onClick={() => setZoom(Math.max(70, zoom - 15))}
              className="p-1 text-slate-400 hover:text-white rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono px-1 text-slate-300">{zoom}%</span>
            <button
              onClick={() => setZoom(Math.min(150, zoom + 15))}
              className="p-1 text-slate-400 hover:text-white rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-1 text-slate-400 hover:text-white disabled:opacity-30 rounded"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono px-1.5 text-slate-300">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-1 text-slate-400 hover:text-white disabled:opacity-30 rounded"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Document Page Canvas with Real Extracted Text */}
      <div className="flex-1 overflow-auto p-4 flex justify-center bg-black/40">
        <div
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          className="w-full max-w-xl bg-[#FAF9F5] text-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl transition-transform border border-slate-300 min-h-[560px] text-xs font-serif leading-relaxed"
        >
          {/* Header of Document */}
          <div className="border-b border-slate-300 pb-3 mb-4 text-center">
            <h2 className="text-sm font-bold tracking-tight uppercase text-slate-900">
              {doc.name.replace('.pdf', '').replace(/_/g, ' ')}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-1 text-[10px] font-sans text-slate-500">
              <span>Page {currentPage} of {totalPages}</span>
              <span>•</span>
              <span className="uppercase font-mono px-1.5 py-0.2 rounded bg-slate-200 text-slate-700">
                {doc.detectedDomain}
              </span>
            </div>
          </div>

          {/* Genuine Document Page Text */}
          <div className="space-y-4 font-sans text-slate-800 leading-relaxed">
            {doc.pageTexts && doc.pageTexts.find((p) => p.page === currentPage) ? (
              <div className="whitespace-pre-wrap font-sans text-xs text-slate-800 space-y-2 leading-relaxed">
                {doc.pageTexts.find((p) => p.page === currentPage)?.text}
              </div>
            ) : doc.rawText ? (
              <div className="whitespace-pre-wrap font-sans text-xs text-slate-800 space-y-2 leading-relaxed">
                {doc.rawText}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs">
                  <strong className="block font-bold mb-1">Executive Summary:</strong>
                  {doc.summary.executiveBrief || doc.summary.tldr}
                </div>
                <div className="space-y-1.5">
                  <strong className="block text-xs font-bold text-slate-900">Key Obligations & Facts:</strong>
                  {doc.summary.keyTakeaways.map((t, idx) => (
                    <p key={idx} className="text-xs text-slate-700 leading-relaxed">
                      • {t}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Page Extracted Entities & Data */}
            {doc.extractedEntities && doc.extractedEntities.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-200 bg-white/80 rounded-xl p-3.5 border text-xs space-y-2">
                <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider font-mono">
                  Grounded Page Entities & Numbers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {doc.extractedEntities.slice(0, 4).map((e, idx) => (
                    <div key={idx} className="flex justify-between text-[11px] bg-slate-50 p-1.5 rounded border border-slate-100">
                      <span className="text-slate-500">{e.key}:</span>
                      <span className="font-semibold text-slate-800 truncate max-w-[120px]">{e.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
