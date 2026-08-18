'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import Logo from '@/components/brand/Logo';
import { Sun, Moon, Menu, X, ArrowRight, User } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300 select-none">
      <div
        className={`max-w-5xl mx-auto rounded-full px-5 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-white/65 dark:bg-black/50 backdrop-blur-2xl backdrop-saturate-150 border border-black/[0.08] dark:border-white/[0.14] shadow-[0_12px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)]'
            : 'bg-white/45 dark:bg-[#07090e]/40 backdrop-blur-xl backdrop-saturate-150 border border-black/[0.06] dark:border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.08)]'
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]">
          <Logo size="sm" />
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#how-it-works"
            className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
          >
            How it works
          </a>
          <a
            href="#what-we-find"
            className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
          >
            What we find
          </a>
          <a
            href="#document-types"
            className="px-3.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
          >
            Document types
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5 text-xs font-semibold">
          {/* Glassmorphic Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Glowing Glass Action Button */}
          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="group px-5 py-2 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-400/30 flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <User className="w-3.5 h-3.5" />
              <span>Workspace</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : (
            <Link
              href="/login"
              className="group px-5 py-2 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-400/30 flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Sign in</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-800 dark:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Frosted Glass Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 p-5 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-2xl space-y-3 animate-in slide-in-from-top-2">
          <a
            href="#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
          >
            How it works
          </a>
          <a
            href="#what-we-find"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
          >
            What we find
          </a>
          <a
            href="#document-types"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
          >
            Document types
          </a>
          <div className="pt-3 border-t border-black/10 dark:border-white/10">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
