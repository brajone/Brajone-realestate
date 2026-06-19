import type { AppProps } from 'next/app'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import AIInvestmentChatbot from '@/components/AIInvestmentChatbot'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <AIInvestmentChatbot />
      <FloatingContactButtons />
    </>
  )
}
