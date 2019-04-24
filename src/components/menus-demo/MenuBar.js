import React from 'react'
import { tieredItems } from '../../constants'

// Prime Menubar component
import { Menubar } from 'primereact/menubar'

const MenuBar = () => (
  <div className='card card-w-title'>
    <h1>MenuBar</h1>
    <Menubar model={tieredItems} />
  </div>
)

export default MenuBar
