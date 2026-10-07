import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  badgeColor?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 md:mb-24 ${isCenter ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'} ${className}`}>
      <div className={`flex items-center gap-2.5 mb-6 ${isCenter ? 'justify-center' : ''}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
        <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 font-bold">
          {label}
        </span>
      </div>

      <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-neutral-900 dark:text-neutral-100 mb-6">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
