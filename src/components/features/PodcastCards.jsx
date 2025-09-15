import { cn } from '@/utils/cn'

const PodcastCard = ({
  title = 'IbaFest Podcast',
  image,
  spotifyUrl,
  className = ''
}) => {
  const handleClick = () => {
    if (spotifyUrl) {
      window.open(spotifyUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={cn('podcast-card-root group cursor-pointer', className)}>
      <div onClick={handleClick} className="podcast-card">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="podcast-card-image"
          onError={(e) => {
            e.target.src = '/images/placeholder-podcast.jpg'
          }}
        />

        {/* Overlay */}
        <div className="podcast-card-overlay" />

        {/* Content */}
        <div className="podcast-card-content">
          {/* Title */}
          <div className="text-white">
            <h4 className="font-display font-bold text-lg leading-tight">
              {title}
            </h4>
          </div>

          {/* Play Button */}
          <div className="flex justify-end">
            <button
              className="podcast-play-button"
              aria-label={`Play ${title} on Spotify`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M5 3v18l15-9L5 3z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodcastCard