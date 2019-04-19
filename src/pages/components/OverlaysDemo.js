import React from 'react'

// Custom components
import OverlayPanel from '../../components/overlays-demo/OverlayPanel'
import Dialog from '../../components/overlays-demo/Dialog'
import Lightbox from '../../components/overlays-demo/Lightbox'
import Tooltip from '../../components/overlays-demo/Tooltip'

const OverlaysDemo = () => (
  <div className='p-grid p-fluid'>
    <div className='p-col-12 p-lg-6'>
      <OverlayPanel />
      <Dialog />
    </div>

    <div className='p-col-12 p-lg-6'>
      <Lightbox />
      <Tooltip />
    </div>
  </div>
)

export default OverlaysDemo
