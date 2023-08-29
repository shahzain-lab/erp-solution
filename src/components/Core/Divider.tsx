import { cn } from '@/lib/cn'
import React from 'react'

interface Props {
  className?: string
}

const Divider = ({className}: Props) => {
  return (
    <div className={cn('h-1 w-full border-t border-gray-300',className)}></div>
  )
}

export default Divider