import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { getAllDisciplines } from '../../services/clients'
import { useAutocomplete } from '../../components/useAutocomplete/useAutocomplete'

const FIELD_ID = {
  name: 'name',
  maxDiscipline: 'maxDiscipline'
}

const autoCompleteParams = { id: 'Disciplines' }

export default React.memo(function CourseForm (props) {
  const {
    data: {
      Disciplines,
      selectedDisciplines,
      setDisciplines,
      setFilteredDisciplines
    },
    Autocomplete
  } = useAutocomplete(autoCompleteParams)

  React.useEffect(() => {
    const getDisciplines = async () => {
      const disciplines = await getAllDisciplines()
      setDisciplines(disciplines)
      setFilteredDisciplines(disciplines.map(({ name }) => name))
    }

    getDisciplines()
    // eslint-disable-next-line
  }, [])

  const hadleSubmit = async ev => {
    ev.preventDefault()

    const { value: name } = ev.currentTarget[FIELD_ID.name]
    const { value: maxDisciplines } = ev.currentTarget[FIELD_ID.maxDiscipline]

    const courseDisciplines = Disciplines.filter(discipline =>
      selectedDisciplines.includes(discipline.name)
    )

    const newCourse = {
      name,
      maxDisciplines: Number(maxDisciplines),
      disciplines: courseDisciplines
    }

    props.onSubmit(newCourse)
  }

  return (
    <form onSubmit={hadleSubmit}>
      <div className='p-fluid p-formgrid p-grid'>
        <div className='p-field p-col-12 p-sm-6 '>
          <label htmlFor={FIELD_ID.name}>Nome</label>
          <InputText
            id={FIELD_ID.name}
            placeholder='Ciência da computação'
            type='text'
            required
          />
        </div>
        <div className='p-field p-col-12 p-sm-6'>
          <label htmlFor={FIELD_ID.maxDiscipline}>Máx. de Disciplinas</label>
          <InputText id={FIELD_ID.maxDiscipline} type='number' required />
        </div>
        <div className='p-field p-col-12'>
          <label>Professores</label>
          {Autocomplete}
        </div>
        <div className='p-col-12 flex p-justify-end'>
          <Button type='submit' label='Adicionar' icon='pi pi-check' />
        </div>
      </div>
    </form>
  )
})
