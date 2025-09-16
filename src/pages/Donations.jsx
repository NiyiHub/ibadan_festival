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

      <Footer />
    </div>
  )
}

export default Donations