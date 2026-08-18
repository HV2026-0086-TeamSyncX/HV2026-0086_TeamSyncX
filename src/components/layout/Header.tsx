'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import {
  Columns,
  Download,
  Home,
  Sun,
  Moon,
  FileText,
  History,
  LogOut,
  Settings,
  HelpCircle,
  Sparkles,
  Plus,
  X
} from 'lucide-react';
import { DocumentDomain, DocumentAnalysis } from '@/lib/types';

interface HeaderProps {
  activeDomain: DocumentDomain;
  currentDoc: DocumentAnalysis | null;
  isSplitView: boolean;
  onToggleSplitView: () => void;
  onOpenExportModal: () => void;
  onResetDoc?: () => void;
  isHistoryOpen?: boolean;
  onToggleHistory?: () => void;
  onOpenCommandPalette?: () => void;
  onOpenSettings?: () => void;
  onOpenOnboarding?: () => void;
}

export default function Header({
  activeDomain,
  currentDoc,
  isSplitView,
  onToggleSplitView,
  onOpenExportModal,
  onResetDoc,
  isHistoryOpen = false,
  onToggleHistory,
  onOpenCommandPalette,
  onOpenSettings,
  onOpenOnboarding
}: HeaderProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="h-14 bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-md border-b border-[#DCE5F0] dark:border-white/10 px-4 sm:px-6 flex items-center justify-between gap-3 z-20 select-none transition-colors duration-200">
      {/* Left: Active Mode & Context Info */}
      <div className="flex items-center gap-3 min-w-0">
        {currentDoc ? (
          <div className="flex items-center gap-2 min-w-0 bg-[#F4F7FC] dark:bg-white/5 border border-[#DCE5F0] dark:border-white/10 px-3 py-1.5 rounded-full">
            <FileText className="w-3.5 h-3.5 text-[#2563EB] dark:text-blue-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-[#0F172A] dark:text-white truncate max-w-[180px] sm:max-w-xs md:max-w-md">
              {currentDoc.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#EBF2FE] dark:bg-blue-950/80 text-[#2563EB] dark:text-blue-300 font-bold hidden sm:inline-block">
              {currentDoc.detectedDomain.toUpperCase()}
            </span>
            {onResetDoc && (
              <button
                onClick={onResetDoc}
                className="hover:text-rose-500 text-slate-400 p-0.5 rounded-full transition-colors ml-1"
                title="Close document and return to general AI chat"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#0F172A] dark:text-white">
                DocFin AI
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-semibold hidden sm:inline-block">
                Gemini 2.0 Flash
              </span>
            </div>
          </div>
        )}

        {/* Start New Chat Action */}
        {onResetDoc && (
          <button
            onClick={onResetDoc}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F7FC] hover:bg-[#EBF2FE] dark:bg-white/5 dark:hover:bg-white/10 border border-[#DCE5F0] dark:border-white/10 text-xs font-medium text-[#0F172A] dark:text-slate-200 transition-colors"
            title="Start new conversation"
          >
            <Plus className="w-3.5 h-3.5 text-[#2563EB] dark:text-blue-400" />
            <span className="hidden sm:inline">New Chat</span>
          </button>
        )}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-8 h-8 rounded-xl text-[#53627A] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5 border border-[#DCE5F0] dark:border-white/10 flex items-center justify-center transition-colors"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-[#0F172A]" />}
        </button>

        {currentDoc && (
          <>
            {/* Split View Toggle */}
            <button
              onClick={onToggleSplitView}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isSplitView
                  ? 'bg-[#2563EB] text-white border-[#2563EB]'
                  : 'bg-[#F4F7FC] dark:bg-white/5 text-[#53627A] dark:text-slate-300 border-[#DCE5F0] dark:border-white/10 hover:text-[#0F172A] hover:bg-[#EBF2FE]'
              }`}
              title="Toggle split view document canvas"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>{isSplitView ? 'Close Split' : 'Split View'}</span>
            </button>

            {/* Export Audit Memo */}
            <button
              onClick={onOpenExportModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E7145] hover:bg-[#185E39] text-white text-xs font-bold shadow-xs transition-all"
              title="Export structured document audit brief"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export Memo</span>
            </button>
          </>
        )}

        {/* Quick Tour / Help */}
        {onOpenOnboarding && (
          <button
            onClick={onOpenOnboarding}
            className="p-2 rounded-xl text-[#53627A] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5 border border-[#DCE5F0] dark:border-white/10 transition-colors"
            title="Product Tour & Guide"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Settings Dialog Trigger */}
        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl text-[#53627A] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5 border border-[#DCE5F0] dark:border-white/10 transition-colors"
            title="Settings & API Key Configuration"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        )}

        <Link
          href="/"
          className="p-2 rounded-xl text-[#53627A] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/5 border border-[#DCE5F0] dark:border-white/10 transition-colors"
          title="Return to Home"
        >
          <Home className="w-3.5 h-3.5" />
        </Link>

        {/* Right-Most Collapsible History Toggle */}
        {onToggleHistory && (
          <button
            onClick={onToggleHistory}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              isHistoryOpen
                ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                : 'bg-[#F4F7FC] dark:bg-white/5 text-[#53627A] dark:text-slate-300 border-[#DCE5F0] dark:border-white/10 hover:text-[#0F172A] hover:bg-[#EBF2FE]'
            }`}
            title="Toggle document history sidebar"
          >
            <History className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">History</span>
          </button>
        )}
      </div>
    </header>
  );
}
