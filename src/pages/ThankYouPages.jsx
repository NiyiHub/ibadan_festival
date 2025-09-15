import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

// Donations Thank You Page
export const DonationsThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      
      <section className="py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-black text-primary mb-4">
              Thank You for Your Generous Support!
            </h1>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Your donation helps us provide books and resources to communities across Nigeria. 
              A receipt has been sent to your email address for your records.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-display font-bold text-primary mb-3">What Happens Next?</h3>
              <ul className="text-sm text-text-secondary space-y-2 text-left">
                <li>• You'll receive an email confirmation within 24 hours</li>
                <li>• Your donation will be processed within 3-5 business days</li>
                <li>• We'll send you updates on how your contribution is making an impact</li>
                <li>• You'll be added to our newsletter for festival updates (opt-out anytime)</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="primary">Return Home</Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary">Register for IbaFest</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
    </div>
  )
}

// Partnerships Thank You Page
export const PartnershipsThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      
      <section className="py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-black text-primary mb-4">
              Thank You – We Received Your Proposal
            </h1>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our partnership team will review your proposal carefully and get back to you 
              within 5 business days with next steps.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-display font-bold text-primary mb-3">What Happens Next?</h3>
              <ul className="text-sm text-text-secondary space-y-2 text-left">
                <li>• Our team will review your partnership proposal</li>
                <li>• We'll reach out within 5 business days to discuss opportunities</li>
                <li>• If there's a match, we'll schedule a call to explore collaboration</li>
                <li>• You'll receive updates about IbaFest developments</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="primary">Return Home</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
    </div>
  )
}

// Registration Thank You Page
export const RegistrationThankYou = () => {
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