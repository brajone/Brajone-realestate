import React, { useState } from 'react'

interface ARViewerProps {
  propertyName: string
}

export default function ARPropertyViewer({ propertyName }: ARViewerProps) {
  const [arMode, setArMode] = useState(false)
  const [selectedFurniture, setSelectedFurniture] = useState('modern')

  const furnitureStyles = [
    { id: 'modern', name: 'Modern', icon: '🛋️', color: 'text-blue-400' },
    { id: 'luxury', name: 'Luxury', icon: '👑', color: 'text-yellow-400' },
    { id: 'minimal', name: 'Minimal', icon: '📦', color: 'text-gray-400' },
    { id: 'classic', name: 'Classic', icon: '🏛️', color: 'text-amber-400' },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-brajone-gold/50">
      <h3 className="text-2xl font-bold text-brajone-gold mb-6">🥽 AR Property Preview</h3>
      
      {/* AR Viewer */}
      <div className="bg-black rounded-xl overflow-hidden mb-6 aspect-video flex items-center justify-center border-2 border-brajone-gold/30">
        {arMode ? (
          <div className="text-center text-white">
            <div className="text-6xl mb-4 animate-pulse">📱</div>
            <p className="text-xl font-bold mb-2">AR Mode Active</p>
            <p className="text-gray-400">Point your device at the property</p>
            <p className="text-sm text-gray-500 mt-4">Furnishings: {selectedFurniture.charAt(0).toUpperCase() + selectedFurniture.slice(1)}</p>
          </div>
        ) : (
          <div className="text-center text-white w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-6xl mb-4">🏠</div>
            <p className="text-xl font-bold mb-2">Interior Design Preview</p>
            <p className="text-gray-400">Choose style & visualize</p>
          </div>
        )}
      </div>

      {/* Furniture Selection */}
      <div className="mb-6">
        <p className="text-gray-300 font-bold mb-3">Select Interior Style:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {furnitureStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedFurniture(style.id)}
              className={`p-4 rounded-lg border-2 transition ${
                selectedFurniture === style.id
                  ? 'border-brajone-gold bg-gray-800'
                  : 'border-gray-600 bg-gray-900 hover:border-brajone-gold/50'
              }`}
            >
              <div className={`text-3xl mb-2 ${style.color}`}>{style.icon}</div>
              <p className="text-sm font-bold text-white">{style.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Customization Options */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 text-center">
          <p className="text-sm font-bold text-white">🎨 Colors</p>
          <p className="text-xs text-gray-400 mt-1">10+ options</p>
        </div>
        <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 text-center">
          <p className="text-sm font-bold text-white">🛏️ Furniture</p>
          <p className="text-xs text-gray-400 mt-1">50+ items</p>
        </div>
        <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 text-center">
          <p className="text-sm font-bold text-white">💡 Lighting</p>
          <p className="text-xs text-gray-400 mt-1">Customizable</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setArMode(!arMode)}
          className={`py-3 rounded-lg font-bold transition ${
            arMode
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {arMode ? '✕ Exit AR' : '📱 Start AR'}
        </button>
        <button className="bg-brajone-gold hover:bg-yellow-400 text-black py-3 rounded-lg font-bold transition">
          💾 Save Design
        </button>
      </div>
    </div>
  )
}
