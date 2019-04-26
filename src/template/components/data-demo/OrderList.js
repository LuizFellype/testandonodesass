import React, { useState, useEffect } from 'react'

// Prime OrderList component
import { OrderList } from 'primereact/orderlist'
import CarService from '../../service/CarService'

const Order = () => {
  const [orderlistCars, setOrderlistCars] = useState([])

  // Component did mount
  useEffect(() => {
    CarService.getCarsSmall().then(data => setOrderlistCars(data))
  }, [])

  const orderListTemplate = car => {
    if (!car) return

    const { brand, year, color } = car
    return (
      <div className='p-clearfix'>
        <img
          src={`assets/demo/images/car/${brand}.png`}
          alt={brand}
          style={{
            display: 'inline-block',
            margin: '2px 0 2px 2px',
            width: '50px'
          }}
        />
        <div style={{ fontSize: 14, float: 'right', margin: '15px 5px 0 0' }}>
          {brand} - {year} - {color}
        </div>
      </div>
    )
  }

  return (
    <div className='card card-w-title'>
      <h1>OrderList</h1>
      <OrderList
        value={orderlistCars}
        responsive
        header='OrderList'
        listStyle={{ height: 250 }}
        itemTemplate={orderListTemplate}
        onChange={({ value }) => setOrderlistCars(value)}
      />
    </div>
  )
}

export default Order
