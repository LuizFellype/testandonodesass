import React, { useState } from 'react'

// Prime components
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'

const CheckInput = () => {
  const [inputGroupValue, setInputGroupValue] = useState(null)

  return (
    <div className='p-inputgroup'>
      <span className='p-inputgroup-addon p-inputgroup-addon-checkbox'>
        <Checkbox
          checked={inputGroupValue}
          onChange={({ checked }) => setInputGroupValue(checked)}
        />
      </span>
      <InputText placeholder='Confirm' />
    </div>
  )
}

export default CheckInput
