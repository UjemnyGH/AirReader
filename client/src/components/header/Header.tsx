import { Button } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../components'
import { LuSunMedium } from 'react-icons/lu'

export const Header: React.FC = () => {
  return (
    <div className="mx-auto p-2 sticky top-0 backdrop-blur-sm bg-white/80 z-50">
      <div className="flex items-center justify-around">
        <Logo version={1}/>
        <div className="flex items-center justify-center gap-10">
          <Link to={'/map'} className='font-semibold text-2xl hover:text-[#007BFF] transition-colors duration-50'>Mapa</Link>
          <Link to={'/about'} className='font-semibold text-2xl hover:text-[#007BFF] transition-colors duration-50'>O nas</Link>
          <Link to={'/mobile-app'} className='font-semibold text-2xl hover:text-[#007BFF] transition-colors duration-50'>Aplikacja Mobilna</Link>
        </div>
        <Button color='primary'>
          <LuSunMedium className='text-3xl'/>
        </Button>
      </div>
    </div>
  )
}
