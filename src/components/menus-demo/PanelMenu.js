import React from 'react'
import { panelMenuItems } from '../../constants'

// Prime PanelMenu component
import { PanelMenu } from 'primereact/panelmenu'

const Menu = () => (
  <div className='card'>
    <h1>PanelMenu</h1>
    <PanelMenu model={panelMenuItems} />
  </div>
)

export default Menu
