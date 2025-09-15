import api from './api'
import { API_CONFIG } from '@/constants'

/**
 * Submit registration to backend
 * @param {Object} payload - Registration data
 * @returns {Promise<Object>} Response with success status
 */
export const submitRegistration = async (payload) => {
  try {
    const response = await api.post(API_CONFIG.ENDPOINTS.REGISTRATIONS, payload)
    return {
      success: true,
      data: response.data,
      id: response.data.id,
      message: 'Registration submitted successfully'
    }
  } catch (error) {
    console.error('Registration submission failed:', error)
    
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error || 
                        'Registration failed. Please try again.'
    
    return {
      success: false,
      message: errorMessage,
      errors: error.response?.data?.errors || {}
    }
  }
}

/**
 * Get registration by ID
 * @param {string} registrationId - Registration ID
 * @returns {Promise<Object>} Registration data
 */
export const getRegistration = async (registrationId) => {
  try {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.REGISTRATIONS}${registrationId}/`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch registration:', error)
    throw error
  }
}

/**
 * Get user's registration history (requires authentication)
 * @returns {Promise<Array>} List of registrations
 */
export const getRegistrationHistory = async () => {
  try {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.REGISTRATIONS}history/`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch registration history:', error)
    throw error
  }
}