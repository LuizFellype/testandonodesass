import React from 'react'
import { tabMenuItems } from '../../constants'

// Prime TabManu component
import { TabMenu } from 'primereact/tabmenu'

const CustomTabMenu = () => (
  <div className='card'>
    <h1>TabMenu</h1>
    <TabMenu model={tabMenuItems} />
  </div>
)

export default CustomTabMenu
