'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { notes } from '@/content/notes';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { sound } from '@/lib/sound';

const categories = ['ALL', 'BUSINESS', 'AFRICA', 'PRODUCT', 'TECH', 'BUILDING'];

export default function NotesIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredNotes = notes.filter(
    (n) => selectedCategory === 'ALL' || n.category === selectedCategory
  );

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#080808] text-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="THOUGHTS & MEMOS"
          title="NOTES & ESSAYS."
          subtitle="Long-form writing on operating software businesses, African distribution dynamics, and counter-intuitive lessons learned from shipping."
          badgeColor="#315BFF"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#315BFF] text-white border-[#315BFF]'
                  : 'bg-white/[0.03] text-[#888899] border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              onClick={() => sound.playClick()}
              className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-white/10 hover:border-[#315BFF] transition-all group flex flex-col justify-between shadow-xl min-h-[340px]"
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

                <p className="text-sm text-[#999999] font-light leading-relaxed mb-6">
                  {note.subtitle}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#888899]">
                <span>{note.date}</span>
                <span className="text-white group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  READ ESSAY <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
