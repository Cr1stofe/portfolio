import Link from "next/link";

import { ImLinkedin } from 'react-icons/im'
import { GrGithub } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

interface SocialTagsProps {
    link: string
    name: string
}

export function SocialTag({ link, name }: SocialTagsProps) {
    const getIcon = () => {
      return name === 'email' ? <MdEmail size={20} /> :
             name === 'linkedin' ? <ImLinkedin size={20} /> :
             name === 'github' ? <GrGithub size={20} /> :
             null;
    };

    return (
        <Link href={link} target="_blank">
            <div className='flex items-center justify-between py-3 cursor-pointer border-t border-gray-800 transition-all duration-150 hover:border-orange-300 md:w-44'>
                <p className='text-base'> {name} </p>
                {getIcon()}
            </div>
        </Link>
    )
}