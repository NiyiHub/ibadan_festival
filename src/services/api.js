import axios from 'axios'
import { API_CONFIG } from '@/constants'

// Create axios instance with default config
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for Django session/cookie auth
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add CSRF token if available (Django requirement)
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]')?.value
    if (csrfToken) {
      config.headers['X-CSRFToken'] = csrfToken
    }

    // Add any auth token from localStorage if needed
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common error responses
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or clear auth
      localStorage.removeItem('authToken')
      // window.location.href = '/login'
    } else if (error.response?.status === 403) {
      // Forbidden
      console.error('Access forbidden')
    } else if (error.response?.status >= 500) {
      // Server error
      console.error('Server error:', error.response.data)
    }

    return Promise.reject(error)
  }
)

// Newsletter subscription
export const subscribeNewsletter = async (email) => {
  try {
    const response = await api.post(API_CONFIG.ENDPOINTS.NEWSLETTER, { email })
    return response.data
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    // Mock success for development
    return { success: true, message: 'Subscribed successfully' }
  }
}

// Authentication functions (for future use)
export const login = async (username, password) => {
  try {
    const response = await api.post(API_CONFIG.ENDPOINTS.LOGIN, {
      username,
      password
    })
    
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token)
    }
    
    return response
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}

export const logout = async () => {
  try {
    await api.post(API_CONFIG.ENDPOINTS.LOGOUT)
  } catch (error) {
    console.error('Logout error:', error)
  } finally {
    localStorage.removeItem('authToken')
  }
}

export const getCurrentUser = async () => {
  try {
    const response = await api.get(API_CONFIG.ENDPOINTS.ME)
    return response.data
  } catch (error) {
    console.error('Failed to get current user:', error)
    throw error
  }
}

// Content API calls
export const getHero = async () => {
  try {
    const response = await api.get(API_CONFIG.ENDPOINTS.HERO)
    return response.data
  } catch (error) {
    console.error('Failed to fetch hero data:', error)
    // Return mock data for now during development
    return {
      title: "Reviving Legacy. Celebrating Culture. Inspiring Futures.",
      body:"Ibadan Book and Arts Festival (IbaFest) is a vibrant celebration of African literature, creativity, and cultural dialogue. Rooted in the historic city of Ibadan, IbaFest brings together writers, artists, readers, educators, and change-makers to explore the power of stories and the potential of the Creative and Cultural Industries to shape education, community, and national development.",
      ctaText: "Register",
      heroImage: "/images/hero-annual.jpg"
    }
  }
}

export const getEvents = async () => {
  try {
    const response = await api.get(API_CONFIG.ENDPOINTS.EVENTS)
    return response.data
  } catch (error) {
    console.error('Failed to fetch events:', error)
    return {
      heroEvent: {
        title: "ANNUAL FESTIVAL",
        subtitle: "24th - 25th of October",
        image: "/images/annual-festival.jpg",
        slug: "annual-festival"
      },
      grid: [
        {
          title: "BI-MONTHLY EVENTS",
          image: "/images/BI-MONTHLY EVENTS.jpg",
          slug: "bi-monthly"
        },
        {
          title: "LITERACY & LIBRARIES",
          image: "/images/Literacy Libraries.jpg",
          slug: "literacy-libraries"
        },
        {
          title: "CREATIVE ECONOMY FORUMS",
          image: "/images/CREATIVE ECONOMY FORUMS.jpg",
          slug: "creative-economy"
        }
      ]
    }
  }
}

export const getPrograms = async () => {
  try {
    const response = await api.get(API_CONFIG.ENDPOINTS.PROGRAMS)
    return response.data
  } catch (error) {
    console.error('Failed to fetch programs:', error)
    return [
      {
        id: 1,
        leftLabel: "Author readings and book signings",
        title: "Joba & Friends",
        subtitle: "October 2025",
        avatar: "/images/avatar.png",
        slug: "joba-and-friends"
      },
      {
        id: 2,
        leftLabel: "Intergenerational conversations",
        title: "6 Panelists",
        subtitle: "October 2025",
        avatar: "/images/avatar.png",
        slug: "6-panelists"
      },
      {
        id: 3,
        leftLabel: "Poetry sessions & performance",
        title: "Fila Meskili",
        subtitle: "October 2025",
        avatar: "/images/avatar.png",
        slug: "fila-meskili"
      },
      {
        id: 4,
        leftLabel: "Music & cultural showcase",
        title: "Johnny Drille & Dija",
        subtitle: "October 2025",
        avatar: "/images/avatar.png",
        slug: "johnny-drille-and-dija"
      },
      {
        id: 5,
        leftLabel: "Schools outreach & workshops",
        title: "8 Schools",
        subtitle: "October 2025",
        avatar: "/images/avatar.png",
        slug: "8-schools"
      }
    ]
  }
}

export const getPodcasts = async () => {
  try {
    const response = await api.get(API_CONFIG.ENDPOINTS.PODCASTS)
    return response.data
  } catch (error) {
    console.error('Failed to fetch podcasts:', error)
    return [
      {
        id: 1,
        title: "IbaFest Podcast Episode 1",
        image: "/images/podcast-1.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=Re9c-AO_g-Q&list=PLgfnxApctW0FO3HFOgeY0I3nAv8JCZbmO&index=37"
      },
      {
        id: 2,
        title: "IbaFest Podcast Episode 2",
        image: "/images/podcast-2.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=lKODnq0VyKU&list=PLgfnxApctW0FO3HFOgeY0I3nAv8JCZbmO&index=36"
      }
    ]
  }
}

// Export the api instance as default
export default api