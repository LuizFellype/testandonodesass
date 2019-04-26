import React from 'react'

const ProfileMenuItem = ({ icon, name }) => (
  <li>
    <button className='p-link'>
      <i className={'pi pi-fw pi-' + icon} />
      <span>{name}</span>
    </button>
  </li>
)

export default ProfileMenuItem
