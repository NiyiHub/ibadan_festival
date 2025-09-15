import { useState } from 'react'
import { VALIDATION_MESSAGES } from '@/constants'

/**
 * Custom hook for form handling with validation
 * @param {Object} initialValues - Initial form values
 * @param {Object} validationRules - Validation rules for each field
 * @returns {Object} Form state and handlers
 */
export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle input changes
  const handleChange = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Handle input blur (mark as touched)
  const handleBlur = (name) => {
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Validate field on blur
    validateField(name, values[name])
  }

  // Validate single field
  const validateField = (name, value) => {
    const rules = validationRules[name]
    if (!rules) return

    let error = ''

    // Required validation
    if (rules.required && (!value || value.toString().trim() === '')) {
      error = rules.message || VALIDATION_MESSAGES.REQUIRED
    }
    // Email validation
    else if (rules.email && value && !/^\S+@\S+\.\S+$/.test(value)) {
      error = rules.message || VALIDATION_MESSAGES.EMAIL_INVALID
    }
    // Phone validation
    else if (rules.phone && value && !/^[+]?[\d\s\-()]{10,}$/.test(value)) {
      error = rules.message || VALIDATION_MESSAGES.PHONE_INVALID
    }
    // Min length validation
    else if (rules.minLength && value && value.length < rules.minLength) {
      error = rules.message || `Minimum ${rules.minLength} characters required`
    }
    // Min value validation
    else if (rules.min && value && Number(value) < rules.min) {
      error = rules.message || `Minimum value is ${rules.min}`
    }
    // Max value validation
    else if (rules.max && value && Number(value) > rules.max) {
      error = rules.message || `Maximum value is ${rules.max}`
    }
    // Custom validation
    else if (rules.validate && typeof rules.validate === 'function') {
      const result = rules.validate(value, values)
      if (result !== true) {
        error = typeof result === 'string' ? result : rules.message || 'Invalid value'
      }
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }))

    return error
  }

  // Validate all fields
  const validateForm = () => {
    const newErrors = {}
    let hasErrors = false

    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name])
      if (error) {
        newErrors[name] = error
        hasErrors = true
      }
    })

    return !hasErrors
  }

  // Reset form
  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }

  // Set form values
  const setFormValues = (newValues) => {
    setValues(prev => ({ ...prev, ...newValues }))
  }

  // Set form errors
  const setFormErrors = (newErrors) => {
    setErrors(prev => ({ ...prev, ...newErrors }))
  }

  // Handle form submission
  const handleSubmit = async (onSubmit) => {
    setIsSubmitting(true)

    // Mark all fields as touched
    const touchedFields = {}
    Object.keys(validationRules).forEach(name => {
      touchedFields[name] = true
    })
    setTouched(touchedFields)

    // Validate form
    if (!validateForm()) {
      setIsSubmitting(false)
      return false
    }

    try {
      await onSubmit(values)
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      setFormErrors({ submit: 'An error occurred. Please try again.' })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    validateForm,
    resetForm,
    setFormValues,
    setFormErrors,
    validateField
  }
}