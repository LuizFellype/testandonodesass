import React, { useState } from 'react'
import { carOptions } from '../../constants'

// Prime MultiSelect component
import { MultiSelect } from 'primereact/multiselect'

const CustomMultiSelect = () => {
  const [cars, setCars] = useState([])

  return (
    <div className='card card-w-title'>
      <h1>MultiSelect</h1>
      <MultiSelect
        value={cars}
        options={carOptions}
        onChange={({ value }) => setCars(value)}
        filter
      />
    </div>
  )
}

export default CustomMultiSelect
