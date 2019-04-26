import React, { useState } from 'react'
import { cities } from '../../utils/constants/formsDemo'

// Prime Dropdown component
import { Dropdown } from 'primereact/dropdown'

const CustomDropdown = () => {
  const [dropdownCity, setDropdownCity] = useState(null)

  return (
    <div className='card card-w-title'>
      <h1>Dropdown</h1>
      <Dropdown
        options={cities}
        value={dropdownCity}
        onChange={({ value }) => setDropdownCity(value)}
        autoWidth={false}
      />
    </div>
  )
}

export default CustomDropdown
