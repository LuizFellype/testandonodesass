import React, { createRef, useState, useEffect } from 'react'
import CarService from '../../service/CarService'

// Prime DataView components
import { DataView, DataViewLayoutOptions } from 'primereact/dataview'
import { Panel } from 'primereact/panel'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const View = () => {
  const dv = createRef()

  const [dataViewValue, setDataViewValue] = useState([])
  const [layout, setLayout] = useState('list')

  // Component did mount
  useEffect(
    () => CarService.getCarsLarge().then(data => setDataViewValue(data)),
    []
  )

  const dataViewItemTemplate = (car, layout) => {
    if (!car) {
      return
    }

    const src = 'assets/demo/images/car/' + car.brand + '.png'

    if (layout === 'list') {
      return (
        <div
          className='p-grid'
          style={{ padding: '2em', borderBottom: '1px solid #d9d9d9' }}
        >
          <div className='p-col-12 p-md-3'>
            <img src={src} alt={car.brand} />
          </div>
          <div className='p-col-12 p-md-8 car-details'>
            <div className='p-grid'>
              <div className='p-col-2 p-sm-6'>Vin:</div>
              <div className='p-col-10 p-sm-6'>{car.vin}</div>

              <div className='p-col-2 p-sm-6'>Year:</div>
              <div className='p-col-10 p-sm-6'>{car.year}</div>

              <div className='p-col-2 p-sm-6'>Brand:</div>
              <div className='p-col-10 p-sm-6'>{car.brand}</div>

              <div className='p-col-2 p-sm-6'>Color:</div>
              <div className='p-col-10 p-sm-6'>{car.color}</div>
            </div>
          </div>

          <div
            className='p-col-12 p-md-1 search-icon'
            style={{ marginTop: '40px' }}
          >
            <Button icon='pi pi-search' />
          </div>
        </div>
      )
    }

    if (layout === 'grid') {
      return (
        <div style={{ padding: '.5em' }} className='p-col-12 p-md-3'>
          <Panel header={car.vin} style={{ textAlign: 'center' }}>
            <img
              src={`assets/demo/images/car/${car.brand}.png`}
              alt={car.brand}
            />
            <div className='car-detail'>
              {car.year} - {car.color}
            </div>
            <i className='pi pi-search' style={{ cursor: 'pointer' }} />
          </Panel>
        </div>
      )
    }
  }

  const dataViewHeader = (
    <div className='p-grid'>
      <div className='p-col-6 p-md-8 filter-container'>
        <div style={{ position: 'relative' }}>
          <InputText
            placeholder='Search by brand'
            onKeyUp={({ target }) => dv.filter(target.value)}
          />
        </div>
      </div>
      <div className='p-col-6 p-md-4' style={{ textAlign: 'right' }}>
        <DataViewLayoutOptions
          layout={layout}
          onChange={({ value }) => setLayout(value)}
        />
      </div>
    </div>
  )

  return (
    <div className='p-col-12'>
      <div className='card card-w-title'>
        <h1>DataView</h1>
        <DataView
          ref={dv}
          value={dataViewValue}
          filterBy='brand'
          itemTemplate={dataViewItemTemplate}
          paginatorPosition='both'
          paginator
          rows={10}
          header={dataViewHeader}
          layout={layout}
        />
      </div>
    </div>
  )
}

export default View
