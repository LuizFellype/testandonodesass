import React from 'react'

// Prime InputText component
import { InputText } from 'primereact/inputtext'

const InputWrapper = props => (
  <div className='p-col-12 p-md-4'>
    <InputText {...props} />
  </div>
)

export default InputWrapper
