import React from 'react'
import { Button } from 'primereact/button'

export const AddUpdateAndCancelButton = React.memo(
  ({ updating, onCancel = () => null }) => {
    return (
      <div className='p-col-12 flex p-justify-end'>
        <Button
          type='button'
          label='Cancelar'
          icon='pi pi-times'
          className='p-button-secondary'
          onClick={onCancel}
        />
        <Button
          type='submit'
          label={updating ? 'Atualizar' : 'Adicionar'}
          icon={`pi ${updating ? 'pi-pencil' : 'pi-check'}`}
        />
      </div>
    )
  }
)
