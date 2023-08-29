import { cn } from '@/lib/cn';
import React from 'react'

interface Props {
    value: string | number | readonly string[] | undefined;
    name: string | undefined;
    readOnly?: boolean;
    labal?: string;
    rows?: number;
    placeholder?: string;
    MainClass?: string;
    LabalClass?: string;
    InputClass?: string;
}

const Textarea = ({
    value,
    name,
    labal,
    placeholder,
    MainClass,
    rows,
    LabalClass,
    InputClass,
}: Props) => {
  return (
    <div className={cn('w-full',MainClass)}>
        {labal && (
            <label htmlFor={labal} className={cn('text-sm font-medium text-gray-900', LabalClass)}>{labal}</label>
        )}
        <textarea rows={rows} name={name} value={value} placeholder={placeholder} className={cn("w-full bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1",InputClass)}/>
    </div>
  )
}

export default Textarea