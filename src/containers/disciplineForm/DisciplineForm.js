import React from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { useAutocomplete } from '../../components/useAutocomplete/useAutocomplete'
import { getAllProfessors } from '../../services/clients'
import { AddUpdateAndCancelButton } from '../../components/addUpdateButton/AddUpdateButton'

const FIELD_ID = {
  name: 'name',
  references: 'references'
}

const autoCompleteParams = { id: 'Professors' }

export default React.memo(function DisciplineForm (props) {
  const {
    data: {
      Professors,
      selectedProfessors,
      setProfessors,
      setFilteredProfessors,
      setSelectedProfessors
    },
    Autocomplete
  } = useAutocomplete(autoCompleteParams)

  React.useEffect(() => {
    const getProfessors = async () => {
      const data = await getAllProfessors()
      setProfessors(data)
      setFilteredProfessors(data.map(({ name }) => name))
    }

    getProfessors()
    // eslint-disable-next-line
  }, [])
  React.useEffect(() => {
    if (props.dataToUpdate) {
      const { teachers, name, references } = props.dataToUpdate
      document.getElementById(FIELD_ID.name).value = name
      document.getElementById(FIELD_ID.references).value = references
      setSelectedProfessors(teachers.map(({ name }) => name))
    }
    // eslint-disable-next-line
  }, [props.dataToUpdate])

  const hadleSubmit = async ev => {
    ev.preventDefault()

    const { value: name } = ev.currentTarget[FIELD_ID.name]
    const { value: references } = ev.currentTarget[FIELD_ID.references]

    const teachers = Professors.filter(discipline =>
      selectedProfessors.includes(discipline.name)
    )

    const newDiscipline = {
      name,
      references,
      teachers
    }

    if (props.dataToUpdate) {
      props.onUpdate({ ...props.dataToUpdate, ...newDiscipline })
      return props.onCancel()
    }

    props.onSubmit(newDiscipline)
  }

  return (
    <form onSubmit={hadleSubmit}>
      <div className='p-fluid p-formgrid p-grid'>
        <div className='p-field p-col-12 p-sm-6 '>
          <label htmlFor={FIELD_ID.name}>Nome</label>
          <InputText
            id={FIELD_ID.name}
            placeholder='Matemática'
            type='text'
            required
          />
        </div>
        <div className='p-field p-col-12 p-sm-6'>
          <label>Professores</label>
          {Autocomplete}
        </div>
        <div className='p-field p-col-12'>
          <label htmlFor={FIELD_ID.references}>Referências</label>
          <InputTextarea id={FIELD_ID.references} type='text' rows={4} />
        </div>

        <AddUpdateAndCancelButton
          onCancel={props.onCancel}
          updating={props.dataToUpdate}
        />
      </div>
    </form>
  )
})
