import React, { useState } from 'react'

interface VRViewerProps {
  propertyName: string
}

export default function PropertyVRViewer({ propertyName }: VRViewerProps) {
  const [isVRMode, setIsVRMode] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const tours = [
    { name: '🏛️ Front View', angle: 0 },
    { name: '🌊 Courtyard', angle: 90 },
    { name: '🌿 Gardens', angle: 180 },
    { name: '🕉️ Temple', angle: 270 },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-brajone-gold/50">
      <h3 className="text-2xl font-bold text-brajone-gold mb-4">🥽 Virtual Reality Tour</h3>
      
      {/* VR Viewer */}
      <div className="bg-black rounded-xl overflow-hidden mb-4 aspect-video flex items-center justify-center border-2 border-brajone-gold/30">
        {isVRMode ? (
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🥽</div>
            <p className="text-xl font-bold mb-2">VR Mode Active</p>
            <p className="text-gray-400 mb-4">Use your VR headset to explore {propertyName}</p>
            <p className="text-sm text-gray-500">Motion sensors enabled • 360° viewing • Full immersion</p>
          </div>
        ) : (
          <div className="text-center text-white w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-xl font-bold mb-2">360° Interactive Tour</p>
            <p className="text-gray-400">Click tour views below or enable VR mode</p>
          </div>
        )}
      </div>

      {/* Tour Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {tours.map((tour, idx) => (
          <button
            key={idx}
            onClick={() => setRotation({ x: 0, y: tour.angle })}
            className="bg-gray-700 hover:bg-brajone-gold hover:text-black text-white px-4 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            {tour.name}
          </button>
        ))}
      </div>

      {/* VR Mode Toggle */}
      <button
        onClick={() => setIsVRMode(!isVRMode)}
        className={`w-full py-3 rounded-lg font-bold transition ${
          isVRMode
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isVRMode ? '❌ Exit VR Mode' : '🥽 Enable VR Mode'}
      </button>
    </div>
  )
}
