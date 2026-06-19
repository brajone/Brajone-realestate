import React, { memo, useMemo } from 'react'

const MemoizedCard = memo(({ title, value, change, icon }: any) => {
  const valueDisplay = useMemo(() => {
    if (typeof value === 'number') return value.toLocaleString('en-IN')
    return value
  }, [value])

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30 hover:border-brajone-gold/80 transition will-change-transform">
      <p className="text-gray-400 text-sm mb-2">{icon} {title}</p>
      <p className="text-3xl font-bold text-brajone-gold">{valueDisplay}</p>
      <p className="text-sm font-bold text-green-400 mt-2">📈 {change}</p>
    </div>
  )
})

MemoizedCard.displayName = 'MemoizedCard'

export default MemoizedCard
