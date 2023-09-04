import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import React from 'react'

interface Props {
    title: string;
    isDown: boolean;
}

const LatestReceive = ({ title, isDown }: Props) => {
  return (
    <div className='bg-white rounded-lg p-2 w-full'>
        <div className='flex items-center gap-2'>{isDown ? (<AiOutlineArrowUp className="text-red-400" />) : (<AiOutlineArrowDown className="text-green-400" />)} 
           <span>{title}</span>
        </div>
    </div>
  )
}

export default LatestReceive