import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { founderBio, storyTimeline } from '@/content/story';
import { pressKitData } from '@/content/press';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Founder Story — Winner Oyekunle',
  description: 'The story of Winner Oyekunle. Building technology products for African businesses from Lagos, Nigeria.',
};

export default function StoryPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#080808] text-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Banner */}
        <div className="pb-16 border-b border-white/10 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#315BFF] block mb-4">
            THE ARCHIVE & DOSSIER
          </span>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-[#F5F3EE] mb-8 leading-[0.88]">
            I&apos;M WINNER.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-lg sm:text-xl text-[#A0A0A0] font-light leading-relaxed">
              {founderBio.longBio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/15 bg-[#121216] shadow-2xl">
                <Image
                  src="/images/founder/winner-portrait.png"
                  alt="Winner Oyekunle"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-white/80 flex items-center justify-between">
                  <span>WINNER OYEKUNLE</span>
                  <span className="text-[#B8FF3D]">LAGOS, NIGERIA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Principles */}
        <div className="mb-24">
          <SectionHeader
            label="FOUNDER PHILOSOPHY"
            title="CORE PRINCIPLES."
            subtitle="The mental models that drive how we build software, deploy capital, and talk to customers."
            badgeColor="#B8FF3D"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {founderBio.principles.map((p, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#111116] border border-white/10">
                <span className="text-3xl font-black font-mono text-[#315BFF] block mb-3">
                  0{idx + 1}.
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-[#999999] leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Chronological Timeline */}
        <div className="mb-24">
          <SectionHeader
            label="JOURNEY CHRONOLOGY"
            title="FROM PROTOTYPE TO PLATFORM."
            subtitle="The chronological sequence of experiments and institutions."
            badgeColor="#315BFF"
          />

          <div className="space-y-6">
            {storyTimeline.map((item) => (
              <div
                key={item.step}
                className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <span className="text-4xl font-black font-mono text-[#315BFF]">
                    {item.step}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-black uppercase text-white">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-[#B8FF3D]">
                        ({item.year})
                      </span>
                    </div>
                    <p className="text-sm text-[#999999] max-w-2xl font-light">
                      {item.body}
                    </p>
                  </div>
                </div>

                {item.highlight && (
                  <span className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#F5F3EE] flex-shrink-0">
                    {item.highlight}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Formal Media Profile & Press Kit Downloads */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111116] border border-white/10">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EC4899] block mb-2">
              PRESS & MEDIA KIT
            </span>
            <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-3">
              Official Media Dossier
            </h3>
            <p className="text-sm text-[#999999] font-light leading-relaxed">
              {pressKitData.formalBio}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {pressKitData.headshots.map((h, i) => (
              <a
                key={i}
                href={h.url}
                download
                className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-white block uppercase">
                    {h.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#777777]">
                    {h.dimensions} • {h.type}
                  </span>
                </div>
                <Download className="w-4 h-4 text-[#999999] group-hover:text-white transition-colors" />
              </a>
            ))}

            <Link
              href="/#contact"
              className="p-4 rounded-xl bg-[#315BFF] hover:bg-[#2546DB] text-white flex items-center justify-between transition-colors font-mono text-xs uppercase tracking-wider font-bold"
            >
              <span>Contact Media Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
