import React from 'react'

// Custom components
import MessagesGrowl from '../../components/messages-demo/MessagesGrowl'
import InlineMessage from '../../components/messages-demo/InlineMessage'

const MessagesDemo = () => (
  <div className='p-grid'>
    <div className='p-col-12'>
      <div className='card'>
        <MessagesGrowl />
        <InlineMessage />
      </div>
    </div>
  </div>
)

export default MessagesDemo
