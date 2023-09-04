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

const ExpenseGraphReport = () => {
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
            fill: false,
            label: 'Dataset 2',
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            lineTension: .4,
            
          },
        ],
      };
      
    
      
  return (
    <div className='bg-white rounded-lg p-2 w-[30%]'>
    <span className='block text-txt_primary text-2xl font-semibold'>Expense</span>
    <div className='flex flex-col items-start'>
        <div>
            <span className='block text-txt_primary text-2xl font-semibold'>RS 96,000.00</span>
            <span className='block text-txt_alpha text-sm '>281 Total Sales (jJan - Dec)</span>
        </div>
        <Line className='lineDashboardExpenseReportGraph' style={{width: '500px'}} width={500} height={300} options={{...options, maintainAspectRatio: false}} data={data} />
    </div>
   </div>  
   )
}

export default ExpenseGraphReport