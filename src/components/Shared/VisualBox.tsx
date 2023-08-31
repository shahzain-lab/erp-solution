import { cn } from '@/lib/cn';
import React from 'react'

interface Props {
    className?: string;
    title: string;
    value: string;
}

const VisualBox = ({ className, title, value }: Props) => {
  return (
    <div className={cn('bg-bg_prime rounded-[10px] flex flex-col py-2 px-3 h-24 w-56 items-start justify-center ', className)}>
        <span className='text-txt_alpha text-sm'>{title}</span>
        <span className='font-bold text-lg text-txt_primary'>{value}</span>
    </div>
  )
}

export default VisualBox