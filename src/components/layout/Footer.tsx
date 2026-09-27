'use client'

import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { NavigationBar } from './NavigationBar'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="pt-10 border-t border-slate-200 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <a 
                href="#" 
                onClick={scrollToTop} 
                className="flex items-center group cursor-pointer"
                title="Voltar ao início"
            >
                <Image src={logo} alt="Cr1stofe" height={28} width={125} className="transition-transform group-hover:scale-105" />
            </a>

            <NavigationBar direction="row" />

            <p className="text-sm font-medium text-slate-500">
                © {currentYear} Cristofe Albuquerque. Todos os direitos reservados.
            </p>
        </footer>
    )
}
