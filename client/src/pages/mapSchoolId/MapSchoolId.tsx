/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ChartCard } from '../../components';
import { datum } from '../../data'

export const MapSchoolId: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h2 className='text-4xl font-bold uppercase text-center mb-10'>Wyniki</h2>
        <div className="w-1/2 h-0.5 bg-black/10 mx-auto"></div>
        <div className="flex flex-col justify-center gap-y-10 mt-10">
          <ChartCard title='Temperatura' resultNow='20 &deg;C' datum={datum} arg1='mouth' arg2='temperature'/>
          <ChartCard title='Ciśnienie' resultNow='1020 hPa' datum={datum} arg1='mouth' arg2='temperature'/>
          <ChartCard title='PM 10' datum={datum} arg1='mouth' arg2='temperature' isPM={true} pm='pm10'/>
          <ChartCard title='PM 2.5' datum={datum} arg1='mouth' arg2='temperature' isPM={true}/>
        </div>
      </div>
    </div>
  )
}
