import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

const RegistrationThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      
      <section className="py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
              </svg>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-black text-primary mb-4">
              Registration Received!
            </h1>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Thank you for registering for IbaFest 2025. We've received your details and 
              will email you confirmation along with your digital wristband shortly.
            </p>
            
            <div className="bg-gradient-accent/10 rounded-lg p-6 mb-8">
              <h3 className="font-display font-bold text-primary mb-3">Save the Date</h3>
              <div className="text-primary font-bold text-xl mb-2">October 15-22, 2025</div>
              <p className="text-sm text-text-secondary">
                IbaFest 2025: The Inaugural Edition in Ibadan, Nigeria
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-display font-bold text-primary mb-3">What's Next?</h3>
              <ul className="text-sm text-text-secondary space-y-2 text-left">
                <li>• Check your email for confirmation and digital wristband</li>
                <li>• We'll send you the detailed festival schedule closer to the date</li>
                <li>• Follow us on social media for updates and announcements</li>
                <li>• Consider supporting our mission through donations or partnerships</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="primary">Return Home</Button>
              </Link>
              <Link to="/donations">
                <Button variant="secondary">Support Our Mission</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
    </div>
  )
}

export default RegistrationThankYou