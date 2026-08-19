'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Mic,
  Send,
  Sparkles,
  FileText,
  X,
  UploadCloud,
  Image as ImageIcon,
  Video,
  FileSpreadsheet,
  Presentation,
  FileCode,
  CheckCircle2,
  Loader2,
  FolderOpen
} from 'lucide-react';
import { DocumentDomain, DocumentAnalysis, AttachedMediaFile, MediaType } from '@/lib/types';
import QuickActionMenu from '@/components/ui/QuickActionMenu';
import AddMediaModal from '@/components/ui/AddMediaModal';

interface PromptBarProps {
  activeDomain: DocumentDomain;
  onSendMessage: (query: string, attachedMedia?: AttachedMediaFile[]) => void;
  isLoading: boolean;
  onResetAnalysis?: () => void;
  currentDoc?: DocumentAnalysis | null;
  onSelectDoc?: (doc: DocumentAnalysis) => void;
  onFileDrop?: (file: File) => void;
  onMediaBatchAttached?: (files: AttachedMediaFile[]) => void;
  suggestions?: string[];
}

export default function PromptBar({
  activeDomain,
  onSendMessage,
  isLoading,
  onResetAnalysis,
  currentDoc,
  onSelectDoc,
  onFileDrop,
  onMediaBatchAttached,
  suggestions
}: PromptBarProps) {
  const [input, setInput] = useState('');
  const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);
  const [isAddMediaOpen, setIsAddMediaOpen] = useState(false);
  const [mediaCategory, setMediaCategory] = useState<MediaType | 'all'>('all');
  const [isRecording, setIsRecording] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<AttachedMediaFile[]>([]);
  const nativeFileInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  const detectMediaType = (file: File): MediaType => {
    const type = file.type.toLowerCase();
    const name = file.name.toLowerCase();
    if (type.startsWith('image/') || /\.(png|jpg|jpeg|webp|svg|gif)$/i.test(name)) return 'image';
    if (type.startsWith('video/') || /\.(mp4|mov|webm|avi|mkv)$/i.test(name)) return 'video';
    if (type.includes('pdf') || /\.pdf$/i.test(name)) return 'pdf';
    if (type.includes('spreadsheet') || type.includes('excel') || type.includes('csv') || /\.(xlsx|xls|csv|tsv)$/i.test(name)) return 'spreadsheet';
    if (type.includes('presentation') || type.includes('powerpoint') || /\.(pptx|ppt|key)$/i.test(name)) return 'presentation';
    if (/\.(json|yaml|yml|xml|py|ts|js|jsx|tsx|html|css|log)$/i.test(name)) return 'code';
    if (/\.(docx|doc|txt|md|rtf)$/i.test(name)) return 'document';
    return 'other';
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const processFiles = (files: FileList | File[]) => {
    const incoming: AttachedMediaFile[] = Array.from(files).map((file) => {
      const mediaType = detectMediaType(file);
      let previewUrl: string | undefined;
      if (mediaType === 'image') {
        previewUrl = URL.createObjectURL(file);
      }
      return {
        id: `att_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        name: file.name,
        size: file.size,
        sizeFormatted: formatFileSize(file.size),
        mimeType: file.type || 'application/octet-stream',
        mediaType,
        previewUrl,
        fileObject: file,
        status: 'uploading',
        progress: 30
      };
    });

    setAttachedFiles((prev) => [...prev, ...incoming]);

    // Simulate realistic upload -> processing -> ready pipeline
    incoming.forEach((item) => {
      setTimeout(() => {
        setAttachedFiles((prev) =>
          prev.map((f) => (f.id === item.id ? { ...f, status: 'processing', progress: 85 } : f))
        );
      }, 400);

      setTimeout(() => {
        setAttachedFiles((prev) =>
          prev.map((f) => (f.id === item.id ? { ...f, status: 'ready', progress: 100 } : f))
        );
      }, 900);
    });

    if (onMediaBatchAttached) {
      onMediaBatchAttached(incoming);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    // 1. Check for history document drag
    const jsonStr = e.dataTransfer.getData('application/json');
    if (jsonStr) {
      try {
        const payload = JSON.parse(jsonStr);
        if (payload.type === 'docfin-doc' && payload.doc) {
          const newDocItem: AttachedMediaFile = {
            id: `doc_${payload.doc.id}`,
            name: payload.doc.name,
            size: 1024 * 1024,
            sizeFormatted: payload.doc.fileSize || '1.0 MB',
            mimeType: 'application/pdf',
            mediaType: 'pdf',
            status: 'ready'
          };
          setAttachedFiles((prev) => [...prev.filter((f) => f.id !== newDocItem.id), newDocItem]);
          if (onSelectDoc) {
            onSelectDoc(payload.doc);
          }
          return;
        }
      } catch {
        // pass
      }
    }

    // 2. Multi-file native drop
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleNativeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
      e.target.value = '';
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0].transcript)
            .join('');
          setInput(transcript);
        };

        recognition.onerror = () => {
          setIsRecording(false);
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim() || (attachedFiles.length > 0 ? `Analyze and synthesize findings from attached ${attachedFiles.length} media file(s).` : '');
    if (!query || isLoading) return;

    onSendMessage(query, attachedFiles);
    setInput('');
    setAttachedFiles([]);
  };

  const handleOpenAddMedia = (cat: MediaType | 'all' = 'all') => {
    setMediaCategory(cat);
    setIsAddMediaOpen(true);
    setIsQuickActionOpen(false);
  };

  const handleMediaAttachedFromModal = (newFiles: AttachedMediaFile[]) => {
    setAttachedFiles((prev) => [...prev, ...newFiles]);
    if (onMediaBatchAttached) {
      onMediaBatchAttached(newFiles);
    }
    const firstPdf = newFiles.find((f) => f.mediaType === 'pdf' && f.fileObject);
    if (firstPdf && firstPdf.fileObject && onFileDrop) {
      onFileDrop(firstPdf.fileObject);
    }
  };

  const handleRemoveAttached = (id: string) => {
    setAttachedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const toggleMic = () => {
    if (!recognitionRef.current) {
      setIsRecording(!isRecording);
      if (!isRecording) {
        setTimeout(() => {
          setInput('Give me a 30-second executive summary with key numbers and takeaways.');
          setIsRecording(false);
        }, 1200);
      }
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.warn('Speech recognition error:', err);
      }
    }
  };

  const getMediaBadgeIcon = (mediaType: MediaType) => {
    switch (mediaType) {
      case 'image':
        return <ImageIcon className="w-4 h-4 text-emerald-400" />;
      case 'video':
        return <Video className="w-4 h-4 text-purple-400" />;
      case 'pdf':
        return <FileText className="w-4 h-4 text-rose-400" />;
      case 'spreadsheet':
        return <FileSpreadsheet className="w-4 h-4 text-cyan-400" />;
      case 'presentation':
        return <Presentation className="w-4 h-4 text-amber-400" />;
      case 'code':
        return <FileCode className="w-4 h-4 text-blue-400" />;
      default:
        return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  const getDomainFeaturePills = () => {
    if (activeDomain === 'finance') {
      return [
        {
          label: '💳 Statement Simplifier',
          prompt: currentDoc
            ? `Simplify and breakdown ${currentDoc.name} into total monthly credits, debits, recurring subscriptions, and net cash flow.`
            : 'Simplify and breakdown this bank statement into total monthly credits, debits, recurring subscriptions, and net cash flow.'
        },
        {
          label: '📈 Cash Flow & Expense Audit',
          prompt: 'Analyze all high-value debits and categorize spending into essential vs discretionary expenses.'
        },
        {
          label: '🔍 Hidden Fee & Interest Detector',
          prompt: 'Audit this statement for hidden service charges, penalties, overdraft fees, or interest rate spikes.'
        },
        {
          label: '🎯 50/30/20 Budget Plan',
          prompt: 'Provide a personalized 50/30/20 budget recommendation and savings plan based on this financial flow.'
        }
      ];
    }

    if (activeDomain === 'insurance') {
      return [
        {
          label: '🛡️ Policy Coverage Breakdown',
          prompt: currentDoc
            ? `Breakdown the coverage limits, sum insured, copay percentages, and cashless network provisions in ${currentDoc.name}.`
            : 'Breakdown the coverage limits, sum insured, copay percentages, and cashless network provisions in this insurance policy.'
        },
        {
          label: '⚠️ Exclusions & Waiting Periods',
          prompt: 'Highlight all specific exclusions, permanent clause restrictions, and pre-existing disease waiting periods in this policy.'
        },
        {
          label: '🏥 Claim Settlement Checklist',
          prompt: 'Generate a step-by-step checklist of documents, deadlines, and requirements to ensure guaranteed claim approval.'
        },
        {
          label: '📑 Deductibles & Copay Rules',
          prompt: 'Explain the exact deductibles, out-of-pocket maximums, and room rent capping rules in simple terms.'
        }
      ];
    }

    if (activeDomain === 'legal') {
      return [
        {
          label: '⚖️ Liability & Indemnity Audit',
          prompt: currentDoc
            ? `Audit ${currentDoc.name} for uncapped liability, indemnity risks, non-compete clauses, and jurisdiction traps.`
            : 'Audit this contract for uncapped liability, indemnity risks, non-compete clauses, and jurisdiction traps.'
        },
        {
          label: '📝 Termination & Exit Terms',
          prompt: 'Extract all termination conditions, lock-in periods, notice requirements, and early exit penalties.'
        },
        {
          label: '🔒 Confidentiality & IP Rights',
          prompt: 'Verify standard NDA confidentiality durations, proprietary IP ownership rights, and data protection terms.'
        },
        {
          label: '✍️ Clause Summary & Redlines',
          prompt: 'Provide a plain-English clause-by-clause summary with recommended redlines for negotiation.'
        }
      ];
    }

    if (activeDomain === 'academic') {
      return [
        {
          label: '🎓 Methodology & Architecture',
          prompt: currentDoc
            ? `Explain the methodology, core theoretical framework, and novelty of ${currentDoc.name}.`
            : 'Explain the methodology, core theoretical framework, and novelty of this research paper.'
        },
        {
          label: '📊 Benchmark Results & BLEU',
          prompt: 'Extract all benchmark evaluation scores, baseline comparisons, and statistical significance metrics.'
        },
        {
          label: '💡 Key Contributions & Limits',
          prompt: 'Summarize the primary contributions, assumptions, and acknowledged limitations of this study.'
        },
        {
          label: '📚 Literature & Prior Work',
          prompt: 'Provide a concise literature review contextualizing how this paper advances state-of-the-art work.'
        }
      ];
    }

    if (activeDomain === 'billing') {
      return [
        {
          label: '📑 Invoice & GST Reconciliation',
          prompt: currentDoc
            ? `Reconcile all line items, tax rates (GST/VAT), discount deductions, and total amount payable in ${currentDoc.name}.`
            : 'Reconcile all line items, tax rates (GST/VAT), discount deductions, and total amount payable in this invoice.'
        },
        {
          label: '📊 Vendor Cost Comparison',
          prompt: 'Compare vendor unit rates, quantity variances, and identify potential cost savings.'
        },
        {
          label: '🔢 Tabular Matrix Extraction',
          prompt: 'Extract all tabular rows and columns into clean CSV / Markdown table format.'
        },
        {
          label: '⚠️ Discrepancy & Duplicate Check',
          prompt: 'Audit this billing file for duplicate invoice numbers, arithmetic errors, or overbilling.'
        }
      ];
    }

    if (activeDomain === 'medical') {
      return [
        {
          label: '🩺 Lab Report Simplifier',
          prompt: currentDoc
            ? `Explain the medical lab test markers, reference ranges, and abnormal findings in ${currentDoc.name} in clear, plain language.`
            : 'Explain these medical lab test markers, reference ranges, and abnormal findings in clear, plain language.'
        },
        {
          label: '💊 Medication & Dosage Schedule',
          prompt: 'Extract prescribed medicines, dosage timings, dietary precautions, and possible drug interactions.'
        },
        {
          label: '📋 Treatment Plan Summary',
          prompt: 'Summarize the diagnosis, recommended lifestyle modifications, and follow-up consultation dates.'
        },
        {
          label: '⚠️ Warning Signs & Emergency Care',
          prompt: 'List critical warning symptoms that require immediate medical attention or emergency care.'
        }
      ];
    }

    if (currentDoc) {
      return [
        {
          label: '📝 Executive Summary',
          prompt: `Please provide a concise executive summary of ${currentDoc.name} highlighting the top 5 key takeaways and conclusions.`
        },
        {
          label: '📊 Extract Data Tables',
          prompt: 'Extract all data tables and numerical matrices from this document into clean Markdown rows.'
        },
        {
          label: '⚖️ Risk & Clause Audit',
          prompt: 'Audit all key clauses, liability risks, financial obligations, and critical deadlines in this document.'
        },
        {
          label: '📅 Critical Deadlines',
          prompt: 'List all important dates, renewal milestones, payment terms, and deadlines found in this document.'
        }
      ];
    }

    return [
      {
        label: '📄 Summarize or analyze a document',
        prompt: 'Please summarize this document, highlight the key executive takeaways, and list any critical action items or risks.'
      },
      {
        label: '⚡ Write, explain, or debug code',
        prompt: 'Write clean, type-safe TypeScript code to parse, validate, and transform structured data, with explanations and error handling.'
      },
      {
        label: '📊 Extract and format structured data',
        prompt: 'Extract all numerical figures, financial metrics, and data tables from this document into structured Markdown table format.'
      },
      {
        label: '💡 Explain a complex concept simply',
        prompt: 'Explain how transformer self-attention neural network architectures work in simple, intuitive terms with an analogy.'
      }
    ];
  };

  const featurePills = getDomainFeaturePills();

  const handlePillClick = (promptText: string) => {
    setInput(promptText);
    setTimeout(() => {
      textInputRef.current?.focus();
    }, 50);
  };

  return (
    <>
      {/* Hidden Native File Picker for Instant Upload */}
      <input
        ref={nativeFileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,.xlsx,.xls,.csv,.pptx,.txt,.json,.mp4,.mov"
        onChange={handleNativeFileInput}
        className="hidden"
      />

      <div className="sticky bottom-0 bg-transparent px-2 sm:px-4 py-2 sm:py-3 pb-safe z-20 transition-colors pointer-events-none w-full max-w-[100vw]">
        <form
          onSubmit={handleSubmit}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="max-w-3xl mx-auto flex flex-col gap-1.5 sm:gap-2 relative pointer-events-auto"
        >
          {/* Staged Multi-Media Attachment Cards (ChatGPT Style) */}
          {attachedFiles.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none animate-in fade-in slide-in-from-bottom-2 px-1">
              {attachedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-2.5 px-3 py-1.5 sm:py-2 liquid-glass-card rounded-2xl text-xs text-white shadow-xl flex-shrink-0 animate-in zoom-in-95 group relative border border-white/15"
                >
                  {/* Thumbnail or Media Icon */}
                  {file.previewUrl ? (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl overflow-hidden border border-white/20 flex-shrink-0 bg-black/40">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={file.previewUrl} alt={file.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {getMediaBadgeIcon(file.mediaType)}
                    </div>
                  )}

                  <div className="flex flex-col min-w-0 pr-1">
                    <span className="font-semibold text-[11px] sm:text-xs truncate max-w-[120px] sm:max-w-[150px] text-white">
                      {file.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-slate-400">
                      <span>{file.sizeFormatted}</span>
                      <span>•</span>
                      {file.status === 'uploading' && (
                        <span className="text-amber-400 flex items-center gap-1">
                          <Loader2 className="w-2.5 h-2.5 animate-spin" /> Uploading
                        </span>
                      )}
                      {file.status === 'processing' && (
                        <span className="text-blue-400 flex items-center gap-1">
                          <Loader2 className="w-2.5 h-2.5 animate-spin" /> Processing
                        </span>
                      )}
                      {(!file.status || file.status === 'ready') && (
                        <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Ready
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveAttached(file.id)}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 transition-colors flex items-center justify-center cursor-pointer ml-1 touch-target"
                    title="Remove attachment"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Main Floating Liquid Glass Capsule Prompt Bar */}
          <div
            className={`flex items-center gap-1.5 sm:gap-2.5 rounded-full p-1.5 sm:p-2.5 shadow-2xl transition-all relative ${
              isDragOver
                ? 'border-2 border-dashed border-blue-400 bg-blue-500/20 ring-4 ring-blue-500/30 scale-[1.01]'
                : 'liquid-glass-capsule border border-white/20 dark:border-white/15 focus-within:border-blue-400/80 focus-within:ring-2 focus-within:ring-blue-500/30'
            }`}
          >
            {isDragOver ? (
              <div className="flex-1 flex items-center justify-center gap-2 py-1.5 text-xs text-blue-300 font-bold animate-pulse">
                <UploadCloud className="w-4 h-4" />
                <span>Drop files anywhere to attach to conversation...</span>
              </div>
            ) : (
              <>
                {/* The Dynamic [+] Super-Action Button (Media + Features Menu) */}
                <div className="relative flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsQuickActionOpen(!isQuickActionOpen)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all flex items-center justify-center shadow-xs cursor-pointer hover:scale-105 active:scale-95 touch-target ${
                      isQuickActionOpen
                        ? 'bg-blue-600 text-white border-blue-400 rotate-45 ring-2 ring-blue-500/40'
                        : 'bg-white/10 dark:bg-white/5 text-slate-200 hover:text-white hover:bg-white/15 border-white/15'
                    }`}
                    title="Add Media Files & Features (+)"
                  >
                    <Plus className="w-4 h-4 text-blue-400" />
                  </button>

                  <QuickActionMenu
                    activeDomain={activeDomain}
                    isOpen={isQuickActionOpen}
                    onClose={() => setIsQuickActionOpen(false)}
                    onExecuteAction={(title, prompt) => handlePillClick(prompt)}
                    onUploadClick={() => nativeFileInputRef.current?.click()}
                    onOpenAddMedia={handleOpenAddMedia}
                  />
                </div>

                {/* Mic / Voice Dictation Button */}
                <button
                  type="button"
                  onClick={toggleMic}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all shadow-xs flex-shrink-0 cursor-pointer touch-target ${
                    isRecording
                      ? 'bg-rose-600 text-white border-rose-500 animate-pulse ring-2 ring-rose-500/40'
                      : 'bg-white/10 dark:bg-white/5 border-white/15 text-slate-300 hover:text-white hover:bg-white/15'
                  }`}
                  title={isRecording ? 'Listening to voice...' : 'Voice Dictation'}
                >
                  <Mic className="w-4 h-4" />
                </button>

                {/* Prompt Input */}
                <input
                  ref={textInputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    attachedFiles.length > 0
                      ? `Ask questions about attached ${attachedFiles.length} file(s)...`
                      : 'Ask anything, summarize documents, analyze tables, or drop files...'
                  }
                  className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 min-w-0"
                />

                {/* Liquid Glass Send Button */}
                <button
                  type="submit"
                  disabled={(!input.trim() && attachedFiles.length === 0) || isLoading}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full liquid-glass-button text-white flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer touch-target"
                  title="Send Message"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </>
            )}
          </div>

          {/* Footer Subtext */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 px-2 sm:px-3 select-none gap-2">
            <span className="flex items-center gap-1 sm:gap-1.5 font-mono truncate">
              <Sparkles className="w-3 h-3 text-blue-400 flex-shrink-0" />
              <span className="truncate">DocFin AI Multimodal Assistant • Attach with <strong>[+]</strong></span>
            </span>
            <button
              type="button"
              onClick={() => nativeFileInputRef.current?.click()}
              className="text-blue-400 hover:underline flex items-center gap-1 font-mono cursor-pointer flex-shrink-0 touch-target"
            >
              <FolderOpen className="w-3 h-3" />
              <span>Browse</span>
            </button>
          </div>
        </form>
      </div>

      {/* Advanced Media Upload Modal */}
      <AddMediaModal
        isOpen={isAddMediaOpen}
        onClose={() => setIsAddMediaOpen(false)}
        onAttachFiles={handleMediaAttachedFromModal}
        initialCategory={mediaCategory}
      />
    </>
  );
}
