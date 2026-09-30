'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  GitBranch,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ProjectItem {
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  featuredIcon: React.ReactNode;
  accentBg: string;
  accentBorder: string;
  accentIcon: string;
  accentHover: string;
  dark?: boolean;
}

interface ProjectsCarouselProps {
  projects: ProjectItem[];
  highlightsLabel: string;
  viewRepo: string;
  liveDemoLabel?: string;
}

function ProjectCard({
  project,
  highlightsLabel,
  viewRepo,
  liveDemoLabel,
}: {
  project: ProjectItem;
  highlightsLabel: string;
  viewRepo: string;
  liveDemoLabel?: string;
}) {
  const resolvedLiveLabel = project.liveLabel || liveDemoLabel || 'Live Demo';

  return (
    <div
      className={cn(
        'group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        project.accentBg,
        project.accentBorder
      )}
    >
      <div
        className={cn(
          'border-b p-6 sm:p-7',
          project.dark ? 'border-ocean-600/60' : 'border-slate-100'
        )}
      >
        <div className="mb-5 flex items-center justify-between">
          <div
            className={cn(
              'shadow-2xs rounded-xl border p-3',
              project.accentIcon
            )}
          >
            {project.featuredIcon}
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span
              className={cn(
                'rounded-full px-3 py-1 text-xs font-bold',
                project.dark
                  ? 'border border-ocean-500/60 bg-ocean-600/70 text-slate-100'
                  : 'border border-slate-200 bg-slate-100 text-slate-700'
              )}
            >
              {project.category}
            </span>
            <span
              className={cn(
                'flex items-center gap-1.5 text-xs font-medium',
                project.dark ? 'text-orange-400' : 'text-slate-500'
              )}
            >
              <GitBranch size={13} />
              {project.status}
            </span>
          </div>
        </div>

        <h3
          className={cn(
            'mb-3 text-xl font-bold transition-colors',
            project.dark
              ? `text-white ${project.accentHover}`
              : `text-slate-950 ${project.accentHover}`
          )}
        >
          {project.title}
        </h3>
        <p
          className={cn(
            'text-sm leading-relaxed',
            project.dark ? 'text-slate-200' : 'text-slate-600'
          )}
        >
          {project.description}
        </p>
      </div>

      <div className="flex-1 p-6 sm:p-7">
        <span
          className={cn(
            'mb-3 block text-xs font-bold uppercase tracking-wider',
            project.dark ? 'text-orange-400' : 'text-slate-500'
          )}
        >
          {highlightsLabel}
        </span>
        <ul className="space-y-2.5">
          {project.highlights.map((h, hi) => (
            <li
              key={hi}
              className={cn(
                'flex items-start gap-2.5 text-sm leading-snug',
                project.dark ? 'text-slate-100' : 'text-slate-700'
              )}
            >
              <span
                className={cn(
                  'mt-[-2px] flex-shrink-0 text-base font-bold',
                  project.dark ? 'text-orange-400' : 'text-ocean-600'
                )}
              >
                •
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          'border-t p-6 pt-5 sm:p-7',
          project.dark
            ? 'bg-ocean-800/40 border-ocean-600/60'
            : 'border-slate-100 bg-slate-50/50'
        )}
      >
        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((tItem, ti) => (
            <span
              key={ti}
              className={cn(
                'rounded-lg border px-2.5 py-1 text-xs font-semibold',
                project.dark
                  ? 'border-ocean-500/60 bg-ocean-600/50 text-slate-100'
                  : 'shadow-2xs border-slate-200 bg-white text-slate-700'
              )}
            >
              {tItem}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all sm:text-sm',
                project.dark
                  ? 'bg-orange-500 text-slate-950 hover:bg-orange-400 hover:shadow-md'
                  : 'hover:bg-ocean-800 bg-ocean-700 text-white hover:shadow-md'
              )}
            >
              <span>{resolvedLiveLabel}</span>
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          )}

          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all sm:text-sm',
              project.dark
                ? 'border border-ocean-600/70 bg-ocean-700/50 text-slate-200 hover:border-ocean-500 hover:bg-ocean-600/70 hover:text-white'
                : 'shadow-2xs border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950'
            )}
          >
            <FaGithub size={15} />
            <span>{viewRepo}</span>
            <ArrowUpRight
              size={14}
              className="opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectsCarousel({
  projects,
  highlightsLabel,
  viewRepo,
  liveDemoLabel,
}: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    const snaps = emblaApi.scrollSnapList();
    const snap = emblaApi.selectedScrollSnap();
    setScrollSnaps(snaps);
    setSelectedIndex(Math.min(snap, Math.max(0, snaps.length - 1)));
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateState();
    emblaApi.on('select', updateState);
    emblaApi.on('reInit', updateState);

    return () => {
      emblaApi.off('select', updateState);
      emblaApi.off('reInit', updateState);
    };
  }, [emblaApi, updateState]);

  const hasMultipleSnaps = scrollSnaps.length > 1;

  return (
    <div className="relative">
      {hasMultipleSnaps && (
        <div className="mb-4 hidden items-center justify-end gap-2.5 sm:flex">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl border transition-all',
              canScrollPrev
                ? 'shadow-xs border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                : 'cursor-not-allowed border-slate-200 bg-slate-100/70 text-slate-400 opacity-60'
            )}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl border transition-all',
              canScrollNext
                ? 'shadow-xs border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                : 'cursor-not-allowed border-slate-200 bg-slate-100/70 text-slate-400 opacity-60'
            )}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      <div
        className="-mx-6 -my-3 overflow-hidden px-6 py-6 sm:-mx-12 sm:px-12"
        ref={emblaRef}
      >
        <div className="flex gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_92%] sm:flex-[0_0_80%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333333%-16px)]"
            >
              <ProjectCard
                project={project}
                highlightsLabel={highlightsLabel}
                viewRepo={viewRepo}
                liveDemoLabel={liveDemoLabel}
              />
            </div>
          ))}
        </div>
      </div>

      {hasMultipleSnaps && (
        <div className="flex items-center justify-center gap-2 pt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                'rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'h-2 w-7 bg-ocean-700'
                  : 'h-2 w-2 bg-slate-300 hover:bg-slate-400'
              )}
              aria-label={`Ir para a página ${index + 1} de projetos`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
