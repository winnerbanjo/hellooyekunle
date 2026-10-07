import React from 'react';
import { currentlyStatus } from '@/content/currently';

export function CurrentlyCard({ className = '' }: { className?: string }) {
  return (
    <div className={`p-8 md:p-10 rounded-3xl bg-[#111116] border border-white/10 relative overflow-hidden ${className}`}>
      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8FF3D]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF3D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B8FF3D]"></span>
          </span>
          <h3 className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[#F5F3EE] font-bold">
            CURRENTLY.
          </h3>
        </div>
        <span className="font-mono text-[11px] text-[#777777]">
          Updated: {currentlyStatus.lastUpdated}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 text-sm">
        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777777] mb-1">
            Building
          </span>
          <p className="text-[#F5F3EE] font-medium font-sans">
            {currentlyStatus.building}
          </p>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777777] mb-1">
            Based
          </span>
          <p className="text-[#F5F3EE] font-medium font-sans">
            {currentlyStatus.based}
          </p>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777777] mb-1">
            Thinking About
          </span>
          <p className="text-[#F5F3EE] font-medium font-sans">
            {currentlyStatus.thinking}
          </p>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777777] mb-1">
            Obsessing Over
          </span>
          <p className="font-medium font-sans text-[#B8FF3D]">
            {currentlyStatus.obsessing}
          </p>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777777] mb-1">
            Creating
          </span>
          <p className="text-[#F5F3EE] font-medium font-sans">
            {currentlyStatus.creating}
          </p>
        </div>

        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777777] mb-1">
            Reading
          </span>
          <p className="text-[#F5F3EE] font-medium font-sans italic text-white/80">
            &ldquo;{currentlyStatus.reading}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
