import React, { useState } from 'react'
import Link from 'next/link'

const translations = {
  en: { dashboard: 'Analytics', properties: 'Properties', investment: 'Invest', learn: 'Academy', rewards: 'Rewards', events: 'Events', nft: 'NFT', global: 'Global', logout: 'Logout' },
  hi: { dashboard: 'डैशबोर्ड', properties: 'संपत्ति', investment: 'निवेश', learn: 'अकादमी', rewards: 'पुरस्कार', events: 'इवेंट', nft: 'NFT', global: 'विश्वव्यापी', logout: 'लॉगआउट' },
}

export default function AdvancedNavigation({ language }: { language: string }) {
  const [showMenu, setShowMenu] = useState(false)
  const t = translations[language as keyof typeof translations]

  return (
    <div className="flex gap-2 flex-wrap">
      <Link href="/analytics" className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm font-bold transition">{t.dashboard}</Link>
      <Link href="/academy" className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-bold transition">{t.learn}</Link>
      <Link href="/nft-marketplace" className="px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white rounded text-sm font-bold transition">{t.nft}</Link>
      <Link href="/rewards" className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-bold transition">{t.rewards}</Link>
      <Link href="/events" className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-bold transition">{t.events}</Link>
      <Link href="/global" className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm font-bold transition">{t.global}</Link>
    </div>
  )
}
