import React, { useState, useEffect } from 'react'
import CarService from '../../service/CarService'

// Prime PickList component
import { PickList } from 'primereact/picklist'

const Pick = () => {
  const [picklistSourceCars, setPicklistSourceCars] = useState([])
  const [picklistTargetCars, setPicklistTargetCars] = useState([])

  useEffect(() => {
    CarService.getCarsSmall().then(data => setPicklistSourceCars(data))
  }, [])

  return (
    <div className='card card-w-title'>
      <h1>PickList</h1>
      <PickList
        source={picklistSourceCars}
        target={picklistTargetCars}
        sourceHeader='Available'
        targetHeader='Selected'
        responsive
        itemTemplate={({ brand }) => <span>{brand}</span>}
        onChange={({ source, target }) => {
          setPicklistSourceCars(source)
          setPicklistTargetCars(target)
        }}
      />
    </div>
  )
}

export default Pick
