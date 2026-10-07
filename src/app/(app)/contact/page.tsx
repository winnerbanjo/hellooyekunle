import React from 'react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/ui/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Winner Oyekunle — Let’s Make Something Interesting',
  description: 'Reach out to Winner Oyekunle for investment, partnerships, product collaboration, or media inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#080808]">
      <ContactSection />
    </main>
  );
}
