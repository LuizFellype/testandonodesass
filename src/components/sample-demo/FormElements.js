import React, { useState, useEffect } from 'react'

// Services
import CountryService from '../../service/CountryService'

// Constants config
import {
  cities,
  splitButtonItems,
  carOptions,
  types,
  listboxCities
} from '../../constants'

// Prime form elements
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Calendar } from 'primereact/calendar'
import { AutoComplete } from 'primereact/autocomplete'
import { Dropdown } from 'primereact/dropdown'
import { Password } from 'primereact/password'
import { InputMask } from 'primereact/inputmask'
import { Spinner } from 'primereact/spinner'
import { Checkbox } from 'primereact/checkbox'
import { RadioButton } from 'primereact/radiobutton'
import { Slider } from 'primereact/slider'
import { Button } from 'primereact/button'
import { SplitButton } from 'primereact/splitbutton'
import { MultiSelect } from 'primereact/multiselect'
import { ToggleButton } from 'primereact/togglebutton'
import { SelectButton } from 'primereact/selectbutton'
import { ListBox } from 'primereact/listbox'
import { Dialog } from 'primereact/dialog'

const FormElements = () => {
  const [date, setDate] = useState(null)
  const [country, setCountry] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [countriesData, setCountriesData] = useState([])
  const [dropdownCity, setDropdownCity] = useState(null)
  const [spinnerValue, setSpinnerValue] = useState(null)
  const [checkboxValue, setCheckboxValue] = useState([])
  const [radioValue, setRadioValue] = useState(null)
  const [sliderValue, setSliderValue] = useState(null)
  const [selectedCars, setSelectedCars] = useState([])
  const [toggleButtonValue, setToggleButtonValue] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [listboxCity, setListboxCity] = useState(null)
  const [dialogVisible, setDialogVisible] = useState(false)

  // Component did mount
  useEffect(() => {
    CountryService.getCountries(setCountriesData)
  }, [])

  const filterCountry = ({ query }) => {
    const results = countriesData.filter(({ name }) => {
      return name.toLowerCase().startsWith(query.toLowerCase())
    })

    setFilteredCountries(results)
  }

  const onCheckboxChange = ({ checked, value }) => {
    const selected = [...checkboxValue]

    if (checked) selected.push(value)
    else selected.splice(selected.indexOf(value), 1)

    setCheckboxValue(selected)
  }

  const dialogFooter = (
    <Button
      label='Login'
      icon='pi pi-user'
      onClick={() => setDialogVisible(false)}
    />
  )

  return (
    <div className='card card-w-title'>
      <h1>Form Elements</h1>
      <div className='p-grid'>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='input'>Input</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <InputText id='input' />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='textarea'>Textarea</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <InputTextarea id='textarea' rows={3} cols={30} autoResize />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='calendar'>Calendar</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <Calendar
            id='calendar'
            value={date}
            onChange={({ value }) => setDate(value)}
          />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='autocomplete'>AutoComplete</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <AutoComplete
            minLength={1}
            placeholder='Countries'
            id='autocomplete'
            field='name'
            suggestions={filteredCountries}
            completeMethod={filterCountry}
            value={country}
            onChange={({ value }) => {
              setCountry(value)
              setFilteredCountries(null)
            }}
          />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='dropdown'>Dropdown</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <Dropdown
            options={cities}
            value={dropdownCity}
            onChange={({ value }) => setDropdownCity(value)}
            autoWidth={false}
          />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='password'>Password</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <Password id='password' placeholder='******' />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='mask'>Mask</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <InputMask
            id='mask'
            mask='99/99/9999'
            slotChar='dd/mm/yyyy'
            placeholder='Date'
          />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='spinner'>Spinner</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <Spinner
            value={spinnerValue}
            onChange={({ value }) => setSpinnerValue(value)}
          />
        </div>

        <div className='p-col-12 p-md-2'>Checkbox</div>
        <div className='p-col-12 p-md-4'>
          <div className='p-grid'>
            <div className='p-col-12'>
              <Checkbox
                value='Ultima'
                inputId='cb1'
                onChange={onCheckboxChange}
                checked={checkboxValue.indexOf('Ultima') > -1}
              />
              <label htmlFor='cb1' className='p-checkbox-label'>
                Ultima
              </label>
            </div>
            <div className='p-col-12'>
              <Checkbox
                value='Avalon'
                inputId='cb2'
                onChange={onCheckboxChange}
                checked={checkboxValue.indexOf('Avalon') > -1}
              />
              <label htmlFor='cb2' className='p-checkbox-label'>
                Avalon
              </label>
            </div>
            <div className='p-col-12'>
              <Checkbox
                value='Serenity'
                inputId='cb3'
                onChange={onCheckboxChange}
                checked={checkboxValue.indexOf('Serenity') > -1}
              />
              <label htmlFor='cb3' className='p-checkbox-label'>
                Serenity
              </label>
            </div>
          </div>
        </div>
        <div className='p-col-12 p-md-2'>RadioButton</div>
        <div className='p-col-12 p-md-4'>
          <div className='p-grid'>
            <div className='p-col-12'>
              <RadioButton
                value='Ultima'
                inputId='rb1'
                onChange={({ value }) => setRadioValue(value)}
                checked={radioValue === 'Ultima'}
              />
              <label htmlFor='rb1' className='p-radiobutton-label'>
                Ultima
              </label>
            </div>
            <div className='p-col-12'>
              <RadioButton
                value='Avalon'
                inputId='rb2'
                onChange={({ value }) => setRadioValue(value)}
                checked={radioValue === 'Avalon'}
              />
              <label htmlFor='rb2' className='p-radiobutton-label'>
                Avalon
              </label>
            </div>
            <div className='p-col-12'>
              <RadioButton
                value='Serenity'
                inputId='rb3'
                onChange={({ value }) => setRadioValue(value)}
                checked={radioValue === 'Serenity'}
              />
              <label htmlFor='rb3' className='p-radiobutton-label'>
                Serenity
              </label>
            </div>
          </div>
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='slider'>Slider</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <Slider
            id='slider'
            value={sliderValue}
            onChange={({ value }) => setSliderValue(value)}
          />
        </div>
        <div className='p-col-12 p-md-2'>Button</div>
        <div className='p-col-12 p-md-4'>
          <Button label='Edit' icon='pi pi-pencil' />
        </div>
        <div className='p-col-12 p-md-2'>SplitButton</div>
        <div className='p-col-12 p-md-4'>
          <SplitButton
            label='Save'
            icon='pi pi-plus'
            model={splitButtonItems}
          />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='multiselect'>MultiSelect</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <MultiSelect
            id='multiselect'
            placeholder='Choose'
            value={selectedCars}
            options={carOptions}
            onChange={({ value }) => setSelectedCars(value)}
          />
        </div>
        <div className='p-col-12 p-md-2'>ToggleButton</div>
        <div className='p-col-12 p-md-4'>
          <ToggleButton
            checked={toggleButtonValue}
            onChange={({ value }) => setToggleButtonValue(value)}
          />
        </div>
        <div className='p-col-12 p-md-2'>SelectButton</div>
        <div className='p-col-12 p-md-4'>
          <SelectButton
            value={selectedType}
            options={types}
            onChange={({ value }) => setSelectedType(value)}
          />
        </div>
        <div className='p-col-12 p-md-2'>
          <label htmlFor='listbox'>ListBox</label>
        </div>
        <div className='p-col-12 p-md-4'>
          <ListBox
            value={listboxCity}
            options={listboxCities}
            onChange={({ value }) => setListboxCity(value)}
            filter
          />
        </div>
        <div className='p-col-12 p-md-2'>Dialog</div>
        <div className='p-col-12 p-md-4'>
          <Button
            label='Login'
            icon='pi pi-external-link'
            onClick={() => setDialogVisible(true)}
          />
        </div>
      </div>

      <Dialog
        header='Login'
        visible={dialogVisible}
        footer={dialogFooter}
        onHide={() => setDialogVisible(false)}
      >
        <div className='p-grid'>
          <div className='p-col-12'>
            <InputText placeholder='Username' />
          </div>
          <div className='p-col-12'>
            <InputText placeholder='Password' />
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default FormElements
