import React from 'react'

const Contact = ({ imgName, alt, name, email }) => (
  <li>
    <button className='p-link'>
      <img src={'assets/layout/images/' + imgName} width='35' alt={alt} />
      <span className='name'>{name}</span>
      <span className='email'>{email}</span>
    </button>
  </li>
)

export default Contact
