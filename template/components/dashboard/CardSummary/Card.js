import React from 'react'

const Card = ({ title, detail, className, count }) => (
  <div className='p-col-12 p-lg-4'>
    <div className='card summary'>
      <span className='title'>{title}</span>
      <span className='detail'>{detail}</span>
      <span className={'count ' + className}>{count}</span>
    </div>
  </div>
)

export default Card
