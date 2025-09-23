// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000',
  ENDPOINTS: {
    // Authentication
    LOGIN: '/api/auth/login/',
    LOGOUT: '/api/auth/logout/',
    REGISTER: '/api/auth/register/',
    ME: '/api/auth/me/',
    
    // Content
    HERO: '/api/content/hero/',
    EVENTS: '/api/content/events/',
    PROGRAMS: '/api/content/programs/',
    PODCASTS: '/api/content/podcasts/',
    HIGHLIGHTS: '/api/content/highlights/',
    
    // Forms
    DONATIONS: '/api/forms/donations/',
    PARTNERSHIPS: '/api/forms/partnerships/',
    REGISTRATIONS: '/api/forms/registrations/',
    VOLUNTEER: '/api/forms/volunteer/',
    NEWSLETTER: '/api/forms/newsletter/',
  }
}

// Navigation Links
export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Highlights', href: '/highlights' },
  { label: 'Projects', href: '#projects' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donations', href: '/donations' },
  { label: 'Partnerships & Collaborations', href: '/partnerships' }
]

// Footer Links
export const FOOTER_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'What\'s on', href: '#whats-on' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donations', href: '/donations' },
  { label: 'Partnerships & Collaborations', href: '/partnerships' }
]

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  PHONE_INVALID: 'Please enter a valid phone number',
  MIN_AMOUNT: 'Minimum donation amount is ₦100',
  CARD_NUMBER_REQUIRED: 'Card number is required',
  EXPIRY_REQUIRED: 'Card expiry is required',
  CVC_REQUIRED: 'CVC is required',
  CARDHOLDER_REQUIRED: 'Cardholder name is required'
}

// Default Values
export const DEFAULTS = {
  DONATION_AMOUNTS: [1000, 2500, 5000, 10000],
  CURRENCY: 'NGN',
  MIN_TICKETS: 1,
  MAX_TICKETS: 10
}

// Social Media Links (add when available)
export const SOCIAL_LINKS = {
  FACEBOOK: '#',
  TWITTER: '#',
  INSTAGRAM: '#',
  YOUTUBE: '#',
  SPOTIFY: '#'
}