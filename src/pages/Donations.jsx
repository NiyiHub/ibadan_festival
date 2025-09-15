import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/features/HeroSection'
import DonationForm from '@/components/forms/DonationForm'

const Donations = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Donate a Book"
        subtitle="Support Literacy & Community Development"
        description="Your gift helps us buy books and resources for communities and schools across Nigeria. Every donation makes a direct impact on expanding access to literature and education."
        image="/images/donate-hero.jpg"
        variant="centered"
        overlay="dark"
      />

      {/* Form Section */}
      <section className="relative -mt-20 md:-mt-32 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <DonationForm />
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-6">
              Your Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">₦1,000</div>
                <p className="text-sm text-text-secondary">
                  Provides 2-3 children's books for school libraries
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">₦5,000</div>
                <p className="text-sm text-text-secondary">
                  Supports a complete reading corner setup
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">₦10,000</div>
                <p className="text-sm text-text-secondary">
                  Funds a mobile library visit to rural communities
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-text-secondary">
                All donations are tax-deductible. You will receive a receipt via email 
                for your records. 100% of your donation goes directly to book procurement 
                and literacy programs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default Donations