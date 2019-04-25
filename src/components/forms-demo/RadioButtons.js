import React, { useState } from 'react'

// Prime RadioButton component
import { RadioButton } from 'primereact/radiobutton'

const RadioButtons = () => {
  const [radioValue, setRadioValue] = useState(false)

  return (
    <div className='card card-w-title'>
      <h1>RadioButtons</h1>
      <div className='p-grid'>
        <div className='p-col-12 p-md-4'>
          <RadioButton
            value='Sigma'
            inputId='sigma'
            onChange={() => setRadioValue(!radioValue)}
            checked={radioValue}
          />
          <label htmlFor='sigma' className='p-radiobutton-label'>
            Sigma
          </label>
        </div>
      </div>
    </div>
  )
}

export default RadioButtons
