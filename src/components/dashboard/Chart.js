import React from 'react'
import { lineData } from '../../constants'

// Prime Chart component
import { Chart } from 'primereact/chart'

const PrimeChart = () => {
  return (
    <div className='p-col-12 p-lg-12'>
      <div className='card'>
        <Chart type='line' data={lineData} />
      </div>
    </div>
  )
}

export default PrimeChart
