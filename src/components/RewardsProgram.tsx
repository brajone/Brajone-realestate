import React, { useState } from 'react'

const rewards = [
  { id: 1, title: '⭐ 100 Points Bonus', desc: 'Sign up reward', points: 100, claimed: false },
  { id: 2, title: '🎯 Referral Bonus', desc: 'Refer a friend', points: 500, claimed: false },
  { id: 3, title: '💎 VIP Status', desc: 'Invest 5+ properties', points: 1000, claimed: false },
  { id: 4, title: '🏆 Ambassador', desc: 'Achieve 10 referrals', points: 2000, claimed: false },
]

export default function RewardsProgram() {
  const [userPoints, setUserPoints] = useState(0)
  const [claimedRewards, setClaimedRewards] = useState<number[]>([])

  const handleClaim = (id: number) => {
    if (!claimedRewards.includes(id)) {
      const reward = rewards.find(r => r.id === id)
      if (reward) {
        setUserPoints(userPoints + reward.points)
        setClaimedRewards([...claimedRewards, id])
      }
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-2">🎁 Loyalty Rewards</h2>
      
      {/* Points Display */}
      <div className="bg-gradient-to-r from-brajone-gold to-yellow-400 text-black p-6 rounded-lg mb-6 font-bold text-center">
        <p className="text-sm opacity-75">Your Points</p>
        <p className="text-4xl">{userPoints.toLocaleString()} 🎯</p>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30">
            <h3 className="text-lg font-bold text-brajone-gold mb-1">{reward.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{reward.desc}</p>
            <div className="flex justify-between items-center">
              <p className="text-brajone-gold font-bold">+{reward.points} pts</p>
              <button
                onClick={() => handleClaim(reward.id)}
                disabled={claimedRewards.includes(reward.id)}
                className={`px-4 py-2 rounded font-bold transition ${
                  claimedRewards.includes(reward.id)
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {claimedRewards.includes(reward.id) ? 'Claimed' : 'Claim'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Referral Section */}
      <div className="mt-8 bg-gray-900 p-6 rounded-lg border-2 border-green-500/50">
        <h3 className="text-xl font-bold text-green-400 mb-4">👥 Referral Program</h3>
        <p className="text-gray-300 mb-4">Share your unique referral link and earn ₹5,000 per successful investment!</p>
        <div className="flex gap-2">
          <input
            type="text"
            value="https://brajone.com/ref/USER123456"
            readOnly
            className="flex-1 bg-gray-800 border border-gray-600 px-4 py-2 rounded text-gray-300 text-sm"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold transition">Copy</button>
        </div>
      </div>
    </div>
  )
}
