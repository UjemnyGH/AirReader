/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Logo, Introduction, CustomMap } from '../../components'

export const Home: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <div className="absolute z-20 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <Logo version={2} />
          <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.5}}} viewport={{once: false, amount: .3 }} className='text-2xl font-semibold mt-8 text-white'>Zobacz jakie wyniki ma twoja szkoła!</motion.p>
          <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.3, duration: 0.5}}} viewport={{once: false, amount: .3 }} className='text-2xl font-semibold mt-3 w-[62%] mx-auto text-white'>Niezbędna strona dla obserwacji jakie zanieczyszczenie powietrza ma twoja szkoła i okolice</motion.p>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.4, duration: 0.5}}} viewport={{once: false, amount: .3 }}>
            <Link to={'/map'}>
              <Button color='primary' className='font-bold text-lg mt-20'>Zobacz wyniki</Button>
            </Link>
          </motion.div>
        </div>
        <div className='absolute w-full h-screen bg-black/20 z-10 backdrop-blur-[2px]'></div>
        <CustomMap isStatic={true}/>
      </div>
      <Introduction />
    </>
  )
}
