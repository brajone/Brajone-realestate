import React, { useState } from 'react'

interface AnalyticsMetric {
  label: string
  value: string
  change: string
  positive: boolean
}

const metrics: AnalyticsMetric[] = [
  { label: 'Website Visitors', value: '125K', change: '+45%', positive: true },
  { label: 'Conversion Rate', value: '8.5%', change: '+2.3%', positive: true },
  { label: 'Avg Lead Value', value: '₹75L', change: '+12%', positive: true },
  { label: 'Payment Success', value: '96.2%', change: '+1.2%', positive: true },
  { label: 'User Engagement', value: '4.5 min', change: '+0.8 min', positive: true },
  { label: 'Mobile Traffic', value: '72%', change: '+8%', positive: true },
]

export default function AdvancedAnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('month')

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-brajone-gold">📊 Advanced Analytics</h2>
          <p className="text-gray-400">Real-time business intelligence & insights</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-gray-800 border border-brajone-gold text-white px-4 py-2 rounded-lg"
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30">
            <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
            <p className="text-3xl font-bold text-brajone-gold mb-2">{metric.value}</p>
            <p className={`text-sm font-bold ${
              metric.positive ? 'text-green-400' : 'text-red-400'
            }`}>
              {metric.positive ? '📈' : '📉'} {metric.change}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">💰 Revenue Trend</h3>
          <div className="h-40 bg-gray-800 rounded flex items-end justify-around p-4 gap-2">
            {[30, 50, 45, 70, 85, 65, 90].map((val, i) => (
              <div
                key={i}
                style={{ height: `${val}%` }}
                className="flex-1 bg-gradient-to-t from-brajone-gold to-yellow-400 rounded-t"
              ></div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">🎯 Conversion Funnel</h3>
          <div className="space-y-3">
            {[
              { stage: 'Visitors', count: 125000, percent: 100 },
              { stage: 'Leads', count: 45000, percent: 36 },
              { stage: 'Interested', count: 12000, percent: 27 },
              { stage: 'Investors', count: 1025, percent: 8.5 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{item.stage}</span>
                  <span className="text-brajone-gold font-bold">{item.count.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-brajone-gold to-yellow-400 h-2 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
          <p className="text-gray-400 text-sm">Top Property</p>
          <p className="text-lg font-bold text-brajone-gold mt-2">Mathura Plaza</p>
          <p className="text-xs text-green-400 mt-1">850 inquiries</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
          <p className="text-gray-400 text-sm">Best Performer</p>
          <p className="text-lg font-bold text-brajone-gold mt-2">AI Chatbot</p>
          <p className="text-xs text-green-400 mt-1">35% conversion</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
          <p className="text-gray-400 text-sm">Top Market</p>
          <p className="text-lg font-bold text-brajone-gold mt-2">Vrindavan</p>
          <p className="text-xs text-green-400 mt-1">₹250 Cr invested</p>
        </div>
      </div>
    </div>
  )
}
