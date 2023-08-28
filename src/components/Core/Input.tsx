import { cn } from '@/lib/cn';
import React from 'react'

interface Props {
    label?: string,
    placeholder?: string,
    type: string;
    divClass?: string, 
    inputClass?: string,
}

const Input = ({label, divClass, inputClass, placeholder, type='text', ...props}: Props) => {
  return (
    <div className={cn('', divClass)}>
      {label && (
        <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      )}
        <input type={type} id="first_name" className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", inputClass)} placeholder={placeholder} {...props} />
    </div>
  )
}

export default Input