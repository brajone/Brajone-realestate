import React, { useState } from 'react'

const nftProperties = [
  { id: 1, name: 'Vrindavan Divine #001', price: '2.5', floorPrice: '2.3', image: '🏛️', rarity: 'Legendary' },
  { id: 2, name: 'Mathura Luxury #005', price: '3.8', floorPrice: '3.5', image: '🏢', rarity: 'Rare' },
  { id: 3, name: 'Barsana Eco #012', price: '1.9', floorPrice: '1.7', image: '🌳', rarity: 'Uncommon' },
  { id: 4, name: 'Govardhan Sacred #018', price: '2.1', floorPrice: '2.0', image: '⛰️', rarity: 'Rare' },
]

export default function NFTMarketplace() {
  const [selectedNFT, setSelectedNFT] = useState(nftProperties[0])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-2">🎨 NFT Marketplace</h2>
      <p className="text-gray-400 mb-6">Own digital property certificates backed by blockchain</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* NFT Gallery */}
        <div className="md:col-span-2">
          <div className="bg-gray-900 rounded-lg p-8 border-2 border-brajone-gold/50 text-center mb-6">
            <div className="text-8xl mb-4">{selectedNFT.image}</div>
            <h3 className="text-2xl font-bold text-brajone-gold mb-2">{selectedNFT.name}</h3>
            <p className="text-gray-400 text-sm mb-4">Contract: 0x{Math.random().toString(16).substr(2, 20)}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nftProperties.map((nft) => (
              <button
                key={nft.id}
                onClick={() => setSelectedNFT(nft)}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedNFT.id === nft.id
                    ? 'border-brajone-gold bg-gray-800'
                    : 'border-gray-600 bg-gray-900 hover:border-brajone-gold/50'
                }`}
              >
                <div className="text-4xl mb-2">{nft.image}</div>
                <p className="text-xs font-bold text-gray-300 line-clamp-2">{nft.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30">
            <p className="text-gray-400 text-sm">Current Price</p>
            <p className="text-3xl font-bold text-brajone-gold">{selectedNFT.price} ETH</p>
            <p className="text-xs text-gray-400 mt-2">≈ ₹{(parseFloat(selectedNFT.price) * 200000).toLocaleString('en-IN')}</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-600/50">
            <p className="text-gray-400 text-xs mb-2">Floor Price</p>
            <p className="text-lg font-bold text-green-400">{selectedNFT.floorPrice} ETH</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-600/50">
            <p className="text-gray-400 text-xs mb-2">Rarity</p>
            <p className="text-lg font-bold text-purple-400">{selectedNFT.rarity}</p>
          </div>

          <button className="w-full bg-brajone-gold text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
            🛍️ Buy NFT
          </button>
          <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition">
            📊 View Stats
          </button>
        </div>
      </div>
    </div>
  )
}
