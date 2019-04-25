import React, { useState } from 'react'
import { brands } from '../../../constants'
import Label from './Label'

// Prime AutoComplete component
import { AutoComplete } from 'primereact/autocomplete'

const Advanced = () => {
  const [filteredBrands, setFilteredBrands] = useState([])
  const [brand, setBrand] = useState('')

  const filterBrands = ({ query }) => {
    setTimeout(() => {
      let results

      if (query.length === 0) {
        results = [...brands]
      } else {
        results = brands.filter(brand => {
          return brand.toLowerCase().startsWith(query.toLowerCase())
        })
      }

      setFilteredBrands(results)
    }, 250)
  }

  const autoCompleteItemTemplate = brand => {
    if (!brand) {
      return
    }

    return (
      <div className='p-clearfix'>
        <img
          alt={brand}
          src={`assets/demo/images/car/${brand}.png`}
          style={{
            width: '32px',
            display: 'inline-block',
            margin: '5px 0 2px 5px'
          }}
        />
        <div
          style={{ fontSize: '18px', float: 'right', margin: '10px 10px 0 0' }}
        >
          {brand}
        </div>
      </div>
    )
  }

  return (
    <>
      <Label htmlFor='acAdvanced' text='Advanced' />
      <div className='p-col-12'>
        <AutoComplete
          minLength={1}
          placeholder="Hint: type 'v' or 'f'"
          id='acAdvanced'
          size={30}
          dropdown
          multiple
          suggestions={filteredBrands}
          completeMethod={filterBrands}
          value={brand}
          onChange={({ value }) => {
            setBrand(value)
            setFilteredBrands([])
          }}
          itemTemplate={autoCompleteItemTemplate}
        />
      </div>
    </>
  )
}

export default Advanced
