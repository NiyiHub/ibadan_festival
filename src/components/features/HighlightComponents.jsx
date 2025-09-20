import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

// Individual Highlight Card Component
export const HighlightCard = ({
  title,
  excerpt,
  image,
  date,
  readTime = '5 min read',
  category = 'Event Report',
  slug,
  className = ''
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className={cn(
      'bg-white rounded-lg shadow-card overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
      className
    )}>
      <Link to={`/highlights/${slug}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = '/images/placeholder-highlight.jpg'
            }}
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date and Read Time */}
          <div className="flex items-center text-xs text-text-secondary mb-3">
            <time dateTime={date}>{formattedDate}</time>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg md:text-xl text-primary mb-3 line-clamp-2 group-hover:text-primary-dark transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="mt-4 flex items-center text-primary text-sm font-medium">
            <span className="group-hover:text-primary-dark transition-colors">Read Full Report</span>
            <svg 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  )
}

// Highlights Grid Component
export const HighlightsGrid = ({ 
  highlights = [], 
  className = '',
  title = 'Highlights',
  showViewAll = true,
  maxItems = null
}) => {
  const displayItems = maxItems ? highlights.slice(0, maxItems) : highlights

  if (!highlights.length) {
    return (
      <div className={cn('text-center py-8', className)}>
        <p className="text-text-secondary">No highlights available at the moment.</p>
      </div>
    )
  }

  return (
    <section className={cn('w-full', className)}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-xl md:text-2xl font-black text-primary uppercase tracking-wide">
          {title}
        </h2>
        
        {showViewAll && highlights.length > 3 && (
          <Link 
            to="/highlights" 
            className="text-primary hover:text-primary-dark text-sm font-medium transition-colors flex items-center"
          >
            View All Reports
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((highlight) => (
          <HighlightCard
            key={highlight.id}
            id={highlight.id}
            title={highlight.title}
            excerpt={highlight.excerpt}
            image={highlight.image}
            date={highlight.date}
            readTime={highlight.readTime}
            category={highlight.category}
            slug={highlight.slug}
          />
        ))}
      </div>

      {/* Load More Button for Large Collections */}
      {maxItems && highlights.length > maxItems && (
        <div className="text-center mt-8">
          <Link to="/highlights">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
              View All {highlights.length} Reports
            </button>
          </Link>
        </div>
      )}
    </section>
  )
}

// Featured Highlight Component (for homepage hero-style display)
export const FeaturedHighlight = ({ 
  highlight,
  className = ''
}) => {
  if (!highlight) return null

  const formattedDate = new Date(highlight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link to={`/highlights/${highlight.slug}`} className={cn('block group', className)}>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={highlight.image}
          alt={highlight.title}
          className="w-full h-[280px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="text-white max-w-3xl">
            {/* Category */}
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
              {highlight.category}
            </div>
            
            {/* Title */}
            <h3 className="font-display text-xl md:text-3xl font-black mb-2">
              {highlight.title}
            </h3>
            
            {/* Date */}
            <p className="text-sm text-white/90 mb-2">{formattedDate}</p>
            
            {/* Excerpt */}
            <p className="text-sm md:text-base text-white/90 leading-relaxed line-clamp-2">
              {highlight.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}