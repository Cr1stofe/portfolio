import { ArrowRight, ShieldCheck, Cpu, Layers, Server } from 'lucide-react'

const principles = [
    {
        icon: <Layers className="w-5 h-5 text-orange-500" />,
        title: 'Arquitetura BFF & Desacoplamento',
        description: 'Next.js App Router atuando como intermediário inteligente entre a interface e serviços corporativos.',
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
        title: 'Segurança & Sessões Hardened',
        description: 'Cookies HttpOnly com prefixos seguros, RBAC granular e hashing com Argon2id, Salt e Pepper.',
    },
    {
        icon: <Cpu className="w-5 h-5 text-orange-500" />,
        title: 'Tipagem Estrita de Ponta a Ponta',
        description: 'TypeScript rigoroso, validação em tempo real com Zod e DTOs corporativos com class-validator.',
    },
    {
        icon: <Server className="w-5 h-5 text-orange-500" />,
        title: 'Infraestrutura Otimizada',
        description: 'Containers Docker multi-stage, Caddy 2 desonerando streaming de vídeo e deploy automatizado.',
    },
]

export function AboutMe() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-6 flex flex-col items-start">
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
                            Sobre mim
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 leading-tight tracking-tight mb-6">
                            Engenharia de software com foco em arquitetura, segurança e produção real.
                        </h2>

                        <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                            <p>
                                Minha atuação une a precisão de interfaces modernas e reativas no frontend à solidez e segurança necessárias em sistemas backend de alta demanda.
                            </p>

                            <p>
                                Trabalho com autonomia em todo o fluxo de desenvolvimento: desde a concepção do modelo de dados relacional e estruturação de APIs modulares até a orquestração de containers e deploy em servidores Linux e Cloud.
                            </p>

                            <p>
                                Priorizo soluções limpas, sustentáveis e sem complexidade desnecessária, garantindo que o código seja fácil de manter e preparado para escalar.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="#skills"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-ocean-700 text-white text-sm font-bold hover:bg-ocean-600 transition-colors shadow-sm"
                            >
                                Ver stack técnica
                                <ArrowRight size={16} className="text-orange-400" />
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-colors"
                            >
                                Ver projetos em destaque
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-9 border border-slate-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative">
                                <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-800">
                                    <div>
                                        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
                                            Engenharia & Padrões
                                        </span>
                                        <h3 className="text-xl font-bold text-white">Como eu construo aplicações</h3>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span>Produção</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {principles.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80 shadow-inner flex-shrink-0 mt-0.5">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
