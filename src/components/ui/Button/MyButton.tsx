import { cn } from '@/components/lib/utils'
import { Button } from '@material-tailwind/react'
import React from 'react'

interface MyButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size='lg'
        className={cn('text-xl p-6 rounded-full text-white', className)}
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
