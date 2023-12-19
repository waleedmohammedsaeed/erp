import React from 'react'
import { Apps } from '../styled/styled'
import {Line, LineChart, Tooltip, Legend} from "recharts"
import {CartesianGrid, XAxis, YAxis} from "recharts"

export const SalesChart = () => {	
  const data = [
    {year: 2020, sales: 23300},
    {year: 2021, sales: 47100},
    {year: 2022, sales: 34324},
    {year: 2023, sales: 39564},
    {year: 2025, sales: 31200},
    {year: 2026, sales: 45245},
    {year: 2027, sales: 51319},
    {year: 2028, sales: 63150},
    {year: 2029, sales: 60230},
  ]

  return (
    <LineChart width={600} height={300} data={data} className="m-auto w-2/3 my-4">
      <Line type="line" dataKey="sales" stroke="#2196F3" />
      <CartesianGrid stroke="#ccc" /> 
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <div className='h-80 bg-white px-8 py-2'>Bodies</div> */}

      {/* <Apps>
          
      </Apps> */}
    </LineChart>
  	)
}
