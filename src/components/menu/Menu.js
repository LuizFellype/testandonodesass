import React from 'react'
import { menuItems } from '../../constants'

// Prime Menu component
import { Menu } from 'primereact/menu'

const CustomMenu = () => (
  <div className='card card-w-title'>
    <h1>Menu</h1>
    <Menu model={menuItems} />
  </div>
)

export default CustomMenu
