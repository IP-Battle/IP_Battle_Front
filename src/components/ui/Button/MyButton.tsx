import { cn } from '@/components/lib/utils'
import { Button } from '@material-tailwind/react'
import React from 'react'

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  fullWidth?: boolean
}

const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, className, color, fullWidth, ...props }, ref) => {
    const fullWithClassName = fullWidth ? 'w-full' : ''
    return (
      <Button
        ref={ref}
        size='lg'
        className={cn(`text-xl p-6 rounded-full text-white ${fullWithClassName}`, className)}
        style={{ backgroundColor: 'rgb(250, 199, 16)' }}
        {...props}
      >
        {children}
      </Button>
    )
  }
)
MyButton.displayName = 'MyButton'
export default MyButton
