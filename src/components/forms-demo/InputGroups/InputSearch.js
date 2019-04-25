import React from 'react'

// Prime components
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const InputSearch = () => (
  <div className='p-inputgroup'>
    <InputText placeholder='Search' />
    <Button icon='pi pi-search' />
  </div>
)

export default InputSearch
