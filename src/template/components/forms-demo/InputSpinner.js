import React, { useState } from 'react'

// Prime Spinner component
import { Spinner } from 'primereact/spinner'

const InputSpinner = () => {
  const [spinnerValue, setSpinnerValue] = useState(null)

  return (
    <div className='card card-w-title'>
      <h1>Spinner</h1>
      <Spinner
        value={spinnerValue}
        onChange={({ value }) => setSpinnerValue(value)}
      />
    </div>
  )
}

export default InputSpinner
