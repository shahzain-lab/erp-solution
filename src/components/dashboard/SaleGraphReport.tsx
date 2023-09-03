'use client'

import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";


const SaleGraphReport = () => {
    const [options, setOptions] = useState<any>(null)

    useEffect(() => {
        const options = {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        }
        const series = [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
          setOptions({options, series})
    }, [])

  return (
    <div className='bg-white rounded-lg p-2 w-[56%]'>
        <span className='block text-txt_primary text-2xl font-semibold'>Sales</span>
        <div className='flex items-center justify-between'>
            <div>
                <span className='block text-txt_primary text-2xl font-semibold'>RS 96,000.00</span>
                <span className='block text-txt_alpha text-sm '>281 Total Sales (jJan - Dec)</span>
            </div>
            {options && (
                <Chart 
                options={options.options}
                series={options.series}
                type='area'
                width={500}
                />
            )}
        </div>
    </div>
  )
}

export default SaleGraphReport