import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

interface BlockchainVisualizerProps {
  propertyName: string
  propertyId: string
}

export default function BlockchainVisualizer({ propertyName, propertyId }: BlockchainVisualizerProps) {
  const [nftStatus, setNftStatus] = useState('minting')
  const [transactionHash, setTransactionHash] = useState('')

  useEffect(() => {
    // Simulate blockchain minting
    setTransactionHash('0x' + Math.random().toString(16).substr(2, 64))
    setTimeout(() => setNftStatus('minted'), 2000)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-brajone-gold/50 space-y-6">
      <h3 className="text-2xl font-bold text-brajone-gold">🔗 Blockchain Property NFT</h3>
      
      {/* NFT Card */}
      <div className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30 text-center">
        <div className="text-6xl mb-4 animate-spin">⛓️</div>
        <p className="text-gray-400 text-sm mb-2">Property NFT Status</p>
        <p className={`text-2xl font-bold mb-4 ${
          nftStatus === 'minting' ? 'text-yellow-400' : 'text-green-400'
        }`}>
          {nftStatus === 'minting' ? '⏳ Minting...' : '✅ Minted Successfully'}
        </p>
        <p className="text-xs text-gray-500 break-all">{transactionHash}</p>
      </div>

      {/* Smart Contract Info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
          <p className="text-gray-400 text-xs">Contract Address</p>
          <p className="text-blue-400 font-mono text-xs break-all mt-1">0x{propertyId.slice(0, 20)}...</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
          <p className="text-gray-400 text-xs">Network</p>
          <p className="text-green-400 font-bold mt-1">Ethereum Mainnet</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
          <p className="text-gray-400 text-xs">Property Value</p>
          <p className="text-purple-400 font-bold mt-1">₹ Varies</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-orange-500/30">
          <p className="text-gray-400 text-xs">Ownership</p>
          <p className="text-orange-400 font-bold mt-1">Digital + Physical</p>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition">📤 View on Etherscan</button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-bold transition">💾 Download Cert</button>
      </div>
    </div>
  )
}
