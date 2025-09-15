import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import { useForm } from '@/hooks/useForm'
import { submitPartnership } from '@/services/partnershipService'

const PartnershipForm = () => {
  const navigate = useNavigate()

  const validationRules = {
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    organization: { required: false },
    proposal: { 
      required: true, 
      minLength: 50,
      message: 'Please provide detailed information about your partnership proposal (minimum 50 characters)'
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
    organization: '',
    proposal: ''
  }, validationRules)

  const onSubmit = async (formData) => {
    const payload = {
      ...formData,
      submittedAt: new Date().toISOString()
    }

    const result = await submitPartnership(payload)
    if (result.success) {
      navigate('/partnerships/thank-you')
    } else {
      setFormErrors({ 
        submit: result.message || 'Submission failed. Please try again.' 
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
              Partnership Application
            </h3>
            <p className="text-text-secondary mt-2">
              Tell us about your organization and how we can work together
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

          <div className="mb-6">
            <Input
              label="Organization/Company (Optional)"
              name="organization"
              value={values.organization}
              onChange={(e) => handleChange('organization', e.target.value)}
              onBlur={() => handleBlur('organization')}
              error={errors.organization}
              autoComplete="organization"
            />
          </div>

          {/* Partnership Proposal */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Partnership Proposal
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              name="proposal"
              rows={6}
              placeholder="Please describe your partnership proposal, including objectives, target outcomes, resources you can contribute, and how this collaboration aligns with IbaFest's mission..."
              value={values.proposal}
              onChange={(e) => handleChange('proposal', e.target.value)}
              onBlur={() => handleBlur('proposal')}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-150 ease-in-out"
            />
            {errors.proposal && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {errors.proposal}
              </p>
            )}
            <p className="text-xs text-text-secondary mt-1">
              Character count: {values.proposal.length}
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
              <p className="text-sm text-text-secondary">
                We'll review your proposal and respond within 5 business days.
              </p>

              <Button
                type="submit"
                variant="primary"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="md:w-auto"
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT PROPOSAL'}
              </Button>
            </div>
          </div>
        </form>
      </Card.Content>
    </Card>
  )
}

export default PartnershipForm