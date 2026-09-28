'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { NavigationBar } from './NavigationBar';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { X, Menu, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mobileMenuContent = (
    <div
      className={`fixed inset-0 z-[9999] flex h-[100dvh] w-screen flex-col justify-between bg-white transition-all duration-300 md:hidden ${
        isOpen
          ? 'pointer-events-auto visible opacity-100'
          : 'pointer-events-none invisible opacity-0'
      }`}
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="flex h-20 flex-shrink-0 items-center justify-between border-b border-slate-100 px-6">
        <a
          href="#"
          onClick={(e) => {
            scrollToTop(e);
            setIsOpen(false);
          }}
          className="group flex cursor-pointer items-center gap-3"
          title={t('backToTop')}
        >
          <Image
            src={logo}
            alt="Cr1stofe"
            height={32}
            width={145}
            priority
            className="transition-transform group-hover:scale-[1.02]"
          />
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-slate-100 p-2 text-slate-800 transition-colors hover:text-slate-900"
            aria-label={t('closeMenu')}
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start overflow-y-auto px-6 pb-6 pt-8">
        <NavigationBar direction="col" onItemClick={() => setIsOpen(false)} />
      </div>

      <div className="flex flex-shrink-0 flex-col gap-3.5 border-t border-slate-100 p-6">
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="w-full rounded-xl bg-ocean-700 px-5 py-3.5 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-ocean-600"
        >
          {t('contactCta')}
        </a>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="https://github.com/Cr1stofe"
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            <FaGithub size={16} /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/cristofe-albuquerque/"
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            <FaLinkedin size={16} className="text-ocean-600" /> LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/90 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-md'
          : 'border-b border-slate-100 bg-white/80 backdrop-blur-sm'
      }`}
    >
      {mounted && createPortal(mobileMenuContent, document.body)}

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            onClick={scrollToTop}
            className="group flex cursor-pointer items-center gap-3"
            title={t('backToTop')}
          >
            <Image
              src={logo}
              alt="Cr1stofe"
              height={32}
              width={145}
              className="transition-transform group-hover:scale-[1.02]"
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <NavigationBar direction="row" />

            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
              <LanguageSwitcher />

              <Link
                href="https://github.com/Cr1stofe"
                target="_blank"
                className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                title="GitHub"
              >
                <FaGithub size={19} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/cristofe-albuquerque/"
                target="_blank"
                className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                title="LinkedIn"
              >
                <FaLinkedin size={19} />
              </Link>
              <a
                href="#contact"
                className="ml-1 inline-flex items-center gap-1.5 rounded-lg bg-ocean-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-ocean-600 hover:shadow"
              >
                {t('contact')}
                <ArrowUpRight size={14} className="text-orange-400" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-lg bg-slate-100 p-2 text-slate-800 transition-colors hover:text-slate-900"
              aria-label={t('openMenu')}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
