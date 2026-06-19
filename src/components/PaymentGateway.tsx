import React, { useState } from 'react'

interface PaymentGatewayProps {
  propertyName: string
  propertyPrice: number
}

export default function PaymentGateway({ propertyName, propertyPrice }: PaymentGatewayProps) {
  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState(propertyPrice / 10)
  const [paymentMethod, setPaymentMethod] = useState('razorpay')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  })

  const handleProceed = () => {
    if (formData.name && formData.email && formData.phone) {
      setStep(2)
    } else {
      alert('Please fill all details')
    }
  }

  const handlePayment = () => {
    // Simulated payment
    alert(
      `Payment of ₹${amount.toLocaleString('en-IN')} initiated via ${paymentMethod}!\n\nYou will receive confirmation on ${formData.email}\n\nOur team will contact you shortly at ${formData.phone}`
    )
    setStep(3)
  }

  const paymentMethods = [
    { id: 'razorpay', name: 'Razorpay', icon: '💳', desc: 'Credit/Debit Card' },
    { id: 'stripe', name: 'Stripe', icon: '💰', desc: 'International Cards' },
    { id: 'bank', name: 'Bank Transfer', icon: '🏦', desc: 'Direct Bank Transfer' },
    { id: 'crypto', name: 'Crypto', icon: '₿', desc: 'Bitcoin/Ethereum' },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-brajone-gold/50 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-brajone-gold mb-6 text-center">💳 Investment Payment</h2>

      {/* Progress */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`flex-1 h-2 mx-1 rounded ${
            step >= s ? 'bg-brajone-gold' : 'bg-gray-700'
          }`}></div>
        ))}
      </div>

      {/* Step 1: Booking Details */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 mb-6">
            <p className="text-gray-400">Property</p>
            <p className="text-xl font-bold text-brajone-gold">{propertyName}</p>
            <p className="text-gray-400 mt-2">Full Price: ₹{propertyPrice.toLocaleString('en-IN')}</p>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Phone *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
              placeholder="Your city"
            />
          </div>

          <button
            onClick={handleProceed}
            className="w-full bg-brajone-gold text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition mt-6"
          >
            Next: Choose Payment Method →
          </button>
        </div>
      )}

      {/* Step 2: Payment Method */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="mb-6">
            <label className="block text-gray-300 mb-3">Investment Amount</label>
            <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30">
              <p className="text-gray-400 text-sm">Booking Amount (10% of property)</p>
              <p className="text-3xl font-bold text-brajone-gold">₹{amount.toLocaleString('en-IN')}</p>
              <input
                type="range"
                min={propertyPrice / 100}
                max={propertyPrice}
                step={1000000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full mt-4"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-3">Select Payment Method</label>
            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-4 rounded-lg border-2 transition ${
                    paymentMethod === method.id
                      ? 'border-brajone-gold bg-gray-700'
                      : 'border-gray-600 bg-gray-800 hover:border-brajone-gold/50'
                  }`}
                >
                  <div className="text-2xl mb-2">{method.icon}</div>
                  <p className="font-bold text-white">{method.name}</p>
                  <p className="text-xs text-gray-400">{method.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-400 text-sm">✅ 100% Secure • SSL Encrypted • Money-back guarantee</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-bold hover:bg-gray-600"
            >
              ← Back
            </button>
            <button
              onClick={handlePayment}
              className="flex-1 bg-brajone-gold text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              Pay ₹{amount.toLocaleString('en-IN')} →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Success */}
      {step === 3 && (
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4 animate-bounce">✅</div>
          <h3 className="text-2xl font-bold text-green-400">Payment Initiated!</h3>
          <p className="text-gray-300">Transaction ID: {Math.random().toString().slice(2, 12).toUpperCase()}</p>
          <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
            <p className="text-gray-400 mb-2">Confirmation sent to:</p>
            <p className="text-white font-bold">{formData.email}</p>
          </div>
          <p className="text-gray-400">Our team will contact you within 24 hours at {formData.phone}</p>
          <button
            onClick={() => window.location.href = 'https://wa.me/917900780022'}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
          >
            💬 Chat with WhatsApp
          </button>
        </div>
      )}
    </div>
  )
}
