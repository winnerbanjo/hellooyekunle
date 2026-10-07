'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function IdentityStatement() {
  return (
    <section id="statement" className="py-28 md:py-44 px-6 md:px-12 bg-[#050505] border-y border-white/5 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto space-y-24 md:space-y-36">
        {/* Block 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#666677] block mb-4">
            00 / THE THESIS
          </span>
          <p className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F3EE] leading-[1.05]">
            I DON&apos;T REALLY SEPARATE<br />
            <span className="text-white">BUSINESS</span>,<br />
            <span className="text-[#B8FF3D]">CONTENT</span>,<br />
            AND <span className="text-white/40">LIFE</span>.
          </p>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl ml-auto text-right"
        >
          <p className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F3EE] leading-[1.05]">
            I BUILD THINGS.<br />
            THEN I TALK ABOUT<br />
            <span className="text-[#B8FF3D]">WHAT I LEARNED</span>.<br />
            AND DO IT AGAIN.
          </p>
        </motion.div>

        {/* Block 3: The Core Mantra */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-14 rounded-3xl bg-[#0B0B0E] border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B8FF3D]/10 rounded-full blur-[100px] pointer-events-none" />

          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B8FF3D] block mb-6">
            CORE PHILOSOPHY
          </span>

          <h2 className="text-4xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.92] text-[#F5F3EE] mb-8">
            BUILD IT.<br />
            TALK ABOUT IT.<br />
            <span className="text-[#B8FF3D]">REPEAT.</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-[#888899] max-w-xl mx-auto uppercase tracking-wider">
            Started in Lagos. Building software businesses for millions of African merchants.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
