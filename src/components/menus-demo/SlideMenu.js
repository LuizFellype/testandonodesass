import React from 'react'
import { items } from '../../constants'

// Prime SlideMenu component
import { SlideMenu } from 'primereact/slidemenu'

const CustomSlideMenu = () => (
  <div className='card'>
    <h1>SlideMenu</h1>
    <SlideMenu model={items} style={{ width: '260px' }} menuWidth={260} />
  </div>
)

export default CustomSlideMenu
