import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/features/HeroSection'
import RegistrationForm from '@/components/forms/RegistrationForm'

const Registration = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Register for IbaFest 2025"
        subtitle="The Inaugural Edition"
        description="Secure your wristband for a week-long celebration of African literature, creativity, and cultural dialogue in the historic city of Ibadan. Join writers, artists, educators, and change-makers from across Nigeria and beyond."
        image="/images/donate-hero.jpg"
        variant="centered"
        overlay="dark"
      />

      {/* Form Section */}
      <section className="relative -mt-20 md:-mt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <RegistrationForm />
          </div>
        </Container>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary text-center mb-12">
              What to Expect at IbaFest 2025
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-primary mb-3">
                  Author Readings & Book Signings
                </h3>
                <p className="text-text-secondary text-sm">
                  Meet celebrated African authors, discover new voices, and get your books signed by literary luminaries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-primary mb-3">
                  Panel Discussions
                </h3>
                <p className="text-text-secondary text-sm">
                  Engage in thought-provoking conversations about literature, culture, and creative economy with industry experts.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-primary mb-3">
                  Poetry & Performance
                </h3>
                <p className="text-text-secondary text-sm">
                  Experience the power of spoken word through poetry slams, performances, and interactive sessions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-primary mb-3">
                  Workshops & Masterclasses
                </h3>
                <p className="text-text-secondary text-sm">
                  Learn from professionals in writing, publishing, storytelling, and creative entrepreneurship.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-primary mb-3">
                  Cultural Showcases
                </h3>
                <p className="text-text-secondary text-sm">
                  Enjoy music, dance, art exhibitions, and cultural performances celebrating African heritage.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-primary mb-3">
                  Networking Opportunities
                </h3>
                <p className="text-text-secondary text-sm">
                  Connect with like-minded individuals, industry professionals, and fellow literature enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Festival Information */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-4">
                  Event Details
                </h3>
                <div className="space-y-4 text-text-secondary">
                  <div>
                    <strong className="text-primary">Dates:</strong> October 15-22, 2025
                  </div>
                  <div>
                    <strong className="text-primary">Location:</strong> Various venues across Ibadan, Nigeria
                  </div>
                  <div>
                    <strong className="text-primary">Registration:</strong> Free with required wristband
                  </div>
                  <div>
                    <strong className="text-primary">Age:</strong> All ages welcome (some events may have age recommendations)
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Access to all festival events and venues</li>
                  <li>• Complimentary festival guide and program</li>
                  <li>• Welcome gift bag with books and merchandise</li>
                  <li>• Networking reception invitation</li>
                  <li>• Digital access to recorded sessions</li>
                  <li>• Certificate of participation</li>
                </ul>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    Note: Transportation and accommodation are not included. 
                    We can provide recommendations for local lodging options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default Registration