import React from 'react'

const Details = ({ backgroundColor, color, title, icon, detail, count }) => (
  <div className='p-col-12 p-md-6 p-xl-3'>
    <div className='highlight-box'>
      <div className='initials' style={{ backgroundColor, color }}>
        <span>{title}</span>
      </div>
      <div className='highlight-details '>
        <i className={'pi pi-' + icon} />
        <span>{detail}</span>
        <span className='count'>{count}</span>
      </div>
    </div>
  </div>
)

export default Details
