import api from './api'
import { API_CONFIG } from '@/constants'

/**
 * Submit donation to backend
 * @param {Object} payload - Donation data
 * @returns {Promise<Object>} Response with success status
 */
export const submitDonation = async (payload) => {
  try {
    const response = await api.post(API_CONFIG.ENDPOINTS.DONATIONS, payload)
    return {
      success: true,
      data: response.data,
      donationId: response.data.id,
      message: 'Donation submitted successfully'
    }
  } catch (error) {
    console.error('Donation submission failed:', error)
    
    // Return structured error response
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error || 
                        'Donation failed. Please try again.'
    
    return {
      success: false,
      message: errorMessage,
      errors: error.response?.data?.errors || {}
    }
  }
}

/**
 * Get donation by ID
 * @param {string} donationId - Donation ID
 * @returns {Promise<Object>} Donation data
 */
export const getDonation = async (donationId) => {
  try {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.DONATIONS}${donationId}/`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch donation:', error)
    throw error
  }
}

/**
 * Get user's donation history (requires authentication)
 * @returns {Promise<Array>} List of donations
 */
export const getDonationHistory = async () => {
  try {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.DONATIONS}history/`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch donation history:', error)
    throw error
  }
}