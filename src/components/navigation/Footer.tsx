'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const [lagosTime, setLagosTime] = useState<string>('18:21 WAT');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      setLagosTime(`${formatter.format(now)} WAT`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // SimpleHomepage on '/' already has its own minimal footer
  if (pathname === '/') return null;

  return (
    <footer className="py-8 border-t border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-neutral-500 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>Winner Oyebanjo • Founder of Nile • Lagos ({lagosTime})</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
