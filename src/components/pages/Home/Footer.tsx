import Image from 'next/image'

import logo from '../../../assets/logo-white.svg'
import { NavegationBar } from './NavegationBar'

export function Footer() {
    return (
        /* Container principal */

        <div className='flex flex-col items-center justify-center gap-6 pt-8 w-full border-t border-gray-800 md:flex-row md:justify-between md:px-16'>
            <a href='/#'> <Image src={logo} alt='logo' height={32} width={160} /> </a>

            <NavegationBar direction='row' gap='4'/>

            <p className='text-gray-800 text-xs lg:text-sm'>
                Copyright © 2023. Cristofe Albuquerque
            </p>
        </div>

    )
}