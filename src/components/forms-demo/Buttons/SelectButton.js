import React, { useState } from 'react'
import { types } from '../../../constants'

// Prime components
import { SelectButton } from 'primereact/selectbutton'

const CustomSelectButton = () => {
  const [selectedType, setSelectedType] = useState(null)

  return (
    <>
      <div className='p-col-12'>SelectButton</div>
      <div className='p-col-12'>
        <SelectButton
          value={selectedType}
          options={types}
          onChange={({ value }) => setSelectedType(value)}
        />
      </div>
    </>
  )
}

export default CustomSelectButton
