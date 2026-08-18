'use client';

import React from 'react';

interface FormattedTextProps {
  content: string;
  isAssistant?: boolean;
}

export default function FormattedMessageText({ content, isAssistant = true }: FormattedTextProps) {
  if (!content) return null;

  // Split by double newline or distinct section breaks
  const blocks = content.split(/\n\s*\n/);

  return (
    <div className="space-y-3 font-sans text-xs leading-relaxed">
      {blocks.map((block, bIdx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. Heading (#, ##, ###)
        if (trimmed.startsWith('#')) {
          const cleanHeading = trimmed.replace(/^#+\s*/, '').replace(/\*\*/g, '');
          return (
            <div
              key={bIdx}
              className="text-xs font-bold font-sans text-slate-900 dark:text-white pt-1 pb-1 flex items-center gap-1.5 border-b border-slate-200/50 dark:border-white/10"
            >
              <span>{cleanHeading}</span>
            </div>
          );
        }

        // 2. Markdown Data Table
        if (trimmed.includes('|') && trimmed.split('\n').length >= 2) {
          const lines = trimmed.split('\n').filter((l) => l.trim().startsWith('|'));
          if (lines.length >= 2) {
            const headerLine = lines[0];
            const dataLines = lines.slice(2);
            const headers = headerLine
              .split('|')
              .map((c) => c.trim())
              .filter(Boolean);

            return (
              <div key={bIdx} className="overflow-x-auto my-2 rounded-xl border border-slate-200 dark:border-white/10 shadow-xs">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-slate-100 dark:bg-white/5 font-semibold text-slate-900 dark:text-slate-200">
                    <tr>
                      {headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-2.5 border-b border-slate-200 dark:border-white/10">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {dataLines.map((rowLine, rIdx) => {
                      const cells = rowLine
                        .split('|')
                        .map((c) => c.trim())
                        .filter(Boolean);
                      return (
                        <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                          {cells.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2.5 text-slate-700 dark:text-slate-300">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // 3. List Items (bullet points or numbered)
        const lines = trimmed.split('\n');
        const hasListItems = lines.some(
          (l) => l.trim().startsWith('-') || l.trim().startsWith('*') || /^\d+[\.\)]\s/.test(l.trim()) || /^\*\*\d+[\.\)]\*\*/.test(l.trim())
        );

        if (hasListItems && lines.length > 1) {
          return (
            <div key={bIdx} className="space-y-1.5 pl-0.5">
              {lines.map((line, lIdx) => {
                const lineTrimmed = line.trim();
                if (!lineTrimmed) return null;

                const isItem =
                  lineTrimmed.startsWith('-') ||
                  lineTrimmed.startsWith('*') ||
                  /^\d+[\.\)]\s/.test(lineTrimmed) ||
                  /^\*\*\d+[\.\)]\*\*/.test(lineTrimmed);

                if (isItem) {
                  const cleanItemText = lineTrimmed
                    .replace(/^[-*•]\s*/, '')
                    .replace(/^\*\*\d+[\.\)]\*\*\s*/, '')
                    .replace(/^\d+[\.\)]\s*/, '')
                    .trim();

                  return (
                    <div key={lIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                      <div className="flex-1 text-slate-800 dark:text-slate-200">
                        {renderFormattedInline(cleanItemText)}
                      </div>
                    </div>
                  );
                }

                return (
                  <p key={lIdx} className="text-slate-800 dark:text-slate-200 font-semibold mb-1">
                    {renderFormattedInline(lineTrimmed)}
                  </p>
                );
              })}
            </div>
          );
        }

        // 4. Normal Clean Text Paragraph
        return (
          <p
            key={bIdx}
            className={isAssistant ? 'text-slate-800 dark:text-slate-200' : 'text-white'}
          >
            {renderFormattedInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderFormattedInline(text: string): React.ReactNode {
  // Strip raw italic wrapping syntax e.g. *citation note* -> citation note
  let cleaned = text;
  if (cleaned.startsWith('*') && cleaned.endsWith('*') && !cleaned.startsWith('**')) {
    cleaned = cleaned.slice(1, -1);
  }

  // Split by bold (**text**), citations, and backticks (`code`)
  const parts = cleaned.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={idx} className="font-semibold text-slate-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={idx}
              className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/10 font-mono text-[11px] text-blue-600 dark:text-blue-400"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </>
  );
}
