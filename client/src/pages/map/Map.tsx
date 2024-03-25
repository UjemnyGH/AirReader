import React from 'react'
import { CustomMap } from '../../components'
import { Outlet } from 'react-router-dom'

export const Map: React.FC = () => {
  return (
    <>
      <CustomMap isStatic={false}/>
      <Outlet />
    </>
  )
}
