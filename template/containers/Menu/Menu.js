import React from 'react'
import PropTypes from 'prop-types'

// Custom SubMenu
import SubMenu from './SubMenu'

const Menu = ({ model, onMenuItemClick }) => (
  <div className='menu'>
    <SubMenu
      items={model}
      className='layout-main-menu'
      onMenuItemClick={onMenuItemClick}
      root
    />
  </div>
)

Menu.defaultProps = {
  model: null,
  onMenuItemClick: null
}

Menu.propTypes = {
  model: PropTypes.array,
  onMenuItemClick: PropTypes.func
}

export default Menu
