import React from 'react'

// Prime InputTextArea component
import { InputTextarea } from 'primereact/inputtextarea'

function TextArea() {
  return (
    <div className='card card-w-title'>
      <h1>TextArea</h1>
      <InputTextarea rows={3} cols={30} placeholder='Your Message' autoResize />
    </div>
  )
}

export default TextArea
