import React from 'react'

const ActivityItem = ({ count, detail, relevance }) => {
  return (
    <li>
      <div className='count'>{count}</div>
      <div className='p-grid'>
        <div className='p-col-6'>{detail}</div>
        <div className='p-col-6'>{relevance}</div>
      </div>
    </li>
  )
}

export default ActivityItem
