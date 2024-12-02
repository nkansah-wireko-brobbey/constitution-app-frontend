import ChatForm from './chat-form'

export default function StickyChatFooter() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Message sent:', e.currentTarget)
    // setMessage('')
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="container max-w-2xl mx-auto p-4">
      <ChatForm handleSubmit={handleSubmit} />
      </div>
    </footer>
  )
}

