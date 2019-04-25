import React from 'react'

// Custom components
import InputGroupElementWrapper from './InputGroupElementWrapper'
import InputIcon from './InputIcon'
import InputAddon from './InputAddon'
import InputSearch from './InputSearch'
import CheckInput from './CheckInput'

const InputGroups = () => (
  <div className='card card-w-title'>
    <h1>Input Groups</h1>
    <div className='p-grid'>
      <InputGroupElementWrapper component={InputIcon} />
      <InputGroupElementWrapper component={InputAddon} />
      <InputGroupElementWrapper component={InputSearch} />
      <InputGroupElementWrapper component={CheckInput} />
    </div>
  </div>
)

export default InputGroups
