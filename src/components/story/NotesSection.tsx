'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { notes } from '@/content/notes';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { sound } from '@/lib/sound';

export function NotesSection() {
  const featuredNotes = notes.slice(0, 4);

  return (
    <section className="py-24 md:py-36 border-t border-white/5 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            label="04 / NOTES"
            title="THINGS I'M THINKING ABOUT."
            subtitle="Essays, operating memos, and unfiltered observations on building software, distribution, and African market economics."
            className="mb-0"
            badgeColor="#315BFF"
          />

          <Link
            href="/notes"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-all self-start md:self-end"
            data-cursor="ALL ESSAYS"
          >
            <span>READ EVERYTHING</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              onClick={() => sound.playClick()}
              className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between shadow-xl min-h-[300px]"
              data-cursor="READ"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-4">
                  <span className="text-[#315BFF] font-bold tracking-wider uppercase">
                    {note.category}
                  </span>
                  <span>{note.readingTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F3EE] group-hover:text-[#315BFF] transition-colors leading-tight mb-3">
                  {note.title}
                </h3>

                <p className="text-sm text-[#999999] font-light leading-relaxed mb-6 line-clamp-3">
                  {note.subtitle}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#888899]">
                <span>{note.date}</span>
                <span className="text-[#F5F3EE] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  READ ESSAY <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
