'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Play, BookOpen, Film } from 'lucide-react';
import { sound } from '@/lib/sound';
import { contentItems, ContentItem } from '@/content/content';
import { notes } from '@/content/notes';
import { VideoModal } from '@/components/content/VideoModal';

export function CuratedMedia() {
  const [selectedVideo, setSelectedVideo] = useState<ContentItem | null>(null);

  const featuredVideos = contentItems.slice(0, 2);
  const featuredNotes = notes.slice(0, 3);

  return (
    <section className="py-24 md:py-36 border-t border-black/5 dark:border-white/10 bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                03 / THE DOCUMENTATION
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 dark:text-neutral-100 leading-[0.92]">
              FILMS & ESSAYS.
            </h2>
          </div>

          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-md font-light leading-relaxed">
            Unfiltered breakdowns of building technology, distribution in Africa, marketing realities, and lessons from scale.
          </p>
        </div>

        {/* 2-Column Split: Films (Left) & Essays (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Video Dispatches */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-neutral-800 dark:text-neutral-200">
                <Film className="w-4 h-4 text-neutral-500" />
                <span>FEATURED DISPATCHES</span>
              </div>
              <Link
                href="/content"
                onClick={() => sound.playClick()}
                className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              >
                VIEW ARCHIVE ↗
              </Link>
            </div>

            <div className="space-y-4">
              {featuredVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedVideo(video);
                  }}
                  className="p-5 sm:p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25 transition-all group cursor-pointer shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
                  data-cursor="PLAY"
                >
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      <span className="font-bold text-neutral-800 dark:text-neutral-200">
                        {video.platform}
                      </span>
                      <span>•</span>
                      <span>{video.duration}</span>
                      <span>•</span>
                      <span>{video.views}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:opacity-75 transition-opacity leading-snug">
                      {video.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light line-clamp-2">
                      {video.summary}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Founder Notes & Essays */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-neutral-800 dark:text-neutral-200">
                <BookOpen className="w-4 h-4 text-neutral-500" />
                <span>FOUNDER NOTES</span>
              </div>
              <Link
                href="/notes"
                onClick={() => sound.playClick()}
                className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              >
                READ ALL (6) ↗
              </Link>
            </div>

            <div className="space-y-4">
              {featuredNotes.map((note) => (
                <Link
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  onClick={() => sound.playClick()}
                  className="p-5 sm:p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25 transition-all group block shadow-sm"
                  data-cursor="READ"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    <span className="font-bold text-neutral-800 dark:text-neutral-200">
                      {note.category}
                    </span>
                    <span>{note.readingTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:opacity-75 transition-opacity leading-snug mb-2 flex items-center justify-between">
                    <span>{note.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light line-clamp-2">
                    {note.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal if an item is selected */}
      {selectedVideo && (
        <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  );
}
