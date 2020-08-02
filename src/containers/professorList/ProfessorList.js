import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
// import { itemTemplate } from '../../utils/itemTemplate'

// const profTemplate = itemTemplate('name')

export default React.memo(function ProfessorList ({ professors = [] }) {
  return (
    <>
      <DataTable value={professors}>
        <Column field='name' header='Nome da disciplina' />
        {/* <Column field='teachers' header='Professores' body={profTemplate} /> */}
      </DataTable>
    </>
  )
})
