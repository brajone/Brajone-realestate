import React, { useState } from 'react'

const countries = [
  { name: 'USA', flag: '🇺🇸', description: 'New York, California, Florida', visaReqs: 'E2 Investment Visa', investments: '1000+' },
  { name: 'UK', flag: '🇬🇧', description: 'London, Manchester, Dubai Expansion', visaReqs: 'Tier 1 Investor', investments: '500+' },
  { name: 'UAE', flag: '🇦🇪', description: 'Dubai, Abu Dhabi', visaReqs: 'Golden Visa', investments: '750+' },
  { name: 'Singapore', flag: '🇸🇬', description: 'Singapore CBD', visaReqs: 'EP/DE Visa', investments: '300+' },
  { name: 'Canada', flag: '🇨🇦', description: 'Toronto, Vancouver', visaReqs: 'Investor Program', investments: '400+' },
  { name: 'Germany', flag: '🇩🇪', description: 'Berlin, Munich', visaReqs: 'Freiberufler', investments: '200+' },
]

export default function GlobalExpansion() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-2">🌍 Global Investment Platform</h2>
      <p className="text-gray-400 mb-6">Invest in premium real estate worldwide</p>

      {/* Currency & Language */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Supported Currencies</p>
          <p className="text-xl font-bold text-brajone-gold mt-2">15+ 💱</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Languages</p>
          <p className="text-xl font-bold text-brajone-gold mt-2">25+ 🌐</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Global Investors</p>
          <p className="text-xl font-bold text-brajone-gold mt-2">50K+ 👥</p>
        </div>
      </div>

      {/* Country Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {countries.map((country) => (
          <button
            key={country.name}
            onClick={() => setSelectedCountry(country)}
            className={`p-4 rounded-lg border-2 transition ${
              selectedCountry.name === country.name
                ? 'border-brajone-gold bg-gray-800'
                : 'border-gray-600 bg-gray-900 hover:border-brajone-gold/50'
            }`}
          >
            <p className="text-3xl mb-2">{country.flag}</p>
            <p className="font-bold text-white">{country.name}</p>
          </button>
        ))}
      </div>

      {/* Country Details */}
      <div className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30 mb-6">
        <h3 className="text-2xl font-bold text-brajone-gold mb-4">🎯 {selectedCountry.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-2">Key Cities</p>
            <p className="text-white font-bold">{selectedCountry.description}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">Visa Requirements</p>
            <p className="text-white font-bold">{selectedCountry.visaReqs}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">Active Investments</p>
            <p className="text-brajone-gold font-bold text-lg">{selectedCountry.investments}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">ROI Potential</p>
            <p className="text-green-400 font-bold text-lg">15-25% annually</p>
          </div>
        </div>
      </div>

      {/* Investment Button */}
      <button className="w-full bg-gradient-to-r from-brajone-gold to-yellow-400 text-black py-3 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-brajone-gold/50 transition">
        🌍 Explore {selectedCountry.name} Properties
      </button>
    </div>
  )
}
