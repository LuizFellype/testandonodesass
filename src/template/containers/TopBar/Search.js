import React from 'react'

// Prime InputText component
import { InputText } from 'primereact/inputtext'

const Search = () => (
  <span className='layout-topbar-search'>
    <InputText type='text' placeholder='Search' />
    <span className='layout-topbar-search-icon pi pi-search' />
  </span>
)

export default Search
