'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { NavigationBar } from './NavigationBar';

export function Footer() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-slate-200 pt-10 lg:flex-row">
      <a
        href="#"
        onClick={scrollToTop}
        className="group flex cursor-pointer items-center"
        title={tNav('backToTop')}
      >
        <Image
          src={logo}
          alt="Cr1stofe"
          height={28}
          width={125}
          className="transition-transform group-hover:scale-105"
        />
      </a>

      <div className="hidden lg:block">
        <NavigationBar direction="row" />
      </div>

      <p className="text-center text-sm font-medium text-slate-500 lg:text-left">
        © {currentYear} {tFooter('rights')}
      </p>
    </footer>
  );
}
