import React, { useState, useEffect } from 'react'
import CarService from '../../service/CarService'

// Prime DataTable imports
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const Table = () => {
  const [dataTableValue, setDataTableValue] = useState([])
  const [dataTableSelection, setDataTableSelection] = useState(null)

  useEffect(() => {
    CarService.getCarsSmall().then(data => setDataTableValue(data))
  }, [])

  return (
    <div className='card card-w-title'>
      <h1>DataTable</h1>
      <DataTable
        value={dataTableValue}
        selectionMode='single'
        header='DataTable'
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

export default Table
