import { cn } from '@/lib/cn'
import React from 'react'

const Main = ({ children, className }: { children:React.ReactNode; className?: string }) => {
  return (
    <div className={cn(`ml-[240px] px-3 py-2`, className)}>
        {children}
    </div>
  )
}

export default Main