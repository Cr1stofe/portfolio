'use client'

import { VscChromeClose } from 'react-icons/vsc'
import { CgMenuRightAlt } from 'react-icons/cg'

import logo from '../../../assets/logo.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { NavegationBar } from './NavegationBar'

export function MenuMobile() {
    /* Saber se menu mobile está visível */
    const [isOpen, setIsOpen] = useState(false);

    /* Bloquear scroll */
    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen])

    return (
        /* Container principal */
        <div>
            {/* Menu Mobile aberto*/}
            <div className={`flex items-center justify-center fixed z-[1] bg-ocean-blue-900 h-full w-full ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300`}>
                {/* Icone para fechar */}
                <div className='absolute top-10 right-16'>
                    <VscChromeClose className='text-gray-100 h-12 w-12 cursor-pointer transition-all hover:text-orange-300' onClick={() => setIsOpen(false)} />
                </div>

                { /* Barra de navegação */}
                <div className='text-4xl' onClick={() => setIsOpen(false)}>
                    <NavegationBar direction='col' gap='8' />
                </div>
            </div >

            {/* Menu Mobile Fechado */}
            <header className='py-4 px-6 bg-gray-300 drop-shadow-md md:px-20'>
                <nav className='flex items-center justify-between py-2 px-4'>
                    <Image src={logo} alt='logo' height={32} width={160} />

                    {/* Icone Menu Mobile */}
                    <div className='md:hidden'>
                        <CgMenuRightAlt className='h-8 w-8 text-ocean-blue-700 cursor-pointer transition-all hover:text-orange-300' onClick={() => setIsOpen(true)} />
                    </div>

                    {/* Navbar Desktop */}
                    <div className='hidden md:block'>
                        <div className={`flex items-center justify-evenly w-full gap-8 text-lg font-semibold text-ocean-blue-900`}>
                            <a href='#'>
                                <p className='border-b border-gray-300 transition hover:border-orange-300'>
                                    Home
                                </p>
                            </a>
                            <a href='#about'>
                                <p className='border-b border-gray-300 transition hover:border-orange-300'>
                                    Sobre
                                </p>
                            </a>
                            <a href='#projects'>
                                <p className='border-b border-gray-300 transition hover:border-orange-300'>
                                    Projetos
                                </p>
                            </a>
                            <a href='#contact'>
                                <p className='border-b border-gray-300 transition hover:border-orange-300'>
                                    Contato
                                </p>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
