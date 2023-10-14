import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import React from 'react'

interface Props {
    Icon: any;
    title: string;
    isDown: boolean;
    percentage: number;
    rate: string;
}

const LatestReceive = ({ Icon, title, isDown, percentage, rate}: Props) => {
  return (
    <div className='bg-white flex items-center rounded-lg p-2 gap-2 w-full'>
      <span className='p-4 bg-gray-100 rounded-full text-[28px]'>
        <Icon />
      </span>
        <div className='flex flex-col items-start'>
           <span className='text-sm text-txt_alpha'>{title}</span>
           <span className='text-txt_layout text-xl font-bold'>{rate}</span>
           <span className='flex text-sm items-center gap-2'>{isDown ? (<AiOutlineArrowUp className="text-red-400" />) : (<AiOutlineArrowDown className="text-green-400" />)} {percentage}%</span>
        </div>
    </div>
  )
}

export default LatestReceive