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

  const pickListTemplate = car => {
    if (!car) {
      return
    }

    return (
      <div className='p-clearfix'>
        <img
          src={`assets/demo/images/car/${car.brand}.png`}
          alt={car.brand}
          style={{
            display: 'inline-block',
            margin: '2px 0 2px 2px',
            width: '50px'
          }}
        />
        <div
          style={{ fontSize: '16px', float: 'right', margin: '15px 5px 0 0' }}
        >
          {car.brand}
        </div>
      </div>
    )
  }

  return (
    <div className='card card-w-title'>
      <h1>PickList</h1>
      <PickList
        source={picklistSourceCars}
        target={picklistTargetCars}
        sourceHeader='Available'
        targetHeader='Selected'
        responsive
        itemTemplate={pickListTemplate}
        sourceStyle={{ height: 250 }}
        targetStyle={{ height: 250 }}
        onChange={({ source, target }) => {
          setPicklistSourceCars(source)
          setPicklistTargetCars(target)
        }}
      />
    </div>
  )
}

export default Pick
