import React, { Suspense, lazy, memo } from 'react'

// Dynamic imports for better code splitting
const AdvancedAnalyticsDashboard = lazy(() => import('@/components/AdvancedAnalyticsDashboard'))
const NFTMarketplace = lazy(() => import('@/components/NFTMarketplace'))
const EducationHub = lazy(() => import('@/components/EducationHub'))
const RewardsProgram = lazy(() => import('@/components/RewardsProgram'))
const EventsHub = lazy(() => import('@/components/EventsHub'))
const B2BPortal = lazy(() => import('@/components/B2BPortal'))
const GlobalExpansion = lazy(() => import('@/components/GlobalExpansion'))

// Loading skeleton
const LoadingSkeleton = memo(() => (
  <div className="bg-gray-800 rounded-lg h-96 animate-pulse">
    <div className="h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
  </div>
))

LoadingSkeleton.displayName = 'LoadingSkeleton'

// Component wrapper with Suspense
const ComponentWithSuspense = ({ component: Component }: { component: React.ComponentType<any> }) => (
  <Suspense fallback={<LoadingSkeleton />}>
    <Component />
  </Suspense>
)

export { AdvancedAnalyticsDashboard, NFTMarketplace, EducationHub, RewardsProgram, EventsHub, B2BPortal, GlobalExpansion, ComponentWithSuspense, LoadingSkeleton }
