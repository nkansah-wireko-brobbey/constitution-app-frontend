import { Send } from 'lucide-react'
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'

const ChatForm = ({handleSubmit}:{handleSubmit: (e: React.FormEvent)=>void}) => {
  const [message, setMessage] = useState('')

  return (
    <div>  <form onSubmit={handleSubmit} className="flex items-center gap-2">
    <Input
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="flex-grow"
    />
    <Button type="submit" size="icon">
      <Send className="h-4 w-4" />
      <span className="sr-only">Send message</span>
    </Button>
  </form></div>
  )
}

export default ChatForm