import React from 'react'

// Prime InputText component
import { InputText } from 'primereact/inputtext'

const InputAddon = () => (
  <div className='p-inputgroup'>
    <span className='p-inputgroup-addon'>
      <i className='pi pi-clock' />
    </span>
    <span className='p-inputgroup-addon'>
      <i className='pi pi-star' />
    </span>
    <InputText placeholder='Payment' />
    <span className='p-inputgroup-addon'>$</span>
    <span className='p-inputgroup-addon'>.00</span>
  </div>
)

export default InputAddon
