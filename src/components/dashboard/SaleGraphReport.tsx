'use client'

import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const SaleGraphReport = () => {

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Filler,
      Legend
    );
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: '',
        },
      },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

     const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: labels.map(() => Math.floor(Math.random() * 1000)),
          borderColor: '#2563eba6',
          backgroundColor: '#2563eb30',
          lineTension: .4
        },
        {
          fill: true,
          label: 'Dataset 2',
          data: labels.map(() => Math.floor(Math.random() * 1000)),
          borderColor: '#e6410e91',
          backgroundColor: '#f4511e24',
          lineTension: .4
        },
      ],
    };
    
    

    useEffect(() => {
      
    }, [])

  return (
    <div className='bg-white rounded-lg p-2 w-full'>
        <span className='block text-txt_primary text-2xl font-semibold'>Sales</span>
        <div className='flex items-center justify-between'>
            <div className='ml-5 flex flex-col w-[20%] items-center gap-10 border px-2 py-4 border-gray-200 rounded-lg'>
                <span className='text-txt_primary text-lg font-semibold'>Weekly</span>
                <div className='text-txt_primary text-center text-md font-semibold'>
                  <span className='text-2xl text-deep-orange-600'>25K</span>
                  <p>sales</p>
                </div>
                <div className='text-txt_primary text-center text-md font-semibold'>
                  <span className='text-2xl text-blue-600'>25K</span>
                  <p>purchase</p>
                </div>  
              </div>
            <Line className='lineDashboardSaleReportGraph' style={{width: '500px'}} width={500} height={300} options={{...options, maintainAspectRatio: false}} data={data} />
        </div>
    </div>
  )
}

export default SaleGraphReport