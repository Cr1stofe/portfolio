'use client';

import { ErrorShell, getErrorLocale } from '@/components/errors/ErrorShell';
import { usePathname } from 'next/navigation';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const locale = getErrorLocale(pathname);

  return (
    <html lang={locale === 'pt' ? 'pt-BR' : 'en'}>
      <body>
        <ErrorShell kind="global" reset={reset} locale={locale} />
      </body>
    </html>
  );
}
