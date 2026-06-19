import React, { useState } from 'react'

const metaverseVenues = [
  { id: 1, name: 'Virtual Vrindavan Plaza', visitors: 5000, featured: true },
  { id: 2, name: 'Mathura Digital Hub', visitors: 3200, featured: false },
  { id: 3, name: 'Braj Metaverse Estate', visitors: 2100, featured: true },
]

export default function MetaverseIntegration() {
  const [selectedVenue, setSelectedVenue] = useState(metaverseVenues[0])
  const [vrMode, setVrMode] = useState(false)

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500/50">
      <h3 className="text-2xl font-bold text-purple-400 mb-6">🌐 Metaverse Property Tours</h3>
      
      {/* Virtual Venue Display */}
      <div className="bg-black rounded-xl overflow-hidden mb-6 aspect-video flex items-center justify-center border-2 border-purple-500/30">
        {vrMode ? (
          <div className="text-center text-white">
            <div className="text-6xl mb-4 animate-spin">🌍</div>
            <p className="text-xl font-bold mb-2">VR Mode Active</p>
            <p className="text-gray-400">Exploring: {selectedVenue.name}</p>
            <p className="text-sm text-purple-400 mt-4">Live visitors: {selectedVenue.visitors}</p>
          </div>
        ) : (
          <div className="text-center text-white w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900">
            <div className="text-6xl mb-4">🏙️</div>
            <p className="text-xl font-bold mb-2">Virtual Property Exhibitions</p>
            <p className="text-gray-400">Explore in Metaverse</p>
          </div>
        )}
      </div>

      {/* Venue Selection */}
      <div className="mb-6">
        <p className="text-gray-300 font-bold mb-3">Featured Venues:</p>
        <div className="space-y-2">
          {metaverseVenues.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setSelectedVenue(venue)}
              className={`w-full p-4 rounded-lg border-2 transition text-left ${
                selectedVenue.id === venue.id
                  ? 'border-purple-400 bg-gray-800'
                  : 'border-gray-600 bg-gray-900 hover:border-purple-400/50'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">{venue.name}</p>
                  <p className="text-xs text-gray-400">Active visitors: {venue.visitors}</p>
                </div>
                {venue.featured && <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">Featured</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Metaverse Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 text-center">
          <p className="text-lg mb-1">🤖</p>
          <p className="text-xs font-bold text-purple-300">Avatar Tours</p>
        </div>
        <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 text-center">
          <p className="text-lg mb-1">🏠</p>
          <p className="text-xs font-bold text-purple-300">NFT Props</p>
        </div>
        <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 text-center">
          <p className="text-lg mb-1">💬</p>
          <p className="text-xs font-bold text-purple-300">Live Chat</p>
        </div>
        <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 text-center">
          <p className="text-lg mb-1">🎪</p>
          <p className="text-xs font-bold text-purple-300">Events</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setVrMode(!vrMode)}
          className={`py-3 rounded-lg font-bold transition ${
            vrMode
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {vrMode ? '✕ Exit VR' : '🥽 Enter VR'}
        </button>
        <button className="bg-brajone-gold hover:bg-yellow-400 text-black py-3 rounded-lg font-bold transition">
          🪙 Buy NFT
        </button>
      </div>
    </div>
  )
}
