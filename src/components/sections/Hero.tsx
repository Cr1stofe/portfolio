import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

import ProfileImage from '@/assets/profile-image.webp'

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-10 pb-20 md:pt-16 md:pb-28">
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

                    <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span>Disponível para novos projetos</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-950 leading-[1.15] tracking-tight mb-6">
                            Desenvolvedor Full Stack focado em criar aplicações modernas e escaláveis<span className="text-orange-500">.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                            Olá, sou o <strong className="text-slate-900 font-semibold">Cristofe Albuquerque</strong>. Desenvolvo soluções de ponta a ponta — unindo interfaces fluidas em <strong className="text-ocean-700 font-semibold">Next.js</strong> a backends estruturados em <strong className="text-ocean-700 font-semibold">NestJS</strong>, bancos relacionais e deploy em produção.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-ocean-700 text-white text-base font-semibold hover:bg-ocean-600 transition-colors shadow-sm"
                            >
                                Ver projetos
                                <ArrowRight size={18} className="text-orange-400" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-base font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm"
                            >
                                <MessageSquare size={18} className="text-slate-600" />
                                Entrar em contato
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-6 border-t border-slate-200 w-full max-w-lg justify-center lg:justify-start">
                            <span className="text-sm font-semibold text-slate-500">Conectar:</span>
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

                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="w-[300px] sm:w-[350px] lg:w-[380px] aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                            <Image
                                src={ProfileImage}
                                alt="Cristofe Albuquerque - Desenvolvedor Full Stack"
                                width={400}
                                height={400}
                                quality={95}
                                priority
                                className="object-cover object-top w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
