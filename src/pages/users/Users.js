import { TabView, TabPanel } from 'primereact/tabview'
import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import {
  addProfessor,
  getAllProfessors,
  getAllStudents,
  addStudent,
  updateProfessor,
  updateStudent
} from '../../services/clients'
import { itemTemplate } from '../../utils/itemTemplate'
import UserForm from '../../containers/userForm/UserForm'
import { displayClass } from '../../utils/displayClass'
import { TABLE_FIlTER, TYPES } from '../../utils/consts'
import { handleUpdate } from '../../utils/handleUpdate'

const classTemplate = itemTemplate('name', (acc, item, idx) => {
  return `${acc}${idx === 0 ? '' : ', '}${displayClass(item)}`
})
const nameTemplate = itemTemplate('name')

export default React.memo(function Users () {
  const [students, setStudents] = React.useState([])
  const [professors, setProfessors] = React.useState([])

  React.useEffect(() => {
    const getProfessors = async () => {
      const allProfs = await getAllProfessors()
      setProfessors(allProfs)
    }
    const getStudents = async () => {
      const allStudents = await getAllStudents()
      setStudents(allStudents)
    }

    getProfessors()
    getStudents()
  }, [])

  const handleSubmit = React.useCallback(
    (newUserDate, userType) => {
      const addNewUser = (setData, registerData, data) => {
        const copy = [...data]
        setData([newUserDate, ...data])
        registerData(newUserDate)
          .then(dataCrated => setData([dataCrated, ...copy]))
          .catch(error => {
            console.log('To do: Show some error', error)
            setData(copy)
          })
      }

      if (userType === TYPES.prof) {
        addNewUser(setProfessors, addProfessor, professors)
        return
      }

      addNewUser(setStudents, addStudent, students)
    },
    // eslint-disable-next-line
    [students, professors]
  )
  const handleUpdateUser = React.useCallback(
    (userToUpdate, userType) => {
      if (userType === TYPES.prof) {
        handleUpdate(professors, setProfessors, updateProfessor)(userToUpdate)
      } else {
        handleUpdate(students, setStudents, updateStudent)(userToUpdate)
      }
    },
    // eslint-disable-next-line
    [students, professors]
  )

  const [userSelected, setUserSelected] = React.useState()
  const filterDataTableProps = React.useMemo(
    () => ({
      selectionMode: 'single',
      onSelectionChange: e => setUserSelected(e.value),
      selection: userSelected
    }),
    [userSelected]
  )
  const handelCancelForm = React.useCallback(
    () => setUserSelected(undefined),
    []
  )
  return (
    <>
      <UserForm
        onSubmit={handleSubmit}
        onUpdate={handleUpdateUser}
        onCancel={handelCancelForm}
        dataToUpdate={userSelected}
      />

      <TabView>
        <TabPanel header='Alunos'>
          <DataTable value={students} {...filterDataTableProps} responsive>
            <Column field='code' header='Código' {...TABLE_FIlTER} />
            <Column field='name' header='Nome' {...TABLE_FIlTER} />
            <Column field='email' header='E-mail' />
            <Column field='cpf' header='CPF' {...TABLE_FIlTER} />
            <Column field='enroled' header='Turmas' body={classTemplate} />
          </DataTable>
        </TabPanel>
        <TabPanel header='Professores'>
          <DataTable value={professors} {...filterDataTableProps} responsive>
            <Column field='name' header='Nome' {...TABLE_FIlTER} />
            <Column field='email' header='E-mail' />
            <Column field='cpf' header='CPF' {...TABLE_FIlTER} />
            <Column
              field='disciplines'
              header='Disciplinas'
              body={nameTemplate}
            />
            <Column field='classes' header='Disciplinas' body={classTemplate} />
          </DataTable>
        </TabPanel>
      </TabView>
    </>
  )
})
