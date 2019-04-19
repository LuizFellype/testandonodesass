import React from 'react'

// Prime components
import { Message } from 'primereact/message'
import { InputText } from 'primereact/inputtext'

const InlineMessage = () => (
  <>
    <h1>Inline Message</h1>

    <div className='p-grid'>
      <div className='p-col-12 p-md-3'>
        <Message severity='info' text='PrimeReact Rocks' />
      </div>
      <div className='p-col-12 p-md-3'>
        <Message severity='success' text='Record Saved' />
      </div>
      <div className='p-col-12 p-md-3'>
        <Message severity='warn' text='Are you sure?' />
      </div>
      <div className='p-col-12 p-md-3'>
        <Message severity='error' text='Field is required' />
      </div>
    </div>

    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
      <InputText
        placeholder='Username'
        className='p-error'
        style={{ marginRight: '.25em' }}
      />
      <Message severity='error' text='Field is required' />
    </div>
    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
      <InputText
        placeholder='Email'
        className='p-error'
        style={{ marginRight: '.25em' }}
      />
      <Message severity='error' />
    </div>
  </>
)

export default InlineMessage
