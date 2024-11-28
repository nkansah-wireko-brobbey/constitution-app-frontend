import { ChatBubbleProps } from '@/types/chat-bubble-props'
import React from 'react'

const ChatBubble = ({message, type }: ChatBubbleProps) => {
    return (
        <div className={`flex ${type === 'received'?'justify-start':'justify-end'} mt-4`}>
            <div className={`${type === 'received'?'border bg-inherit border-primary  rounded-ss-none':'bg-primary  rounded-se-none'} max-w-lg bg-primary rounded-xl p-5 inline-block h-auto`}>{message.trim()}</div>
        </div>
    )
}

export default ChatBubble