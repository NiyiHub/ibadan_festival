import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import { HighlightsGrid, FeaturedHighlight } from '@/components/features/HighlightComponents'
import { getHighlights, getFeaturedHighlights } from '@/services/highlightsService'
import { cn } from '@/utils/cn'

const Highlights = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [highlights, setHighlights] = useState([])
  const [featuredHighlight, setFeaturedHighlight] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const currentCategory = searchParams.get('category') || 'all'
  const categories = [
    { value: 'all', label: 'All Reports' },
    { value: 'event-report', label: 'Event Reports' },
    { value: 'community-impact', label: 'Community Impact' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'workshop-series', label: 'Workshops' }
  ]

  useEffect(() => {
    const loadHighlights = async () => {
      try {
        setLoading(true)
        
        // Load featured highlight (only for 'all' category)
        if (currentCategory === 'all') {
          const featuredResult = await getFeaturedHighlights(1)
          if (featuredResult.success && featuredResult.data.length > 0) {
            setFeaturedHighlight(featuredResult.data[0])
          }
        }

        // Load all highlights
        const params = currentCategory === 'all' ? {} : { category: currentCategory }
        const result = await getHighlights(params)
        
        if (result.success) {
          // If we have a featured highlight, exclude it from the main list
          let filteredHighlights = result.data
          if (featuredHighlight) {
            filteredHighlights = result.data.filter(h => h.id !== featuredHighlight.id)
          }
          setHighlights(filteredHighlights)
        }
      } catch (err) {
        console.error('Failed to load highlights:', err)
        setError('Failed to load highlights. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadHighlights()
  }, [currentCategory])

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="py-20">
          <Container>
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading reports...</p>
            </div>
          </Container>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6">
              IbaFest Highlights
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Discover the impact of our programs through detailed reports on past events, 
              community initiatives, and partnerships that are shaping the future of 
              African literature and cultural expression.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-12 md:py-16">
        <Container>
          {/* Featured Highlight */}
          {currentCategory === 'all' && featuredHighlight && (
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-black text-primary uppercase tracking-wide">
                  Featured Report
                </h2>
              </div>
              <FeaturedHighlight highlight={featuredHighlight} />
            </section>
          )}

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={cn(
                    'px-4 py-2 rounded-lg font-medium text-sm transition-all',
                    currentCategory === category.value
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-text-secondary border border-gray-200 hover:border-primary hover:text-primary'
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </section>

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Highlights Grid */}
          {!error && (
            <HighlightsGrid
              highlights={highlights}
              title={currentCategory === 'all' ? 'All Reports' : categories.find(c => c.value === currentCategory)?.label || 'Reports'}
              showViewAll={false}
              className="mb-16"
            />
          )}

          {/* Empty State */}
          {!error && highlights.length === 0 && !loading && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-2">
                No Reports Found
              </h3>
              <p className="text-text-secondary mb-6">
                {currentCategory === 'all' 
                  ? 'We haven\'t published any reports yet. Check back soon for updates on our programs and events.'
                  : `No reports found in the "${categories.find(c => c.value === currentCategory)?.label}" category. Try selecting a different category.`
                }
              </p>
              {currentCategory !== 'all' && (
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  View All Reports
                </button>
              )}
            </div>
          )}
        </Container>
      </main>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join us in creating impactful programs and initiatives that celebrate 
              African literature and build stronger communities through the power of storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/LaJbzXmFgQHbMa7c9" 
                className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Register for IbaFest 2025
              </a>
              <a 
                href="/partnerships" 
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default Highlights