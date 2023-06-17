export function NavbarFullSize() {
  return (
    <div className='hidden md:block'>
      <div className={`flex items-center justify-evenly w-full gap-8 text-lg font-semibold text-ocean-blue-900`}>
        <a href='#'>
          <p className='border-b border-gray-300 transition hover:border-orange-300'>
            Home
          </p>
        </a>
        <a href='#about'>
          <p className='border-b border-gray-300 transition hover:border-orange-300'>
            Sobre
          </p>
        </a>
        <a href='#projects'>
          <p className='border-b border-gray-300 transition hover:border-orange-300'>
            Projetos
          </p>
        </a>
        <a href='#contact'>
          <p className='border-b border-gray-300 transition hover:border-orange-300'>
            Contato
          </p>
        </a>
      </div>
    </div>
  )
}
