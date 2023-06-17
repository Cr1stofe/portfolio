import { GrGithub } from 'react-icons/gr'
import { ImLinkedin } from 'react-icons/im'

import Image from 'next/image'
import Link from 'next/link'

import HeroPhoto from '../../../assets/hero-photo.svg'
import iconTs from '../../../assets/tech-icons/typescript-icon.svg' 
import iconReact from '../../../assets/tech-icons/react-icon.svg' 
import iconNext from '../../../assets/tech-icons/next-icon-black.svg' 
import iconTail from '../../../assets/tech-icons/tailwind-icon.svg' 

export function Hero() {
    return (
        /* Hero Container */
        <div className='flex flex-col gap-8 min-h-screen items-center py-16 px-12 bg-gray-100 text-center'>
            {/* Imagem principal */}
            <Image src={HeroPhoto} alt='' width={250} height={250} />

            {/* Hero title */}
            <h1 className='font-alt text-ocean-blue-700 text-3xl md:text-4xl'>
                Desenvolvedor Front-End
            </h1>

            {/* Hero description */}
            <p className='text-ocean-blue-700 text-sm'>
                Olá! Meu nome é Cristofe Albuquerque e eu sou desenvolvedor front-end.
            </p>

            {/* Hero contact links */}
            <div className='flex gap-4 items-center'>
                <Link href='https://www.linkedin.com/in/cristofe-albuquerque/'>
                    <ImLinkedin size={35} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300'/>
                </Link>

                <Link href='https://github.com/Cr1stofe'>
                    <GrGithub size={35} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300'/>
                </Link>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='border-b border-orange-300 font-semibold py-2'> 
                    Principais tecnologias 
                </p>

                <div className='flex gap-6 items-center justify-center'>
                    <Image src={iconTs} alt='icon typescript' width={40} height={40}/>
                    <Image src={iconReact} alt='icon react' width={40} height={40}/>
                    <Image src={iconNext} alt='icon next.js' width={40} height={40}/>
                    <Image src={iconTail} alt='icon tailwind' width={40} height={40}/>
                </div>
            </div>
        </div>
    )
}