import React, { useState } from 'react'

const events = [
  { id: 1, title: '🚀 Property Launch Event', date: 'Jan 25, 2024', location: 'Vrindavan', attendees: 250, type: 'Launch' },
  { id: 2, title: '📊 Investment Masterclass', date: 'Jan 28, 2024', location: 'Online', attendees: 500, type: 'Webinar' },
  { id: 3, title: '🎉 VIP Networking Night', date: 'Feb 2, 2024', location: 'Mathura', attendees: 100, type: 'Premium' },
  { id: 4, title: '🏆 Annual Awards Ceremony', date: 'Feb 15, 2024', location: 'New Delhi', attendees: 1000, type: 'Award' },
]

export default function EventsHub() {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([])

  const handleRegister = (eventId: number) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter(id => id !== eventId))
    } else {
      setRegisteredEvents([...registeredEvents, eventId])
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-2">🎤 Live Events & Webinars</h2>
      <p className="text-gray-400 mb-6">Join our exclusive investor events and networking sessions</p>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30 hover:border-brajone-gold/80 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-brajone-gold mb-2">{event.title}</h3>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                  <span>👥 {event.attendees} attendees</span>
                </div>
              </div>
              <span className="bg-brajone-gold/20 text-brajone-gold px-3 py-1 rounded-full text-xs font-bold">{event.type}</span>
            </div>
            <button
              onClick={() => handleRegister(event.id)}
              className={`w-full py-2 rounded font-bold transition ${
                registeredEvents.includes(event.id)
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-brajone-gold text-black hover:bg-yellow-400'
              }`}
            >
              {registeredEvents.includes(event.id) ? '✅ Registered' : 'Register Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
