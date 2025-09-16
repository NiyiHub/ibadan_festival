import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import { useForm } from '@/hooks/useForm'
import { submitDonation } from '@/services/donationService'
import { VALIDATION_MESSAGES } from '@/constants'
// import { cn } from '@/utils/cn'

const DonationForm = () => {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')

  const validationRules = {
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true, email: true },
    streetAddress: { required: true },
    city: { required: true },
    state: { required: true },
    zipcode: { required: true },
    phone: { required: true, phone: true },
    cardNumber: { required: true, message: VALIDATION_MESSAGES.CARD_NUMBER_REQUIRED },
    cardExpiry: { required: true, message: VALIDATION_MESSAGES.EXPIRY_REQUIRED },
    cardCvc: { required: true, message: VALIDATION_MESSAGES.CVC_REQUIRED },
    cardHolder: { required: true, message: VALIDATION_MESSAGES.CARDHOLDER_REQUIRED }
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
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardHolder: ''
  }, validationRules)

  const getEffectiveAmount = () => {
    return Number(amount) || 0
  }

  const handleAmountChange = (e) => {
    const value = e.target.value
    setAmount(value)
  }

  const onSubmit = async (formData) => {
    const donationAmount = getEffectiveAmount()
    
    if (!donationAmount || donationAmount < 100) {
      setFormErrors({ amount: VALIDATION_MESSAGES.MIN_AMOUNT })
      return
    }

    const payload = {
      amount: donationAmount,
      currency: 'NGN', // Direct currency value instead of DEFAULTS.CURRENCY
      donor: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: {
          street: formData.streetAddress,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode
        }
      },
      card: {
        number: formData.cardNumber,
        expiry: formData.cardExpiry,
        cvc: formData.cardCvc,
        holder: formData.cardHolder
      },
      source: 'frontend'
    }

    const result = await submitDonation(payload)
    if (result.success) {
      navigate('/donations/thank-you')
    } else {
      setFormErrors({ submit: result.message || 'Donation failed. Please try again.' })
    }
  }

  return (
    <Card className="relative z-10">
      <Card.Content className="p-6 md:p-10">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(onSubmit)
        }}>
          {/* Amount Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Donation Amount (NGN)
            </label>
            
            <Input
              type="number"
              min="100"
              placeholder="Enter donation amount"
              value={amount}
              onChange={handleAmountChange}
              error={errors.amount}
              required
            />
            {/* <p className="text-xs text-gray-500 mt-2">
              Minimum donation amount is ₦100
            </p> */}
          </div>

          {/* Personal Information */}
          <div className="mb-6">
            <h3 className="font-display font-bold text-lg text-primary mb-4">
              Your Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                onBlur={() => handleBlur('firstName')}
                error={errors.firstName}
                required
              />

              <Input
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                onBlur={() => handleBlur('lastName')}
                error={errors.lastName}
                required
              />
            </div>

            <div className="mb-4">
              <Input
                label="Street Address"
                name="streetAddress"
                value={values.streetAddress}
                onChange={(e) => handleChange('streetAddress', e.target.value)}
                onBlur={() => handleBlur('streetAddress')}
                error={errors.streetAddress}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input
                label="City"
                name="city"
                value={values.city}
                onChange={(e) => handleChange('city', e.target.value)}
                onBlur={() => handleBlur('city')}
                error={errors.city}
                required
              />

              <Input
                label="State"
                name="state"
                value={values.state}
                onChange={(e) => handleChange('state', e.target.value)}
                onBlur={() => handleBlur('state')}
                error={errors.state}
                required
              />

              <Input
                label="Zipcode"
                name="zipcode"
                value={values.zipcode}
                onChange={(e) => handleChange('zipcode', e.target.value)}
                onBlur={() => handleBlur('zipcode')}
                error={errors.zipcode}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/* Card Information */}
          <div className="mb-6">
            <h4 className="font-display font-bold text-lg text-primary mb-4">
              Card Details
            </h4>

            <div className="mb-4">
              <Input
                label="Cardholder Name"
                name="cardHolder"
                value={values.cardHolder}
                onChange={(e) => handleChange('cardHolder', e.target.value)}
                onBlur={() => handleBlur('cardHolder')}
                error={errors.cardHolder}
                required
                autoComplete="cc-name"
              />
            </div>

            <div className="mb-4">
              <Input
                label="Credit Card Number"
                name="cardNumber"
                value={values.cardNumber}
                onChange={(e) => handleChange('cardNumber', e.target.value)}
                onBlur={() => handleBlur('cardNumber')}
                error={errors.cardNumber}
                required
                autoComplete="cc-number"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Expiration (MM/YY)"
                name="cardExpiry"
                placeholder="MM/YY"
                value={values.cardExpiry}
                onChange={(e) => handleChange('cardExpiry', e.target.value)}
                onBlur={() => handleBlur('cardExpiry')}
                error={errors.cardExpiry}
                required
                autoComplete="cc-exp"
              />

              <Input
                label="Security Code"
                name="cardCvc"
                value={values.cardCvc}
                onChange={(e) => handleChange('cardCvc', e.target.value)}
                onBlur={() => handleBlur('cardCvc')}
                error={errors.cardCvc}
                required
                autoComplete="cc-csc"
              />
            </div>
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
                Total: ₦{getEffectiveAmount().toLocaleString()}
              </p>

              <Button
                type="submit"
                variant="primary"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="md:w-auto"
              >
                {isSubmitting ? 'Processing...' : 'CONFIRM DONATION'}
              </Button>
            </div>
          </div>
        </form>
      </Card.Content>
    </Card>
  )
}

export default DonationForm