import React from 'react'

// Custom components
import Name from './Name'
import Disabled from './Disabled'
import Error from './Error'

const CustomInputText = () => (
  <div className='card card-w-title'>
    <h1>InputText</h1>
    <div className='p-grid'>
      <Name />
      <Disabled />
      <Error />
    </div>
  </div>
)

export default CustomInputText
