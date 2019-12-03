import React, { useState, useEffect } from 'react'
import CountryService from '../../../service/CountryService'
import Label from './Label'

// Prime AutoComplete component
import { AutoComplete } from 'primereact/autocomplete'

const Simple = () => {
  const [countriesData, setCountriesData] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    CountryService.getCountries().then(data => setCountriesData(data))
  }, [])

  const filterCountry = ({ query }) => {
    const filteredCountries = countriesData.filter(country =>
      country.name.toLowerCase().startsWith(query.toLowerCase())
    )
    setFilteredCountries(filteredCountries)
  }

  return (
    <>
      <Label htmlFor='acSimple' text='Simple' />
      <div className='p-col-12' style={{ marginBottom: '10px' }}>
        <AutoComplete
          minLength={1}
          placeholder='Countries'
          id='acSimple'
          size={30}
          field='name'
          suggestions={filteredCountries}
          completeMethod={filterCountry}
          value={country}
          onChange={({ value }) => {
            setCountry(value)
            setFilteredCountries([])
          }}
        />
      </div>
    </>
  )
}

export default Simple
