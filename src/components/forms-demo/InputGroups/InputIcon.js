import React from 'react'

// Prime InputText component
import { InputText } from 'primereact/inputtext'

const InputIcon = () => (
  <div className='p-inputgroup'>
    <span className='p-inputgroup-addon'>
      <i className='pi pi-user' />
    </span>
    <InputText placeholder='Username' />
  </div>
)

export default InputIcon
