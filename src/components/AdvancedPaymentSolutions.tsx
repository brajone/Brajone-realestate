import React, { useState } from 'react'

const payments = [
  { id: 1, method: 'Credit Card', icon: '💳', isAvailable: true },
  { id: 2, method: 'Buy Now, Pay Later', icon: '📅', isAvailable: true },
  { id: 3, method: 'Crypto Payments', icon: '🪙', isAvailable: true },
  { id: 4, method: 'Bank Transfer', icon: '🏦', isAvailable: true },
  { id: 5, method: 'Insurance Link', icon: '🛡️', isAvailable: true },
  { id: 6, method: 'Loan Options', icon: '💰', isAvailable: true },
]

export default function AdvancedPaymentSolutions() {
  const [selectedMethod, setSelectedMethod] = useState(payments[0])
  const [installments, setInstallments] = useState(12)

  const totalAmount = 5000000
  const monthlyAmount = (totalAmount / installments).toLocaleString('en-IN')

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-2">💳 Advanced Payment Solutions</h2>
      <p className="text-gray-400 mb-6">Flexible investment options for everyone</p>

      {/* Payment Methods Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {payments.map((payment) => (
          <button
            key={payment.id}
            onClick={() => setSelectedMethod(payment)}
            className={`p-4 rounded-lg border-2 transition ${
              selectedMethod.id === payment.id
                ? 'border-brajone-gold bg-gray-800'
                : 'border-gray-600 bg-gray-900 hover:border-brajone-gold/50'
            }`}
          >
            <p className="text-3xl mb-2">{payment.icon}</p>
            <p className="text-sm font-bold text-white">{payment.method}</p>
          </button>
        ))}
      </div>

      {/* Selected Method Details */}
      <div className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30 mb-6">
        <h3 className="text-xl font-bold text-brajone-gold mb-4">{selectedMethod.icon} {selectedMethod.method}</h3>
        
        {selectedMethod.method === 'Buy Now, Pay Later' && (
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-2">Select Installment Period</p>
              <input
                type="range"
                min="3"
                max="48"
                value={installments}
                onChange={(e) => setInstallments(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-gray-300 text-sm mt-2">{installments} months</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Monthly Payment</p>
              <p className="text-2xl font-bold text-brajone-gold">₹{monthlyAmount}</p>
              <p className="text-xs text-gray-500 mt-2">Interest: 0% for first 6 months</p>
            </div>
          </div>
        )}

        {selectedMethod.method === 'Loan Options' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <span className="text-white">Home Loan - 7.5% p.a.</span>
              <span className="text-green-400 font-bold">✓</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <span className="text-white">Investment Loan - 6.9% p.a.</span>
              <span className="text-green-400 font-bold">✓</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <span className="text-white">Flexible EMI Plan</span>
              <span className="text-green-400 font-bold">✓</span>
            </div>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
          <p className="text-2xl mb-2">🔒</p>
          <p className="text-sm font-bold text-white">100% Secure</p>
          <p className="text-xs text-gray-400 mt-1">PCI-DSS Certified</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
          <p className="text-2xl mb-2">⚡</p>
          <p className="text-sm font-bold text-white">Instant Approval</p>
          <p className="text-xs text-gray-400 mt-1">In 5 minutes</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
          <p className="text-2xl mb-2">🎁</p>
          <p className="text-sm font-bold text-white">Zero Hidden Charges</p>
          <p className="text-xs text-gray-400 mt-1">Transparent pricing</p>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-brajone-gold to-yellow-400 text-black py-3 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-brajone-gold/50 transition">
        💳 Proceed to Payment
      </button>
    </div>
  )
}
