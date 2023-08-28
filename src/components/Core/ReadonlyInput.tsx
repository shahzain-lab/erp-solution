import { cn } from '@/lib/cn'
import React from 'react'

const ReadonlyInput = ({label, divClass, inputClass, ...props}: any) => {
  return (
    <div className={cn('', divClass)}>
       {label && (
         <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
       )}
        <input type="text" aria-label="disabled input 2" className={cn("bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2 cursor-not-allowed", inputClass)}  readOnly {...props} />
    </div>
  )
}

export default ReadonlyInput