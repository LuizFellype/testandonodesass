import React from 'react'
import CourseForm from '../../containers/courseForm/CourseForm'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { addCourse, updateCourse, getAllCourses } from '../../services/clients'
import { itemTemplate } from '../../utils/itemTemplate'
import { TABLE_FIlTER } from '../../utils/consts'
import { handleUpdate } from '../../utils/handleUpdate'

const disciplineTemplate = itemTemplate('name')

export default React.memo(function Courses () {
  const [courses, setCourses] = React.useState([])

  React.useEffect(() => {
    const getCourses = async () => {
      const allCoures = await getAllCourses()
      setCourses(allCoures)
    }

    getCourses()
  }, [])

  const handleSubmit = React.useCallback(
    newCourseData => {
      const coursesCopy = [...courses]

      setCourses([newCourseData, ...courses])
      addCourse(newCourseData)
        .then(courseCreated => setCourses([courseCreated, ...coursesCopy]))
        .catch(error => {
          console.log('To do: Show some error', error)
          setCourses(coursesCopy)
        })
    },
    [courses]
  )

  const handleUpdateCourse = React.useCallback(
    handleUpdate(courses, setCourses, updateCourse),
    [courses]
  )

  const [courseSelected, setCourseSelected] = React.useState()

  return (
    <>
      <CourseForm
        onSubmit={handleSubmit}
        onUpdate={handleUpdateCourse}
        dataToUpdate={courseSelected}
      />

      <DataTable
        value={courses}
        selectionMode='single'
        onSelectionChange={e => setCourseSelected(e.value)}
      >
        <Column field='name' header='Nome do curso' {...TABLE_FIlTER} />
        <Column
          field='disciplines'
          header='Disciplinas'
          body={disciplineTemplate}
        />
        <Column field='maxDisciplines' header='Máx. de Disciplinas' />
      </DataTable>
    </>
  )
})
