import React, { useState } from 'react'
import { listBoxCities } from '../../utils/constants/formsDemo'

// Prime ListBox component
import { ListBox } from 'primereact/listbox'

const Listbox = () => {
  const [listboxCity, setListboxCity] = useState(null)

  return (
    <div className='card card-w-title'>
      <h1>ListBox</h1>
      <ListBox
        options={listBoxCities}
        value={listboxCity}
        onChange={({ value }) => setListboxCity(value)}
        filter
      />
    </div>
  )
}

export default Listbox
