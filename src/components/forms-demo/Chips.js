import React, { useState } from 'react'

// Prime Chips component
import { Chips } from 'primereact/chips'

const CustomChips = () => {
  const [chipsValue, setChipsValue] = useState([])

  return (
    <div className='card card-w-title'>
      <h1>Chips</h1>
      <Chips
        value={chipsValue}
        onChange={({ value }) => setChipsValue(value)}
      />
    </div>
  )
}

export default CustomChips
