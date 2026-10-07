'use client';

import React, { useState } from 'react';
import { contentItems, ContentItem, socialLinks } from '@/content/content';
import { ContentCard } from '@/components/content/ContentCard';
import { VideoModal } from '@/components/content/VideoModal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { sound } from '@/lib/sound';

const categories = [
  'ALL',
  'BUSINESS',
  'MARKETING',
  'BUILDING NILE',
  'FOUNDER DIARIES',
  'PRODUCT',
  'LIFE'
];

const platforms = [
  'ALL',
  'YouTube',
  'TikTok',
  'Instagram',
  'X',
  'LinkedIn'
];

export default function ContentPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('ALL');
  const [activeVideo, setActiveVideo] = useState<ContentItem | null>(null);

  const filteredItems = contentItems.filter((item) => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesPlatform = selectedPlatform === 'ALL' || item.platform === selectedPlatform;
    return matchesCategory && matchesPlatform;
  });

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#080808] text-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <SectionHeader
          label="CREATOR PLATFORM"
          title="DISPATCHES & CONTENT."
          subtitle="Documenting software engineering, distribution, startup failures, and African commerce without the corporate PR filter."
          badgeColor="#EC4899"
        />

        {/* Filter Controls */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-white/10 mb-12 space-y-4">
          {/* Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] min-w-24">
              Category:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedCategory === cat
                      ? 'bg-[#315BFF] text-white border-[#315BFF]'
                      : 'bg-white/[0.02] text-[#888899] border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-white/5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] min-w-24">
              Platform:
            </span>
            <div className="flex flex-wrap gap-2">
              {platforms.map((plat) => (
                <button
                  key={plat}
                  onClick={() => {
                    sound.playClick();
                    setSelectedPlatform(plat);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedPlatform === plat
                      ? 'bg-[#B8FF3D] text-black border-[#B8FF3D] font-bold'
                      : 'bg-white/[0.02] text-[#888899] border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredItems.map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                onSelect={(selected) => setActiveVideo(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center p-8 rounded-3xl bg-[#111116] border border-white/10 mb-20">
            <h3 className="text-2xl font-black uppercase text-white mb-2">
              NOTHING HERE YET.
            </h3>
            <p className="text-sm text-[#888888] font-mono">
              I&apos;m probably filming it right now in Lagos. Try adjusting filters.
            </p>
          </div>
        )}

        {/* Channels Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111116] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF3D] block mb-2">
              WATCH ON PRIMARY PLATFORMS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Where to subscribe
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/20 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              YouTube ↗
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-500/20 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              TikTok ↗
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-pink-600/10 hover:bg-pink-600/20 text-pink-400 border border-pink-500/20 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              X ↗
            </a>
          </div>
        </div>
      </div>

      <VideoModal
        item={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </main>
  );
}
