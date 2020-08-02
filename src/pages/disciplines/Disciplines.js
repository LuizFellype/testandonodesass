import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { addDiscipline, getAllDisciplines } from '../../services/clients'
import DisciplineForm from '../../containers/disciplineForm/DisciplineForm'
import { itemTemplate } from '../../utils/itemTemplate'
import { TABLE_FIlTER } from '../../utils/consts'

const nameTemplate = itemTemplate('name')

export default React.memo(function Courses () {
  const [disciplines, setDisciplines] = React.useState([])

  React.useEffect(() => {
    const getDisciplines = async () => {
      const allDiscip = await getAllDisciplines()
      setDisciplines(allDiscip)
    }

    getDisciplines()
  }, [])

  const handleSubmit = React.useCallback(
    newDiscipData => {
      const discipCopy = [...disciplines]

      setDisciplines([newDiscipData, ...disciplines])
      addDiscipline(newDiscipData)
        .then(discipCreated => setDisciplines([discipCreated, ...discipCopy]))
        .catch(error => {
          console.log('To do: Show some error', error)
          setDisciplines(discipCopy)
        })
    },
    [disciplines]
  )

  return (
    <>
      <DisciplineForm onSubmit={handleSubmit} />

      <DataTable value={disciplines}>
        <Column field='name' header='Nome da disciplina' {...TABLE_FIlTER} />
        <Column field='teachers' header='Professores' body={nameTemplate} />
        <Column
          field='courses'
          header='Cursos'
          body={nameTemplate}
          {...TABLE_FIlTER}
        />
      </DataTable>
    </>
  )
})
