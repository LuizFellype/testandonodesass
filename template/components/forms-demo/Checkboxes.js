import React, { useState } from 'react'

// Prime Checkbox component
import { Checkbox } from 'primereact/checkbox'

const Checkboxes = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className='card card-w-title'>
      <h1>Checkboxes</h1>
      <div className='p-grid'>
        <div className='p-col-12 p-md-4'>
          <Checkbox
            value='Sigma'
            inputId='sigma'
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
          <label htmlFor='sigma' className='p-checkbox-label'>
            Sigma
          </label>
        </div>
      </div>
    </div>
  )
}

export default Checkboxes
