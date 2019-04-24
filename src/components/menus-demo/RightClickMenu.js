import React from 'react'
import { tieredItems } from '../../constants'

// Prime ContextMenu component
import { ContextMenu } from 'primereact/contextmenu'

const RightClickMenu = () => (
  <div className='card card-w-title'>
    <h1 style={{ marginTop: '40px' }}>ContextMenu</h1>
    Right click!
    <ContextMenu global model={tieredItems} style={{ width: '12.5em' }} />
  </div>
)

export default RightClickMenu
