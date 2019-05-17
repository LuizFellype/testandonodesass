import React from 'react'
import PropTypes from 'prop-types'

const ToggleMenuButton = ({ onToggleMenu }) => (
  <button className='p-link layout-menu-button' onClick={onToggleMenu}>
    <span className='pi pi-bars' />
  </button>
)

ToggleMenuButton.defaultProps = {
  onToggleMenu: null
}

ToggleMenuButton.propTypes = {
  onToggleMenu: PropTypes.func.isRequired
}

export default ToggleMenuButton
