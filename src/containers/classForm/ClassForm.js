import { Calendar } from 'primereact/calendar'
import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useAutocomplete } from '../../components/useAutocomplete/useAutocomplete'
import {
  getAllDisciplines,
  getAllProfessorsByDiscipline
} from '../../services/clients'
import { formatDate } from '../../utils/formatDate'

const FIELD_ID = {
  maxVacancies: 'maxVacancies'
}

const SHIFT_OPTIONS = [
  { name: 'Matutino' },
  { name: 'Verspetino' },
  { name: 'Noturno' },
  { name: 'Integral' }
]
const SHIFT_TO_FILTER = SHIFT_OPTIONS.map(({ name }) => name)

const autoCompleteParams = {
  disciplines: {
    id: 'Disciplines',
    autoCompleteData: { multiple: false }
  },
  professors: {
    id: 'Prof'
  },
  shift: {
    id: 'Shift',
    autoCompleteData: { multiple: false }
  }
}

export default React.memo(function DisciplineForm (props) {
  const {
    data: {
      Disciplines,
      selectedDisciplines,
      setDisciplines,
      setFilteredDisciplines,
      setSelectedDisciplines
    },
    Autocomplete: DisciplineField
  } = useAutocomplete(autoCompleteParams.disciplines)

  const selectTeacherDisabled = React.useMemo(
    () => !Disciplines.find(({ name }) => name === selectedDisciplines),
    // eslint-disable-next-line
    [selectedDisciplines]
  )

  const {
    data: { Prof, selectedProf, setProf, setFilteredProf, setSelectedProf },
    Autocomplete: ProfessorsField
  } = useAutocomplete({
    ...autoCompleteParams.professors,
    autoCompleteData: { multiple: false, disabled: selectTeacherDisabled }
  })

  const {
    data: {
      Shift,
      selectedShift,
      setShift,
      setFilteredShift,
      setSelectedShift
    },
    Autocomplete: ShiftField
  } = useAutocomplete(autoCompleteParams.shift)

  const [startDate, setStartDate] = React.useState(null)

  React.useEffect(() => {
    const getDisciplines = async () => {
      const disciplines = await getAllDisciplines()
      setDisciplines(disciplines)
      setFilteredDisciplines(disciplines.map(({ name }) => name))
    }

    getDisciplines()

    setShift(SHIFT_OPTIONS)
    setFilteredShift(SHIFT_TO_FILTER)
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    const getProfessors = async () => {
      const discipline = Disciplines.find(
        ({ name }) => name === selectedDisciplines
      )
      if (discipline) {
        const professors = await getAllProfessorsByDiscipline(discipline.id)
        setProf(professors)
        setFilteredProf(professors.map(({ name }) => name))
      }
    }
    if (selectedDisciplines.length) {
      getProfessors()
    }
    // eslint-disable-next-line
  }, [selectedDisciplines])

  // fill form when have data to update
  React.useEffect(() => {
    if (props.dataToUpdate) {
      const {
        discipline,
        teacher,
        shift,
        maxVacancies,
        startDate: _startDate
      } = props.dataToUpdate

      setSelectedDisciplines(discipline.name)
      setSelectedProf(teacher.name)
      setSelectedShift(shift)
      document.getElementById(FIELD_ID.maxVacancies).value = maxVacancies
      setStartDate(_startDate)
    }

    // eslint-disable-next-line
  }, [props.dataToUpdate])

  const hadleSubmit = async ev => {
    ev.preventDefault()
    // TO DO: input add validation

    const { value: vacancies } = ev.currentTarget[FIELD_ID.maxVacancies]
    const _startDate = formatDate(startDate)
    const discipline = Disciplines.find(
      ({ name }) => name === selectedDisciplines
    )
    const teacher = Prof.find(({ name }) => name === selectedProf)
    const { name: shift } = Shift.find(({ name }) => name === selectedShift)
    const code = new Date().getTime()

    const newClass = {
      discipline,
      maxVacancies: Number(vacancies),
      teacher,
      shift,
      startDate: _startDate,
      code
    }

    if (props.dataToUpdate) {
      return props.onUpdate({
        ...newClass,
        id: props.dataToUpdate.id,
        code: props.dataToUpdate.code
      })
    }

    props.onSubmit(newClass)
  }

  return (
    <form onSubmit={hadleSubmit}>
      <div className='p-fluid p-formgrid p-grid'>
        <div className='p-field p-col-12 p-sm-6 '>
          <label htmlFor={FIELD_ID.discipline}>Disciplina</label>
          {DisciplineField}
        </div>
        <div className='p-field p-col-12 p-sm-6'>
          <label>Professor</label>
          {ProfessorsField}
        </div>
        <div className='p-field p-col-6 p-sm-4'>
          <label>Turno</label>
          {ShiftField}
        </div>
        <div className='p-field p-col-6 p-sm-2'>
          <label htmlFor={FIELD_ID.maxVacancies}>N° de vagas</label>
          <InputText
            id={FIELD_ID.maxVacancies}
            placeholder='Ex.: 30'
            type='number'
            min='0'
            required
          />
        </div>
        <div className='p-field p-col-12 p-sm-6'>
          <label>Data de início</label>
          <Calendar
            value={startDate}
            placeholder='Selecione uma data...'
            onChange={e => setStartDate(e.value)}
            dateFormat='dd/mm/yy'
            required
          />
        </div>

        <div className='p-col-12 flex p-justify-end'>
          <Button type='submit' label='Adicionar' icon='pi pi-check' />
        </div>
      </div>
    </form>
  )
})
