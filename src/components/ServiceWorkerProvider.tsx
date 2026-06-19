import React from 'react'

// Service Worker registration for offline support and caching
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('✅ Service Worker registered:', registration.scope)
      })
      .catch((error) => {
        console.log('❌ Service Worker registration failed:', error)
      })
  })
}

export default function ServiceWorkerProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
