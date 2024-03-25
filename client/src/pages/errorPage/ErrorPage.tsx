import { Button } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const ErrorPage: React.FC = () => {
  return (
    <div className='h-screen flex items-start justify-center'>
      <div className="flex flex-col gap-y-10 items-center">
        <h1 className='text-7xl font-bold text-red-500'>404</h1>
        <h2 className='text-5xl'><span className='font-bold text-red-500'>Błąd:</span> Strona Nie Znaleziona</h2>
        <Link to={'/'}>
          <Button color='primary' className='text-xl py-5'>Wróc na stronę główną</Button>
        </Link>
      </div>
    </div>
  )
}

