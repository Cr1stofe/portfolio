'use client';

import {
  ArrowLeft,
  Compass,
  Home,
  RefreshCw,
  TriangleAlert,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ErrorShellProps {
  kind: 'not-found' | 'global';
  reset?: () => void;
}

type ErrorLocale = 'en' | 'pt';

const content = {
  en: {
    'not-found': {
      code: '404',
      icon: Compass,
      eyebrow: 'Page not found',
      title: 'This route does not exist.',
      description:
        'The address may be incorrect or the page may have moved. Return home and keep exploring the portfolio.',
      primaryLabel: 'Back to home',
      secondaryLabel: 'Go back',
    },
    global: {
      code: '500',
      icon: TriangleAlert,
      eyebrow: 'Unexpected error',
      title: 'Something went wrong.',
      description:
        "We couldn't load this page right now. Try again or return to the portfolio home.",
      primaryLabel: 'Try again',
      secondaryLabel: 'Go home',
    },
  },
  pt: {
    'not-found': {
      code: '404',
      icon: Compass,
      eyebrow: 'Página não encontrada',
      title: 'Esse caminho não existe.',
      description:
        'O endereço pode estar incorreto ou a página foi movida. Volte ao início e continue explorando o portfólio.',
      primaryLabel: 'Voltar ao início',
      secondaryLabel: 'Voltar',
    },
    global: {
      code: '500',
      icon: TriangleAlert,
      eyebrow: 'Erro inesperado',
      title: 'Algo saiu do esperado.',
      description:
        'Não foi possível carregar esta página agora. Tente novamente ou volte ao início do portfólio.',
      primaryLabel: 'Tentar novamente',
      secondaryLabel: 'Ir ao início',
    },
  },
} as const;

export function getErrorLocale(pathname: string | null): ErrorLocale {
  return pathname?.split('/')[1] === 'pt' ? 'pt' : 'en';
}

export function ErrorShell({
  kind,
  reset,
  locale: localeOverride,
}: ErrorShellProps & { locale?: ErrorLocale }) {
  const pathname = usePathname();
  const locale = localeOverride ?? getErrorLocale(pathname);
  const homeHref = `/${locale}`;
  const item = content[locale][kind];
  const Icon = item.icon;

  return (
    <main
      aria-labelledby="error-title"
      style={{
        alignItems: 'center',
        background:
          'radial-gradient(circle at 80% 10%, rgba(234,88,12,0.10), transparent 28%), #f8fafc',
        boxSizing: 'border-box',
        color: '#0f172a',
        display: 'flex',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        justifyContent: 'center',
        minHeight: '100dvh',
        padding: '32px 24px',
      }}
    >
      <section
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '28px',
          boxShadow: '0 24px 70px rgba(13, 41, 65, 0.12)',
          maxWidth: '640px',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            background: '#0d2941',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '22px 28px',
          }}
        >
          <Link
            href={homeHref}
            style={{
              color: '#ffffff',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: '18px',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            &lt;Cr1stofe/&gt;
          </Link>
          <span style={{ color: '#fb923c', fontSize: '14px', fontWeight: 700 }}>
            {item.code}
          </span>
        </div>

        <div style={{ padding: '48px 40px 44px' }}>
          <div
            style={{
              alignItems: 'center',
              background: '#fff7ed',
              border: '1px solid #fed7aa',
              borderRadius: '14px',
              color: '#ea580c',
              display: 'inline-flex',
              justifyContent: 'center',
              marginBottom: '22px',
              padding: '12px',
            }}
          >
            <Icon size={24} aria-hidden="true" />
          </div>

          <p
            style={{
              color: '#ea580c',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.16em',
              margin: '0 0 12px',
              textTransform: 'uppercase',
            }}
          >
            {item.eyebrow}
          </p>
          <h1
            id="error-title"
            style={{
              fontSize: 'clamp(32px, 6vw, 52px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              margin: '0 0 18px',
            }}
          >
            {item.title}
          </h1>
          <p
            style={{
              color: '#475569',
              fontSize: '17px',
              lineHeight: 1.65,
              margin: '0 0 30px',
              maxWidth: '520px',
            }}
          >
            {item.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {kind === 'global' ? (
              <button
                type="button"
                onClick={reset}
                style={{
                  alignItems: 'center',
                  background: '#0d2941',
                  border: 0,
                  borderRadius: '12px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  fontSize: '15px',
                  fontWeight: 700,
                  gap: '9px',
                  padding: '14px 19px',
                }}
              >
                <RefreshCw size={17} aria-hidden="true" />
                {item.primaryLabel}
              </button>
            ) : (
              <Link
                href={homeHref}
                style={{
                  alignItems: 'center',
                  background: '#0d2941',
                  borderRadius: '12px',
                  color: '#ffffff',
                  display: 'inline-flex',
                  fontSize: '15px',
                  fontWeight: 700,
                  gap: '9px',
                  padding: '14px 19px',
                  textDecoration: 'none',
                }}
              >
                <Home size={17} aria-hidden="true" />
                {item.primaryLabel}
              </Link>
            )}

            {kind === 'global' ? (
              <Link
                href={homeHref}
                style={{
                  alignItems: 'center',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  color: '#334155',
                  display: 'inline-flex',
                  fontSize: '15px',
                  fontWeight: 700,
                  gap: '9px',
                  padding: '13px 19px',
                  textDecoration: 'none',
                }}
              >
                <Home size={17} aria-hidden="true" />
                {item.secondaryLabel}
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => window.history.back()}
                style={{
                  alignItems: 'center',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  color: '#334155',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  fontSize: '15px',
                  fontWeight: 700,
                  gap: '9px',
                  padding: '13px 19px',
                }}
              >
                <ArrowLeft size={17} aria-hidden="true" />
                {item.secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
