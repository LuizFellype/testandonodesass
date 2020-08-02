import React from 'react'
import { InputText } from 'primereact/inputtext'
import { getAllDisciplines } from '../../services/clients'
import { useAutocomplete } from '../../components/useAutocomplete/useAutocomplete'
import { AddUpdateAndCancelButton } from '../../components/addUpdateButton/AddUpdateButton'

const FIELD_ID = {
  name: 'name',
  maxDiscipline: 'maxDiscipline'
}

const autoCompleteParams = { id: 'Disciplines' }

export default React.memo(function CourseForm (props) {
  // const hitMaxOfDisciplines = React.useMemo(() => {
  //   if (props.dataToUpdate) {
  //     console.log(props.dataToUpdate.maxDisciplines, document.getElementById(FIELD_ID.maxDiscipline).value)
  //   }
  // }, [props.dataToUpdate])
  const [hitMaxOfDisciplines, setHitMaxOfDiscipline] = React.useState(false)
  const {
    data: {
      Disciplines,
      selectedDisciplines,
      setDisciplines,
      setFilteredDisciplines,
      setSelectedDisciplines
    },
    Autocomplete
  } = useAutocomplete({
    ...autoCompleteParams,
    autoCompleteData: { disabled: hitMaxOfDisciplines }
  })

  const _setDisciplines = React.useCallback(disciplines => {
    setDisciplines(disciplines)
    setFilteredDisciplines(disciplines.map(({ name }) => name))
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    const { value: maxDiscipInput } =
      document.getElementById(FIELD_ID.maxDiscipline) || {}
    const max = Number(maxDiscipInput)

    if (max !== 0 && selectedDisciplines.length === max) {
      setHitMaxOfDiscipline(true)
    } else if (max !== 0 && selectedDisciplines.length > max) {
      const maxOfDiscip = selectedDisciplines.slice(0, max)
      setSelectedDisciplines(maxOfDiscip)
    } else {
      hitMaxOfDisciplines && setHitMaxOfDiscipline(false)
    }
    // eslint-disable-next-line
  }, [selectedDisciplines, props.dataToUpdate])

  React.useEffect(() => {
    const getDisciplines = async () => {
      const disciplines = await getAllDisciplines()
      _setDisciplines(disciplines)
    }

    getDisciplines()
    // eslint-disable-next-line
  }, [])

  // fill form when have data to update
  React.useEffect(() => {
    if (props.dataToUpdate) {
      document.getElementById(FIELD_ID.name).value = props.dataToUpdate.name
      document.getElementById(FIELD_ID.maxDiscipline).value =
        props.dataToUpdate.maxDisciplines
      setSelectedDisciplines(
        props.dataToUpdate.disciplines.map(({ name }) => name)
      )
    }

    // eslint-disable-next-line
  }, [props.dataToUpdate])

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

    if (props.dataToUpdate) {
      props.onUpdate({ ...props.dataToUpdate, ...newCourse })
      return props.onCancel()
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
          <label>Disciplinas</label>
          {Autocomplete}
        </div>

        <AddUpdateAndCancelButton
          onCancel={props.onCancel}
          updating={props.dataToUpdate}
        />
      </div>
    </form>
  )
})
