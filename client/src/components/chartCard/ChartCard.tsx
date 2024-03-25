import React, { useEffect } from 'react'
import { Card, CardBody, Select, SelectItem } from '@nextui-org/react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Data } from '../../data';
import ReactSpeedometer, { Transition } from 'react-d3-speedometer';
import { motion } from 'framer-motion';

export const ChartCard: React.FC<{ title: string, resultNow?: string, datum: Data[], arg1: string, arg2: string, isPM?: boolean, pm?: string }> = ({ title, resultNow, datum, arg1, arg2, isPM = false, pm }) => {
  useEffect(() => {
    Chart.register(CategoryScale)
  }, [])

  return (
    <>
      <h3 className='text-3xl font-bold uppercase text-center mb-10'>{ title }</h3>
      <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0, transition: {delay: .2, duration: .5} }} className="flex items-center justify-around">
        { isPM && <div>
          { <ReactSpeedometer needleTransitionDuration={2000} needleTransition={Transition.easeElasticOut} paddingHorizontal={20} paddingVertical={20} labelFontSize='18px' valueTextFontSize='36px' width={400} height={400} maxValue={pm === 'pm10' ? 201 : 121} value={54} valueFormat='d' customSegmentStops={pm === 'pm10' ? [0, 21, 61, 101, 141, 201] : [0, 13, 37, 61, 85, 121]} segmentColors={["#58af30", "#aeca24", "#ffd810", "#e48105", "#e30913"]} currentValueText={`${54} µg/m³`} textColor={"black"}/> }
        </div>}
        { resultNow && <div className="flex flex-col items-center justify-center gap-y-3 rounded-full border shadow-xl w-1/4 h-[400px]">
          <p className='font-semibold text-3xl'>Teraz</p>
          <p className='text-5xl'>{ resultNow }</p>
        </div>}
        <Card className='w-1/2'>
          <CardBody className='flex flex-col'>
            <Select label='Sortuj wedgług ...' defaultSelectedKeys={['mouth']} className='w-1/3 self-end'>
              <SelectItem key={'day'} value={'day'}>Dni</SelectItem>
              <SelectItem key={'week'} value={'week'}>Tygodni</SelectItem>
              <SelectItem key={'mouth'} value={'mouth'}>Miesiący</SelectItem>
              <SelectItem key={'year'} value={'year'}>Lat</SelectItem>
            </Select>
            <div className="w-full">
              <Line data={{
                labels: datum.map((data) => data[arg1]),
                datasets: [
                  {
                    label: "Temperatura",
                    data: datum.map((data) => data[arg2]),
                    backgroundColor: "#007BFF",
                    borderColor: '#007BFF'
                  }
                ]
              }}/>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </>
  )
}
