'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { sound } from '@/lib/sound';
import { socialLinks } from '@/content/content';

const categories = [
  'Investment / Advisory',
  'Commercial Partnership',
  'Content / Media / Speaking',
  'Engineering / Product',
  'Saying Hello',
];

export function ContactSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    sound.playClick();

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, category: activeCategory }),
      });
    } catch {
      // Graceful fallback
    }

    setLoading(false);
    setSubmitted(true);
    sound.playSuccess();
  };

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-black/5 dark:border-white/10 relative flex flex-col justify-center bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Hook & Channels */}
          <div className="lg:col-span-6 space-y-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 block font-bold">
              04 / DIRECT DISPATCH
            </span>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.88] text-neutral-900 dark:text-neutral-100">
              LET&apos;S MAKE<br />
              SOMETHING<br />
              <span className="text-neutral-400 dark:text-neutral-500">INTERESTING.</span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light max-w-lg">
              Investment, enterprise partnerships, media, or just an honest conversation about African commerce.
            </p>

            {/* Direct Email Callout */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">
                  DIRECT EMAIL INBOX
                </span>
                <span className="font-mono text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {socialLinks.email}
                </span>
              </div>

              <button
                onClick={copyEmail}
                className="px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-wider font-bold transition-all hover:opacity-90 flex items-center gap-2 cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY EMAIL'}</span>
              </button>
            </div>

            {/* Social Channels */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-4">
                ONLINE CHANNELS
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: 'LinkedIn', href: socialLinks.linkedin },
                  { label: 'X (Twitter)', href: socialLinks.x },
                  { label: 'TikTok', href: socialLinks.tiktok },
                  { label: 'Instagram', href: socialLinks.instagram },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 shadow-xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black uppercase text-neutral-900 dark:text-neutral-100">
                      MESSAGE DISPATCHED
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-sm mx-auto">
                      Thank you. Winner reviews all incoming messages directly from his personal terminal.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3">
                        SELECT TOPIC
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                          const isCatActive = activeCategory === cat;
                          return (
                            <button
                              type="button"
                              key={cat}
                              onClick={() => {
                                sound.playClick();
                                setActiveCategory(cat);
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                                isCatActive
                                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-black font-bold border-transparent shadow-sm'
                                  : 'bg-black/[0.03] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                              }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1.5">
                          YOUR NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1.5">
                          YOUR EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-1.5">
                          MESSAGE
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell me what you're building, thinking about, or how we can collaborate..."
                          className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-sm resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-neutral-900 hover:bg-black text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-bold font-mono text-xs tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      data-cursor="SEND ↗"
                    >
                      {loading ? 'DISPATCHING...' : 'DISPATCH MESSAGE ↗'}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
