import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

const DonationsThankYou = () => {
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

export default DonationsThankYou