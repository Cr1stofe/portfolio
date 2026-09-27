import Link from 'next/link'
import { Mail, ArrowUpRight } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'

interface SocialTagsProps {
    link: string
    name: 'linkedin' | 'github' | 'email'
    label: string
    sublabel: string
}

export function SocialTag({ link, name, label, sublabel }: SocialTagsProps) {
    const getIcon = () => {
        switch (name) {
            case 'email':    return <Mail className="w-5 h-5 text-orange-500" />
            case 'linkedin': return <FaLinkedin className="w-5 h-5 text-ocean-600" />
            case 'github':   return <FaGithub className="w-5 h-5 text-slate-800" />
        }
    }

    return (
        <Link
            href={link}
            target={name === 'email' ? '_self' : '_blank'}
            className="flex items-center justify-between p-4 sm:p-5 lg:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300 group min-w-0 w-full"
        >
            <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1 mr-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon()}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-ocean-700 transition-colors whitespace-nowrap">
                        {label}
                    </p>
                    <p className="text-xs sm:text-[13px] xl:text-sm text-slate-600 font-medium mt-0.5 break-all lg:break-normal lg:whitespace-nowrap">
                        {sublabel}
                    </p>
                </div>
            </div>

            <ArrowUpRight size={18} className="text-slate-400 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
        </Link>
    )
}
