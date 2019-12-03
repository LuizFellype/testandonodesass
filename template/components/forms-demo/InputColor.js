import React, { useState } from 'react'

// Prime ColorPicker component
import { ColorPicker } from 'primereact/colorpicker'

const InputColor = () => {
  const [colorPickerValue, setColorPickerValue] = useState(null)

  return (
    <div className='card card-w-title'>
      <h1>ColorPicker</h1>
      <ColorPicker
        inline
        value={colorPickerValue}
        onChange={({ value }) => setColorPickerValue(value)}
      />
    </div>
  )
}

export default InputColor
