'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations } from 'next-intl'
import { NavigationBar } from './NavigationBar'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { X, Menu, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
    const t = useTranslations('nav')
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
            className={`fixed inset-0 z-[9999] bg-white h-[100dvh] w-screen flex flex-col justify-between md:hidden transition-all duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
            }`}
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100 flex-shrink-0">
                <a 
                    href="#" 
                    onClick={(e) => {
                        scrollToTop(e);
                        setIsOpen(false);
                    }}
                    className="flex items-center gap-3 group cursor-pointer"
                    title={t('backToTop')}
                >
                    <Image src={logo} alt="Cr1stofe" height={32} width={145} priority className="transition-transform group-hover:scale-[1.02]" />
                </a>
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-slate-800 hover:text-slate-900 rounded-lg bg-slate-100 transition-colors"
                        aria-label={t('closeMenu')}
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pt-8 pb-6 flex flex-col justify-start">
                <NavigationBar direction="col" onItemClick={() => setIsOpen(false)} />
            </div>

            <div className="p-6 border-t border-slate-100 flex-shrink-0 flex flex-col gap-3.5">
                <a 
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-ocean-700 hover:bg-ocean-600 transition-colors shadow-sm"
                >
                    {t('contactCta')}
                </a>
                <div className="flex items-center justify-center gap-3">
                    <Link 
                        href="https://github.com/Cr1stofe" 
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-lg transition-colors"
                    >
                        <FaGithub size={16} /> GitHub
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/cristofe-albuquerque/" 
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-lg transition-colors"
                    >
                        <FaLinkedin size={16} className="text-ocean-600" /> LinkedIn
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm shadow-slate-900/5' 
                : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
        }`}>
            {mounted && createPortal(mobileMenuContent, document.body)}

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    <a 
                        href="#" 
                        onClick={scrollToTop} 
                        className="flex items-center gap-3 group cursor-pointer"
                        title={t('backToTop')}
                    >
                        <Image src={logo} alt="Cr1stofe" height={32} width={145} className="transition-transform group-hover:scale-[1.02]" />
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <NavigationBar direction="row" />
                        
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                            <LanguageSwitcher />

                            <Link 
                                href="https://github.com/Cr1stofe" 
                                target="_blank"
                                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                                title="GitHub"
                            >
                                <FaGithub size={19} />
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/cristofe-albuquerque/" 
                                target="_blank"
                                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                                title="LinkedIn"
                            >
                                <FaLinkedin size={19} />
                            </Link>
                            <a 
                                href="#contact"
                                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-ocean-700 hover:bg-ocean-600 rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5 ml-1"
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
                            className="p-2 text-slate-800 hover:text-slate-900 rounded-lg bg-slate-100 transition-colors"
                            aria-label={t('openMenu')}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
