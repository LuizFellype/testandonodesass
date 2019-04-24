import React from 'react'

// Prime MegaMenu component
import { MegaMenu } from 'primereact/megamenu'

const HorizontalMegaMenu = ({ megaMenuItems }) => (
  <>
    <h1>MegaMenu - Horizontal</h1>
    <MegaMenu model={megaMenuItems} />
  </>
)

export default HorizontalMegaMenu
