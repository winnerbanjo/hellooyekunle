import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { notes, getNoteBySlug } from '@/content/notes';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return notes.map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.subtitle,
    openGraph: {
      title: note.title,
      description: note.subtitle,
      type: 'article',
      publishedTime: note.date,
      authors: ['Winner Oyekunle'],
    },
  };
}

export default async function NoteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const relatedNotes = notes.filter((n) => n.slug !== note.slug).slice(0, 2);

  // JSON-LD structured data for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    description: note.subtitle,
    author: {
      '@type': 'Person',
      name: 'Winner Oyekunle',
      url: 'https://hellooyekunle.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Winner Oyekunle',
      url: 'https://hellooyekunle.com',
    },
    datePublished: note.date,
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#080808] text-[#F5F3EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#999999] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Notes</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="pb-12 border-b border-white/10 mb-12">
          <div className="flex items-center gap-4 text-xs font-mono text-[#888899] uppercase tracking-wider mb-6">
            <span className="px-3 py-1 rounded-full bg-[#315BFF]/20 text-[#315BFF] font-bold">
              {note.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {note.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {note.readingTime}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F5F3EE] mb-6 leading-[0.95]">
            {note.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#999999] font-light leading-relaxed">
            {note.subtitle}
          </p>
        </header>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-[#111116] mb-16 shadow-2xl">
          <Image
            src={note.heroImage}
            alt={note.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        {/* Pull Quotes Callout */}
        {note.quotes && note.quotes.length > 0 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border-l-4 border-[#315BFF] mb-16 shadow-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF3D] block mb-2 font-bold">
              ESSENCE
            </span>
            <p className="text-xl sm:text-2xl font-serif italic text-white/90 leading-relaxed">
              &ldquo;{note.quotes[0]}&rdquo;
            </p>
          </div>
        )}

        {/* Body Content */}
        <div className="space-y-6 text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed mb-16">
          {note.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Second Pull Quote */}
        {note.quotes && note.quotes.length > 1 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border-l-4 border-[#B8FF3D] mb-16 shadow-xl">
            <p className="text-xl sm:text-2xl font-serif italic text-white/90 leading-relaxed">
              &ldquo;{note.quotes[1]}&rdquo;
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="pt-8 border-t border-white/10 mb-16 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs uppercase text-[#666677] mr-2">
            TOPICS:
          </span>
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-[#999999]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="p-8 rounded-3xl bg-[#111116] border border-white/10 mb-20 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
            <Image
              src="/images/founder/winner-portrait.png"
              alt="Winner Oyekunle"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase text-white mb-1">
              Winner Oyekunle
            </h4>
            <p className="text-xs sm:text-sm text-[#999999] font-light leading-relaxed mb-3">
              Founder of Nile, Sena, and Booq. Documenting software building, distribution, and African enterprise realities from Lagos.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#315BFF]">
              <Link href="/story" className="hover:underline">About Winner →</Link>
              <Link href="/content" className="hover:underline">Watch Content →</Link>
            </div>
          </div>
        </div>

        {/* Related Notes */}
        <div>
          <h3 className="text-2xl font-black uppercase text-white mb-6">
            Related Writing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedNotes.map((rel) => (
              <Link
                key={rel.slug}
                href={`/notes/${rel.slug}`}
                className="p-6 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#315BFF] uppercase tracking-wider block mb-2 font-bold">
                    {rel.category}
                  </span>
                  <h4 className="text-lg font-bold uppercase text-white group-hover:text-[#315BFF] transition-colors leading-snug mb-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#777777]">
                  <span>{rel.readingTime}</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
