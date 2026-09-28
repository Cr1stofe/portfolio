'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface NavigationProps {
  direction?: 'row' | 'col';
  onItemClick?: () => void;
}

export function NavigationBar({
  direction = 'row',
  onItemClick,
}: NavigationProps) {
  const t = useTranslations('nav');
  const isCol = direction === 'col';

  const navLinks = [
    { label: t('about'), href: '#about', index: '01' },
    { label: t('skills'), href: '#skills', index: '02' },
    { label: t('projects'), href: '#projects', index: '03' },
    { label: t('contact'), href: '#contact', index: '04' },
  ];

  return (
    <nav
      className={cn(
        'flex',
        isCol
          ? 'mx-auto w-full max-w-sm flex-col gap-2'
          : 'flex-row items-center gap-8 text-[15px] font-semibold text-slate-700'
      )}
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onItemClick}
          className={cn(
            isCol
              ? 'group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-bold text-slate-900 transition-all hover:bg-slate-50 hover:text-ocean-700 active:scale-[0.99]'
              : 'group relative py-1 transition-colors hover:text-ocean-700'
          )}
        >
          <div className="flex items-center gap-3">
            {isCol && (
              <span className="font-mono text-xs font-semibold text-orange-500">
                {link.index}
              </span>
            )}
            <span>{link.label}</span>
          </div>
          {!isCol && (
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          )}
        </a>
      ))}
    </nav>
  );
}
