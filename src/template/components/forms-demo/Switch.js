import React, { useState } from 'react'

// Prime InputSwitch component
import { InputSwitch } from 'primereact/inputswitch'

const Switch = () => {
  const [inputSwitchValue, setInputSwitchValue] = useState(false)

  return (
    <div className='card card-w-title'>
      <h1>InputSwitch</h1>
      <InputSwitch
        checked={inputSwitchValue}
        onChange={() => setInputSwitchValue(!inputSwitchValue)}
      />
    </div>
  )
}

export default Switch
