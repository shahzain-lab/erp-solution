import { cn } from '@/lib/cn'
import { AiOutlinePlusCircle,AiFillPlusCircle } from 'react-icons/ai'
import React from 'react'

interface Customer {
    id: string
    name: string
}

const Select = ({label, divClass, inputClass, loadedCustomers, ...props}: any) => {
  return (
   <div className={cn('', divClass)}>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Choose a customer</option>
        {loadedCustomers.map((item: Customer) => (
            <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        <option className='text-purple-600 cursor-pointer'> + Add Party</option>
        </select>
   </div>
  )
}

export default Select