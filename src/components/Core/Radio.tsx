import { cn } from '@/lib/cn';
import React from 'react'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>{
    name: string | undefined;
    checked: boolean;
    labal?: string;
    MainClass?: string;
    LabalClass?: string;
    InputClass?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
    labal,
    MainClass,
    LabalClass,
    InputClass,
}, ref) => {
  return (
    <div className={cn('flex items-center',MainClass)}>
        <input ref={ref} id="default-radio-2" type="radio" className={cn("w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500",InputClass)}/>
        {labal && (
            <label htmlFor={labal} className={cn('text-sm font-medium text-gray-900', LabalClass)}>{labal}</label>
        )}
    </div>
  )
})

Radio.displayName = 'Radio'
export default Radio