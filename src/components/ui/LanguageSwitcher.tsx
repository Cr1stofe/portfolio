'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const toggleLocale = (nextLocale: 'en' | 'pt') => {
    if (nextLocale === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <div className="inline-flex items-center p-1 rounded-lg bg-slate-100/90 border border-slate-200/80 text-xs font-semibold text-slate-600">
      <button
        type="button"
        disabled={isPending}
        onClick={() => toggleLocale('en')}
        className={`px-2.5 py-1 rounded-md transition-all ${
          locale === 'en'
            ? 'bg-white text-ocean-700 font-bold shadow-2xs'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => toggleLocale('pt')}
        className={`px-2.5 py-1 rounded-md transition-all ${
          locale === 'pt'
            ? 'bg-white text-ocean-700 font-bold shadow-2xs'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  )
}
