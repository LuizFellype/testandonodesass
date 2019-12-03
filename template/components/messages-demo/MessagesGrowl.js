import React, { useRef } from 'react'

// Prime components
import { Messages } from 'primereact/messages'
import { Growl } from 'primereact/growl'
import { Button } from 'primereact/button'

const MessagesGrowl = () => {
  const messages = useRef(null)
  const growl = useRef(null)

  const showInfo = () => {
    let msg = {
      severity: 'info',
      summary: 'Info Message',
      detail: 'PrimeReact rocks'
    }
    growl.current.show(msg)
    messages.current.show(msg)
  }

  const showSuccess = () => {
    let msg = {
      severity: 'success',
      summary: 'Success Message',
      detail: 'Order submitted'
    }
    growl.current.show(msg)
    messages.current.show(msg)
  }

  const showWarn = () => {
    let msg = {
      severity: 'warn',
      summary: 'Warn Message',
      detail: 'There are unsaved changes'
    }
    growl.current.show(msg)
    messages.current.show(msg)
  }

  const showError = () => {
    let msg = {
      severity: 'error',
      summary: 'Error Message',
      detail: 'Validation failed'
    }
    growl.current.show(msg)
    messages.current.show(msg)
  }

  return (
    <>
      <h1>Messages and Growl</h1>
      <Messages ref={messages} />
      <Growl ref={growl} style={{ marginTop: '75px' }} />

      <Button
        onClick={showInfo}
        label='Info'
        className='p-button-info'
        style={{ width: '10em', marginRight: '.25em' }}
      />
      <Button
        onClick={showSuccess}
        label='Success'
        className='p-button-success'
        style={{ width: '10em', marginRight: '.25em' }}
      />
      <Button
        onClick={showWarn}
        label='Warn'
        className='p-button-warning'
        style={{ width: '10em', marginRight: '.25em' }}
      />
      <Button
        onClick={showError}
        label='Error'
        className='p-button-danger'
        style={{ width: '10em', marginRight: '.25em' }}
      />
    </>
  )
}

export default MessagesGrowl
