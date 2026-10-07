import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-neutral-900 dark:text-neutral-100 flex items-center justify-center p-6 text-center select-none">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 block font-bold">
          404 ERROR • LAGOS EDGE
        </span>

        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter">
          YOU&apos;RE LOST.
        </h1>

        <div className="space-y-1 text-base text-neutral-600 dark:text-neutral-400 font-light">
          <p>This page doesn&apos;t exist, or has moved.</p>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN HOME →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
