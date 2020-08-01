import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { addDiscipline, getAllDisciplines } from '../../services/clients'
import DisciplineForm from '../../containers/disciplineForm/DisciplineForm'
import { itemTemplate } from '../../utils/itemTemplate'

const profTemplate = itemTemplate('name')

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

      addDiscipline(newDiscipData)
        .then(discipCreated => setDisciplines([discipCreated, ...discipCopy]))
        .catch(error => {
          console.log('To do: Show some error', error)
          setDisciplines(discipCopy)
        })

      setDisciplines([newDiscipData, ...disciplines])
    },
    [disciplines]
  )

  return (
    <>
      <DisciplineForm onSubmit={handleSubmit} />

      <DataTable value={disciplines}>
        <Column field='name' header='Nome da disciplina' />
        <Column field='teachers' header='Professores' body={profTemplate} />
      </DataTable>
    </>
  )
})
