import React from 'react';
import type { Metadata } from 'next';
import { LoadingScreen } from '@/components/hero/LoadingScreen';
import { SimpleHomepage } from '@/components/home/SimpleHomepage';

export const metadata: Metadata = {
  title: 'Winner Oyebanjo — Founder of Nile',
  description: 'Founder of Nile. Building digital commerce and business-management software for African merchants from Lagos.',
};

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <main className="w-full relative overflow-hidden bg-[var(--background)]">
        <SimpleHomepage />
      </main>
    </>
  );
}
