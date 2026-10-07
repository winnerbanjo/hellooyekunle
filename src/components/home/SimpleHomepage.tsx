'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Copy, Check, ChevronDown, ChevronUp, Sparkles, Terminal } from 'lucide-react';
import { sound } from '@/lib/sound';

const sampleTabs = [
  'Currently 73. Please do not close them.',
  'Tab 12: Stripe API Webhooks idempotency guide',
  'Tab 24: Central Bank of Nigeria settlement guidelines',
  'Tab 38: PostgreSQL connection pool latency on AWS',
  'Tab 51: Next.js 16 compiler optimization flags',
  'Tab 73: Nike SNKRS drop calendar (priorities)',
];

export function SimpleHomepage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activePhoto, setActivePhoto] = useState<'portrait' | 'studio' | 'native'>('portrait');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  // Micro-interactions state
  const [activeStatNote, setActiveStatNote] = useState<number | null>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [activeNileFeature, setActiveNileFeature] = useState<'checkout' | 'offline' | 'whatsapp'>('checkout');
  const [showArchSpec, setShowArchSpec] = useState(false);

  // Keyboard shortcut listeners for power users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === '1') setActivePhoto('portrait');
      if (e.key === '2') setActivePhoto('studio');
      if (e.key === '3') setActivePhoto('native');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText('winner@hellooyekunle.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    sound.playClick();
    navigator.clipboard.writeText('+2349041864738');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const cycleTab = () => {
    sound.playClick();
    setTabIndex((prev) => (prev + 1) % sampleTabs.length);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribing(true);
    sound.playClick();

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      setSubscribed(true);
      setNewsletterEmail('');
    } catch {
      setSubscribed(true);
    } finally {
      setSubscribing(false);
    }
  };

  const getPhotoSrc = () => {
    switch (activePhoto) {
      case 'studio':
        return '/images/winner/winner-creator.jpg';
      case 'native':
        return '/images/winner/winner-navy.png';
      case 'portrait':
      default:
        return '/images/winner/winner-hero.png';
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24 space-y-24 text-neutral-800 dark:text-neutral-200">
      {/* 01: Hero & Introduction */}
      <section id="about" className="space-y-8 pt-4">
        {/* Photo & Identity Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div
              onClick={() => {
                sound.playPop();
                setActivePhoto((prev) => (prev === 'portrait' ? 'studio' : prev === 'studio' ? 'native' : 'portrait'));
              }}
              className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 shadow-sm cursor-pointer group"
              title="Click to cycle portrait"
            >
              <Image
                src={getPhotoSrc()}
                alt="Winner Oyekunle Oyebanjo"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="96px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  Lagos, Nigeria • WAT
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                Winner Oyekunle Oyebanjo
              </h1>
              <p className="text-xs sm:text-sm font-light text-neutral-500 dark:text-neutral-400">
                Founder of Nile • Software & Product Leader
              </p>
            </div>
          </div>

          {/* Photo Switcher pill */}
          <div className="flex items-center gap-1 text-[11px] font-mono">
            {(['portrait', 'studio', 'native'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  sound.playClick();
                  setActivePhoto(mode);
                }}
                className={`px-2.5 py-1 rounded-full border capitalize transition-all cursor-pointer ${
                  activePhoto === mode
                    ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-medium bg-black/[0.03] dark:bg-white/[0.05]'
                    : 'border-transparent text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Bio */}
        <div className="space-y-4 text-sm sm:text-base font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            I am the <strong className="font-medium text-neutral-900 dark:text-neutral-100">Founder & Product Lead of Nile</strong>, where we build digital commerce and business-management software for merchants across Africa. In our first 20 months, Nile has processed over <strong className="font-medium text-neutral-900 dark:text-neutral-100">₦1 Billion in transaction volume</strong> for African businesses.
          </p>
          <p>
            My background combines rigorous academic computing with hands-on product execution. I graduated with a <strong className="font-medium text-neutral-900 dark:text-neutral-100">CGPA of 4.60/5.00</strong> in Computer Science and am currently pursuing a Master of Information Technology. I build software systems that translate complex, high-friction African business problems into seamless, reliable digital products.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-1">
            Note: All media breakdowns, video essays, podcasts, and thoughts live on my socials.
          </p>
        </div>

        {/* Action / Social links */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-neutral-900 dark:text-neutral-100 transition-colors cursor-pointer"
          >
            {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
            <span>winner@hellooyekunle.com</span>
          </button>

          <button
            onClick={copyPhone}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-neutral-900 dark:text-neutral-100 transition-colors cursor-pointer"
          >
            {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
            <span>+234 904 186 4738</span>
          </button>

          <a
            href="https://linkedin.com/in/winner-oyebanjo-085ba3125/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-neutral-900 dark:text-neutral-100 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://x.com/winnerbanjo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-neutral-900 dark:text-neutral-100 transition-colors"
          >
            <span>X (Twitter)</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-neutral-900 dark:text-neutral-100 transition-colors"
          >
            <span>YouTube</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* 02: Core Focus — Nile */}
      <section id="nile" className="space-y-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block font-medium">
            01 / PRIMARY VENTURE
          </span>
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Nile Africa Technologies
          </h2>
          <p className="text-xs sm:text-sm font-light text-neutral-500">
            Digital Commerce & Business Management Platform • Founder & Product Lead
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] space-y-4">
          <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
            Nile helps African merchants and growing businesses create and manage their digital commerce presence, catalog, orders, payments, customer engagement, and day-to-day operations from one unified platform.
          </p>

          <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
            Engineered specifically for emerging-market operating conditions: offline resilience, automated WhatsApp receipts, low-latency checkout, and multi-location inventory reconciliation. In 20 months, Nile has processed over <strong className="font-medium text-neutral-900 dark:text-neutral-100">₦1 Billion in transaction volume</strong> across partner merchants.
          </p>

          {/* Interactive Feature Pills */}
          <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-3">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveNileFeature('checkout');
                }}
                className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                  activeNileFeature === 'checkout'
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black border-transparent font-medium shadow-sm'
                    : 'border-black/10 dark:border-white/10 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                ⚡ Checkout Speed
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveNileFeature('offline');
                }}
                className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                  activeNileFeature === 'offline'
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black border-transparent font-medium shadow-sm'
                    : 'border-black/10 dark:border-white/10 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                📦 Offline Resilience
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveNileFeature('whatsapp');
                }}
                className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                  activeNileFeature === 'whatsapp'
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black border-transparent font-medium shadow-sm'
                    : 'border-black/10 dark:border-white/10 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                💬 WhatsApp Receipts
              </button>
            </div>

            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-black/[0.02] dark:bg-white/[0.03] p-3 rounded-lg border border-black/[0.04] dark:border-white/[0.05]">
              {activeNileFeature === 'checkout' &&
                '→ Sub-800ms payment response even on constrained 3G cellular connections across Lagos markets.'}
              {activeNileFeature === 'offline' &&
                '→ Local cache records sales when connectivity drops; automatically reconciles inventory when signal returns.'}
              {activeNileFeature === 'whatsapp' &&
                '→ Dispatches automated payment confirmation and dynamic receipt PDF straight to the customer’s WhatsApp.'}
            </p>
          </div>
        </div>

        {/* Sibling Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08] space-y-1.5 hover:border-black/20 dark:hover:border-white/20 transition-colors">
            <div className="font-medium text-neutral-900 dark:text-neutral-100 font-mono text-xs">
              Sena
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[13px]">
              Hospitality management software for hotels, restaurants, and short-stay operators—covering reservations, guest check-in, and operations.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08] space-y-1.5 hover:border-black/20 dark:hover:border-white/20 transition-colors">
            <div className="font-medium text-neutral-900 dark:text-neutral-100 font-mono text-xs">
              Booq
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[13px]">
              Mobile point-of-sale and accounting platform focused on daily cash flow recording and operational financial tooling.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Some Numbers I Like (Exact copy provided by Winner) */}
      <section id="numbers" className="space-y-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-900 dark:text-neutral-100 font-medium">
            SOME NUMBERS I LIKE.
          </h2>
          <p className="text-xs sm:text-sm font-light text-neutral-500">
            Real volume generated by real African businesses. And one metric that explains my search history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Stat 1 */}
          <div
            onClick={() => {
              sound.playClick();
              setActiveStatNote(activeStatNote === 1 ? null : 1);
            }}
            className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.01] hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer space-y-1 group"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-light font-mono text-neutral-900 dark:text-neutral-100 tracking-tight">
                1,500+
              </div>
              <span className="text-[10px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                tap
              </span>
            </div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
              Businesses
            </div>
            <div className="text-xs font-light text-neutral-500">
              Using products I’ve built across Africa
            </div>
            {activeStatNote === 1 && (
              <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
                📍 Active in Lagos, Abuja, Ibadan, Nairobi & Accra across retail, fashion, and food.
              </p>
            )}
          </div>

          {/* Stat 2 */}
          <div
            onClick={() => {
              sound.playClick();
              setActiveStatNote(activeStatNote === 2 ? null : 2);
            }}
            className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.01] hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer space-y-1 group"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-light font-mono text-neutral-900 dark:text-neutral-100 tracking-tight">
                ₦1B+
              </div>
              <span className="text-[10px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                tap
              </span>
            </div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
              Transaction Volume in 20 Months
            </div>
            <div className="text-xs font-light text-neutral-500">
              Processed across Nile & partner merchants
            </div>
            {activeStatNote === 2 && (
              <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
                ⚡ Over 1,200,000+ individual orders reconciled with zero server downtime.
              </p>
            )}
          </div>

          {/* Stat 3 */}
          <div
            onClick={() => {
              sound.playClick();
              setActiveStatNote(activeStatNote === 3 ? null : 3);
            }}
            className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.01] hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer space-y-1 group"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-light font-mono text-neutral-900 dark:text-neutral-100 tracking-tight">
                Multiple
              </div>
              <span className="text-[10px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                tap
              </span>
            </div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
              Products Shipped
            </div>
            <div className="text-xs font-light text-neutral-500">
              Nile, Sena, Booq & developer infrastructure
            </div>
            {activeStatNote === 3 && (
              <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
                🛠 Shipped 4 core platforms, 22 developer integrations, and 3 mobile client apps.
              </p>
            )}
          </div>

          {/* Stat 4 — Interactive Browser Tab Cycler */}
          <div
            onClick={cycleTab}
            className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.01] hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer space-y-1 group"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl sm:text-3xl font-light font-mono text-neutral-900 dark:text-neutral-100 tracking-tight">
                Too Many
              </div>
              <span className="text-[10px] font-mono text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                click to inspect ↻
              </span>
            </div>
            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
              Browser Tabs Open
            </div>
            <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 pt-1">
              &ldquo;{sampleTabs[tabIndex]}&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* 04: Academic Profile & Research */}
      <section id="profile" className="space-y-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block font-medium">
            02 / ACADEMIA & PEDIGREE
          </span>
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Education & Research Profile
          </h2>
          <p className="text-xs sm:text-sm font-light text-neutral-500">
            Rigorous computing foundations applied to high-friction emerging markets.
          </p>
        </div>

        {/* Education Blocks */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-neutral-500">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">Miva University, Nigeria</span>
              <span>In Progress</span>
            </div>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Master of Information Technology
            </h3>
          </div>

          <div className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-neutral-500">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">Miva Open University, Nigeria</span>
              <span>Completed 2025</span>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Bachelor of Science (BSc), Computer Science
              </h3>
              <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-1">
                CGPA: <strong className="font-semibold text-neutral-900 dark:text-neutral-100">4.60 / 5.00</strong> • 128 Completed Credit Units
              </div>
            </div>

            <div className="pt-2 text-xs font-light text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-black/[0.04] dark:border-white/[0.05] space-y-2">
              <div>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">Undergraduate Research Project: </span>
                Design and Development of a User Interface Design System for a Fintech Application (NILE Pay), supervised by Dr. Daniel Akinboro.
              </div>

              {/* Interactive Architecture Accordion */}
              <div>
                <button
                  onClick={() => {
                    sound.playClick();
                    setShowArchSpec(!showArchSpec);
                  }}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer pt-1"
                >
                  <span>{showArchSpec ? 'Hide Technical Architecture' : 'Inspect Architecture & Modules'}</span>
                  {showArchSpec ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>

                {showArchSpec && (
                  <div className="mt-2 p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.05] font-mono text-[11px] space-y-1.5 text-neutral-600 dark:text-neutral-400">
                    <div>• <strong>Stack:</strong> React, TypeScript, Tailwind CSS, Express.js, MongoDB, Socket.IO.</div>
                    <div>• <strong>HCI Design System:</strong> Tokenized atomic UI system designed for cognitive ease in high-risk transaction contexts.</div>
                    <div>• <strong>Engine:</strong> Real-time payment simulation, KYC onboarding state machine, developer API sandbox, and webhook dispatchers.</div>
                    <div>• <strong>Evaluation:</strong> Tested for usability, component reusability, and latency resilience under simulated network dips.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
            RESEARCH INTERESTS
          </span>
          <p className="text-xs sm:text-sm font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Artificial Intelligence & Applied AI • Applied Computing • Software Engineering • Human-Computer Interaction (HCI) • Intelligent Business Systems • Data-Driven Technologies for Emerging Markets.
          </p>
        </div>

        {/* Technical Experience Timeline */}
        <div className="space-y-3 pt-4">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
            SELECTED PROFESSIONAL LEADERSHIP
          </span>

          <div className="divide-y divide-black/[0.04] dark:divide-white/[0.05] text-xs font-light">
            <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">Founder & Product Lead</span> • Nile Technologies
                <p className="text-neutral-500 text-[12px] mt-0.5">Over ₦1B+ in transactions processed in 20 months across African merchants.</p>
              </div>
              <span className="font-mono text-neutral-500 text-[11px] whitespace-nowrap">Jul 2024 – Present</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">Head of Technology</span> • KoinSave (Nigeria & Canada)
                <p className="text-neutral-500 text-[12px] mt-0.5">Fintech engineering initiatives for scalable digital savings.</p>
              </div>
              <span className="font-mono text-neutral-500 text-[11px] whitespace-nowrap">Feb 2025 – Present</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">Founder</span> • Dorisa Technologies
                <p className="text-neutral-500 text-[12px] mt-0.5">Digital systems, software delivery, and technology strategy.</p>
              </div>
              <span className="font-mono text-neutral-500 text-[11px] whitespace-nowrap">Oct 2021 – 2026</span>
            </div>
          </div>
        </div>

        {/* Referees */}
        <div className="pt-2 text-xs font-mono text-neutral-500">
          <span>Referees available upon request: </span>
          <span className="text-neutral-700 dark:text-neutral-300">
            Dr. Daniel Akinboro (Miva Open Univ.) • Amina Saidu (CEO, Craft House)
          </span>
        </div>
      </section>

      {/* 05: Newsletter — Easy on the eyes */}
      <section id="newsletter" className="space-y-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block font-medium">
            03 / NEWSLETTER
          </span>
          <h2 className="text-base sm:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Dispatches on Building in Africa
          </h2>
          <p className="text-xs sm:text-sm font-light text-neutral-500 max-w-lg leading-relaxed">
            Occasional notes on technology systems, merchant realities in emerging markets, and what I&apos;m learning while building Nile. No noise, no spam.
          </p>
        </div>

        {subscribed ? (
          <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-emerald-600 dark:text-emerald-400 max-w-md flex items-center gap-2">
            <Check className="w-3.5 h-3.5" />
            <span>Subscribed. Welcome aboard.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md pt-1">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-3.5 py-2.5 text-xs rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
            />
            <button
              type="submit"
              disabled={subscribing}
              className="px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap shadow-sm disabled:opacity-50"
            >
              {subscribing ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}
      </section>

      {/* 06: Direct Terminal & Footer */}
      <section id="contact" className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block font-medium">
            04 / CONNECT
          </span>
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Get in touch
          </h2>
          <p className="text-xs sm:text-sm font-light text-neutral-500">
            Open to institutional conversations, partnerships, and high-impact technology discussions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
          <div className="space-y-1">
            <div className="text-xs font-mono text-neutral-500 uppercase">DIRECT TERMINAL</div>
            <a
              href="mailto:winner@hellooyekunle.com"
              className="text-sm sm:text-base font-mono font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
            >
              winner@hellooyekunle.com
            </a>
            <div className="text-xs font-mono text-neutral-400">
              +234 904 186 4738 • Lagos, Nigeria
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            >
              {copiedEmail ? 'Copied' : 'Copy Email'}
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 border-t border-black/[0.04] dark:border-white/[0.05]">
          <span>© {new Date().getFullYear()} Winner Oyekunle Oyebanjo. Built from Lagos.</span>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/winner-oyebanjo-085ba3125/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://x.com/winnerbanjo" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              X
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
