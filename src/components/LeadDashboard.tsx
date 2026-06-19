import React, { useState } from 'react'

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  property: string
  budget: number
  status: 'new' | 'contacted' | 'interested' | 'invested'
  date: string
}

export default function LeadDashboard() {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      property: 'Vrindavan Penthouse',
      budget: 50000000,
      status: 'interested',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 87654 32109',
      property: 'Mathura Plaza',
      budget: 75000000,
      status: 'contacted',
      date: '2024-01-14',
    },
  ])

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    interested: leads.filter(l => l.status === 'interested').length,
    invested: leads.filter(l => l.status === 'invested').length,
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new': return 'bg-blue-500/20 text-blue-400'
      case 'contacted': return 'bg-yellow-500/20 text-yellow-400'
      case 'interested': return 'bg-purple-500/20 text-purple-400'
      case 'invested': return 'bg-green-500/20 text-green-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-6">📊 Lead Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 p-4 rounded-lg border border-brajone-gold/30 text-center">
          <p className="text-gray-400 text-sm">Total Leads</p>
          <p className="text-3xl font-bold text-brajone-gold">{stats.total}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-blue-500/30 text-center">
          <p className="text-gray-400 text-sm">New</p>
          <p className="text-3xl font-bold text-blue-400">{stats.new}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-purple-500/30 text-center">
          <p className="text-gray-400 text-sm">Interested</p>
          <p className="text-3xl font-bold text-purple-400">{stats.interested}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-green-500/30 text-center">
          <p className="text-gray-400 text-sm">Invested</p>
          <p className="text-3xl font-bold text-green-400">{stats.invested}</p>
        </div>
      </div>

      {/* Leads Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400">Name</th>
              <th className="text-left py-3 px-4 text-gray-400">Property</th>
              <th className="text-left py-3 px-4 text-gray-400">Budget</th>
              <th className="text-left py-3 px-4 text-gray-400">Status</th>
              <th className="text-left py-3 px-4 text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-gray-700 hover:bg-gray-800/50">
                <td className="py-3 px-4">
                  <p className="font-bold text-white">{lead.name}</p>
                  <p className="text-xs text-gray-400">{lead.email}</p>
                </td>
                <td className="py-3 px-4 text-gray-300">{lead.property}</td>
                <td className="py-3 px-4 text-brajone-gold font-bold">₹{(lead.budget / 10000000).toFixed(1)}Cr</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(lead.status)}`}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <a
                    href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm"
                  >
                    💬 Chat
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
