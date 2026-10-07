import React from 'react';
import type { Metadata } from 'next';
import { CurrentlyCard } from '@/components/ui/CurrentlyCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Now — Winner Oyekunle',
  description: 'What Winner Oyekunle is building, reading, thinking about, and obsessing over right now.',
};

export default function NowPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#080808] text-[#F5F3EE]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="LIVE STATUS"
          title="WHAT I'M DOING NOW."
          subtitle="Inspired by Derek Sivers' /now page concept. Updated regularly directly from Lagos."
          badgeColor="#B8FF3D"
        />

        <CurrentlyCard className="mb-12" />

        <div className="p-8 rounded-3xl bg-[#111116] border border-white/10 space-y-4 text-sm text-[#999999] font-light leading-relaxed">
          <p>
            If you are wondering what my day-to-day focus looks like: 70% goes into engineering and distribution loops for Nile, 20% into customer discovery for Sena and Booq, and 10% documenting the reality on video.
          </p>
          <p>
            If our teams can make commerce and hospitality 10% less chaotic for African merchants this year, that is leverage.
          </p>
        </div>
      </div>
    </main>
  );
}
