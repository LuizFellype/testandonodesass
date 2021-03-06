import React from 'react'

// Custom components
import ToggleMenuButton from './ToggleMenuButton'
// import Search from './Search'
// import Events from './Events'
// import Settings from './Settings'
// import User from './User'

const Topbar = ({ onToggleMenu }) => (
  <div className='layout-topbar clearfix'>
    <ToggleMenuButton onToggleMenu={onToggleMenu} />
  </div>
)

export default Topbar
