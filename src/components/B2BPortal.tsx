import React, { useState } from 'react'

const agents = [
  { id: 1, name: 'Rajesh Kumar', experience: '15 years', properties: 250, image: '👨' },
  { id: 2, name: 'Priya Sharma', experience: '10 years', properties: 180, image: '👩' },
  { id: 3, name: 'Amit Patel', experience: '12 years', properties: 200, image: '👨' },
]

export default function B2BPortal() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-2">💼 B2B Real Estate Portal</h2>
      <p className="text-gray-400 mb-6">For agents, brokers, and agencies</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Total Agents</p>
          <p className="text-2xl font-bold text-brajone-gold">150+</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Active Listings</p>
          <p className="text-2xl font-bold text-brajone-gold">5000+</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Monthly Leads</p>
          <p className="text-2xl font-bold text-brajone-gold">10K+</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Commission Pool</p>
          <p className="text-2xl font-bold text-brajone-gold">₹10Cr</p>
        </div>
      </div>

      {/* Agent Spotlight */}
      <div className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30 mb-6">
        <h3 className="text-xl font-bold text-brajone-gold mb-4">🌟 Top Agents</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`p-4 rounded-lg cursor-pointer border-2 transition ${
                selectedAgent.id === agent.id
                  ? 'border-brajone-gold bg-gray-800'
                  : 'border-gray-600 hover:border-brajone-gold/50'
              }`}
            >
              <p className="text-3xl mb-2">{agent.image}</p>
              <p className="font-bold text-white">{agent.name}</p>
              <p className="text-xs text-gray-400">{agent.experience}</p>
              <p className="text-sm text-brajone-gold font-bold mt-2">{agent.properties} Properties</p>
            </div>
          ))}
        </div>
      </div>

      {/* B2B Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 text-center">
          <p className="text-2xl mb-2">📤</p>
          <p className="text-sm font-bold text-white">Bulk Upload</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 text-center">
          <p className="text-2xl mb-2">💰</p>
          <p className="text-sm font-bold text-white">Commission Track</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 text-center">
          <p className="text-2xl mb-2">📊</p>
          <p className="text-sm font-bold text-white">Lead Sharing</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 text-center">
          <p className="text-2xl mb-2">🎨</p>
          <p className="text-sm font-bold text-white">Marketing Tools</p>
        </div>
      </div>
    </div>
  )
}
