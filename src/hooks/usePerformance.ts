import { useState, useCallback, useMemo } from 'react'

// Memoized debounce hook
const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  return useCallback((...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId)
    const newTimeoutId = setTimeout(() => callback(...args), delay)
    setTimeoutId(newTimeoutId)
  }, [callback, delay, timeoutId])
}

// Memoized throttle hook
const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const [lastCall, setLastCall] = useState(0)
  return useCallback((...args: any[]) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      callback(...args)
      setLastCall(now)
    }
  }, [callback, delay, lastCall])
}

export { useDebounce, useThrottle }
