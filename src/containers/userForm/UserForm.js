import { Calendar } from 'primereact/calendar'
import React from 'react'
import { InputText } from 'primereact/inputtext'
import { useAutocomplete } from '../../components/useAutocomplete/useAutocomplete'
import { formatDate } from '../../utils/formatDate'
import { getAllClasses, getAllDisciplines } from '../../services/clients'
import { displayClass } from '../../utils/displayClass'
import { TYPES } from '../../utils/consts'
import { AddUpdateAndCancelButton } from '../../components/addUpdateButton/AddUpdateButton'

const FIELD_ID = {
  name: 'name',
  cpf: 'cpf',
  email: 'email',
  phone: 'phone'
}
const GENDER_OPTIONS = [
  { name: 'Homem' },
  { name: 'Mulher' },
  { name: 'Não binário' },
  { name: 'Não responder' }
]

const GENDER_TO_FILTER = GENDER_OPTIONS.map(({ name }) => name)

const TYPE_OPTIONS = [{ name: TYPES.prof }, { name: TYPES.student }]

const TYPE_TO_FILTER = GENDER_OPTIONS.map(({ name }) => name)

const autoCompleteParams = {
  gender: { id: 'Gender', autoCompleteData: { multiple: false } },
  userType: {
    id: 'Type',
    autoCompleteData: { multiple: false, required: true }
  },
  disciplines: { id: 'Disciplines' },
  classes: { id: 'Classes', autoCompleteData: { required: true } }
}

