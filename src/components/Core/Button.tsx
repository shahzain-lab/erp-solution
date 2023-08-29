import { cn } from '@/lib/cn';
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'contained'
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, type, className, variant='contained', ...props }, ref) => {
  return (
    <button {...props} ref={ref} type={type} className={`${variant==='outline' ? 'text-blue-700 bg-white border-blue-700 focus:ring-4 focus:ring-blue-300' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'} font-medium border rounded-lg text-sm px-5 py-2`}>{children}</button>
  )
})

export default Button