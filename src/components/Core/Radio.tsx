import { cn } from '@/lib/cn';
import React from 'react'

interface Props {
    name: string | undefined;
    checked: boolean;
    labal?: string;
    MainClass?: string;
    LabalClass?: string;
    InputClass?: string;
}

const Radio = ({
    name,
    labal,
    checked,
    MainClass,
    LabalClass,
    InputClass,
}: Props) => {
  return (
    <div className={cn('flex items-center',MainClass)}>
        <input checked={checked} id="default-radio-2" type="radio"  name={name} className={cn("w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500",InputClass)}/>
        {labal && (
            <label htmlFor={labal} className={cn('text-sm font-medium text-gray-900', LabalClass)}>{labal}</label>
        )}
    </div>
  )
}

export default Radio