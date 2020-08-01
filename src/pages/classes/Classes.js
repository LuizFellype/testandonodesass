import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { addClass, getAllClasses } from '../../services/clients'
import ClassForm from '../../containers/classForm/ClassForm'

// const startDateTemplate = (rowData, col) => {
//   const date = new Date(rowData[col.field])
//   const day = date.getDate()
//   const month = date.getMonth()
//   const year = date.getFullYear()

//   return (
//     <span>
//       {day < 10 ? `0${day}` : day}/{day < 10 ? `0${month}` : month}/{year}
//     </span>
//   )
// }
const nameTemplate = (rowData, col) => {
  const professor = rowData[col.field] || {}

  return <span>{professor.name}</span>
}
export default React.memo(function Courses () {
  const [classes, setClasses] = React.useState([])

  React.useEffect(() => {
    const getDisciplines = async () => {
      const allClasses = await getAllClasses()
      setClasses(allClasses)
    }

    getDisciplines()
  }, [])

  const handleSubmit = React.useCallback(
    newClassData => {
      const classCopy = [...classes]

      addClass(newClassData)
        .then(discipCreated => setClasses([discipCreated, ...classCopy]))
        .catch(error => {
          console.log('To do: Show some error', error)
          setClasses(classCopy)
        })

      setClasses([newClassData, ...classes])
    },
    [classes]
  )
  console.log(classes)
  return (
    <>
      <ClassForm onSubmit={handleSubmit} />

      <DataTable value={classes}>
        <Column field='code' header='Código' />
        <Column
          field='startDate'
          header='Data de início'
          // body={startDateTemplate}
        />
        <Column field='discipline' header='Disciplina' body={nameTemplate} />
        <Column field='teacher' header='Professores' body={nameTemplate} />
      </DataTable>
    </>
  )
})
