import React from 'react'

// Prime MegaMenu component
import { MegaMenu } from 'primereact/megamenu'

const VerticalMegaMenu = ({ megaMenuItems }) => (
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
