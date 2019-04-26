import React, { useState } from 'react'

// Prime components
import { ToggleButton } from 'primereact/togglebutton'

const CustomToggleButton = () => {
  const [toggleButtonValue, setToggleButtonValue] = useState(false)

  return (
    <>
      <div className='p-col-12'>ToggleButton</div>
      <div className='p-col-12'>
        <ToggleButton
          checked={toggleButtonValue}
          onChange={() => setToggleButtonValue(!toggleButtonValue)}
        />
      </div>
    </>
  )
}

export default CustomToggleButton
