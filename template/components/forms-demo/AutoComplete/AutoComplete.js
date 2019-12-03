import React from 'react'
import Simple from './Simple'
import Advanced from './Advanced'

const AutoComplete = () => (
  <div className='card card-w-title'>
    <h1>AutoComplete</h1>
    <div className='p-grid'>
      <Simple />
      <Advanced />
    </div>
  </div>
)

export default AutoComplete
