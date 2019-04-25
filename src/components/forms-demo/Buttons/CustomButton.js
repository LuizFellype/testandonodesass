import React from 'react'

// Prime Button component
import { Button } from 'primereact/button'

const CustomButton = props => (
  <>
    <div className='p-col-12'>{props.title}</div>
    <div className='p-col-12'>
      <Button {...props} />
    </div>
  </>
)

export default CustomButton
