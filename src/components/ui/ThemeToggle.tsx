'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { sound } from '@/lib/sound';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800 opacity-0 ${className}`} />
    );
  }

  const isDark = resolvedTheme === 'dark' || theme === 'dark';

  const toggleTheme = () => {
    sound.playClick();
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 bg-black/[0.03] dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all flex items-center justify-center cursor-pointer ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle visual theme"
      data-cursor={isDark ? 'LIGHT' : 'DARK'}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-3.5 h-3.5 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
