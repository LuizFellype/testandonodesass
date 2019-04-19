import React from 'react'

// Prime InputText component
import { InputText } from 'primereact/inputtext'

const CustomTooltip = () => (
  <div className='card'>
    <h1>Tooltip</h1>
    <InputText tooltip='Username' tooltipOptions={{ position: 'bottom' }} />
  </div>
)

export default CustomTooltip
