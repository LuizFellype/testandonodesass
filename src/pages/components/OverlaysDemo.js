import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'

// Custom components
import OverlayPanel from '../../components/overlays-demo/OverlayPanel'
import Dialog from '../../components/overlays-demo/Dialog'
import Lightbox from '../../components/overlays-demo/Lightbox'

export class OverlaysDemo extends Component {
  render() {
    return (
      <div className='p-grid p-fluid'>
        <div className='p-col-12 p-lg-6'>
          <OverlayPanel />
          <Dialog />
        </div>

        <div className='p-col-12 p-lg-6'>
          <Lightbox />
          <div className='card'>
            <h1>Tooltip</h1>
            <InputText
              tooltip='Username'
              tooltipOptions={{ position: 'bottom' }}
            />
          </div>
        </div>
      </div>
    )
  }
}
