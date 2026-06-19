import React, { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import LeadDashboard from '@/components/LeadDashboard'

export default function AdminDashboard() {
  const [language, setLanguage] = useState('en')

  return (
    <>
      <Head>
        <title>Admin Dashboard - BrajOne</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-brajone-dark via-gray-900 to-brajone-dark">
        <Header language={language} setLanguage={setLanguage} />
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-4">
          <LeadDashboard />
        </div>
      </div>
    </>
  )
}
