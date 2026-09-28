import { getTranslations } from 'next-intl/server'
import { ContactLinks } from '@/components/ui/ContactLinks'
import { Footer } from '@/components/layout/Footer'

export async function Contact({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'contact' })


    return (
        <section id="contact" className="py-14 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-2xl mb-14">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3 block">
                        {t('tag')}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 tracking-tight mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                        {t('desc')}
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
