import React from 'react'
import { megaMenuItems } from '../../../utils/constants/menusDemo'

// Prime MegaMenu component
import { MegaMenu } from 'primereact/megamenu'

const VerticalMegaMenu = () => (
  <>
    <h1>MegaMenu - Vertical</h1>
    <MegaMenu
      model={megaMenuItems}
      orientation='vertical'
      style={{ width: '200px' }}
    />
  </>
)

export default VerticalMegaMenu
