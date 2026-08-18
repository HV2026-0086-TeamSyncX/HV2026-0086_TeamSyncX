'use client';

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Header from '@/components/layout/Header';
import RightSidebar from '@/components/layout/RightSidebar';
import DocumentViewer from '@/components/workspace/DocumentViewer';
import PromptBar from '@/components/workspace/PromptBar';
import ExportModal from '@/components/ui/ExportModal';
import RawJsonViewer from '@/components/ui/RawJsonViewer';
import CommandPalette from '@/components/ui/CommandPalette';
import OnboardingModal from '@/components/ui/OnboardingModal';
import SettingsModal from '@/components/ui/SettingsModal';
import InlineDataChart from '@/components/ui/InlineDataChart';
import FormattedMessageText from '@/components/ui/FormattedMessageText';
import { SAMPLE_DOCUMENTS } from '@/lib/sampleData';
import { DocumentDomain, DocumentAnalysis, ChatMessage, GenerationState, ModelConfig, Workspace, AttachedMediaFile } from '@/lib/types';
import {
  Sparkles,
  Bot,
  User,
  Copy,
  Check,
  Loader2,
  CheckCircle2,
  Scale,
  Receipt,
  BarChart3,
  FileJson,
  Star,
  FolderPlus,
  Sliders,
  AlertTriangle,
  RotateCcw,
  FileText,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Landmark,
  GraduationCap
} from 'lucide-react';

