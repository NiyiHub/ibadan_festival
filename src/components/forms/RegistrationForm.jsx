import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import { useForm } from '@/hooks/useForm'
import { submitRegistration } from '@/services/registrationService'
import { DEFAULTS } from '@/constants'

const RegistrationForm = () => {
  const navigate = useNavigate()

  const validationRules = {
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    numberOfTickets: { 
      required: true, 
      min: DEFAULTS.MIN_TICKETS,
      max: DEFAULTS.MAX_TICKETS,
      message: `Number of tickets must be between ${DEFAULTS.MIN_TICKETS} and ${DEFAULTS.MAX_TICKETS}`
    }
  }

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFormErrors
  } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numberOfTickets: 1
  }, validationRules)

  const onSubmit = async (formData) => {
    const payload = {
      ...formData,
      numberOfTickets: Number(formData.numberOfTickets),
      submittedAt: new Date().toISOString()
    }

    const result = await submitRegistration(payload)
    if (result.success) {
      navigate('/registration/thank-you')
    } else {
      setFormErrors({ 
        submit: result.message || 'Registration failed. Please try again.' 
      })
    }
  }

  return (
    <Card className="relative z-10">
      <Card.Content className="p-6 md:p-10">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(onSubmit)
        }}>
          {/* Header */}
          <div className="mb-6">
            <h3 className="font-display font-bold text-xl text-primary">
              Register for IbaFest 2025
            </h3>
            <p className="text-text-secondary mt-2">
              Secure your wristband for the inaugural edition
            </p>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              onBlur={() => handleBlur('firstName')}
              error={errors.firstName}
              required
              autoComplete="given-name"
            />

            <Input
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              onBlur={() => handleBlur('lastName')}
              error={errors.lastName}
              required
              autoComplete="family-name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              error={errors.email}
              required
              autoComplete="email"
            />

            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              error={errors.phone}
              required
              autoComplete="tel"
            />
          </div>

          {/* Number of Tickets */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Tickets
              <span className="text-red-500 ml-1">*</span>
            </label>
            
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => {
                  const newValue = Math.max(1, Number(values.numberOfTickets) - 1)
                  handleChange('numberOfTickets', newValue)
                }}
                disabled={Number(values.numberOfTickets) <= DEFAULTS.MIN_TICKETS}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"/>
                </svg>
              </button>

              <Input
                type="number"
                name="numberOfTickets"
                value={values.numberOfTickets}
                onChange={(e) => {
                  const value = Math.min(DEFAULTS.MAX_TICKETS, Math.max(DEFAULTS.MIN_TICKETS, Number(e.target.value) || 1))
                  handleChange('numberOfTickets', value)
                }}
                onBlur={() => handleBlur('numberOfTickets')}
                error={errors.numberOfTickets}
                min={DEFAULTS.MIN_TICKETS}
                max={DEFAULTS.MAX_TICKETS}
                className="w-20 text-center"
              />

              <button
                type="button"
                onClick={() => {
                  const newValue = Math.min(DEFAULTS.MAX_TICKETS, Number(values.numberOfTickets) + 1)
                  handleChange('numberOfTickets', newValue)
                }}
                disabled={Number(values.numberOfTickets) >= DEFAULTS.MAX_TICKETS}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </div>

            <p className="text-xs text-text-secondary mt-1">
              Maximum {DEFAULTS.MAX_TICKETS} tickets per registration
            </p>
          </div>

          {/* Submit */}
          <div className="mt-6">
            {errors.submit && (
              <div className="text-red-600 text-sm mb-4" role="alert">
                {errors.submit}
              </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-text-secondary">
                <p>Tickets: {values.numberOfTickets}</p>
                <p className="text-xs">Free registration • Confirmation via email</p>
              </div>

              <Button
                type="submit"
                variant="primary"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="md:w-auto"
              >
                {isSubmitting ? 'Processing...' : 'SECURE WRISTBAND'}
              </Button>
            </div>
          </div>
        </form>
      </Card.Content>
    </Card>
  )
}

export default RegistrationForm