import React from 'react'
import CourseForm from '../../containers/courseForm/CourseForm'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { addCourse, getAllCourses } from '../../services/clients'
import { itemTemplate } from '../../utils/itemTemplate'

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

      addCourse(newCourseData)
        .then(courseCreated => setCourses([courseCreated, ...coursesCopy]))
        .catch(error => {
          console.log('To do: Show some error', error)
          setCourses(coursesCopy)
        })

      setCourses([newCourseData, ...courses])
    },
    [courses]
  )

  return (
    <>
      <CourseForm onSubmit={handleSubmit} />

      <DataTable value={courses}>
        <Column field='name' header='Nome do curso' />
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
