import React, { useRef, useState, useEffect } from 'react'
import CarService from '../../service/CarService'

// Prime components
import { Button } from 'primereact/button'
import { OverlayPanel } from 'primereact/overlaypanel'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const CustomOverlayPanel = () => {
  const overlayPanel1 = useRef(null)
  const overlayPanel2 = useRef(null)

  const [dataTableValue, setDataTableValue] = useState([])

  useEffect(() => {
    CarService.getCarsSmall().then(data => setDataTableValue(data.splice(0, 5)))
  }, [])

  return (
    <div className='card'>
      <h1>Overlay Panel</h1>
      <div className='p-grid'>
        <div className='p-col-6'>
          <Button
            label='Image'
            onClick={event => overlayPanel1.current.toggle(event)}
          />
          <OverlayPanel ref={overlayPanel1}>
            <img src='assets/demo/images/nature/nature1.jpg' alt='Nature 1' />
          </OverlayPanel>
        </div>
        <div className='p-col-6'>
          <Button
            label='DataTable'
            onClick={event => overlayPanel2.current.toggle(event)}
          />
          <OverlayPanel ref={overlayPanel2} showCloseIcon dismissable={false}>
            <DataTable value={dataTableValue} style={{ width: '500px' }}>
              <Column field='vin' header='Vin' sortable />
              <Column field='year' header='Year' sortable />
              <Column field='brand' header='Brand' sortable />
              <Column field='color' header='Color' sortable />
            </DataTable>
          </OverlayPanel>
        </div>
      </div>
    </div>
  )
}

export default CustomOverlayPanel
