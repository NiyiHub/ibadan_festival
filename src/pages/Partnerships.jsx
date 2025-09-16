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

      <Footer />
    </div>
  )
}

export default Partnerships