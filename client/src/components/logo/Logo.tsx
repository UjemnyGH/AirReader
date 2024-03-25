import { motion } from 'framer-motion'
import React from 'react'
import { IoPartlySunny } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const Logo: React.FC<{ version: number }> = ({ version }) => {
  return (
    <>
    { version === 1 && (
      <div className="relative">
        <Link to='/' className='font-bold text-cyan-500 text-3xl'>Air Reader</Link>
        <IoPartlySunny className='text-yellow-400 absolute -right-3 top-0'/>
      </div>
    )}
    { version === 2 && (
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} className="relative w-[430px] mx-auto">
        <h1 className='font-bold cursor-default text-cyan-400 text-7xl [text-shadow:_0_10px_15px_rgb(0_0_0_/_40%)]'>Air Reader</h1>
        <IoPartlySunny className='text-yellow-400 absolute text-4xl right-0 -top-2 drop-shadow-xl'/>
      </motion.div>
    ) }
    </>
  )
}
