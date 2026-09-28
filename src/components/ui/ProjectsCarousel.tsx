'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { GitBranch, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'

export interface ProjectItem {
    title: string
    category: string
    status: string
    description: string
    highlights: string[]
    stack: string[]
    githubUrl: string
    featuredIcon: React.ReactNode
    accentBg: string
    accentBorder: string
    accentIcon: string
    accentHover: string
    dark?: boolean
}

interface ProjectsCarouselProps {
    projects: ProjectItem[]
    highlightsLabel: string
    viewRepo: string
}

function ProjectCard({ project, highlightsLabel, viewRepo }: { project: ProjectItem; highlightsLabel: string; viewRepo: string }) {
    return (
        <div
            className={`group relative flex flex-col justify-between h-full rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${project.accentBg} ${project.accentBorder}`}
        >
            <div className={`p-6 sm:p-7 border-b ${project.dark ? 'border-ocean-600/60' : 'border-slate-100'}`}>
                <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border shadow-2xs ${project.accentIcon}`}>
                        {project.featuredIcon}
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.dark ? 'bg-ocean-600/70 text-slate-100 border border-ocean-500/60' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>
                            {project.category}
                        </span>
                        <span className={`text-xs font-medium flex items-center gap-1.5 ${project.dark ? 'text-orange-400' : 'text-slate-500'}`}>
                            <GitBranch size={13} />
                            {project.status}
                        </span>
                    </div>
                </div>

                <h3 className={`font-bold text-xl mb-3 transition-colors ${project.dark ? `text-white ${project.accentHover}` : `text-slate-950 ${project.accentHover}`}`}>
                    {project.title}
                </h3>
                <p className={`text-sm leading-relaxed ${project.dark ? 'text-slate-200' : 'text-slate-600'}`}>
                    {project.description}
                </p>
            </div>

            <div className="p-6 sm:p-7 flex-1">
                <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${project.dark ? 'text-orange-400' : 'text-slate-500'}`}>
                    {highlightsLabel}
                </span>
                <ul className="space-y-2.5">
                    {project.highlights.map((h, hi) => (
                        <li key={hi} className={`flex items-start gap-2.5 text-sm leading-snug ${project.dark ? 'text-slate-100' : 'text-slate-700'}`}>
                            <span className={`font-bold text-base mt-[-2px] flex-shrink-0 ${project.dark ? 'text-orange-400' : 'text-ocean-600'}`}>•</span>
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`p-6 sm:p-7 pt-5 border-t ${project.dark ? 'border-ocean-600/60 bg-ocean-800/40' : 'border-slate-100 bg-slate-50/50'}`}>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tItem, ti) => (
                        <span
                            key={ti}
                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${project.dark ? 'bg-ocean-600/50 border-ocean-500/60 text-slate-100' : 'bg-white border-slate-200 text-slate-700 shadow-2xs'}`}
                        >
                            {tItem}
                        </span>
                    ))}
                </div>

                <Link
                    href={project.githubUrl}
                    target="_blank"
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-all after:absolute after:inset-0 ${project.dark ? 'text-white hover:text-orange-400' : 'text-slate-900 hover:text-ocean-700'}`}
                >
                    <FaGithub size={17} />
                    <span>{viewRepo}</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </div>
        </div>
    )
}

export function ProjectsCarousel({ projects, highlightsLabel, viewRepo }: ProjectsCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: false,
        breakpoints: {
            '(min-width: 1024px)': { active: false }
        }
    })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
        onSelect()

        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    return (
        <div>
            <div className="lg:hidden">
                <div className="overflow-hidden -mx-6 px-6 sm:-mx-12 sm:px-12 py-2" ref={emblaRef}>
                    <div className="flex gap-4 sm:gap-6">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className="flex-[0_0_92%] sm:flex-[0_0_80%] min-w-0 max-w-[360px] sm:max-w-[400px]"
                            >
                                <ProjectCard
                                    project={project}
                                    highlightsLabel={highlightsLabel}
                                    viewRepo={viewRepo}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 pt-6">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => scrollTo(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === selectedIndex
                                    ? 'w-7 h-2 bg-ocean-700'
                                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                            aria-label={`Ir para o projeto ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        project={project}
                        highlightsLabel={highlightsLabel}
                        viewRepo={viewRepo}
                    />
                ))}
            </div>
        </div>
    )
}
