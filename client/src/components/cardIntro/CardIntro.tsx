import { Card, CardBody, CardHeader, Image, Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

export const CardIntro: React.FC<{x: number, self: string, titleHeader: string, bodyInfo: string, alt: string, src: string, url?: string, w?: string, h?: string, isMainInfo?: boolean}> = ({x, self, titleHeader, bodyInfo, alt, src, url, w = '150px', h = '150px', isMainInfo = true}) => {
  return (
    <motion.div initial={{
      opacity: 0,
      x: x
    }} whileInView={{
      opacity: 1,
      x: 0,
      transition: {delay: .2, duration: .5}
    }} viewport={{
      once: false,
      amount: .3
    }} className={`w-[45%] mt-12 ${self}`}>
      <Card className='px-5 py-2.5'>
        <CardHeader className='font-semibold text-2xl'>{titleHeader}</CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <p className='flex-1 text-lg font-semibold'>{bodyInfo} {isMainInfo && <span className='text-cyan-400'>To kliknij więcej i zobaczysz.</span>}</p>
            <Image alt={`${alt}`} src={`${src}`} className='flex-1' width={`${w}`} height={`${h}`}></Image>
          </div>
          { isMainInfo && 
          <Link to={`${url}`}>
            <Button variant='ghost' color='primary' className='w-[20%] text-lg font-semibold' >Więcej</Button>
          </Link>
          }
        </CardBody>
      </Card>
    </motion.div>
  )
}
