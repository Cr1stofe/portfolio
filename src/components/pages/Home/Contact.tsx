import { ContactLinks } from './ContactLinks'

import Image from 'next/image'
import lineContact from '../../../assets/line-contact.svg'
import { Footer } from './Footer'

export function Contact() {
    

    return (
        /* Container principal */
        <div id='contact' className="flex flex-col items-center justify-center gap-16 pt-20 pb-8 px-8 bg-ocean-blue-900 rounded-t-[60px] md:min-h-[704px] md:justify-between md:pt-32 md:rounded-t-[120px]">
            {/* Contact Title */}
            <div className="font-alt text-gray-100 text-center text-4xl md:text-6xl md:max-w-lg">
                <h2>
                    Entre em <div className='inline-block'> contato <Image src={lineContact} alt='' width={165} className='md:w-[250px]'/> </div> comigo
                </h2>
            </div>

            {/* Contact Links */}
            <ContactLinks />

            {/* Footer */}
            <Footer />
        </div>
    )
}