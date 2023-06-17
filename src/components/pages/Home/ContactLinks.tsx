import { ImLinkedin } from 'react-icons/im'
import { GrGithub } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

export function ContactLinks() {
    return (
        <div className='flex flex-col gap-12 w-48 text-gray-400'>

            {/* tag linkedin */}
            <Link href='https://www.linkedin.com/in/cristofe-albuquerque/'>
                <div className='flex items-center justify-between py-3 cursor-pointer border-t border-gray-800 transition-all duration-150 hover:border-orange-300'>
                    <p className='text-base'> linkedin </p>
                    <ImLinkedin size={20} />
                </div>
            </Link>

            {/* tag github */}
            <Link href='https://github.com/Cr1stofe'>
                <div className='flex items-center justify-between py-3 cursor-pointer border-t border-gray-800 transition-all duration-150 hover:border-orange-300'>
                    <p className='text-base'> github </p>
                    <GrGithub size={20} />
                </div>
            </Link>

            {/* tag email */}
            <Link href='mailto:cristofe.contact@gmail.com'>
                <div className='flex items-center justify-between py-3 cursor-pointer border-t border-gray-800 transition-all duration-150 hover:border-orange-300'>
                    <p className='text-base'> email </p>
                    <MdEmail size={20} />
                </div>
            </Link>
        </div>
    )
}