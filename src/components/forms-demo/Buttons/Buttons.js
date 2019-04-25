import React from 'react'

// Custom components
import ToggleButton from './ToggleButton'
import SelectButton from './SelectButton'
import CustomButton from './CustomButton'
import SplitButton from './SplitButton'

const Buttons = () => {
  return (
    <div className='card card-w-title'>
      <h1>Buttons</h1>

      <div className='p-grid'>
        <ToggleButton />
        <SelectButton />
        <CustomButton title='Button' label='Bookmark' />
        <CustomButton title='Left Icon' label='Clear' icon='pi pi-times' />
        <CustomButton
          title='Right Icon'
          label='Clear'
          icon='pi pi-times'
          iconPos='right'
        />
        <CustomButton icon='pi pi-check' />

        <SplitButton />
      </div>
    </div>
  )
}

export default Buttons
