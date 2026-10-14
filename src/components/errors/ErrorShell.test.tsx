import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ErrorShell, getErrorLocale } from './ErrorShell';

let pathname = '/en/missing';

vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
}));

describe('ErrorShell', () => {
  beforeEach(() => {
    pathname = '/en/missing';
  });

  it('renders the 404 page in English for an English route', () => {
    render(<ErrorShell kind="not-found" />);

    expect(
      screen.getByRole('heading', { name: 'This route does not exist.' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute(
      'href',
      '/en'
    );
  });

  it('renders the 404 page in Portuguese for a Portuguese route', () => {
    pathname = '/pt/caminho-inexistente';
    render(<ErrorShell kind="not-found" />);

    expect(
      screen.getByRole('heading', { name: 'Esse caminho não existe.' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Voltar ao início' })
    ).toHaveAttribute('href', '/pt');
  });

  it('uses English as the fallback locale', () => {
    expect(getErrorLocale('/unknown')).toBe('en');
    expect(getErrorLocale(null)).toBe('en');
  });

  it('calls reset from the localized global error action', async () => {
    const user = userEvent.setup();
    const reset = vi.fn();

    render(<ErrorShell kind="global" reset={reset} />);
    await user.click(screen.getByRole('button', { name: 'Try again' }));

    expect(reset).toHaveBeenCalledOnce();
  });
});
