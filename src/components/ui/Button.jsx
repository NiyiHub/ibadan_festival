import { cn } from '@/utils/cn'

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ariaLabel,
  fullWidth = false,
  normalWeight = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-display border-none cursor-pointer transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50'
  
  const variantClasses = {
    primary: cn(
      'btn-primary',
      normalWeight && 'btn-primary-normal'
    ),
    secondary: 'btn-secondary',
    ghost: 'px-4 py-2 text-primary hover:bg-primary/10 rounded-button',
    link: 'p-0 text-primary hover:text-primary-dark underline-offset-4 hover:underline'
  }
  
  const sizeClasses = {
    sm: 'h-9 px-4 text-sm',
    default: '',
    lg: 'h-14 px-8 text-lg'
  }
  
  const disabledClasses = disabled || loading
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : ''
  
  const widthClasses = fullWidth ? 'w-full' : ''
  
  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    widthClasses,
    className
  )

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button