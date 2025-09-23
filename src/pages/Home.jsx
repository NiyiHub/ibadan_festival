import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/features/HeroSection'
import { EventHeroCard, EventGrid } from '@/components/features/EventComponents'
import { ProgramList } from '@/components/features/ProgramComponents'
import { HighlightsGrid } from '@/components/features/HighlightComponents'
import PodcastCard from '@/components/features/PodcastCard'
import Button from '@/components/ui/Button'
import { getHero, getEvents, getPrograms, getPodcasts } from '@/services/api'
import { getHighlights } from '@/services/highlightsService'

const TicketPromo = () => (
  <section className="mt-12">
    <Link to="https://forms.gle/LaJbzXmFgQHbMa7c9" className="block group">
      <div className="relative overflow-hidden rounded-lg bg-gradient-accent p-8 md:p-12 text-white">
        <div className="relative z-10">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
            Join IbaFest 2025
          </h3>
          <p className="text-lg opacity-90 mb-4">
            Be part of the inaugural celebration of African literature and arts
          </p>
          <div className="inline-flex items-center gap-2">
            <span className="font-semibold">Register Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
    </Link>
  </section>
)

const Home = () => {
  const [hero, setHero] = useState(null)
  const [events, setEvents] = useState(null)
  const [programs, setPrograms] = useState([])
  const [podcasts, setPodcasts] = useState([])
  const [highlights, setHighlights] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [heroData, eventsData, programsData, podcastsData, highlightsData] = await Promise.all([
          getHero(),
          getEvents(),
          getPrograms(),
          getPodcasts(),
          getHighlights({ limit: 3 })
        ])
        
        setHero(heroData)
        setEvents(eventsData)
        setPrograms(programsData)
        setPodcasts(podcastsData)
        setHighlights(highlightsData.data || [])
      } catch (error) {
        console.error('Failed to load page data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="py-20">
          <Container>
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading...</p>
            </div>
          </Container>
        </main>
      </div>
    )
  }

  if (!hero || !events) {
    return (
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="py-20">
          <Container>
            <div className="text-center">
              <p className="text-text-secondary">Unable to load page content. Please try again.</p>
            </div>
          </Container>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Hero Section - Custom Alignment: title & description left-aligned but center-positioned */}
      <HeroSection
        title={hero.title}
        description={hero.body}
        image={null}
        ctaText={hero.ctaText}
        ctaHref="https://forms.gle/LaJbzXmFgQHbMa7c9"
        variant="default"
        overlay="gradient"
        customAlignment={true}
      />

      {/* Main Content */}
      <main className="py-12 md:py-16">
        <Container>
          {/* Upcoming Events Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="font-display text-xl md:text-2xl font-black tracking-wide text-primary uppercase">
                Upcoming Events
              </h2>
            </div>

            {/* Event Hero Card */}
            <div className="mb-8">
              <EventHeroCard
                title={events.heroEvent.title}
                subtitle={events.heroEvent.subtitle}
                image={events.heroEvent.image}
                href={events.heroEvent.slug}
              />
            </div>

            {/* Event Grid */}
            <EventGrid items={events.grid} />
          </section>

          {/* IbaFest 2025 Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-4xl font-black text-primary uppercase mb-4">
                IbaFest 2025: The Inaugural Edition
              </h2>
              <p className="text-text-secondary max-w-4xl mx-auto text-sm md:text-base">
                IbaFest makes its grand debut in October 2025 with a full lineup of inspiring events celebrating literature, culture, and creative innovation in Ibadan.
              </p>
            </div>

            {/* Program List */}
            <div className="mb-8">
              <ProgramList items={programs} />
            </div>

            {/* Register CTA */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                onClick={() => window.location.href = 'https://forms.gle/LaJbzXmFgQHbMa7c9'}
                className="w-full md:w-auto md:px-12"
              >
                Register for IbaFest 2025
              </Button>
            </div>
          </section>

          {/* Highlights Section */}
          {highlights.length > 0 && (
            <section className="mb-16">
              <HighlightsGrid
                highlights={highlights}
                title="Latest Highlights"
                showViewAll={true}
                maxItems={3}
              />
            </section>
          )}

          {/* Podcast Section */}
          {podcasts.length > 0 && (
            <section className="mb-16">
              <div className="mb-8">
                <h3 className="font-display text-xl md:text-2xl font-black text-primary uppercase">
                  IbaFest Podcast
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {podcasts.map((podcast) => (
                  <PodcastCard
                    key={podcast.id}
                    title={podcast.title}
                    image={podcast.image}
                    youtubeUrl={podcast.youtubeUrl}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Ticket Promo */}
          <TicketPromo />
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default Home