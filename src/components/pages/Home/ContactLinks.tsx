import { SocialTag } from './SocialTag'

export function ContactLinks() {
    return (
        <div className='flex flex-col gap-12 w-48 text-gray-400 md:flex-row md:w-full md:items-center justify-around'>

            {/* tag linkedin */}
            <SocialTag link='https://www.linkedin.com/in/cristofe-albuquerque/' name='linkedin' />

            {/* tag github */}
            <SocialTag link='https://github.com/Cr1stofe' name='github' />

            {/* tag email */}
            <SocialTag link='mailto:cristofe.contact@gmail.com' name='email' />
        </div>
    )
}