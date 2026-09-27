interface NavigationProps {
    direction?: 'row' | 'col'
    onItemClick?: () => void
}

export function NavigationBar({ direction = 'row', onItemClick }: NavigationProps) {
    const isCol = direction === 'col'

    const navLinks = [
        { label: 'Sobre', href: '#about', index: '01' },
        { label: 'Stack', href: '#skills', index: '02' },
        { label: 'Projetos', href: '#projects', index: '03' },
        { label: 'Contato', href: '#contact', index: '04' },
    ]

    return (
        <nav className={`flex ${isCol ? 'flex-col gap-2 w-full max-w-sm mx-auto' : 'flex-row gap-8 items-center text-[15px] font-semibold text-slate-700'}`}>
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={onItemClick}
                    className={isCol 
                        ? 'flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-bold text-slate-900 hover:text-ocean-700 hover:bg-slate-50 transition-all active:scale-[0.99] group'
                        : 'relative group transition-colors hover:text-ocean-700 py-1'
                    }
                >
                    <div className="flex items-center gap-3">
                        {isCol && (
                            <span className="text-xs font-mono font-semibold text-orange-500">
                                {link.index}
                            </span>
                        )}
                        <span>{link.label}</span>
                    </div>
                    {!isCol && (
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                    )}
                </a>
            ))}
        </nav>
    )
}
