import React from 'react'
import { Logo } from '../../components'
import { Link } from 'react-router-dom'
import { FaGithub, FaGooglePlay } from "react-icons/fa6";
import { GrAppleAppStore } from "react-icons/gr";


export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full h-0.5 bg-black/10"></div>
      <div className="container mx-auto">
        <div className="flex items-start justify-between mt-10">
          <div className="flex flex-col items-center">
            <Logo version={1} />
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <p className='text-xl font-semibold'>Menu</p>
            <div className='flex flex-col items-center gap-y-1'>
              <Link to={'/'} className='text-base hover:text-[#007BFF]'>Strona Główna</Link>
              <Link to={'/map'} className='text-base hover:text-[#007BFF]'>Mapa</Link>
              <Link to={'/about'} className='text-base hover:text-[#007BFF]'>O nas</Link>
              <Link to={'/mobile-app'} className='text-base hover:text-[#007BFF]'>Aplikacja Mobilna</Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <p className='text-xl font-semibold'>Open Source Project</p>
            <Link to={'https://github.com/UjemnyGH/AirReader'} target='_blank' className='text-base hover:text-[#007BFF] flex items-center gap-2'>
              <FaGithub />
              <p>Github</p>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <p className='text-xl font-semibold'>Aplikacja Mobilna</p>
            <div className='flex flex-col items-center gap-y-3'>
              <Link to={'#'} target='_blank' className='text-base hover:text-[#007BFF] flex items-center gap-2'>
                <FaGooglePlay />
                <p>Play Market</p>
              </Link>
              <Link to={'#'} target='_blank' className='text-base hover:text-[#007BFF] flex items-center gap-2'>
                <GrAppleAppStore />
                <p>App Store</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <p className='text-xl font-semibold'>Twórcy</p>
            <Link to={'https://github.com/UjemnyGH'} target='_blank' className='text-base hover:text-[#007BFF] flex items-center gap-2'>
              <FaGithub />
              <p>UjemnyGH</p>
            </Link>
            <Link to={'https://github.com/SAMAKAKI'} target='_blank' className='text-base hover:text-[#007BFF] flex items-center gap-2'>
              <FaGithub />
              <p>SAMAKAKI</p>
            </Link>
          </div>
        </div>
        <div className='mt-5'>
          <p className='font-bold text-sm'>Air Reader&copy; 2024 SAMAKAKI | UjemnyGH</p>
        </div>
      </div>
    </>
  )
}
