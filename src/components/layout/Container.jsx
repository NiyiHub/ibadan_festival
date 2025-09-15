import { cn } from '@/utils/cn'

const Container = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn('container-max', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container