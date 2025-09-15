import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/features/HeroSection'
import PartnershipForm from '@/components/forms/PartnershipForm'

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Partner With Us"
        subtitle="Collaborate for Cultural Impact"
        description="Join us in celebrating African literature and arts. We're looking for organizations, institutions, and individuals who share our vision of cultural development through storytelling and creative expression."
        image="/images/donate-hero.jpg"
        variant="centered"
        overlay="dark"
      />

      {/* Form Section */}
      <section className="relative -mt-20 md:-mt-32 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <PartnershipForm />
          </div>
        </Container>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary text-center mb-12">
              Partnership Opportunities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-xl text-primary mb-4">
                  Corporate Sponsorship
                </h3>
                <p className="text-text-secondary mb-4">
                  Brand visibility and community impact through event sponsorship, 
                  book donations, and program funding.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Event naming rights</li>
                  <li>• Logo placement</li>
                  <li>• Marketing materials</li>
                  <li>• CSR impact reporting</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-xl text-primary mb-4">
                  Educational Partnerships
                </h3>
                <p className="text-text-secondary mb-4">
                  Collaborate with schools, libraries, and educational institutions 
                  to expand literacy programs.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Student exchange programs</li>
                  <li>• Research collaborations</li>
                  <li>• Teacher training workshops</li>
                  <li>• Curriculum development</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display font-bold text-xl text-primary mb-4">
                  Creative Collaborations
                </h3>
                <p className="text-text-secondary mb-4">
                  Work with artists, writers, publishers, and cultural organizations 
                  on programming and content creation.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Co-hosted events</li>
                  <li>• Content partnerships</li>
                  <li>• Artist residencies</li>
                  <li>• Publication opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Partner */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-8">
              Why Partner With IbaFest?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-display font-semibold text-lg text-primary mb-3">
                  Cultural Impact
                </h3>
                <p className="text-text-secondary">
                  Be part of preserving and promoting African literary heritage 
                  while fostering new creative voices and perspectives.
                </p>
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-lg text-primary mb-3">
                  Community Reach
                </h3>
                <p className="text-text-secondary">
                  Access diverse audiences across Nigeria and the diaspora through 
                  our programming and outreach initiatives.
                </p>
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-lg text-primary mb-3">
                  Educational Value
                </h3>
                <p className="text-text-secondary">
                  Support literacy development and educational advancement in 
                  underserved communities through sustainable programs.
                </p>
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-lg text-primary mb-3">
                  Network Building
                </h3>
                <p className="text-text-secondary">
                  Connect with like-minded organizations, thought leaders, and 
                  cultural influencers in the creative economy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default Partnerships