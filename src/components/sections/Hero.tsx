import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

import ProfileImage from '@/assets/profile-image.webp'

export async function Hero({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'hero' })


    return (
        <section className="relative overflow-hidden bg-white pt-8 pb-10 md:pt-12 md:pb-14">
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="hidden lg:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span>{t('badge')}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-950 leading-[1.15] tracking-tight mb-6">
                            {t('title')}<span className="text-orange-500">.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                            {t.rich('intro', {
                                strongName: (chunks) => <strong className="text-slate-900 font-semibold">{chunks}</strong>,
                                strongTech: (chunks) => <strong className="text-ocean-700 font-semibold">{chunks}</strong>
                            })}
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-ocean-700 text-white text-base font-semibold hover:bg-ocean-600 transition-colors shadow-sm"
                            >
                                {t('viewProjects')}
                                <ArrowRight size={18} className="text-orange-400" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-base font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm"
                            >
                                <MessageSquare size={18} className="text-slate-600" />
                                {t('getInTouch')}
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-6 border-t border-slate-200 w-full max-w-lg justify-center lg:justify-start">
                            <span className="text-sm font-semibold text-slate-500">{t('connect')}</span>
                            <Link
                                href="https://github.com/Cr1stofe"
                                target="_blank"
                                className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors"
                                title="GitHub"
                            >
                                <FaGithub size={19} />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/cristofe-albuquerque/"
                                target="_blank"
                                className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-ocean-700 transition-colors"
                                title="LinkedIn"
                            >
                                <FaLinkedin size={19} className="text-ocean-600" />
                                <span>LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-[285px] sm:w-[340px] lg:w-[380px] aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
                            <Image
                                src={ProfileImage}
                                alt={t('imageAlt')}
                                width={400}
                                height={400}
                                quality={95}
                                priority
                                sizes="(max-width: 640px) 285px, (max-width: 1024px) 340px, 380px"
                                className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            
                            <div className="lg:hidden absolute bottom-3 left-3 right-3 flex justify-center">
                                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50/95 backdrop-blur-md border border-slate-200 text-slate-700 text-xs font-medium shadow-md">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                    <span>{t('badge')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
