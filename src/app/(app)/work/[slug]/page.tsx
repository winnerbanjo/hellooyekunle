import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { companies, getCompanyBySlug } from '@/content/companies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return companies.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return {};

  return {
    title: `${company.name} — ${company.headline}`,
    description: company.description,
  };
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#080808] text-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <div className="mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#999999] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Companies</span>
          </Link>
        </div>

        {/* Company Hero */}
        <div className="pb-16 border-b border-white/10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-bold"
              style={{ backgroundColor: `${company.accentColor}25`, color: company.accentColor }}
            >
              {company.status}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#888899]">
              {company.role} • {company.location} • {company.year}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#F5F3EE] mb-4">
            {company.name}
          </h1>

          <p className="font-mono text-lg sm:text-2xl uppercase tracking-widest text-[#B8FF3D] font-bold mb-8">
            {company.headline}
          </p>

          <p className="text-lg sm:text-2xl text-[#999999] max-w-4xl font-light leading-relaxed mb-10">
            {company.thesis}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#315BFF] hover:bg-[#2546DB] text-white font-bold transition-all shadow-xl shadow-[#315BFF]/25 flex items-center gap-2"
            >
              <span>{company.externalCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-[#121217] mb-20 shadow-2xl">
          <Image
            src={company.heroImage}
            alt={`${company.name} showcase`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Verified Metrics Grid */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#315BFF] block mb-4">
            VERIFIED METRICS
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {company.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#111116] border border-white/10">
                <span className="text-3xl sm:text-4xl font-black font-mono text-[#F5F3EE] block mb-2">
                  {m.value}
                </span>
                <span className="block font-mono text-xs uppercase tracking-wider text-[#B8FF3D] font-bold mb-1">
                  {m.label}
                </span>
                {m.detail && (
                  <span className="text-xs text-[#777777] font-light">
                    {m.detail}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Problem */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#111116] border border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 block mb-3">
              THE BOTTLENECK
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
              {company.problem.title}
            </h2>
            <p className="text-sm sm:text-base text-[#999999] leading-relaxed mb-6 font-light">
              {company.problem.description}
            </p>
            <ul className="space-y-3">
              {company.problem.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CCCCCC]">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#111116] border border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF3D] block mb-3">
              WHAT WE BUILT
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
              {company.solution.title}
            </h2>
            <p className="text-sm sm:text-base text-[#999999] leading-relaxed mb-6 font-light">
              {company.solution.description}
            </p>
            <div className="space-y-4">
              {company.solution.features.map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-1">
                    {feat.name}
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Stories & Proof */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111116] border border-white/10 mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#315BFF] block mb-3">
            FIELD PROOF
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-8">
            Customer Reality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {company.customerExamples.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-white text-base">{c.name}</span>
                    <span className="font-mono text-xs text-[#B8FF3D] font-bold">{c.metric}</span>
                  </div>
                  <p className="text-sm text-white/80 font-serif italic leading-relaxed mb-4">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#777777] uppercase">
                  {c.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Lessons & What's Next */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#888899] block mb-3">
              OPERATING LESSONS
            </span>
            <ul className="space-y-4">
              {company.lessons.map((lesson, idx) => (
                <li key={idx} className="p-4 rounded-2xl bg-[#111116] border border-white/10 text-sm text-[#CCCCCC] leading-relaxed">
                  <strong className="text-white block mb-1">0{idx + 1}.</strong>
                  {lesson}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF3D] block mb-3">
              WHAT&apos;S NEXT
            </span>
            <div className="p-8 rounded-2xl bg-[#111116] border border-white/10">
              <h3 className="text-xl font-bold uppercase text-white mb-4">
                The Next Horizon
              </h3>
              <p className="text-sm text-[#999999] leading-relaxed font-light mb-8">
                {company.whatsNext}
              </p>
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#315BFF] hover:text-[#B8FF3D] transition-colors font-bold"
              >
                <span>Visit {company.name} Live</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
