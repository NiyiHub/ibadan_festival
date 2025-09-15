import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

const PartnershipsThankYou = () => {
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

export default PartnershipsThankYou