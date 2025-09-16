import Button from '@/components/ui/Button'
import { cn } from '@/utils/cn'

const HeroSection = ({
  title,
  titlee,
  subtitle,
  description,
  image,
  ctaText,
  ctaHref,
  onCtaClick,
  variant = 'default', // 'default', 'centered', 'minimal'
  overlay = 'gradient', // 'gradient', 'dark', 'light', 'none'
  className = '',
  customAlignment = false // New prop to enable custom alignment
}) => {
  const overlayClasses = {
    gradient: 'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
    dark: 'bg-black/50',
    light: 'bg-white/20',
    none: ''
  }

  const contentAlignment = {
    default: 'items-center text-left',
    centered: 'items-center text-center',
    minimal: 'items-end text-left'
  }

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick()
    } else if (ctaHref) {
      window.location.href = ctaHref
    }
  }

  return (
    <section className={cn('hero-section', className)}>
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            className="hero-image"
            onError={(e) => {
              console.warn('Hero image failed to load:', e.target.src)
            }}
          />
          {/* Overlay */}
          <div className={cn('absolute inset-0', overlayClasses[overlay])} />
        </div>
      )}

      {/* Content */}
      <div className={cn(
        'hero-content',
        customAlignment ? 'items-center' : contentAlignment[variant]
      )}>
        <div className="max-w-4xl mx-auto w-full">
          <div className="hero-text-content">
            {/* Title and Description - Left aligned but centered positioned */}
            <div className={cn(
              customAlignment ? 'text-left' : '',
              'w-full'
            )}>
              {/* Title */}
              {title && (
                <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-4">
                  {title}
                </h1>
              )}

              {/* Description */}
              {description && (
                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-text-secondary/90 max-w-3xl">
                  {description}
                </p>
              )}
            </div>

            {/* Titlee and Subtitle - Center aligned and positioned */}
            <div className={cn(
              customAlignment ? 'text-center' : '',
              'w-full'
            )}>
              {titlee && (
                <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase mb-4">
                  {titlee}
                </h2>
              )}

              {/* Subtitle */}
              {subtitle && (
                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-white/90 max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>

            {/* CTA Button */}
            {(ctaText && (ctaHref || onCtaClick)) && (
              <div className={cn(
                customAlignment ? 'flex justify-center' : 'flex justify-start'
              )}>
                <Button
                  variant="primary"
                  normalWeight
                  onClick={handleCtaClick}
                  className="shadow-lg hover:shadow-xl"
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection