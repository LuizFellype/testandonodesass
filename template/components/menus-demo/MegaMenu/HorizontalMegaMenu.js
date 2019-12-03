import React from 'react'
import { megaMenuItems } from '../../../utils/constants/menusDemo'

// Prime MegaMenu component
import { MegaMenu } from 'primereact/megamenu'

const HorizontalMegaMenu = () => (
  <>
    <h1>MegaMenu - Horizontal</h1>
    <MegaMenu model={megaMenuItems} />
  </>
)

export default HorizontalMegaMenu
