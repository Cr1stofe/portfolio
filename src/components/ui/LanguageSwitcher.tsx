'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

import { cn } from '@/lib/utils';
import { trackLanguageChange } from '@/lib/analytics';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = (nextLocale: 'en' | 'pt') => {
    if (nextLocale === locale) return;
    trackLanguageChange(locale, nextLocale);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200/80 bg-slate-100/90 p-1 text-xs font-semibold text-slate-600">
      <button
        type="button"
        disabled={isPending}
        onClick={() => toggleLocale('en')}
        className={cn(
          'rounded-md px-2.5 py-1 transition-all',
          locale === 'en'
            ? 'shadow-2xs bg-white font-bold text-ocean-700'
            : 'text-slate-500 hover:text-slate-800'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => toggleLocale('pt')}
        className={cn(
          'rounded-md px-2.5 py-1 transition-all',
          locale === 'pt'
            ? 'shadow-2xs bg-white font-bold text-ocean-700'
            : 'text-slate-500 hover:text-slate-800'
        )}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  );
}
