import React from 'react'
import { megaMenuItems } from '../../../constants'
import MegaMenuHorizontal from './HorizontalMegaMenu'
import MegaMenuVertical from './VerticalMegaMenu'

const CustomMegaMenu = () => (
  <div className='card'>
    <MegaMenuHorizontal megaMenuItems={megaMenuItems} />
    <MegaMenuVertical megaMenuItems={megaMenuItems} />
  </div>
)

export default CustomMegaMenu
