import { useState, useRef, useEffect } from 'react'
import { getBotReply } from './ChatBotLogic'

const quickOptions = [
  { label: 'Expenses', value: 'How do expenses work?' },
  { label: 'Income', value: 'How can I track income?' },
  { label: 'Loans', value: 'Explain loan features' },
  { label: 'Reports', value: 'How reports are generated?' },
  { label: 'App Usage', value: 'How to use CashoraOne?' },
]

const ChatBotWidget = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi 👋 What are you looking for?' }
  ])
  const [input, setInput] = useState('')
  const [showOptions, setShowOptions] = useState(true)

  const messagesEndRef = useRef(null)

  // Auto scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text) => {
    if (!text.trim()) return

    const userMessage = { sender: 'user', text }
    const botReply = { sender: 'bot', text: getBotReply(text) }

    setMessages(prev => [...prev, userMessage, botReply])
    setShowOptions(false)
    setInput('')
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="text-sm font-semibold text-gray-800">
              Cashora Assistant
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`px-3 py-2 rounded-xl max-w-[85%] ${
                  msg.sender === 'user'
                    ? 'ml-auto bg-blue-50 text-gray-900'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Quick Options */}
            {showOptions && (
              <div className="mt-2 space-y-2">
                {quickOptions.map(option => (
                  <button
                    key={option.label}
                    onClick={() => sendMessage(option.value)}
                    className="w-full text-left px-3 py-2 text-sm border rounded-xl hover:bg-gray-50 transition"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t px-2 py-2 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none"
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            />
            <button
              onClick={() => sendMessage(input)}
              className="text-blue-600 text-sm font-medium px-2"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBotWidget
