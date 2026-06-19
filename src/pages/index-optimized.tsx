import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { memo } from 'react'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: true, loading: () => <div className="h-96 bg-gray-800 animate-pulse" /> })
const CitiesSection = dynamic(() => import('@/components/CitiesSection'), { ssr: false })
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), { ssr: false })

const HomePage: NextPage = memo(() => {
  return (
    <>
      <Head>
        <title>BrajOne - Ultra Luxury Real Estate Platform</title>
        <meta name="description" content="Divine luxury properties in Vrindavan, Mathura, Barsana, Govardhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-brajone-dark via-gray-900 to-brajone-dark">
        <Header language="en" setLanguage={() => {}} />
        <HeroSection />
        <CitiesSection />
        <FeaturesSection />
      </div>
    </>
  )
})

HomePage.displayName = 'HomePage'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // ISR: revalidate every hour
  }
}

export default HomePage
