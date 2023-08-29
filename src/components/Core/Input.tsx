import { cn } from '@/lib/cn';
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labal?: string;
  MainClass?: string;
  LabalClass?: string;
  InputClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    labal,
    MainClass,
    LabalClass,
    InputClass,
    ...props
}, ref) => {
  return (
    <div className={cn('w-full',MainClass)}>
        {labal && (
            <label htmlFor={labal} className={cn('text-sm font-medium text-gray-900', LabalClass)}>{labal}</label>
        )}
        <input ref={ref} {...props} className={cn("w-full bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2",InputClass)}/>
    </div>
  )
})

export default Input