import { ContactLinks } from '@/components/ui/ContactLinks'
import { Footer } from '@/components/layout/Footer'

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-2xl mb-14">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3 block">
                        Contato & Conexões
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-4">
                        Vamos conversar sobre o seu próximo projeto?
                    </h2>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                        Estou aberto a oportunidades como Desenvolvedor Full Stack ou Frontend, além de projetos freelance e novos desafios.
                    </p>
                </div>

                <div className="mb-20">
                    <ContactLinks />
                </div>

                <Footer />
            </div>
        </section>
    )
}
