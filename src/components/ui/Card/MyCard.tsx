import { Card, CardBody } from '@material-tailwind/react'
import cn from 'classnames'
import React from 'react'

interface MyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  style?: React.CSSProperties
}

function MyCard({ children, className, bodyClassName, style, ...props }: MyCardProps): JSX.Element {
  const scrollableContentStyle: React.CSSProperties = {
    ...style,
    maxHeight: 'calc(100vh - 48px)',
    overflowY: 'auto',
  }
  const cardClasses = cn('h-full max-h-screen bg-cyan-400 rounded-2xl', className)
  const bodyClasses = cn('p-8 text-white text-xl font-semibold flex flex-col gap-4', bodyClassName)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...cardProps } = props

  return (
    <Card className={cardClasses} style={scrollableContentStyle} {...cardProps}>
      <CardBody className={bodyClasses}>{children}</CardBody>
    </Card>
  )
}

export default MyCard
