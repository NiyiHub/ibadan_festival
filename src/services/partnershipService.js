import api from './api'
import { API_CONFIG } from '@/constants'

/**
 * Submit partnership proposal to backend
 * @param {Object} payload - Partnership data
 * @returns {Promise<Object>} Response with success status
 */
export const submitPartnership = async (payload) => {
  try {
    const response = await api.post(API_CONFIG.ENDPOINTS.PARTNERSHIPS, payload)
    return {
      success: true,
      data: response.data,
      id: response.data.id,
      message: 'Partnership proposal submitted successfully'
    }
  } catch (error) {
    console.error('Partnership submission failed:', error)
    
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error || 
                        'Submission failed. Please try again.'
    
    return {
      success: false,
      message: errorMessage,
      errors: error.response?.data?.errors || {}
    }
  }
}

/**
 * Get partnership by ID
 * @param {string} partnershipId - Partnership ID
 * @returns {Promise<Object>} Partnership data
 */
export const getPartnership = async (partnershipId) => {
  try {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.PARTNERSHIPS}${partnershipId}/`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch partnership:', error)
    throw error
  }
}