import React, { useState, useRef, useEffect } from 'react'

interface Message {
  type: 'user' | 'bot'
  text: string
  timestamp: Date
}

const AIResponses: { [key: string]: string } = {
  'hello': 'Namaste! 🙏 Welcome to BrajOne. I\'m your AI Investment Assistant. Looking for luxury properties in Vrindavan, Mathura, Barsana, or Govardhan?',
  'price': 'Our properties range from ₹3.5 Crores to ₹200 Crores. What\'s your budget? I can find perfect matches!',
  'investment': 'Great! You\'re at the right place. What type of property interests you? Residential, Commercial, or Mixed Use?',
  'vrindavan': '🏛️ Vrindavan has our most spiritual properties with temple integration. Premium penthouses starting at ₹50 Crores.',
  'mathura': '🏰 Mathura offers the tallest luxury towers with 360° city views. Start from ₹75 Crores.',
  'barsana': '🌾 Barsana provides eco-friendly villas in green valleys. Affordable from ₹35 Crores.',
  'govardhan': '⛰️ Govardhan has sacred mountain views. Perfect for spiritual investors. From ₹45 Crores.',
  'payment': '💳 We accept all payments: Razorpay, Stripe, Bank Transfer, and Cryptocurrency. Flexible EMI available.',
  'roi': '📈 Average ROI: 15-25% annually. Historical data available. Let me calculate for your budget!',
  'schedule': '📅 Want to visit? I\'ll schedule your property tour instantly via WhatsApp!',
  'help': 'I can help with:\n💰 Budget calculation\n🏠 Property search\n📊 ROI analysis\n🎯 Investment planning\n📞 Schedule visits\nWhat would you like?',
  'default': 'That\'s interesting! 🤔 Can you tell me more? Or ask me about properties, prices, or investment options?'
}

export default function AIInvestmentChatbot() {
  const [messages, setMessages] = useState<Message[]>([{
    type: 'bot',
    text: 'Namaste! 🙏 I\'m your AI Investment Assistant at BrajOne. How can I help you invest in luxury properties today?',
    timestamp: new Date()
  }])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [key, response] of Object.entries(AIResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    
    return AIResponses['default']
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      type: 'user',
      text: input,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Add bot response after delay
    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        text: getAIResponse(input),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleQuickReply = (reply: string) => {
    setInput(reply)
  }

  const WHATSAPP = '917900780022'

  return (
    <div className="fixed bottom-20 right-6 z-40">
      {isOpen && (
        <div className="bg-gray-900 border-2 border-brajone-gold rounded-2xl shadow-2xl w-96 h-96 flex flex-col overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-brajone-gold to-yellow-400 text-black p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">🤖 AI Investment Assistant</h3>
              <p className="text-xs opacity-75">Online • Always Ready</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold hover:bg-black/20 p-2 rounded"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-800">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-brajone-gold text-black rounded-br-none'
                      : 'bg-gray-700 text-white rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-3 bg-gray-800 border-t border-gray-700 text-xs space-y-2">
            <p className="text-gray-400">Quick options:</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleQuickReply('What\'s your cheapest property?')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs"
              >
                💰 Budget
              </button>
              <button
                onClick={() => handleQuickReply('Tell me about Vrindavan')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded text-xs"
              >
                🏛️ Vrindavan
              </button>
              <button
                onClick={() => handleQuickReply('What is ROI?')}
                className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs"
              >
                📈 ROI
              </button>
              <button
                onClick={() => handleQuickReply('Schedule a tour')}
                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
              >
                📅 Tour
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 bg-gray-800 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-brajone-gold outline-none text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-brajone-gold text-black px-3 py-2 rounded font-bold hover:bg-yellow-400"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-brajone-gold to-yellow-400 text-black w-16 h-16 rounded-full shadow-2xl hover:shadow-brajone-gold/50 transition transform hover:scale-110 flex items-center justify-center text-2xl font-bold animate-bounce"
        >
          🤖
        </button>
      )}
    </div>
  )
}
