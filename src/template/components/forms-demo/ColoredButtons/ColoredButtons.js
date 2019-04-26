import React from 'react'

// Custom components
import SimpleButtons from './SimpleButtons'
import RaisedButtons from './RaisedButtons'
import RoundedButtons from './RoundedButtons'

const ColoredButtons = () => (
  <div className='card card-w-title'>
    <h1>Colored Buttons</h1>
    <p>Flat buttons with various color alternatives.</p>

    <div className='p-grid'>
      <SimpleButtons />
      <RaisedButtons />
      <RoundedButtons />
    </div>
  </div>
)

export default ColoredButtons
