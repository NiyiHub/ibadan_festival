import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

// Program Row Component
export const ProgramRow = ({
  index = 0,
  leftLabel,
  avatar,
  title,
  date,
  slug,
  className = ''
}) => {
  const showBorder = index > 0

  return (
    <Link
      to={`/events/${slug}`}
      className={cn(
        'program-row group',
        showBorder && 'program-row-border',
        className
      )}
      aria-label={`${title} — ${date}`}
    >
      {/* Left Label */}
      <div className="program-left-label">
        {leftLabel}
      </div>

      {/* Avatar */}
      <div className="program-avatar-wrap">
        <img
          src={avatar}
          alt={`${title} preview`}
          className="program-avatar"
          onError={(e) => {
            e.target.src = '/images/placeholder-avatar.jpg'
          }}
        />
      </div>

      {/* Title and Date */}
      <div className="program-right-content">
        <div className="program-title">{title}</div>
        <div className="program-date">{date}</div>
      </div>

      {/* Arrow */}
      <div className="program-arrow">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 19L19 5" />
          <path d="M9 5h10v10" />
        </svg>
      </div>
    </Link>
  )
}

// Program List Component
export const ProgramList = ({ 
  items = [], 
  className = '',
  title = ''
}) => {
  if (!items.length) {
    return (
      <div className={cn('text-center py-8', className)}>
        <p className="text-text-secondary">No programs available at the moment.</p>
      </div>
    )
  }

  return (
    <div className={cn('w-full', className)}>
      {title && (
        <h3 className="font-display font-bold text-xl text-primary mb-6">
          {title}
        </h3>
      )}
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {items.map((item, index) => (
          <ProgramRow
            key={item.slug || item.id || index}
            index={index}
            leftLabel={item.leftLabel || item.category || 'Program'}
            avatar={item.avatar || '/images/placeholder-avatar.jpg'}
            title={item.title}
            date={item.subtitle || item.date || ''}
            slug={item.slug || ''}
          />
        ))}
      </div>
    </div>
  )
}