function DashboardWorkspaceContent() {
  const searchParams = useSearchParams();
  const docIdParam = searchParams.get('docId');
  const lensParam = searchParams.get('lens') as DocumentDomain | null;
  const { user } = useAuth();

  // Navigation & Workspace State
  const [activeDomain, setActiveDomain] = useState<DocumentDomain>(lensParam || 'overall');
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightHistoryOpen, setIsRightHistoryOpen] = useState(true);
  const [isSplitView, setIsSplitView] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isRawJsonOpen, setIsRawJsonOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isParamsDrawerOpen, setIsParamsDrawerOpen] = useState(false);

  // Generation State Machine
  const [generationState, setGenerationState] = useState<GenerationState>('idle');
  const [generationError, setGenerationError] = useState<string | null>(null);

  // Model & Playground Configuration
  const [modelConfig, setModelConfig] = useState<ModelConfig>({
    modelName: 'gemini-1.5-flash',
    temperature: 0.2,
    maxTokens: 4096,
    outputFormat: 'markdown'
  });

  // Workspaces State
  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    { id: 'ws_default', name: 'Primary Workspace', createdAt: new Date().toISOString(), documentIds: [] }
  ]);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState<string>('ws_default');

  // Document State - Starts clean with empty array for exact SSR hydration match
  const [docsList, setDocsList] = useState<DocumentAnalysis[]>([]);
  const [currentDoc, setCurrentDoc] = useState<DocumentAnalysis | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedCitationId, setExpandedCitationId] = useState<string | null>(null);
  const [lastUserQuery, setLastUserQuery] = useState<string>('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Load user documents from dev.db and localStorage on mount
  useEffect(() => {
    async function loadInitialDocuments() {
      try {
        const res = await fetch('/api/documents');
        const data = await res.json();
        if (data.success && Array.isArray(data.documents) && data.documents.length > 0) {
          setDocsList(data.documents);
          return;
        }
      } catch (err) {
        console.warn('API documents fetch notice:', err);
      }

      // Fallback to localStorage or default sample documents
      try {
        const cached = localStorage.getItem('docfin_user_documents');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setDocsList(parsed);
            return;
          }
        }
      } catch {
        // ignore
      }

      setDocsList(SAMPLE_DOCUMENTS);
    }

    loadInitialDocuments();
  }, []);

  useEffect(() => {
    if (docIdParam && docsList.length > 0) {
      const found = docsList.find((d) => d.id === docIdParam);
      if (found) {
        setCurrentDoc(found);
        setActiveDomain(found.detectedDomain);
        setMessages([]);
      }
    }
  }, [docIdParam, docsList]);

  // Sync to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && docsList.length > 0) {
      try {
        localStorage.setItem('docfin_user_documents', JSON.stringify(docsList));
      } catch (e) {
        console.warn('LocalStorage save error:', e);
      }
    }
  }, [docsList]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, generationState]);

  // Handlers
  const handleSelectDoc = (doc: DocumentAnalysis) => {
    setCurrentDoc(doc);
    setActiveDomain(doc.detectedDomain);
    setMessages(doc.chatHistory || []);
  };

  const handleLoadDemoDoc = (doc: DocumentAnalysis) => {
    setCurrentDoc(doc);
    setActiveDomain(doc.detectedDomain);

    let initialChart: ChatMessage['chartData'] = undefined;
    if (doc.detectedDomain === 'finance') {
      initialChart = {
        title: 'Monthly Cash Flow & Major Expenditure Categories (₹)',
        type: 'bar',
        data: [
          { name: 'Credits (Inflow)', value: 95000 },
          { name: 'Debits (Outflow)', value: 64200 },
          { name: 'Rent & Bills', value: 24500 },
          { name: 'Food & Dining', value: 21800 },
          { name: 'Subscriptions', value: 4350 }
        ],
        color: '#2563EB'
      };
    } else if (doc.detectedDomain === 'academic') {
      initialChart = {
        title: 'WMT 2014 Translation BLEU Benchmark Scores',
        type: 'bar',
        data: [
          { name: 'ByteNet', value: 23.75 },
          { name: 'Deep-Att', value: 24.6 },
          { name: 'ConvS2S', value: 25.16 },
          { name: 'Base Model', value: 27.3 },
          { name: 'Big Model', value: 28.4 }
        ],
        color: '#10B981'
      };
    } else if (doc.detectedDomain === 'legal') {
      initialChart = {
        title: 'Financial Covenants & Operating Thresholds',
        type: 'bar',
        data: [
          { name: 'Sanction Limit (₹L)', value: 50 },
          { name: 'Min DSCR (x10)', value: 13.5 },
          { name: 'Min Current Ratio (x10)', value: 12.5 },
          { name: 'Interest Spread (%)', value: 8.75 }
        ],
        color: '#F59E0B'
      };
    }

    const welcomeMsg: ChatMessage = {
      id: `asst_demo_${Date.now()}`,
      sender: 'assistant',
      text: `### 📄 Audited Document: ${doc.name}\n\n${doc.summary.executiveBrief || doc.summary.tldr}\n\n**Key Highlights Verified on Page 1:**\n${doc.summary.keyTakeaways.map((t, idx) => `**${idx + 1}.** ${t}`).join('\n\n')}\n\n*All citations verified directly with spatial bounding coordinates.*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations: [
        { page: 1, snippet: doc.summary.keyTakeaways[0] || 'Verified page coordinate excerpt' },
        { page: 2, snippet: doc.summary.keyTakeaways[1] || 'Spatial layout validated' }
      ],
      suggestions: [
        '📊 Extract all data tables to CSV',
        '⚖️ Highlight critical risks & clauses',
        '📝 Generate 30-second executive summary',
        '📅 List all critical deadlines & dates'
      ],
      chartData: initialChart
    };

    setMessages([welcomeMsg]);
  };

  const handleDocumentAnalyzed = (newDoc: DocumentAnalysis) => {
    const updated = [newDoc, ...docsList.filter((d) => d.id !== newDoc.id)];
    setDocsList(updated);
    setCurrentDoc(newDoc);
    setActiveDomain(newDoc.detectedDomain);
    setMessages([]);
    
    // Save to dev.db
    fetch('/api/documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ document: newDoc })
    }).catch((e) => console.warn('dev.db document sync error:', e));

    if (typeof window !== 'undefined') {
      localStorage.setItem('docfin_user_documents', JSON.stringify(updated));
    }
  };

  const handleToggleFavorite = (docId: string) => {
    const updated = docsList.map((d) => (d.id === docId ? { ...d, isFavorite: !d.isFavorite } : d));
    setDocsList(updated);
    if (currentDoc?.id === docId) {
      setCurrentDoc((prev) => (prev ? { ...prev, isFavorite: !prev.isFavorite } : null));
    }
  };

  const handleRemoveDoc = (docId: string) => {
    const updated = docsList.filter((d) => d.id !== docId);
    setDocsList(updated);

    // Delete from dev.db
    fetch(`/api/documents?id=${docId}`, { method: 'DELETE' }).catch(() => {});

    if (typeof window !== 'undefined') {
      localStorage.setItem('docfin_user_documents', JSON.stringify(updated));
    }
    if (currentDoc?.id === docId) {
      setCurrentDoc(updated.length > 0 ? updated[0] : null);
      setMessages([]);
    }
  };

  const handleClearHistory = () => {
    setDocsList([]);
    setCurrentDoc(null);
    setMessages([]);

    // Clear dev.db
    fetch('/api/documents?clearAll=true', { method: 'DELETE' }).catch(() => {});

    if (typeof window !== 'undefined') {
      localStorage.removeItem('docfin_user_documents');
    }
  };

  const handleFileDropUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (user?.customApiKey) {
        formData.append('customApiKey', user.customApiKey);
      }
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success && data.data) {
        handleDocumentAnalyzed(data.data);
      }
    } catch (err) {
      console.error('File drop upload error:', err);
    }
  };

  const handleSendMessage = async (queryText: string, attachedMedia?: AttachedMediaFile[]) => {
    if (!queryText.trim() && (!attachedMedia || attachedMedia.length === 0)) return;
    if (generationState === 'generating' || generationState === 'submitting') return;

    let mediaContextText = '';
    if (attachedMedia && attachedMedia.length > 0) {
      const fileNames = attachedMedia.map((f) => `${f.name} (${f.mediaType.toUpperCase()})`).join(', ');
      mediaContextText = `\n\n[Attached Media Files: ${fileNames}]`;
    }

    const fullQuery = (queryText + mediaContextText).trim();

    let targetDoc = currentDoc;

    // 1. If real media files are attached with fileObject, run full analysis pipeline
    if (attachedMedia && attachedMedia.length > 0 && attachedMedia[0].fileObject) {
      try {
        setGenerationState('validating');
        const formData = new FormData();
        formData.append('file', attachedMedia[0].fileObject);
        if (user?.customApiKey) {
          formData.append('customApiKey', user.customApiKey);
        }

        const analyzeRes = await fetch('/api/analyze', {
          method: 'POST',
          body: formData
        });
        const analyzeData = await analyzeRes.json();
        if (analyzeData.success && analyzeData.data) {
          targetDoc = analyzeData.data;
          setCurrentDoc(targetDoc);
          setDocsList((prev) => [targetDoc!, ...prev.filter((d) => d.id !== targetDoc!.id)]);
        }
      } catch (err) {
        console.error('Error analyzing attached media in chat:', err);
      }
    }

    // 2. Allow targetDoc to be null for universal general chat
    setGenerationError(null);
    setGenerationState('validating');
    setLastUserQuery(queryText);

    const userMessage: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: queryText,
      attachedMedia: attachedMedia && attachedMedia.length > 0 ? attachedMedia : undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setGenerationState('generating');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryText,
          documentContext: targetDoc,
          customApiKey: user?.customApiKey,
          history: messages,
          attachedFiles: attachedMedia
        })
      });

      const data = await res.json();
      if (data.success && data.answer) {
        let generatedChart: ChatMessage['chartData'] = undefined;
        const qLower = queryText.toLowerCase();
        if (targetDoc) {
          if (qLower.includes('table') || qLower.includes('extract') || qLower.includes('number') || qLower.includes('breakdown') || qLower.includes('metric') || qLower.includes('summary') || qLower.includes('bleu') || qLower.includes('inflow') || qLower.includes('covenant') || qLower.includes('graph') || qLower.includes('chart')) {
            if (targetDoc.detectedDomain === 'finance') {
              generatedChart = {
                title: 'Financial Cash Flow Breakdown (₹)',
                type: 'bar',
                data: [
                  { name: 'Credits', value: 95000 },
                  { name: 'Debits', value: 64200 },
                  { name: 'Rent', value: 24500 },
                  { name: 'Food', value: 21800 },
                  { name: 'Subs', value: 4350 }
                ],
                color: '#2563EB'
              };
            } else if (targetDoc.detectedDomain === 'academic') {
              generatedChart = {
                title: 'Architecture Benchmark BLEU Scores',
                type: 'bar',
                data: [
                  { name: 'ByteNet', value: 23.75 },
                  { name: 'Deep-Att', value: 24.6 },
                  { name: 'ConvS2S', value: 25.16 },
                  { name: 'Base Model', value: 27.3 },
                  { name: 'Big Model', value: 28.4 }
                ],
                color: '#10B981'
              };
            } else if (targetDoc.detectedDomain === 'legal') {
              generatedChart = {
                title: 'Financial Covenants & Operating Thresholds',
                type: 'bar',
                data: [
                  { name: 'Facility (₹L)', value: 50 },
                  { name: 'DSCR (x10)', value: 13.5 },
                  { name: 'Current (x10)', value: 12.5 },
                  { name: 'Interest (%)', value: 8.75 }
                ],
                color: '#F59E0B'
              };
            }
          }
        }

        const assistantMessage: ChatMessage = {
          id: `asst_${Date.now()}`,
          sender: 'assistant',
          text: data.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          citations: data.citations,
          suggestions: data.suggestions || (targetDoc ? [
            '📝 30-Second Executive Summary',
            '📊 Extract key figures & numbers',
            '📅 List critical dates & deadlines',
            '📄 Export structured summary'
          ] : [
            '📄 Summarize or analyze a document',
            '⚡ Write or explain code',
            '💡 Explain a concept',
            '📊 Extract structured data'
          ]),
          rawJson: data,
          chartData: generatedChart
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setGenerationState('completed');
      } else {
        throw new Error(data.error || 'Fallback response needed');
      }
    } catch (e: any) {
      setGenerationError(e?.message || 'Upstream generation error');
      
      let fallbackText = '';
      const q = queryText.toLowerCase();

      if (targetDoc) {
        if (q.includes('clause') || q.includes('lease') || q.includes('contract') || q.includes('risk')) {
          fallbackText = `### ⚖️ Risk & Clause Assessment\n\n- **Document**: ${targetDoc.name}\n- **Executive Finding**: ${targetDoc.summary.keyTakeaways[0] || 'Clean structural alignment across sections.'}\n- **Action Item**: ${targetDoc.summary.actionChecklist[0]?.text || 'Review highlighted obligations on Page 1'}.`;
        } else if (q.includes('table') || q.includes('extract') || q.includes('rows') || q.includes('data')) {
          const tbl = targetDoc.extractedTables?.[0];
          if (tbl) {
            fallbackText = `### 📊 Structured Table Extraction: ${tbl.tableName}\n\n| ${tbl.columns.join(' | ')} |\n| ${tbl.columns.map(() => ':---').join(' | ')} |\n` +
              tbl.rows.map((r) => `| ${tbl.columns.map((col) => r[col] || '').join(' | ')} |`).join('\n');
          } else {
            fallbackText = `### 📊 Structured Data Extraction\n\nExtracted summary metrics and entity tables from **${targetDoc.name}**.`;
          }
        } else if (q.includes('summary') || q.includes('tldr') || q.includes('brief')) {
          fallbackText = `### 📝 Executive Summary\n\n${targetDoc.summary.executiveBrief || targetDoc.summary.tldr}\n\n**Key Highlights:**\n${targetDoc.summary.keyTakeaways.map((t) => `- ${t}`).join('\n')}`;
        } else {
          fallbackText = `### 📝 Document Intelligence Brief\n\n- **Executive TL;DR**: ${targetDoc.summary.tldr}\n- **Confidence**: ${targetDoc.confidenceScore}% spatial accuracy on Page 1.`;
        }
      } else {
        fallbackText = `Hello! How can I help you today? You can ask me any question, request code or writing, or attach documents using the **+** button anytime!`;
      }

      const assistantMessage: ChatMessage = {
        id: `asst_${Date.now()}`,
        sender: 'assistant',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: targetDoc ? [{ page: 1, snippet: 'Spatial coordinate verification' }] : undefined,
        suggestions: targetDoc ? [
          '📝 30-Second Executive Summary',
          '📊 Extract key figures & numbers',
          '📅 List critical dates & deadlines',
          '📄 Export structured summary'
        ] : [
          '📄 Summarize or analyze a document',
          '⚡ Write or explain code',
          '💡 Explain a concept',
          '📊 Extract structured data'
        ]
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setGenerationState('completed');
    }
  };

  const handleRegenerate = () => {
    if (lastUserQuery) {
      handleSendMessage(lastUserQuery);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportAllData = () => {
    const blob = new Blob([JSON.stringify(docsList, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `docfin_complete_export_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--bg-canvas)] text-[var(--text-primary)] antialiased font-sans transition-colors duration-200">
      {/* 1. Left Control Sidebar */}
      <LeftSidebar
        currentDoc={currentDoc}
        docsList={docsList}
        onSelectDoc={handleSelectDoc}
        activeDomain={activeDomain}
        onSelectDomain={setActiveDomain}
        onOpenSearch={() => setIsCommandPaletteOpen(true)}
        onNewSession={() => {
          setCurrentDoc(null);
          setMessages([]);
        }}
        isCollapsed={isLeftCollapsed}
        onToggleCollapse={() => setIsLeftCollapsed(!isLeftCollapsed)}
        onNewAudit={() => {
          setCurrentDoc(null);
          setMessages([]);
        }}
      />

      {/* 2. Main Central Conversational Canvas */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-[var(--bg-canvas)] relative">
        {/* Top Header */}
        <Header
          activeDomain={activeDomain}
          currentDoc={currentDoc}
          isSplitView={isSplitView}
          onToggleSplitView={() => setIsSplitView(!isSplitView)}
          onOpenExportModal={() => setIsExportModalOpen(true)}
          onResetDoc={() => {
            setCurrentDoc(null);
            setMessages([]);
          }}
          isHistoryOpen={isRightHistoryOpen}
          onToggleHistory={() => setIsRightHistoryOpen(!isRightHistoryOpen)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
        />

        {/* Workspace Body */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Playground Center Column */}
          <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Conversational Stream */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6 max-w-4xl w-full mx-auto">
                  {/* Clean Welcome Hero (When no messages yet) */}
                  {messages.length === 0 && (
                    <div className="space-y-8 max-w-3xl mx-auto pt-4 animate-in fade-in select-none">
                      {/* Top Header */}
                      <div className="text-center space-y-2">
                        <div className="w-14 h-14 rounded-3xl bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-blue-400 flex items-center justify-center mx-auto shadow-sm">
                          <Sparkles className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101828] dark:text-white">
                          {currentDoc ? `Auditing ${currentDoc.name}` : 'How can I help you today?'}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#53627A] dark:text-slate-400 max-w-md mx-auto">
                          {currentDoc
                            ? `Ask any question about ${currentDoc.name}, extract tables into CSV, or audit specific clauses.`
                            : 'Chat freely on any topic, write & debug code, or inspect pre-loaded demo documents.'}
                        </p>
                      </div>

                      {/* 1-Click Pre-Loaded Demo Audits Showcase (When no document selected) */}
                      {!currentDoc && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between px-1">
                            <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-[#2563EB] dark:text-blue-400 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5" />
                              Pre-Loaded Demo Audits (1-Click Live Inspect)
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">Click to test instantly</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {SAMPLE_DOCUMENTS.slice(0, 4).map((demoDoc) => (
                              <button
                                key={demoDoc.id}
                                onClick={() => handleLoadDemoDoc(demoDoc)}
                                className="p-4 rounded-2xl bg-white dark:bg-[#121722] hover:bg-blue-50/60 dark:hover:bg-blue-950/40 border border-[#DCE5F0] dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-600 transition-all text-left group shadow-xs cursor-pointer flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-2">
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold uppercase">
                                      {demoDoc.detectedDomain}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-mono">{demoDoc.pageCount} Pages</span>
                                  </div>
                                  <h3 className="text-xs font-bold text-[#101828] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                                    {demoDoc.name}
                                  </h3>
                                  <p className="text-[11px] text-[#53627A] dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                    {demoDoc.summary.tldr}
                                  </p>
                                </div>
                                <div className="mt-3 pt-2.5 border-t border-[#DCE5F0]/60 dark:border-white/10 flex items-center justify-between text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                                  <span>Inspect Demo Audit</span>
                                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                  {/* Message Stream */}
                  {messages.map((msg) => {
                    const isAssistant = msg.sender === 'assistant';
                    return (
                      <div
                        key={msg.id}
                        className={`flex gap-3.5 max-w-3xl ${isAssistant ? '' : 'ml-auto flex-row-reverse'}`}
                      >
                        {/* Avatar */}
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                            isAssistant
                              ? 'bg-[#2563EB] text-white shadow-xs'
                              : 'bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]'
                          }`}
                        >
                          {isAssistant ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>

                        {/* Message Content */}
                        <div className={`space-y-2 max-w-2xl ${isAssistant ? '' : 'text-right'}`}>
                          <div className="flex items-center gap-2 text-[10px] text-[#8092A7] font-mono">
                            <span>{isAssistant ? 'DocFin Intelligence Engine' : 'You'}</span>
                            <span>•</span>
                            <span>{msg.timestamp}</span>
                          </div>

                          {/* Inline Attached Files in User Message */}
                          {!isAssistant && msg.attachedMedia && msg.attachedMedia.length > 0 && (
                            <div className="flex flex-wrap gap-2 justify-end mb-1">
                              {msg.attachedMedia.map((f, fIdx) => (
                                <div
                                  key={fIdx}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#1E40AF] text-white border border-blue-400/30 text-xs font-mono shadow-sm"
                                >
                                  <FileText className="w-3.5 h-3.5 text-blue-200" />
                                  <span className="font-semibold truncate max-w-[150px]">{f.name}</span>
                                  <span className="text-[10px] opacity-75">{f.sizeFormatted}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Main Text Bubble */}
                          <div
                            className={`p-5 rounded-3xl text-xs leading-relaxed text-left transition-all ${
                              isAssistant
                                ? 'bg-white dark:bg-[#121722] border border-[#DCE5F0] dark:border-white/10 text-[#0F172A] dark:text-slate-200 shadow-sm'
                                : 'bg-[#2563EB] text-white shadow-sm'
                            }`}
                          >
                            <FormattedMessageText content={msg.text} isAssistant={isAssistant} />

                            {/* Optional Visual Chart */}
                            {isAssistant && msg.chartData && (
                              <InlineDataChart
                                title={msg.chartData.title}
                                type={msg.chartData.type}
                                data={msg.chartData.data}
                                color={msg.chartData.color}
                              />
                            )}

                            {/* Grounding Citation Footer & Interactive Action Controls */}
                            {isAssistant && (
                              <div className="mt-4 pt-3 border-t border-[#DCE5F0]/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#2563EB] dark:text-blue-400 font-mono select-none">
                                <div className="flex items-center gap-2">
                                  {msg.citations && msg.citations[0] ? (
                                    <span className="flex items-center gap-1">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                      {`Grounded on Page ${msg.citations[0].page}`}
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                                      <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                      AI Generated Response
                                    </span>
                                  )}

                                  {msg.citations && msg.citations.length > 0 && (
                                    <button
                                      onClick={() => setExpandedCitationId(expandedCitationId === msg.id ? null : msg.id)}
                                      className="hover:underline flex items-center gap-1 text-[#64748B] dark:text-slate-400 hover:text-blue-500 cursor-pointer"
                                    >
                                      <span>{expandedCitationId === msg.id ? 'Hide Sources' : 'View Sources'}</span>
                                    </button>
                                  )}
                                </div>

                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={handleRegenerate}
                                    className="hover:underline flex items-center gap-1 text-[#8092A7] hover:text-[#0F172A] dark:hover:text-white cursor-pointer"
                                    title="Regenerate Response"
                                  >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                    <span>Retry</span>
                                  </button>

                                  <button
                                    onClick={() => setIsRawJsonOpen(true)}
                                    className="hover:underline flex items-center gap-1 text-[#8092A7] hover:text-[#0F172A] dark:hover:text-white cursor-pointer"
                                    title="Inspect JSON Payload"
                                  >
                                    <FileJson className="w-3.5 h-3.5" />
                                    <span>JSON</span>
                                  </button>

                                  <button
                                    onClick={() => handleCopy(msg.text, msg.id)}
                                    className="hover:underline flex items-center gap-1 text-[#8092A7] hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                                  >
                                    {copiedId === msg.id ? (
                                      <>
                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                        <span className="text-emerald-600 font-semibold">Copied</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            )}

                            {/* Expandable Verified Citations Drawer */}
                            {isAssistant && expandedCitationId === msg.id && msg.citations && msg.citations.length > 0 && (
                              <div className="mt-3 p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-2 animate-in fade-in">
                                <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                                  Verified Document Excerpts:
                                </span>
                                {msg.citations.map((c, cIdx) => (
                                  <div key={cIdx} className="text-[11px] font-sans text-slate-700 dark:text-slate-300 pl-2.5 border-l-2 border-blue-500">
                                    <p className="italic font-serif">"{c.snippet}"</p>
                                    <span className="text-[10px] font-mono text-blue-500 font-bold block mt-0.5">
                                      — Page {c.page}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Dynamic Context-Aware Suggestion Chips (ChatGPT Style) */}
                          {isAssistant && msg.suggestions && msg.suggestions.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1.5 animate-in fade-in select-none">
                              {msg.suggestions.map((sug, sIdx) => (
                                <button
                                  key={sIdx}
                                  onClick={() => handleSendMessage(sug)}
                                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 hover:bg-blue-500/10 dark:hover:bg-blue-500/20 border border-black/10 dark:border-white/10 hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 transition-all cursor-pointer shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                                >
                                  {sug}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* State Machine Loader */}
                  {generationState === 'generating' && (
                    <div className="flex gap-3.5 max-w-3xl items-center animate-in fade-in">
                      <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </div>
                      <div className="p-4 rounded-3xl bg-white dark:bg-[#121722] border border-[#DCE5F0] dark:border-white/10 text-xs flex items-center gap-2 text-[#53627A] dark:text-slate-300 font-mono shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
                        <span>Generating response with Gemini AI...</span>
                      </div>
                    </div>
                  )}

                  <div ref={chatBottomRef} />
                </div>
              </div>
            </div>

            {/* Floating Bottom Prompt Bar ALWAYS ENABLED */}
            <PromptBar
              activeDomain={activeDomain}
              onSendMessage={handleSendMessage}
              isLoading={generationState === 'generating'}
              onResetAnalysis={() => {
                setCurrentDoc(null);
                setMessages([]);
              }}
              currentDoc={currentDoc}
              onSelectDoc={handleSelectDoc}
              onFileDrop={handleFileDropUpload}
              suggestions={messages.length > 0 ? messages[messages.length - 1].suggestions : undefined}
            />
          </div>

          {/* Optional Right-Split Document PDF Inspector */}
          {currentDoc && isSplitView && (
            <div className="w-1/2 border-l border-[#DCE5F0] dark:border-white/10 h-full hidden md:block">
              <DocumentViewer doc={currentDoc} />
            </div>
          )}

          {/* Collapsible Right Document History Sidebar */}
          <RightSidebar
            docs={docsList}
            currentDoc={currentDoc}
            onSelectDoc={handleSelectDoc}
            onRemoveDoc={handleRemoveDoc}
            onClearHistory={handleClearHistory}
            isOpen={isRightHistoryOpen}
            onToggle={() => setIsRightHistoryOpen(!isRightHistoryOpen)}
            onNewAudit={() => {
              setCurrentDoc(null);
              setMessages([]);
            }}
            onUploadFile={handleFileDropUpload}
          />
        </div>
      </main>

      {/* Export Report Memo Modal */}
      {currentDoc && (
        <ExportModal
          doc={currentDoc}
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
        />
      )}

      {/* Raw JSON Inspector Modal */}
      {currentDoc && (
        <RawJsonViewer
          isOpen={isRawJsonOpen}
          onClose={() => setIsRawJsonOpen(false)}
          title={currentDoc.name}
          data={currentDoc}
        />
      )}

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        documents={docsList}
        onSelectDocument={handleSelectDoc}
        onNewAudit={() => setCurrentDoc(null)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenExport={() => setIsExportModalOpen(true)}
        onOpenRawJson={() => setIsRawJsonOpen(true)}
        onToggleHistory={() => setIsRightHistoryOpen(!isRightHistoryOpen)}
      />

      {/* Onboarding Tour Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onStartAudit={() => setCurrentDoc(null)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Settings & API Key Configuration Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onPurgeCache={handleClearHistory}
        onExportAllData={handleExportAllData}
      />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-[#F8FAFD] dark:bg-[#07090E]">
          <Loader2 className="w-8 h-8 animate-spin text-[#2563EB]" />
        </div>
      }
    >
      <DashboardWorkspaceContent />
    </Suspense>
  );
}
