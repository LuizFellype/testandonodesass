import React, { useState } from 'react'
import classNames from 'classnames'

// Custom component
import ProfileMenuItem from './ProfileMenuItem'

const Profile = () => {
  const [expanded, setExpanded] = useState(false)

  const onClick = event => {
    setExpanded(!expanded)
    event.preventDefault()
  }

  return (
    <div className='profile'>
      <div>
        <img src='assets/layout/images/profile.png' alt='' />
      </div>
      <button className='p-link profile-link' onClick={onClick}>
        <span className='username'>Claire Williams</span>
        <i className='pi pi-fw pi-cog' />
      </button>
      <ul className={classNames({ 'profile-expanded': expanded })}>
        <ProfileMenuItem icon='user' name='Account' />
        <ProfileMenuItem icon='inbox' name='Notifications' />
        <ProfileMenuItem icon='power-off' name='Logout' />
      </ul>
    </div>
  )
}

export default Profile
