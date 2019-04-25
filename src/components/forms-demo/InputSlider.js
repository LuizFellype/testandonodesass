import React, { useState } from 'react'

// Prime Slider component
import { Slider } from 'primereact/components/slider/Slider'

const InputSlider = () => {
  const [sliderValue, setSliderValue] = useState([20, 80])

  return (
    <div className='card card-w-title'>
      <h1>Slider</h1>
      <Slider
        range
        value={sliderValue}
        onChange={({ value }) => setSliderValue(value)}
      />
    </div>
  )
}

export default InputSlider
