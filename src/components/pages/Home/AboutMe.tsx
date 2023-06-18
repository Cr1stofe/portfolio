import { HiMapPin } from 'react-icons/hi2'
import { RiFileDownloadFill } from 'react-icons/ri'
import { BsArrowRightShort } from 'react-icons/bs'

import AboutMePhoto from '../../../assets/About-me-photo.png'

import Image from "next/image";
import Link from 'next/link';

export function AboutMe() {
    return (
        /* Container Principal */
        <div id='about' className="flex items-center justify-center bg-gray-400">
            <div className='flex flex-col items-center justify-center py-16 gap-9 sm:p-6 lg:flex-row md:px-16 md:max-w-7xl md:gap-28 md:min-h-screen md:justify-evenly'>
                {/* Imagem Dev */}
                <Image src={AboutMePhoto} alt='' height={600} width={530} quality={80}/>

                {/* Container Infos */}
                <div className='flex flex-col items-start gap-4 text-left px-8'>

                    {/* Container Title and Description */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-alt font-bold text-navy-blue-300 text-sm md:text-base'>
                            SOBRE MIM
                        </h2>

                        <h1 className='font-bold text-lg text-gray-900 md:text-xl'>
                            Desenvolvedor front-end da cidade de Fortaleza, Ceará <HiMapPin size={24} className='inline mt-[-10px]' />
                        </h1>

                        <p className='text-gray-900 text-sm sm:text-base'>
                            Como desenvolvedor front-end, possuo amplo conhecimento na utilização de tecnologias
                            como HTML, CSS, Tailwind, Typescript, React e Next.js. Tenho habilidade em escrever
                            código limpo e otimizado, utilizando as tecnologias mais atualizadas. Meu objetivo
                            é criar interfaces funcionais e responsivas, proporcionando aos usuários uma experiência única.
                        </p>
                    </div>

                    {/* Container Tags email and job */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <strong className='text-gray-900 text-base'> EMAIL </strong>
                            <Link href='mailto:cristofe.contact@gmail.com'> 
                                <p className='flex items-center gap-1 text-gray-900 text-sm group'> 
                                    cristofe.contact@gmail.com 
                                    <BsArrowRightShort size={24} className='transition-all duration-200 text-ocean-blue-700 group-hover:text-orange-300'/> 
                                </p> 
                            </Link>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <strong className='text-gray-900 text-base'> EMPREGO </strong>
                            <p className='text-gray-900 text-sm'> Disponível </p>
                        </div>
                    </div>

                    {/* Button */}
                    <a href='/curriculo.pdf' download className='flex items-center justify-center px-4 py-2 rounded-lg gap-2 font-bold transition text-gray-100 text-lg bg-ocean-blue-700 hover:bg-ocean-blue-300'>
                        Currículo
                        <RiFileDownloadFill size={24} className='text-orange-300' />
                    </a>
                </div>
            </div>
        </div>
    )
}