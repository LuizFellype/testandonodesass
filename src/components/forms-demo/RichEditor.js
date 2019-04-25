import React from 'react'

// Prime Editor component
import { Editor } from 'primereact/editor'

const RichEditor = () => (
  <div className='card card-w-title'>
    <h1>Editor</h1>
    <Editor style={{ height: '320px' }} />
  </div>
)

export default RichEditor
