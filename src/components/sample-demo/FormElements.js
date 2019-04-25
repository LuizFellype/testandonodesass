import React, { useState } from 'react'

// Prime form elements
import { InputText } from 'primereact/inputtext'
import { InputMask } from 'primereact/inputmask'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

const FormElements = () => {
  const [dialogVisible, setDialogVisible] = useState(false)

  const dialogFooter = (
    <Button
      label='Login'
      icon='pi pi-user'
      onClick={() => setDialogVisible(false)}
    />
  )

  return (
    <div className='card card-w-title'>
      <h1>Form Elements</h1>
      <div className='p-grid'>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='mask'>Mask</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <InputMask
            id='mask'
            mask='99/99/9999'
            slotChar='dd/mm/yyyy'
            placeholder='Date'
          />
        </div>

        <div className='p-col-12 p-md-2'>Dialog</div>
        <div className='p-col-12 p-md-4'>
          <Button
            label='Login'
            icon='pi pi-external-link'
            onClick={() => setDialogVisible(true)}
          />
        </div>
      </div>

      <Dialog
        header='Login'
        visible={dialogVisible}
        footer={dialogFooter}
        onHide={() => setDialogVisible(false)}
      >
        <div className='p-grid'>
          <div className='p-col-12'>
            <InputText placeholder='Username' />
          </div>
          <div className='p-col-12'>
            <InputText placeholder='Password' />
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default FormElements
