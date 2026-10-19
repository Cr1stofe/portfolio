'use client';

import { FileDown } from 'lucide-react';
import { trackCvDownload } from '@/lib/analytics';

interface CvDownloadButtonProps {
  href: string;
  locale: string;
  label: string;
}

export function CvDownloadButton({
  href,
  locale,
  label,
}: CvDownloadButtonProps) {
  const fileName = href.split('/').pop() ?? 'resume.pdf';

  return (
    <a
      href={href}
      download
      onClick={() => trackCvDownload(locale, fileName)}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 sm:w-auto"
    >
      <FileDown size={16} className="text-ocean-700" />
      {label}
    </a>
  );
}
