'use client'

import React, { useState } from 'react'
import VisualBox from '../Shared/VisualBox'
import DatePicker from '../Shared/DateRangePicker'
import { addDays } from 'date-fns';
import { dateFormatHandler } from '@/lib/dateFormatHandler'


const SaleOverview = () => {
  const [openDateRange, setOpenDateRange] = useState(false)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])
  // console.log('dateRange',dateRange)
  return (
    <div className='relative'>
      <div className='flex justify-between items-center'>
        <div>
          <span className='block text-txt_primary text-2xl font-semibold'>Sale</span>
          <span className='text-txt_alpha text-sm'>18 Results Found</span>
        </div>
        <div>
          <div className='flex text-[14px] cursor-pointer rounded-[8px] border border-gray-300' onClick={() => setOpenDateRange(!openDateRange)}>
            <span className='bg-gray-200 px-2 py-1 rounded-l-[8px]'>{dateFormatHandler(dateRange[0].startDate)}</span>  
            <span className='px-2 py-1'>To</span> 
            <span className='bg-gray-200 px-2 py-1 rounded-r-[8px]'>{dateFormatHandler(dateRange[0].endDate)}</span> 
          </div>
           {openDateRange && (
              <div className='absolute right-0 top-14 z-10 shadow-lg rounded-lg p-1 bg-white'>
               <DatePicker state={dateRange} setState={setDateRange} />
              </div>
           )}
        </div>
      </div>
        <div className='flex items-center py-4 gap-10'>
            <VisualBox title='Paid' value='RS 85,125.00'  />
            <VisualBox title='UnPaid' value='RS 40,500.00'  />
            <VisualBox title='Total' value={`RS 1,405,00.00`}  />
        </div>
    </div>
  )
}

export default SaleOverview