import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { addClass, getAllClasses, updateClass } from '../../services/clients'
import ClassForm from '../../containers/classForm/ClassForm'
import { TABLE_FIlTER } from '../../utils/consts'
const nameTemplate = (rowData, col) => {
  const professor = rowData[col.field] || {}

  return <span>{professor.name}</span>
}
export default React.memo(function Classes () {
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
  const handleUpdate = (data, setData, updateRealData) => classToUpdate => {
    const classesCopy = [...data]

    const dataUpdated = data.map(unitData =>
      unitData.id === classToUpdate.id ? classToUpdate : unitData
    )

    setData(dataUpdated)
    updateRealData(classToUpdate)
      .then(() => null)
      .catch(error => {
        console.log('To do: Show some error', error)
        setClasses(classesCopy)
      })
  }

  const handleUpdateClass = React.useCallback(
    handleUpdate(classes, setClasses, updateClass),
    [classes]
  )

  const [classSelected, setClassSelected] = React.useState()
  const handelCancelForm = React.useCallback(
    () => setClassSelected(undefined),
    []
  )
  return (
    <>
      <ClassForm
        onSubmit={handleSubmit}
        onCancel={handelCancelForm}
        dataToUpdate={classSelected}
        onUpdate={handleUpdateClass}
      />

      <DataTable
        value={classes}
        selectionMode='single'
        onSelectionChange={e => setClassSelected(e.value)}
        selection={classSelected}
      >
        <Column field='code' header='Código' {...TABLE_FIlTER} />
        <Column field='shift' header='Turno' {...TABLE_FIlTER} />
        <Column field='startDate' header='Data de início' {...TABLE_FIlTER} />
        <Column field='discipline' header='Disciplina' body={nameTemplate} />
        <Column field='teacher' header='Professores' body={nameTemplate} />
      </DataTable>
    </>
  )
})
