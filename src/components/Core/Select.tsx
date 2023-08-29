import { cn } from '@/lib/cn'
import { AiOutlinePlusCircle,AiFillPlusCircle } from 'react-icons/ai'
import React from 'react'

interface Props {
  label?: string;
  divClass?: string;
  inputClass?: string;
  options: string[];
  addTxt?: string
}

const Select = ({label, divClass, inputClass, options, addTxt, ...props}: Props) => {
  return (
   <div className={cn('w-full', divClass)}>
        <label className="block text-sm font-medium text-gray-900 ">{label}</label>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
        <option value={'Choose'}>Choose option</option>
        {options.map((item: string) => (
            <option key={item} value={item.toLowerCase()}>{item}</option>
            ))}
            {addTxt && (
              <option className='text-purple-600 cursor-pointer capitalize'> + Add {addTxt}</option>
            )}
        </select>
   </div>
  )
}

export default Select