export default React.memo(function UserForm (props) {
  const [birthDate, setBirthDate] = React.useState(null)
  const {
    data: { selectedGender, setGender, setFilteredGender, setSelectedGender },
    Autocomplete
  } = useAutocomplete(autoCompleteParams.gender)
  const {
    data: { selectedType, setType, setFilteredType, setSelectedType },
    Autocomplete: UserTypeField
  } = useAutocomplete(autoCompleteParams.userType)

  const {
    data: {
      Disciplines,
      selectedDisciplines,
      setDisciplines,
      setFilteredDisciplines,
      setSelectedDisciplines
    },
    Autocomplete: DisciplinesField
  } = useAutocomplete(autoCompleteParams.disciplines)

  const {
    data: {
      Classes,
      selectedClasses,
      setClasses,
      setFilteredClasses,
      setSelectedClasses
    },
    Autocomplete: ClassesField
  } = useAutocomplete(autoCompleteParams.classes)

  React.useEffect(() => {
    getAllClasses()
      .then(classes => {
        setClasses(
          classes.map(_class => ({ ..._class, name: displayClass(_class) }))
        )
        setFilteredClasses(classes.map(displayClass))
      })
      .catch(err => console.log('To do: Show some error message: ', err))

    setGender(GENDER_OPTIONS)
    setFilteredGender(GENDER_TO_FILTER)

    setType(TYPE_OPTIONS)
    setFilteredType(TYPE_TO_FILTER)

    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (selectedType === TYPES.prof) {
      if (!Disciplines.length) {
        getAllDisciplines()
          .then(_disciplines => {
            const disciplineNames = _disciplines.map(({ name }) => name)
            setDisciplines(_disciplines)
            setFilteredDisciplines(disciplineNames)
          })
          .catch(err => console.log('To do: Show some error message: ', err))
      }
    }

    // eslint-disable-next-line
  }, [selectedType])

  // fill form when have data to update
  React.useEffect(() => {
    if (props.dataToUpdate) {
      const {
        name,
        cpf,
        birthDate: _birthDate,
        gender,
        email,
        phone,
        disciplines,
        enroled,
        classes
      } = props.dataToUpdate

      // If has disciplines It is professor
      if (disciplines) {
        setSelectedType(TYPES.prof)
        setSelectedClasses(classes.map(displayClass))
        setSelectedDisciplines(disciplines.map(({ name }) => name))
      } else {
        setSelectedType(TYPES.student)
        setSelectedClasses(enroled.map(displayClass))
      }

      setSelectedGender(gender)
      document.getElementById(FIELD_ID.name).value = name
      document.getElementById(FIELD_ID.email).value = email
      document.getElementById(FIELD_ID.cpf).value = cpf
      document.getElementById(FIELD_ID.phone).value = phone
      setBirthDate(_birthDate)
    }

    // eslint-disable-next-line
  }, [props.dataToUpdate])

  const hadleSubmit = async ev => {
    ev.preventDefault()
    const { value: name } = ev.currentTarget[FIELD_ID.name]
    const { value: cpf } = ev.currentTarget[FIELD_ID.cpf]
    const { value: email } = ev.currentTarget[FIELD_ID.email]
    const { value: phone } = ev.currentTarget[FIELD_ID.phone]
    const gender = selectedGender
    const _birthDate = formatDate(birthDate)
    const classes = Classes.filter(_class =>
      selectedClasses.includes(displayClass(_class))
    )

    const newPerson = {
      name,
      cpf,
      birthDate: _birthDate,
      gender,
      email,
      phone
    }

    if (selectedType === TYPES.prof) {
      const disciplines = Disciplines.filter(({ name }) =>
        selectedDisciplines.includes(name)
      )
      const newProfessor = { ...newPerson, classes, disciplines }
      props.onSubmit(newProfessor, TYPES.prof)
      return
    }

    const newStudet = {
      ...newPerson,
      enroled: classes,
      code: new Date().getTime()
    }

    props.onSubmit(newStudet, TYPES.student)
  }

  const disciplineIsDisabled = React.useMemo(
    () => !selectedType.includes(TYPES.prof),
    [selectedType]
  )

  return (
    <form onSubmit={hadleSubmit}>
      <div className='p-fluid p-formgrid p-grid'>
        <div className='p-field p-col-12 p-sm-3'>
          <label>Tipo de Usuário</label>
          {UserTypeField}
        </div>
        <div className='p-field p-col-12 p-sm-5 '>
          <label htmlFor={FIELD_ID.name}>Nome</label>
          <InputText
            id={FIELD_ID.name}
            placeholder='Ex.: Luiz Fellype Cassago de Souza'
            type='text'
            required
          />
        </div>
        <div className='p-field p-col-12 p-sm-4'>
          <label htmlFor={FIELD_ID.cpf}>CPF</label>
          <InputText
            id={FIELD_ID.cpf}
            placeholder='14513525868'
            type='number'
            required
          />
        </div>

        <div className='p-field p-col-12 p-sm-6'>
          <label htmlFor={FIELD_ID.email}>Email</label>
          <InputText
            id={FIELD_ID.email}
            placeholder='Ex.: lfcassago@gmail.com'
            type='email'
            required
          />
        </div>
        <div className='p-field p-col-12 p-sm-6'>
          <label htmlFor={FIELD_ID.phone}>Telefone</label>
          <InputText id={FIELD_ID.phone} type='number' required />
        </div>

        <div className='p-field p-col-12 p-sm-3'>
          <label>Data de Nasc.</label>
          <Calendar
            value={birthDate}
            placeholder='Selecione uma data...'
            onChange={e => setBirthDate(e.value)}
            required
          />
        </div>
        <div className='p-field p-col-12 p-sm-3'>
          <label>Gênero</label>
          {Autocomplete}
        </div>
        <div className='p-field p-col-12 p-sm-6'>
          <label>Classes</label>
          {ClassesField}
        </div>

        {!disciplineIsDisabled && (
          <div className='p-field p-col-12'>
            <label>Disciplinas</label>
            {DisciplinesField}
          </div>
        )}

        <AddUpdateAndCancelButton
          onCancel={props.onCancel}
          updating={props.dataToUpdate}
        />
      </div>
    </form>
  )
})
