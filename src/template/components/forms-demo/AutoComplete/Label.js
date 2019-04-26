import React from 'react'

const Label = ({ htmlFor, text }) => (
  <div className='p-col-12'>
    <label htmlFor={htmlFor}>{text}</label>
  </div>
)

export default Label
