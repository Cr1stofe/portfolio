import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { trackContactClick } from '@/lib/analytics';

interface SocialTagsProps {
  link: string;
  name: 'linkedin' | 'github' | 'email';
  label: string;
  sublabel: string;
}

export function SocialTag({ link, name, label, sublabel }: SocialTagsProps) {
  const getIcon = () => {
    switch (name) {
      case 'email':
        return <Mail className="h-5 w-5 text-orange-500" />;
      case 'linkedin':
        return <FaLinkedin className="h-5 w-5 text-ocean-600" />;
      case 'github':
        return <FaGithub className="h-5 w-5 text-slate-800" />;
    }
  };

  return (
    <Link
      href={link}
      target={name === 'email' ? '_self' : '_blank'}
      onClick={() => trackContactClick(name, link)}
      className="group flex w-full min-w-0 items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-lg sm:p-5 lg:p-6"
    >
      <div className="mr-2 flex min-w-0 flex-1 items-center gap-3 sm:gap-3.5">
        <div className="shadow-2xs shrink-0 rounded-xl border border-slate-200 bg-white p-2.5 transition-transform group-hover:scale-105">
          {getIcon()}
        </div>
        <div className="min-w-0 flex-1">
          <p className="whitespace-nowrap text-sm font-bold text-slate-900 transition-colors group-hover:text-ocean-700 sm:text-base">
            {label}
          </p>
          <p className="mt-0.5 break-all text-xs font-medium text-slate-600 sm:text-[13px] lg:whitespace-nowrap lg:break-normal xl:text-sm">
            {sublabel}
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={18}
        className="shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500"
      />
    </Link>
  );
}
