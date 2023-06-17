interface DirectionProps {
    direction: string
    gap: string
}

export function NavegationBar({ direction, gap }: DirectionProps) {
    return (
        <div className={`flex flex-${direction} items-center justify-evenly gap-${gap} font-medium text-gray-100 lg:text-lg lg:justify-center lg:gap-8`}>
            <a href='#'>
                <p className='border-b border-ocean-blue-900 transition hover:border-orange-300'>
                    Home
                </p>
            </a>
            <a href='#about'>
                <p className='border-b border-ocean-blue-900 transition hover:border-orange-300'>
                    Sobre
                </p>
            </a>
            <a href='#projects'>
                <p className='border-b border-ocean-blue-900 transition hover:border-orange-300'>
                    Projetos
                </p>
            </a>
            <a href='#contact'>
                <p className='border-b border-ocean-blue-900 transition hover:border-orange-300'>
                    Contato
                </p>
            </a>
        </div>
    )
}