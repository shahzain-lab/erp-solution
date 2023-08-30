import { cn } from '@/lib/cn';
import React, { ReactNode } from 'react'

interface TableProps {
    columns: { value: string; class?: string }[];
    children: ReactNode
}

const FormTable = ({columns, children}: TableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 ">
    <thead>
        <tr>
            {columns.map((col) => (
                <th key={col.value} scope="col" className={cn("px-6 py-2 text-left border border-gray-200 text-xs font-medium text-gray-500 uppercase", col.class)}>{col.value}</th>
            ))}
        </tr>
    </thead>
       {children}
    </table>
  )
}

export default FormTable