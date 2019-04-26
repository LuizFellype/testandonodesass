import React from 'react'
import { tieredItems } from '../../utils/constants/menusDemo'

// Prime TieredMenu component
import { TieredMenu } from 'primereact/tieredmenu'

const CustomTieredMenu = () => (
  <div className='card card-w-title'>
    <h1>TieredMenu</h1>
    <TieredMenu
      model={tieredItems}
      style={{ width: '250px', marginBottom: '20px' }}
    />
  </div>
)

export default CustomTieredMenu
