'use client';

import React, { useState, useRef } from 'react';
import {
  History,
  FileText,
  ChevronRight,
  ChevronLeft,
  Trash2,
  Search,
  CheckCircle2,
  X,
  Plus,
  CreditCard,
  Scale,
  BookOpen,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import { DocumentAnalysis } from '@/lib/types';

interface RightSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentDoc: DocumentAnalysis | null;
  docs: DocumentAnalysis[];
  onSelectDoc: (doc: DocumentAnalysis) => void;
  onClearHistory: () => void;
  onRemoveDoc?: (docId: string) => void;
  onNewAudit?: () => void;
  onUploadFile?: (file: File) => void;
  onOpenAddMedia?: () => void;
}

export default function RightSidebar({
  isOpen,
  onToggle,
  currentDoc,
  docs,
  onSelectDoc,
  onClearHistory,
  onRemoveDoc,
  onNewAudit,
  onUploadFile,
  onOpenAddMedia
}: RightSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredDocs = docs.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.detectedDomain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUploadClick = () => {
    if (onNewAudit) onNewAudit();
    if (onOpenAddMedia) {
      onOpenAddMedia();
    } else if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getDocIcon = (domain: string) => {
    switch (domain) {
      case 'academic':
        return <BookOpen className="w-4 h-4 text-purple-400" />;
      case 'legal':
        return <Scale className="w-4 h-4 text-rose-400" />;
      case 'finance':
      case 'billing':
        return <CreditCard className="w-4 h-4 text-emerald-400" />;
      case 'insurance':
        return <ShieldCheck className="w-4 h-4 text-blue-400" />;
      default:
        return <FileText className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx,.doc,.txt,.md,.xlsx,.xls,.csv,.pptx,.png,.jpg,.jpeg,.mp4"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0] && onUploadFile) {
            onUploadFile(e.target.files[0]);
          }
        }}
      />

      <aside
        className={`relative flex flex-col bg-white dark:bg-[#0c1017] text-[#0F172A] dark:text-slate-300 border-l border-[#DCE5F0] dark:border-white/10 transition-all duration-300 ease-in-out select-none z-20 h-full ${
          isOpen ? 'w-72 sm:w-80' : 'w-0 border-l-0'
        }`}
      >
        {/* Visible Content Only When Open */}
        {isOpen && (
          <div className="flex flex-col h-full w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-14 border-b border-[#DCE5F0] dark:border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-white">
                  Document History
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F4F7FC] dark:bg-white/10 text-[#53627A] dark:text-slate-400">
                  {docs.length}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleUploadClick}
                  className="p-1.5 rounded-lg text-[#8092A7] hover:text-[#0F172A] dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  title="Add Media Files"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={onToggle}
                  className="p-1.5 rounded-lg text-[#8092A7] hover:text-[#0F172A] dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/10 transition-colors"
                  title="Collapse History Sidebar"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search Filter */}
            <div className="p-3 border-b border-[#DCE5F0] dark:border-white/10 flex-shrink-0">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#8092A7]" />
                <input
                  type="text"
                  placeholder="Search history..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-[#121722] border border-[#DCE5F0] dark:border-white/10 rounded-full focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder:text-[#8092A7] text-[#0F172A] dark:text-white"
                />
              </div>
            </div>

            {/* Documents List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-thin scrollbar-thumb-white/10">
              {filteredDocs.length === 0 ? (
                <div className="text-center py-12 px-4 space-y-2.5">
                  <FileText className="w-8 h-8 text-[#8092A7] mx-auto opacity-50" />
                  <p className="text-xs text-[#53627A] dark:text-slate-400">No documents found</p>
                  <button
                    onClick={handleUploadClick}
                    className="text-xs text-[#2563EB] dark:text-blue-400 hover:underline font-semibold cursor-pointer inline-flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Media Files</span>
                  </button>
                </div>
              ) : (
                filteredDocs.map((doc) => {
                  const isSelected = currentDoc?.id === doc.id;
                  return (
                    <div
                      key={doc.id}
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('application/json', JSON.stringify({ type: 'docfin-doc', doc }));
                        e.dataTransfer.setData('text/plain', doc.name);
                        e.dataTransfer.effectAllowed = 'copyMove';
                      }}
                      onClick={() => onSelectDoc(doc)}
                      className={`group relative p-3 rounded-2xl border text-left cursor-grab active:cursor-grabbing transition-all hover:scale-[1.01] ${
                        isSelected
                          ? 'bg-[#EBF2FE] dark:bg-white/10 border-[#2563EB] dark:border-blue-500 shadow-xs ring-2 ring-[#2563EB]/20'
                          : 'bg-white dark:bg-white/5 border-[#DCE5F0] dark:border-white/5 hover:border-[#CBD5E1] dark:hover:border-white/15 hover:bg-[#F8FAFD] dark:hover:bg-white/10'
                      }`}
                      title="Click to open or drag & drop to chat"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 min-w-0">
                          {getDocIcon(doc.detectedDomain)}
                          <h4 className="text-xs font-bold text-[#0F172A] dark:text-white truncate">
                            {doc.name}
                          </h4>
                        </div>

                        {onRemoveDoc && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveDoc(doc.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 text-[#8092A7] hover:text-rose-600 transition-all rounded"
                            title="Remove document from history"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-[#53627A] dark:text-slate-400 mt-1 font-mono">
                        <span className="uppercase font-semibold">{doc.detectedDomain}</span>
                        <span>{doc.pageCount} {doc.pageCount === 1 ? 'page' : 'pages'}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Clear History */}
            {docs.length > 0 && (
              <div className="p-3 border-t border-[#DCE5F0] dark:border-white/10 flex-shrink-0">
                <button
                  onClick={onClearHistory}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-[#53627A] dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All History</span>
                </button>
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
