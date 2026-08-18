'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import { ArrowLeft, Lock } from 'lucide-react';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerLink?: {
    text: string;
    label: string;
    href: string;
  };
}

export default function AuthCard({
  title,
  subtitle,
  children,
  footerLink
}: AuthCardProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#080a0f] via-[#0e131b] to-[#121924] text-white flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Brand & Back to Home */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between z-10">
        <Link href="/">
          <Logo size="md" variant="light" />
        </Link>

        <Link
          href="/"
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md mx-auto my-auto z-10 py-6">
        <div className="bg-[#121722]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/50">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-white tracking-tight mb-1.5">
              {title}
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Form Content */}
          {children}

          {/* Optional Footer Link */}
          {footerLink && (
            <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-slate-400">
              {footerLink.text}{' '}
              <Link
                href={footerLink.href}
                className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors ml-1"
              >
                {footerLink.label}
              </Link>
            </div>
          )}
        </div>

        {/* Security Trust Badge */}
        <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-500">
          <Lock className="w-3 h-3 text-slate-400" />
          <span>SOC-2 & 256-Bit Encrypted DocFin Cloud</span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl w-full mx-auto text-center text-[11px] text-slate-600 z-10">
        © {new Date().getFullYear()} DocFin Inc. All rights reserved.
      </div>
    </div>
  );
}
