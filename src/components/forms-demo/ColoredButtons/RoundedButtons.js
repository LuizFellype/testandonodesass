import React from 'react'

// Prime Button component
import { Button } from 'primereact/button'

const RoundedButtons = () => (
  <div className='p-col-12 p-md-4' style={{ textAlign: 'center' }}>
    <Button
      label='Primary'
      style={{ marginBottom: '10px' }}
      className='p-button-rounded'
    />
    <Button
      label='Secondary'
      style={{ marginBottom: '10px' }}
      className='p-button-secondary p-button-rounded'
    />
    <Button
      label='Success'
      style={{ marginBottom: '10px' }}
      className='p-button-success p-button-rounded'
    />
    <Button
      label='Info'
      style={{ marginBottom: '10px' }}
      className='p-button-info p-button-rounded'
    />
    <Button
      label='Warning'
      style={{ marginBottom: '10px' }}
      className='p-button-warning p-button-rounded'
    />
    <Button
      label='Danger'
      style={{ marginBottom: '10px' }}
      className='p-button-danger p-button-rounded'
    />
  </div>
)

export default RoundedButtons
