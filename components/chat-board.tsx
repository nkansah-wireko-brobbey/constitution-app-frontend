import React from 'react'
import ChatBubble from '@/components/chat-bubble'
import { ChatBubbleProps } from '@/types/chat-bubble-props'

const chat: ChatBubbleProps[] = [
    {
        message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
        type: 'sent',
        id: '1'
    },
    {
        message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
        type: 'received',
        id: '2'
    },
    {
        message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
        type: 'sent',
        id: '3'
    },
    {
        message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
        type: 'received',
        id: '4'
    },
    {
        message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
        type: 'sent',
        id: '5'
    },
    {
        message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
        type: 'received',
        id: '6'
    },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'sent',
    //     id: '7'
    // },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'received',
    //     id: '8'
    // },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'sent',
    //     id: '9'
    // },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'received',
    //     id: '10'
    // },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'sent',
    //     id: '111'
    // },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'received',
    //     id: '22'
    // },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'sent',
    //     id: '14'
    // },
    // {
    //     message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit deserunt dolor magni tempore, quibusdam deleniti voluptate provident nobis veritatis voluptatem facere quo exercitationem nemo dolorum animi illo, corrupti sequi.",
    //     type: 'received',
    //     id: '25'
    // },
]

const ChatBoard = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 border h-screen overflow-y-auto '>
       {
        chat.map(({message, type,id})=>(<ChatBubble key={id} message={message} type={type} id={id}/>))
       }        
    </div>
  )
}

export default ChatBoard