import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { NAV_LINKS } from '@/constants'
// import { cn } from '@/utils/cn'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top Bar */}
      <div className="py-6 md:py-8">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/icons/logo.svg"
                alt="IbaFest logo"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </Link>

            {/* Desktop Right Controls */}
            <div className="hidden md:flex items-center gap-6">
              {/* Newsletter Link */}
              <Link
                to="#newsletter"
                className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
              >
                Newsletter
              </Link>

              {/* Register Button */}
              <Link
                to="#register"
                className="inline-block px-5 py-2 rounded-full bg-primary text-white font-bold text-sm transition-all hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
              >
                Register
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Mobile Register Button */}
              <Link
                to="#register"
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white"
              >
                Register
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="p-2 text-primary hover:text-primary-dark transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar - Desktop Navigation */}
      <div className="hidden md:block py-4 border-t border-gray-100">
        <Container>
          <nav
            className="flex items-center justify-center gap-10"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-display text-sm font-medium text-primary transition-all hover:text-primary-dark hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <Container>
            <nav className="py-4 space-y-3" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-primary font-display font-medium hover:text-primary-dark"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-3 border-t border-gray-100">
                <Link
                  to="#newsletter"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-primary hover:text-primary-dark"
                >
                  Newsletter
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Navbar