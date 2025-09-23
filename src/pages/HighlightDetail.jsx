import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { HighlightsGrid } from '@/components/features/HighlightComponents'
import { getHighlightBySlug, getHighlights } from '@/services/highlightsService'
import { cn } from '@/utils/cn'

const HighlightDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [highlight, setHighlight] = useState(null)
  const [relatedHighlights, setRelatedHighlights] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadHighlight = async () => {
      try {
        setLoading(true)
        
        // Load the main highlight
        const highlightResult = await getHighlightBySlug(slug)
        if (highlightResult.success) {
          setHighlight(highlightResult.data)
          
          // Load related highlights (exclude current one)
          const relatedResult = await getHighlights({ limit: 3 })
          if (relatedResult.success) {
            const filtered = relatedResult.data.filter(h => h.slug !== slug)
            setRelatedHighlights(filtered.slice(0, 3))
          }
        } else {
          setError('Highlight not found')
        }
      } catch (err) {
        console.error('Failed to load highlight:', err)
        setError('Failed to load highlight. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadHighlight()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="py-20">
          <Container>
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading report...</p>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !highlight) {
    return (
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="py-20">
          <Container>
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold text-primary mb-4">
                {error || 'Report Not Found'}
              </h1>
              <p className="text-text-secondary mb-8">
                The report you're looking for doesn't exist or has been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/highlights')} variant="primary">
                  View All Reports
                </Button>
                <Button onClick={() => navigate('/')} variant="secondary">
                  Go Home
                </Button>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    )
  }

  const formattedDate = new Date(highlight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Article Header */}
      <main className="py-12 md:py-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-text-secondary">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link to="/highlights" className="hover:text-primary">Highlights</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-primary">{highlight.category}</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="mb-6">
              <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                <span className="inline-block px-3 py-1 bg-primary text-white rounded-full font-medium">
                  {highlight.category}
                </span>
                <time dateTime={highlight.date}>{formattedDate}</time>
                <span>{highlight.readTime}</span>
                {highlight.author && <span>By {highlight.author}</span>}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-8">
              {highlight.title}
            </h1>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = '/images/placeholder-highlight.jpg'
                }}
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {/* Render HTML content safely */}
              <div 
                dangerouslySetInnerHTML={{ __html: highlight.content }}
                className={cn(
                  'highlight-content',
                  // Custom styling for embedded content
                  '[&_h3]:font-display [&_h3]:font-bold [&_h3]:text-xl [&_h3]:text-primary [&_h3]:mt-8 [&_h3]:mb-4',
                  '[&_p]:mb-4 [&_p]:leading-relaxed',
                  '[&_img]:rounded-lg [&_img]:shadow-lg [&_img]:my-8',
                  '[&_ul]:ml-6 [&_ul]:mb-4',
                  '[&_li]:mb-2'
                )}
              />
            </div>

            {/* Tags */}
            {highlight.tags && highlight.tags.length > 0 && (
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="font-display font-semibold text-primary mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {highlight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share & Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <h3 className="font-display font-semibold text-primary mb-2">Share this report</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ 
                          title: highlight.title, 
                          url: window.location.href 
                        })
                      }
                    }}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
                  >
                    Share
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="px-4 py-2 border border-primary text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    Copy Link
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Link to="/highlights">
                  <Button variant="secondary" size="sm">
                    View All Reports
                  </Button>
                </Link>
                <Link to="https://forms.gle/LaJbzXmFgQHbMa7c9">
                  <Button variant="primary" size="sm">
                    Register for IbaFest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Related Highlights */}
        {relatedHighlights.length > 0 && (
          <section className="bg-gray-50 py-16">
            <Container>
              <HighlightsGrid
                highlights={relatedHighlights}
                title="Related Reports"
                showViewAll={false}
                maxItems={3}
              />
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default HighlightDetail