import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { FOOTER_LINKS } from '@/constants'
import { subscribeNewsletter } from '@/services/api'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      await subscribeNewsletter(email)
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <footer className="bg-secondary text-white mt-12">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start md:justify-between">
            
            {/* Left Section - Logo & Navigation */}
            <div className="flex-1 max-w-2xl">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/icons/logo.svg"
                  alt="IbaFest logo"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>

              {/* Navigation Links */}
              <nav
                className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-6 mb-6"
                aria-label="Footer navigation"
              >
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white hover:text-button-text font-normal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Copyright - Desktop */}
              <div className="hidden md:block text-sm text-gray-300">
                © 2025 NoirLedge Publishing. All rights reserved.
              </div>
            </div>

            {/* Right Section - Newsletter Signup */}
            <div className="flex-shrink-0 md:max-w-sm">
              <h3 className="font-display font-bold text-lg mb-4">
                Stay Updated
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-gray-900"
                />
                
                <Button
                  type="submit"
                  variant="primary"
                  loading={status === 'loading'}
                  disabled={status === 'loading' || !email.trim()}
                  fullWidth
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-sm text-green-300 mt-2">
                  Successfully subscribed! Thank you.
                </p>
              )}
              
              {status === 'error' && (
                <p className="text-sm text-red-300 mt-2">
                  Subscription failed. Please try again.
                </p>
              )}

              {/* Copyright - Mobile */}
              <div className="md:hidden text-sm text-gray-300 mt-6">
                © 2025 NoirLedge Publishing. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer