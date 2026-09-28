import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher } from './LanguageSwitcher';

const mockReplace = vi.fn();
let currentLocale = 'pt';

vi.mock('next-intl', () => ({
  useLocale: () => currentLocale,
}));

vi.mock('@/i18n/routing', () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),
  usePathname: () => '/',
}));

describe('LanguageSwitcher Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    currentLocale = 'pt';
  });

  it('should render both EN and PT language buttons', () => {
    render(<LanguageSwitcher />);
    expect(
      screen.getByRole('button', { name: /switch to english/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /mudar para português/i })
    ).toBeInTheDocument();
  });

  it('should highlight the active locale button', () => {
    currentLocale = 'pt';
    render(<LanguageSwitcher />);
    const ptButton = screen.getByRole('button', {
      name: /mudar para português/i,
    });
    expect(ptButton.className).toContain('bg-white');
    expect(ptButton.className).toContain('text-ocean-700');
  });

  it('should call router.replace when clicking on the other language button', async () => {
    const user = userEvent.setup();
    currentLocale = 'pt';
    render(<LanguageSwitcher />);

    const enButton = screen.getByRole('button', { name: /switch to english/i });
    await user.click(enButton);

    expect(mockReplace).toHaveBeenCalledWith('/', { locale: 'en' });
  });

  it('should not call router.replace when clicking on the currently active language button', async () => {
    const user = userEvent.setup();
    currentLocale = 'pt';
    render(<LanguageSwitcher />);

    const ptButton = screen.getByRole('button', {
      name: /mudar para português/i,
    });
    await user.click(ptButton);

    expect(mockReplace).not.toHaveBeenCalled();
  });
});
