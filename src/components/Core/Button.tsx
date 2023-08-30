import { cn } from "@/lib/cn"
import * as React from "react"


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outline' | 'contained'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant='contained', ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(`${variant==='outline' ? 'text-blue-700 bg-white border-blue-700 focus:ring-4 focus:ring-blue-300' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'} font-medium border rounded-lg text-sm px-5 py-2`,className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export default Button;
