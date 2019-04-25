import React from 'react'

// Prime Button component
import { Button } from 'primereact/button'

const SimpleButtons = () => (
  <div className='p-col-12 p-md-4' style={{ textAlign: 'center' }}>
    <Button label='Primary' style={{ marginBottom: '10px' }} />
    <Button
      label='Secondary'
      style={{ marginBottom: '10px' }}
      className='p-button-secondary'
    />
    <Button
      label='Success'
      style={{ marginBottom: '10px' }}
      className='p-button-success'
    />
    <Button
      label='Info'
      style={{ marginBottom: '10px' }}
      className='p-button-info'
    />
    <Button
      label='Warning'
      style={{ marginBottom: '10px' }}
      className='p-button-warning'
    />
    <Button
      label='Danger'
      style={{ marginBottom: '10px' }}
      className='p-button-danger'
    />
  </div>
)

export default SimpleButtons
