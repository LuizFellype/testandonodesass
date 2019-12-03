import React from 'react'
import { splitButtonItems } from '../../../utils/constants/formsDemo'

// Prime components
import { SplitButton } from 'primereact/splitbutton'

const CustomSplitButton = () => {
  return (
    <>
      <div className='p-col-12'>SplitButton</div>
      <div className='p-col-12'>
        <SplitButton label='Save' icon='pi pi-plus' model={splitButtonItems} />
      </div>
    </>
  )
}

export default CustomSplitButton
