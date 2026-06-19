import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'

const UltraLuxury3DViewer = dynamic(() => import('@/components/UltraLuxury3DViewer'), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center text-white">Loading 3D Property...</div>,
})

const translations = {
  en: {
    title: 'Ultra Luxury Properties - BrajOne',
    properties: 'Premium Properties',
    interactiveViewer: 'Interactive 3D Viewer',
    specifications: 'Specifications',
    amenities: 'World-Class Amenities',
    investNow: 'Invest Now',
    schedule: 'Schedule Visit',
    contact: 'Contact',
  },
  hi: {
    title: 'अल्ट्रा लक्जरी संपत्ति - ब्रजवन',
    properties: 'प्रीमियम संपत्ति',
    interactiveViewer: 'इंटरैक्टिव 3D व्यूअर',
    specifications: 'विशेषताएं',
    amenities: 'विश्वस्तरीय सुविधाएं',
    investNow: 'अभी निवेश करें',
    schedule: 'विजिट शेड्यूल करें',
    contact: 'संपर्क करें',
  },
}

const luxuryProperties = [
  {
    id: 1,
    name: 'Spiritual Skyscraper Vrindavan',
    city: 'Vrindavan',
    price: '₹150 Crores',
    area: '5,000 Sq.Ft',
    floors: 'G+25',
    beds: 'Penthouse - 8 Bhk',
    image: '🏢',
    description: 'Ultra-luxury highrise with sacred temple integration, panoramic Krishna views, and spiritual gardens',
    specs: [
      '25 Floors - Modern Architecture',
      'Smart Home Technology',
      'Private Helipad',
      'Sky Gardens & Meditation Zones',
      'Temple Integration',
      'Green Rooftop',
      'Infinity Pool',
      '24/7 Security',
    ],
    amenities: [
      '🏊 Olympic Size Pool',
      '🧘 Yoga & Meditation Center',
      '🕉️ Private Temple',
      '🍽️ World-Class Restaurants',
      '💪 Premium Gym',
      '🏨 Luxury Spa',
      '📚 Library',
      '🚁 Helipad Access',
      '🌳 Green Spaces',
      '⛩️ Spiritual Gardens',
    ],
  },
  {
    id: 2,
    name: 'Divine Plaza Mathura',
    city: 'Mathura',
    price: '₹200 Crores',
    area: '6,500 Sq.Ft',
    floors: 'G+35',
    beds: 'Super Penthouse - 10 Bhk',
    image: '🏙️',
    description: 'Tallest luxury structure with USA-style architecture, 360° city views, and integrated eco-systems',
    specs: [
      '35 Floors - International Standard',
      'AI-Powered Smart Building',
      'Multiple Helipads',
      'Vertical Gardens',
      'Water Management System',
      'Solar Power Plant',
      'Private Elevators',
      'Luxury Apartments',
    ],
    amenities: [
      '🏊‍♀️ Multiple Swimming Pools',
      '🏋️ State-of-Art Gym',
      '🍷 Wine Cellar',
      '🎬 Private Cinema',
      '🌿 Botanical Gardens',
      '🍽️ Michelin Star Restaurant',
      '📱 5G Connected',
      '🔐 Biometric Security',
      '🌍 360° Views',
      '🕉️ Sacred Temple',
    ],
  },
]

export default function PropertiesPage() {
  const [language, setLanguage] = useState('en')
  const [selectedProperty, setSelectedProperty] = useState(0)
  const t = translations[language as keyof typeof translations]
  const property = luxuryProperties[selectedProperty]
  const WHATSAPP = '917900780022'
  const PHONE = '+917900780022'

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content="Ultra luxury properties in Braj" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-brajone-dark via-gray-900 to-brajone-dark">
        <Header language={language} setLanguage={setLanguage} />
        <div className="pt-24 pb-12">
          {/* Page Title */}
          <section className="text-center py-12 px-4">
            <h1 className="text-6xl font-bold text-brajone-gold mb-4">{t.properties}</h1>
            <p className="text-2xl text-gray-300">World-Class Luxury in Sacred Braj</p>
          </section>

          {/* Property Navigation */}
          <section className="max-w-7xl mx-auto px-4 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {luxuryProperties.map((prop, idx) => (
                <button
                  key={prop.id}
                  onClick={() => setSelectedProperty(idx)}
                  className={`p-6 rounded-2xl border-2 transition transform hover:scale-105 ${
                    selectedProperty === idx
                      ? 'border-brajone-gold bg-gray-800/80 shadow-2xl shadow-brajone-gold/50'
                      : 'border-gray-600 bg-gray-800/40 hover:border-brajone-gold/50'
                  }`}
                >
                  <div className="text-4xl mb-3">{prop.image}</div>
                  <h3 className="text-2xl font-bold text-brajone-gold mb-2">{prop.name}</h3>
                  <p className="text-gray-300 mb-2">{prop.city}</p>
                  <p className="text-xl font-bold text-yellow-300">{prop.price}</p>
                </button>
              ))}
            </div>
          </section>

          {/* 3D Viewer Section */}
          <section className="max-w-7xl mx-auto px-4 mb-12">
            <div className="bg-gray-900 rounded-3xl p-8 border border-brajone-gold/50">
              <h2 className="text-3xl font-bold text-brajone-gold mb-6">{t.interactiveViewer}</h2>
              <div className="rounded-2xl overflow-hidden border-2 border-brajone-gold/50 shadow-2xl">
                <UltraLuxury3DViewer propertyName={property.name} />
              </div>
              <p className="text-gray-400 text-center mt-4">🖱️ Rotate to view | 🔄 Interactive 3D Model | ✨ Premium Visualization</p>
            </div>
          </section>

          {/* Property Details */}
          <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Specifications */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/30">
                <h3 className="text-2xl font-bold text-brajone-gold mb-6">{t.specifications}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Price</p>
                    <p className="text-2xl font-bold text-yellow-300">{property.price}</p>
                  </div>
                  <div className="h-px bg-brajone-gold/30"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Area</p>
                    <p className="text-lg font-bold text-white">{property.area}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Floors</p>
                    <p className="text-lg font-bold text-white">{property.floors}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Type</p>
                    <p className="text-lg font-bold text-white">{property.beds}</p>
                  </div>
                  <div className="h-px bg-brajone-gold/30"></div>
                  <div className="space-y-2">
                    {property.specs.map((spec, idx) => (
                      <p key={idx} className="text-gray-300 text-sm flex items-center">
                        <span className="text-brajone-gold mr-2">✓</span>
                        {spec}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Amenities & CTA */}
            <div className="lg:col-span-2 space-y-8">
              {/* Amenities */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/30">
                <h3 className="text-2xl font-bold text-brajone-gold mb-6">{t.amenities}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900/50 p-4 rounded-lg border border-brajone-gold/20 hover:border-brajone-gold/50 transition text-center"
                    >
                      <p className="text-2xl mb-2">{amenity.split(' ')[0]}</p>
                      <p className="text-sm text-gray-300">{amenity.substring(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-brajone-gold to-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-brajone-gold/50 transition transform hover:scale-105">
                  {t.investNow} 💰
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Interested%20in%20${property.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 text-center"
                >
                  {t.schedule} 📅
                </a>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="max-w-7xl mx-auto px-4 mt-12">
            <div className="bg-gradient-to-r from-brajone-dark via-gray-900 to-brajone-dark rounded-2xl p-8 border-2 border-brajone-gold/30">
              <h3 className="text-2xl font-bold text-brajone-gold mb-4">About This Property</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{property.description}</p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={`tel:${PHONE}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  📞 {t.contact}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Tell%20me%20more%20about%20${property.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
