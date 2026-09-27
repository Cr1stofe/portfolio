import { PlayCircle, Layers, Server, ArrowUpRight, GitBranch } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'

const projects = [
    {
        title: 'LMS — Frontend Next.js',
        category: 'Frontend & BFF',
        status: 'Em desenvolvimento',
        description:
            'Plataforma educacional desenvolvida com Next.js App Router e arquitetura BFF. Focada em segurança de ponta a ponta, reprodução eficiente de mídia sob demanda e uma experiência de usuário fluida e responsiva.',

        highlights: [
            'Player de vídeo com suporte a HTTP Range Requests (206 Partial Content)',
            'Autenticação via cookies HttpOnly com SameSite e middleware no edge',
            'Arquitetura BFF com validação rígida em tempo real via Zod + React Hook Form',
            'Estado atômico com Zustand e estilização modular em SCSS Modules',
        ],
        stack: ['Next.js', 'TypeScript', 'BFF', 'Zustand', 'SCSS Modules', 'Zod'],
        githubUrl: 'https://github.com/Cr1stofe/lms-front-next',
        featuredIcon: <Layers className="w-5 h-5" />,
        accentBg: 'bg-white',
        accentBorder: 'border-slate-200',
        accentIcon: 'bg-slate-100 border-slate-200 text-ocean-700',
        accentHover: 'group-hover:text-ocean-700',
    },

    {
        title: 'LMS — Backend NestJS',
        category: 'Backend & API',
        status: 'Em desenvolvimento',
        description:
            'API corporativa escalável desenvolvida em NestJS e PostgreSQL, com foco em streaming seguro de alta performance, arquitetura orientada a domínios e segurança avançada.',
        highlights: [
            'Streaming sob demanda (HTTP 206) protegido e desonerado pelo Caddy via X-Accel-Redirect',
            'Controle de acesso RBAC, sessões seguras em cookies __Secure-sid e hashing Argon2id + Salt + Pepper',
            'Testes automatizados com Vitest e modelagem relacional no PostgreSQL com Prisma ORM',
            'Orquestração com Docker Compose, healthchecks, redes isoladas e builds multi-stage otimizados',
        ],
        stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Vitest', 'Caddy', 'Argon2id'],
        githubUrl: 'https://github.com/Cr1stofe/lms-nest-postgres',
        featuredIcon: <PlayCircle className="w-5 h-5 text-orange-400" />,
        accentBg: 'bg-ocean-700',
        accentBorder: 'border-ocean-600',
        accentIcon: 'bg-ocean-600/80 border-ocean-500 text-white',
        accentHover: 'group-hover:text-white',
        dark: true,
    },

    {
        title: 'LMS — API Express',
        category: 'Backend & API',
        status: 'Base arquitetural',
        description:
            'Primeira versão da API da plataforma desenvolvida em Express e TypeScript. Serviu como base de validação para a posterior migração estruturada para o ecossistema NestJS.',
        highlights: [
            'API RESTful com rotas tipadas em TypeScript e JWT',
            'Modelagem e consultas relacionais no PostgreSQL sem ORM',
            'Base de estudo que direcionou as decisões de arquitetura no NestJS',
        ],
        stack: ['Express', 'Node.js', 'PostgreSQL', 'JWT', 'TypeScript'],
        githubUrl: 'https://github.com/Cr1stofe/lms-express-postgres',
        featuredIcon: <Server className="w-5 h-5" />,
        accentBg: 'bg-white',
        accentBorder: 'border-slate-200',
        accentIcon: 'bg-slate-100 border-slate-200 text-slate-700',
        accentHover: 'group-hover:text-slate-900',
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-14">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3 block">
                        Projetos & Código
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-4">
                        Aplicações e Projetos em Destaque
                    </h2>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                        Projetos onde aplico boas práticas de engenharia de software, separação clara de responsabilidades e foco em produção.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`group relative flex flex-col justify-between rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${project.accentBg} ${project.accentBorder}`}
                        >
                            <div className={`p-7 border-b ${project.dark ? 'border-ocean-600/60' : 'border-slate-100'}`}>
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

                            <div className="p-7 flex-1">
                                <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${project.dark ? 'text-orange-400' : 'text-slate-500'}`}>
                                    Principais Recursos:
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

                            <div className={`p-7 pt-5 border-t ${project.dark ? 'border-ocean-600/60 bg-ocean-800/40' : 'border-slate-100 bg-slate-50/50'}`}>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((t, ti) => (
                                        <span
                                            key={ti}
                                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${project.dark ? 'bg-ocean-600/50 border-ocean-500/60 text-slate-100' : 'bg-white border-slate-200 text-slate-700 shadow-2xs'}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    className={`inline-flex items-center gap-2 text-sm font-bold transition-all after:absolute after:inset-0 ${project.dark ? 'text-white hover:text-orange-400' : 'text-slate-900 hover:text-ocean-700'}`}
                                >
                                    <FaGithub size={17} />
                                    <span>Ver repositório no GitHub</span>
                                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
