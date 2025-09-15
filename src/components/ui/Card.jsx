import { cn } from '@/utils/cn'

const Card = ({
  children,
  onClick,
  className = '',
  hover = false,
  ...props
}) => {
  const cardClasses = cn(
    'bg-surface rounded-card shadow-card overflow-hidden',
    hover && 'transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1',
    onClick && 'cursor-pointer',
    className
  )

  const handleKeyDown = (e) => {
    if (!onClick) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(e)
    }
  }

  if (onClick) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className={cardClasses}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={cn('p-6 pb-4', className)} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = '', ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={cn('p-6 pt-4', className)} {...props}>
    {children}
  </div>
)

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export default Card