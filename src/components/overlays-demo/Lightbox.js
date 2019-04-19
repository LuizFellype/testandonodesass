import React from 'react'
import { images } from '../../constants'

// Prime Lightbox component
import { Lightbox } from 'primereact/lightbox'

const CustomLightbox = () => (
  <div className='card'>
    <h1>LightBox</h1>
    <Lightbox images={images} />
  </div>
)

export default CustomLightbox
