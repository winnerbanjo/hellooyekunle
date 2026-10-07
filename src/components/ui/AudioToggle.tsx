'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '@/lib/sound';

export function AudioToggle({ className = '' }: { className?: string }) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return sound.isEnabled();
    }
    return false;
  });

  const handleToggle = () => {
    const newState = sound.toggle();
    setEnabled(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all text-xs font-mono tracking-wider cursor-pointer ${className}`}
      title={enabled ? 'Mute sound effects' : 'Enable sound design'}
      aria-label="Toggle sound design"
    >
      {enabled ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-900 dark:bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900 dark:bg-white"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
          <span className="text-neutral-900 dark:text-neutral-100 hidden sm:inline text-[11px] font-bold">AUDIO</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors" />
          <span className="text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors hidden sm:inline text-[11px]">MUTED</span>
        </>
      )}
    </button>
  );
}
