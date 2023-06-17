import { BsFillCircleFill, BsClockFill } from 'react-icons/bs'
import { TechStack } from './TechStack'

export function Projects() {

    return (
        /* Container principal */
        <div id='projects' className='flex flex-col items-center justify-center min-h-screen gap-40 py-20 px-6 md:justify-between'>

            {/* Title */}
            <div className='flex items-center justify-center gap-3'>
                {/* Icon */}
                <BsFillCircleFill size={10} className='text-orange-300' />
                {/* Text */}
                <h2 className='text-gray-100 font-bold text-lg'> PROJETOS </h2>
                {/* Icon */}
                <BsFillCircleFill size={10} className='text-orange-300' />
            </div>

            {/* Projects Container */}
            <div className='flex flex-col items-center gap-2'>
                {/* Text */}
                <strong className='text-gray-100 text-lg text-center'> Novos projetos em breve... </strong>
                {/* Icon */}
                <BsClockFill size={24} className='text-gray-100' />
            </div>

            {/* Tech Stack Container */}
            <TechStack />
            
        </div>
    )
}