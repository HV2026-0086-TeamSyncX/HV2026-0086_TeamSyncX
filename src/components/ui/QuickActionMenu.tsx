'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  CreditCard,
  Scale,
  ShieldAlert,
  Receipt,
  FileText,
  CheckSquare,
  Zap,
  Layers,
  BarChart3,
  Search,
  Bot,
  Plus,
  Image as ImageIcon,
  Video,
  FileSpreadsheet,
  Presentation
} from 'lucide-react';
import { DocumentDomain, MediaType } from '@/lib/types';

interface ActionItem {
  id: string;
  icon: React.ElementType;
  iconColor?: string;
  title: string;
  description: string;
  prompt: string;
  badge?: string;
  isUpload?: boolean;
  mediaCategory?: MediaType | 'all';
}

interface QuickActionMenuProps {
  activeDomain: DocumentDomain;
  isOpen: boolean;
  onClose: () => void;
  onExecuteAction: (actionTitle: string, queryPrompt: string) => void;
  onUploadClick?: () => void;
  onOpenAddMedia?: (category?: MediaType | 'all') => void;
}

export default function QuickActionMenu({
  activeDomain,
  isOpen,
  onClose,
  onExecuteAction,
  onUploadClick,
  onOpenAddMedia
}: QuickActionMenuProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on outside click or Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getDomainSpecificActions = (domain: DocumentDomain): ActionItem[] => {
    switch (domain) {
      case 'academic':
        return [
          {
            id: 'acad_critique',
            icon: Sparkles,
            iconColor: 'text-purple-400',
            title: 'Critique Methodology & Architecture',
            description: 'Evaluate experimental setup, benchmark datasets & statistical rigor',
            prompt: 'Provide a rigorous academic critique of the methodology, architecture, and empirical evaluation presented in this paper.'
          },
          {
            id: 'acad_benchmarks',
            icon: BarChart3,
            iconColor: 'text-blue-400',
            title: 'Extract Benchmark Results & Tables',
            description: 'Synthesize quantitative BLEU/accuracy scores into structured matrices',
            prompt: 'Extract all empirical benchmark tables, baseline comparisons, and ablation results from this research paper.'
          },
          {
            id: 'acad_formulas',
            icon: FileText,
            iconColor: 'text-emerald-400',
            title: 'Summarize Key Theoretical Contributions',
            description: 'Synthesize novel mechanisms, formulas, and bibliographic references',
            prompt: 'Summarize the core novel mechanisms, mathematical formulations, and primary references of this research paper.'
          }
        ];

      case 'technical':
        return [
          {
            id: 'tech_openapi',
            icon: Zap,
            iconColor: 'text-amber-400',
            title: 'Generate OpenAPI 3.1 Specification',
            description: 'Extract API endpoints, query params, schemas & response codes',
            prompt: 'Generate a clean OpenAPI 3.1 YAML/JSON specification covering all microservice endpoints documented in this architecture spec.'
          },
          {
            id: 'tech_sla',
            icon: Scale,
            iconColor: 'text-blue-400',
            title: 'System Requirements & SLA Audit',
            description: 'Extract latency benchmarks, throughput bounds, and security standards',
            prompt: 'Audit all latency SLAs, availability bounds, security mTLS standards, and system dependencies in this specification.'
          },
          {
            id: 'tech_runbook',
            icon: Layers,
            iconColor: 'text-emerald-400',
            title: 'Operational Procedure Checklist',
            description: 'Convert architecture steps and deployment procedures into runbooks',
            prompt: 'Extract the step-by-step deployment, ingestion, and failover runbook procedures from this technical guide.'
          }
        ];

      case 'finance':
        return [
          {
            id: 'fin_cashflow',
            icon: CreditCard,
            iconColor: 'text-blue-400',
            title: 'Cashflow & Subscription Audit',
            description: 'Identify recurring subscriptions, idle auto-debits & optimization targets',
            prompt: 'Please run a comprehensive Cashflow Audit on this statement. Break down outflows, list recurring subscriptions that can be cancelled, and calculate potential monthly savings.'
          },
          {
            id: 'fin_burn',
            icon: Scale,
            iconColor: 'text-emerald-400',
            title: 'Expense & Burn Rate Analysis',
            description: 'Calculate spending allocation & net monthly savings rate',
            prompt: 'Analyze the expense balance of this statement using the 50/30/20 framework. What percentage went to fixed, discretionary, and savings?'
          },
          {
            id: 'fin_fees',
            icon: ShieldAlert,
            iconColor: 'text-rose-400',
            title: 'Fee & Surcharge Audit',
            description: 'Detect penalty charges and generate dispute inquiry letter',
            prompt: 'Detect all penalty charges, maintenance fees, and overdraft costs in this statement and format a dispute inquiry letter.'
          }
        ];

      case 'legal':
        return [
          {
            id: 'leg_termination',
            icon: Scale,
            iconColor: 'text-purple-400',
            title: 'Extract Termination & Exit Clauses',
            description: 'Highlight penalty periods, notice windows & liquidation damages',
            prompt: 'Extract all termination clauses, notice periods, break fees, and survival provisions in this contract.'
          },
          {
            id: 'leg_indemnity',
            icon: ShieldAlert,
            iconColor: 'text-rose-400',
            title: 'Audit Indemnity & Liability Caps',
            description: 'Analyze indemnification breadth and aggregate monetary liability limits',
            prompt: 'Audit the limitation of liability, indemnification obligations, and consequential loss disclaimers.'
          },
          {
            id: 'leg_compliance',
            icon: CheckSquare,
            iconColor: 'text-emerald-400',
            title: 'Covenant & Regulatory Checklist',
            description: 'Create compliance audit for GDPR, FCPA, and Delaware General Corp Law',
            prompt: 'Draft an itemized compliance audit for all affirmative and negative covenants binding both parties.'
          }
        ];

      case 'billing':
        return [
          {
            id: 'bil_tax',
            icon: Receipt,
            iconColor: 'text-emerald-400',
            title: 'GST / VAT Tax Reconciler',
            description: 'Verify HSN/SAC codes, reverse charge mechanism & Input Tax Credit',
            prompt: 'Reconcile all GST/VAT rates, Input Tax Credit (ITC) eligibility, and HSN/SAC codes on this invoice.'
          },
          {
            id: 'bil_lineitems',
            icon: BarChart3,
            iconColor: 'text-blue-400',
            title: 'Unit Rate & Math Verification',
            description: 'Cross-check quantity × rate calculations against total billed amount',
            prompt: 'Perform mathematical cross-verification of all invoice line item unit rates, discounts, subtotals, and final payable sum.'
          }
        ];

      case 'insurance':
        return [
          {
            id: 'ins_coverage',
            icon: ShieldAlert,
            iconColor: 'text-blue-400',
            title: 'Coverage vs Exclusion Matrix',
            description: 'Generate clear two-column comparison of covered perils vs policy riders',
            prompt: 'Construct a structured two-column matrix comparing all explicitly covered perils versus policy exclusions and copay limits.'
          },
          {
            id: 'ins_claim_steps',
            icon: CheckSquare,
            iconColor: 'text-emerald-400',
            title: 'Claim Filing Runbook',
            description: 'Step-by-step checklist of documentation required for cashless settlement',
            prompt: 'Generate an emergency claim filing runbook listing all hospital/incident reports, bills, and deadlines required.'
          }
        ];

      case 'business':
        return [
          {
            id: 'biz_swot',
            icon: BarChart3,
            iconColor: 'text-amber-400',
            title: 'SWOT & Strategic Positioning',
            description: 'Extract Strengths, Weaknesses, Opportunities, and Threats',
            prompt: 'Perform a SWOT strategic positioning analysis based on the disclosures in this report.'
          },
          {
            id: 'biz_okrs',
            icon: Sparkles,
            iconColor: 'text-purple-400',
            title: 'Stakeholder Executive Memo',
            description: 'Draft a 1-page board governance briefing and OKR summary',
            prompt: 'Draft an executive 1-page briefing memo summarizing strategic objectives, deliverables, and top business risks.'
          }
        ];

      default:
        return [];
    }
  };

  // Base universal intelligence routines & media ingestion options
  const baseActions: ActionItem[] = [
    {
      id: 'act_add_media_all',
      icon: Plus,
      iconColor: 'text-blue-400',
      title: 'Add Media Files',
      description: 'Photos, videos, documents, spreadsheets & decks',
      prompt: '',
      badge: 'Multimodal',
      isUpload: true,
      mediaCategory: 'all'
    },
    {
      id: 'act_add_images',
      icon: ImageIcon,
      iconColor: 'text-emerald-400',
      title: 'Photos & Images',
      description: 'High-res photos, receipts, charts & UI captures',
      prompt: '',
      badge: 'PNG / JPG',
      isUpload: true,
      mediaCategory: 'image'
    },
    {
      id: 'act_add_videos',
      icon: Video,
      iconColor: 'text-purple-400',
      title: 'Videos & Screen Recordings',
      description: 'MP4, MOV & WebM video briefings',
      prompt: '',
      badge: 'MP4 / WebM',
      isUpload: true,
      mediaCategory: 'video'
    },
    {
      id: 'act_add_docs',
      icon: FileText,
      iconColor: 'text-rose-400',
      title: 'PDFs & Text Documents',
      description: 'PDFs, Word documents, research papers & reports',
      prompt: '',
      badge: 'PDF / DOCX',
      isUpload: true,
      mediaCategory: 'pdf'
    },
    {
      id: 'act_add_sheets',
      icon: FileSpreadsheet,
      iconColor: 'text-blue-400',
      title: 'Spreadsheets (Excel / CSV)',
      description: 'Financial ledgers, data matrices & CSV files',
      prompt: '',
      badge: 'XLSX / CSV',
      isUpload: true,
      mediaCategory: 'spreadsheet'
    },
    {
      id: 'act_add_presentations',
      icon: Presentation,
      iconColor: 'text-amber-400',
      title: 'Slide Decks & Presentations',
      description: 'PowerPoint & Keynote pitch decks',
      prompt: '',
      badge: 'PPTX',
      isUpload: true,
      mediaCategory: 'presentation'
    },
    {
      id: 'act_summary',
      icon: Sparkles,
      iconColor: 'text-amber-400',
      title: '30-Second Executive Summary',
      description: 'Generate concise TL;DR with key numbers & takeaways',
      prompt: 'Provide a concise 30-second executive summary of this document, highlighting the top 5 most important numerical takeaways.'
    },
    {
      id: 'act_tables',
      icon: BarChart3,
      iconColor: 'text-emerald-400',
      title: 'Extract Data Tables to CSV',
      description: 'Synthesize static document tables into spreadsheets',
      prompt: 'Extract all structured data tables from this document into clean, tab-delimited spreadsheet rows.'
    },
    {
      id: 'act_risks',
      icon: Scale,
      iconColor: 'text-rose-400',
      title: 'Analyze Critical Clauses & Risks',
      description: 'Extract obligations, deadlines, and asymmetric terms',
      prompt: 'Analyze all critical clauses, obligations, milestones, and liability risks in this document.'
    },
    {
      id: 'act_checklist',
      icon: CheckSquare,
      iconColor: 'text-cyan-400',
      title: 'Action Item & Milestone Checklist',
      description: 'Extract prioritized to-dos, deadlines, and covenants',
      prompt: 'Extract all actionable tasks, milestones, deadlines, and responsibilities mentioned in this document into a prioritized checklist.'
    },
    {
      id: 'act_deep_audit',
      icon: Bot,
      iconColor: 'text-purple-400',
      title: 'Deep Document Audit',
      description: 'Run full multimodal neural reasoning & tensor graphs',
      prompt: 'Perform an exhaustive deep audit across all sections, verifying every number, date, entity relationship, and clause.'
    }
  ];

  const domainActions = getDomainSpecificActions(activeDomain);
  const allActions = [...baseActions, ...domainActions];

  const filteredActions = searchQuery.trim()
    ? allActions.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allActions;

  const handleSelect = (action: ActionItem) => {
    if (action.isUpload) {
      if (onOpenAddMedia) {
        onOpenAddMedia(action.mediaCategory || 'all');
      } else if (onUploadClick) {
        onUploadClick();
      }
      onClose();
      return;
    }
    onExecuteAction(action.title, action.prompt);
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="absolute bottom-full mb-3 left-0 z-50 w-[360px] sm:w-[460px] bg-[#0c1017]/85 backdrop-blur-2xl backdrop-saturate-200 text-white border border-white/15 dark:border-white/10 rounded-[26px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_35px_rgba(37,99,235,0.2)] ring-1 ring-white/10 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200 select-none"
    >
      {/* Glassmorphic Header */}
      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
            <Sparkles className="w-3 h-3" />
          </div>
          <span className="font-bold text-white text-xs tracking-tight">
            DocFin Intelligence Routines
          </span>
        </div>
        <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-blue-500/25 border border-blue-400/30 text-blue-200 font-bold tracking-wider shadow-inner">
          {activeDomain} Lens
        </span>
      </div>

      {/* Menu List */}
      <div className="p-2 space-y-1 max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/15 hover:scrollbar-thumb-white/25 scrollbar-track-transparent">
        {filteredActions.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-400">
            No matching routines found for &quot;{searchQuery}&quot;
          </div>
        ) : (
          filteredActions.map((action) => {
            const Icon = action.icon;
            const isHeroMedia = action.id === 'act_add_media_all';
            return (
              <button
                key={action.id}
                type="button"
                onClick={() => handleSelect(action)}
                className={`w-full text-left px-3.5 py-2.5 rounded-2xl transition-all flex items-center gap-3.5 group cursor-pointer border ${
                  isHeroMedia
                    ? 'bg-blue-600/20 hover:bg-blue-600/30 border-blue-500/40 shadow-sm shadow-blue-600/20 mb-1'
                    : 'bg-white/[0.02] hover:bg-white/[0.08] active:bg-white/[0.12] border-transparent hover:border-white/10 hover:shadow-lg hover:shadow-black/25'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all border ${
                    isHeroMedia
                      ? 'bg-blue-600 text-white border-blue-400/50 shadow-md'
                      : 'bg-white/[0.06] border-white/10 group-hover:bg-white/[0.12]'
                  } ${action.iconColor || 'text-blue-400'}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold truncate transition-colors ${
                        isHeroMedia ? 'text-blue-200 font-bold' : 'text-white group-hover:text-blue-300'
                      }`}
                    >
                      {action.title}
                    </span>
                    {action.badge && (
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded-full font-mono border ${
                          isHeroMedia
                            ? 'bg-blue-500/40 text-white border-blue-300/40'
                            : 'bg-blue-500/20 text-blue-300 border-blue-400/20'
                        }`}
                      >
                        {action.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors truncate mt-0.5 font-normal">
                    {action.description}
                  </p>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Glassmorphic Search Filter Footer */}
      <div className="p-3 border-t border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center gap-2.5">
        <Search className="w-4 h-4 text-slate-400 flex-shrink-0 ml-1" />
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && filteredActions.length > 0) {
              e.preventDefault();
              handleSelect(filteredActions[0]);
            }
          }}
          placeholder="Type to search routines, files & skills..."
          className="w-full bg-transparent border-none text-xs text-white placeholder:text-slate-400 focus:outline-none"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-[10px] text-slate-300 hover:text-white px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
