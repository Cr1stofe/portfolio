import iconTs from '../../../assets/tech-icons/typescript-icon.svg'
import iconReact from '../../../assets/tech-icons/react-icon.svg'
import iconNext from '../../../assets/tech-icons/next-icon-white.svg'
import iconTail from '../../../assets/tech-icons/tailwind-icon.svg'
import iconCss from '../../../assets/tech-icons/css-icon.svg'
import iconHtml from '../../../assets/tech-icons/html-icon.svg'
import iconJs from '../../../assets/tech-icons/javascript-icon.svg'
import iconStyledC from '../../../assets/tech-icons/styled-c-icon.svg'
import iconFigma from '../../../assets/tech-icons/figma-icon.svg'
import iconSass from '../../../assets/tech-icons/sass-icon.svg'
import Image from 'next/image'

export function TechStack() {
    return (
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:justify-between'>
                {/* Title */}
                <p className='text-center border-b border-orange-300 font-semibold text-base text-gray-100 py-2 lg:border-r lg:border-b-0 lg:px-4'>
                    Tech Stack
                </p>

                {/* Icons */}
                <div className='grid grid-cols-1 gap-8 items-center sm:grid-cols-2 lg:flex lg:gap-2'>
                    <abbr title="HTML5"> <Image src={iconHtml} alt='' quality={80}/> </abbr>
                    <abbr title="CSS3"> <Image src={iconCss} alt='' quality={80}/> </abbr>
                    <abbr title="Typescript"> <Image src={iconTs} alt='' quality={80}/> </abbr>
                    <abbr title="Javascript"> <Image src={iconJs} alt='' quality={80}/> </abbr>
                    <abbr title="ReactJs"> <Image src={iconReact} alt='' quality={80}/> </abbr>
                    <abbr title="Next.js"> <Image src={iconNext} alt='' quality={80}/> </abbr>
                    <abbr title="Tailwind CSS"> <Image src={iconTail} alt='' quality={80}/> </abbr>
                    <abbr title="Styled Components"> <Image src={iconStyledC} alt='' quality={80}/> </abbr>
                    <abbr title="Figma"> <Image src={iconFigma} alt='' quality={80}/> </abbr>
                    <abbr title="Sass"> <Image src={iconSass} alt='' quality={80}/> </abbr>
                </div>
            </div>
    )
}