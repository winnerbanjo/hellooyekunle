'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { AudioToggle } from '@/components/ui/AudioToggle';
import { sound } from '@/lib/sound';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[var(--background)]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Name & Title */}
        <Link
          href="/"
          onClick={() => sound.playClick()}
          className="flex items-baseline gap-2.5 group"
          data-cursor="HOME"
        >
          <span className="text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:opacity-70 transition-opacity">
            Winner Oyekunle Oyebanjo
          </span>
          <span className="text-xs font-light text-neutral-500 dark:text-neutral-400">
            / Founder of Nile
          </span>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center gap-4 text-xs font-light">
          <nav className="hidden sm:flex items-center gap-5 text-neutral-600 dark:text-neutral-400">
            <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#nile" className="hover:text-black dark:hover:text-white transition-colors">
              Nile
            </a>
            <a href="#numbers" className="hover:text-black dark:hover:text-white transition-colors">
              Numbers
            </a>
            <a href="#profile" className="hover:text-black dark:hover:text-white transition-colors">
              Profile
            </a>
            <a href="#newsletter" className="hover:text-black dark:hover:text-white transition-colors">
              Newsletter
            </a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="h-3 w-px bg-black/[0.08] dark:bg-white/[0.1] hidden sm:block" />

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <AudioToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
