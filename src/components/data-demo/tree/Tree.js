import React from 'react'

// Custom components
import SimpleTree from './SimpleTree'
import CheckboxTree from './CheckboxTree'

const CustomTree = () => (
  <div className='card card-w-title'>
    <div className='p-grid'>
      <SimpleTree />
      <CheckboxTree />
    </div>
  </div>
)

export default CustomTree
