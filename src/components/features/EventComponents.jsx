import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

// Event Hero Card Component
export const EventHeroCard = ({
  title,
  subtitle,
  image,
  href = '#',
  className = ''
}) => {
  return (
    <Link to={href} className={cn('block group', className)}>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <div className="text-white">
            <h3 className="font-display text-xl md:text-3xl font-black uppercase">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm md:text-base mt-1 text-white/90">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

// Event Card Component
export const EventCard = ({
  title,
  image,
  href = '#',
  className = ''
}) => {
  return (
    <Link to={href} className={cn('block group', className)}>
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="mt-3">
          <h4 className="font-display font-semibold text-primary group-hover:text-primary-dark transition-colors">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  )
}

// Event Grid Component
export const EventGrid = ({ items = [], className = '' }) => {
  if (!items.length) return null

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-6 mt-6', className)}>
      {items.map((item, index) => (
        <EventCard
          key={item.slug || index}
          title={item.title}
          image={item.image}
          href={item.slug ? `/${item.slug}` : '#'}
        />
      ))}
    </div>
  )
}