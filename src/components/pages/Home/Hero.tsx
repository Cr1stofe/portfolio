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
        <div className='bg-gray-100'>
            <div className='flex flex-col gap-8 min-h-[calc(100vh-80px)] items-center justify-center py-16 px-12 my-0 mx-auto text-center md:flex-row md:text-left md:max-w-6xl md:gap-40'>

                <div className='flex flex-col gap-4 order-2 md:order-1 md:max-w-lg md:gap-16'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-alt text-ocean-blue-700 text-3xl md:text-6xl'>
                            Desenvolvedor Front-End
                        </h1>

                        {/* Hero description */}
                        <p className='text-ocean-blue-700 text-sm md:text-base'>
                            Olá! Meu nome é Cristofe Albuquerque e eu sou desenvolvedor front-end.
                        </p>
                    </div>
                    {/* Hero title */}

                    <div className='flex flex-col gap-4 md:flex-row'>
                        <p className='border-b border-orange-300 font-semibold py-2 md:border-b-0 md:border-r md:pr-4'>
                            Principais tecnologias
                        </p>

                        <div className='flex gap-6 items-center justify-center'>
                            <Image src={iconTs} alt='icon typescript' width={40} height={40} />
                            <Image src={iconReact} alt='icon react' width={40} height={40} />
                            <Image src={iconNext} alt='icon next.js' width={40} height={40} />
                            <Image src={iconTail} alt='icon tailwind' width={40} height={40} />
                        </div>
                    </div>

                </div>

                <div className='flex flex-col items-center justify-center gap-4 order-1 md:order-2' >
                    {/* Imagem principal */}
                    <Image src={HeroPhoto} alt='' width={250} height={250} className='md:h-[350px] w-[350px]' />


                    {/* Hero contact links */}
                    <div className='flex gap-4 items-center'>
                        <Link href='https://www.linkedin.com/in/cristofe-albuquerque/' target='_black'>
                            <ImLinkedin size={35} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300' />
                        </Link>

                        <Link href='https://github.com/Cr1stofe' target='_black'>
                            <GrGithub size={35} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}