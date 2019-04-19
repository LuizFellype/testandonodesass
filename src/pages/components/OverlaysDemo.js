import React, { Component } from 'react'
import { Lightbox } from 'primereact/lightbox'
import { InputText } from 'primereact/inputtext'

// Custom components
import OverlayPanel from '../../components/overlays-demo/OverlayPanel'
import Dialog from '../../components/overlays-demo/Dialog'

export class OverlaysDemo extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        {
          source: 'assets/demo/images/sopranos/sopranos1.jpg',
          thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg',
          title: 'Sopranos 1'
        },
        {
          source: 'assets/demo/images/sopranos/sopranos2.jpg',
          thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg',
          title: 'Sopranos 2'
        },
        {
          source: 'assets/demo/images/sopranos/sopranos3.jpg',
          thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg',
          title: 'Sopranos 3'
        },
        {
          source: 'assets/demo/images/sopranos/sopranos4.jpg',
          thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg',
          title: 'Sopranos 4'
        }
      ]
    }
  }

  render() {
    return (
      <div className='p-grid p-fluid'>
        <div className='p-col-12 p-lg-6'>
          <OverlayPanel />
          <Dialog />
        </div>
        <div className='p-col-12 p-lg-6'>
          <div className='card'>
            <h1>LightBox</h1>
            <Lightbox images={this.state.images} />
          </div>
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
