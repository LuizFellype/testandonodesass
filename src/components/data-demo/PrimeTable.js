import React, { useState, useEffect } from 'react'
import CarService from '../../service/CarService'

// Prime DataTable component
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const PrimeTable = () => {
  const [dataTableValue, setDataTableValue] = useState([])
  const [dataTableSelection, setDataTableSelection] = useState(null)

  useEffect(() => {
    CarService.getCarsMedium().then(data => setDataTableValue(data))
  }, [])

  return (
    <div className='card card-w-title'>
      <h1>DataTable</h1>
      <DataTable
        value={dataTableValue}
        paginatorPosition='both'
        selectionMode='single'
        header='List of Cars'
        paginator
        rows={10}
        responsive
        selection={dataTableSelection}
        onSelectionChange={({ value }) => setDataTableSelection(value)}
      >
        <Column field='vin' header='Vin' sortable />
        <Column field='year' header='Year' sortable />
        <Column field='brand' header='Brand' sortable />
        <Column field='color' header='Color' sortable />
      </DataTable>
    </div>
  )
}

export default PrimeTable
