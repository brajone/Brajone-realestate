import React, { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import AdvancedNavigation from '@/components/AdvancedNavigation'
import AdvancedAnalyticsDashboard from '@/components/AdvancedAnalyticsDashboard'
import NFTMarketplace from '@/components/NFTMarketplace'
import EducationHub from '@/components/EducationHub'
import RewardsProgram from '@/components/RewardsProgram'
import EventsHub from '@/components/EventsHub'
import B2BPortal from '@/components/B2BPortal'
import GlobalExpansion from '@/components/GlobalExpansion'
import BlockchainVisualizer from '@/components/BlockchainVisualizer'
import MetaverseIntegration from '@/components/MetaverseIntegration'
import ARPropertyViewer from '@/components/ARPropertyViewer'
import AdvancedPaymentSolutions from '@/components/AdvancedPaymentSolutions'
import LiveWebinarsAndCourses from '@/components/LiveWebinarsAndCourses'

export default function AdvancedFeaturesShowcase() {
  const [language, setLanguage] = useState('en')
  const [activeTab, setActiveTab] = useState('analytics')

  const tabs = [
    { id: 'analytics', label: '📊 Analytics', icon: '📈' },
    { id: 'nft', label: '🎨 NFT', icon: '🖼️' },
    { id: 'education', label: '📚 Academy', icon: '🎓' },
    { id: 'rewards', label: '🎁 Rewards', icon: '🏆' },
    { id: 'events', label: '🎤 Events', icon: '🎪' },
    { id: 'b2b', label: '💼 B2B', icon: '🤝' },
    { id: 'global', label: '🌍 Global', icon: '🗺️' },
    { id: 'blockchain', label: '⛓️ Blockchain', icon: '🔗' },
    { id: 'metaverse', label: '🌐 Metaverse', icon: '🏙️' },
    { id: 'ar', label: '🥽 AR', icon: '📱' },
    { id: 'payment', label: '💳 Payments', icon: '💰' },
    { id: 'webinars', label: '🎓 Webinars', icon: '📺' },
  ]

  return (
    <>
      <Head>
        <title>Advanced Features - BrajOne</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-brajone-dark via-gray-900 to-brajone-dark">
        <Header language={language} setLanguage={setLanguage} />
        <div className="pt-24 pb-12">
          {/* Navigation */}
          <section className="max-w-7xl mx-auto px-4 mb-12">
            <h1 className="text-4xl font-bold text-brajone-gold mb-6 text-center">🚀 Advanced Features Hub</h1>
            <div className="flex gap-2 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-bold transition ${
                    activeTab === tab.id
                      ? 'bg-brajone-gold text-black shadow-lg shadow-brajone-gold/50'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </section>

          {/* Content */}
          <section className="max-w-7xl mx-auto px-4">
            {activeTab === 'analytics' && <AdvancedAnalyticsDashboard />}
            {activeTab === 'nft' && <NFTMarketplace />}
            {activeTab === 'education' && <EducationHub />}
            {activeTab === 'rewards' && <RewardsProgram />}
            {activeTab === 'events' && <EventsHub />}
            {activeTab === 'b2b' && <B2BPortal />}
            {activeTab === 'global' && <GlobalExpansion />}
            {activeTab === 'blockchain' && <BlockchainVisualizer propertyName="Vrindavan Divine" propertyId="prop001" />}
            {activeTab === 'metaverse' && <MetaverseIntegration />}
            {activeTab === 'ar' && <ARPropertyViewer propertyName="Luxury Penthouse" />}
            {activeTab === 'payment' && <AdvancedPaymentSolutions />}
            {activeTab === 'webinars' && <LiveWebinarsAndCourses />}
          </section>
        </div>
      </div>
    </>
  )
}
