import React from 'react'
import {
  lineData,
  barData,
  pieData,
  polarData,
  radarData
} from '../../constants'

// Prime Chart component
import { Chart } from 'primereact/chart'

const ChartsDemo = () => (
  <div className='p-grid p-fluid'>
    <div className='p-col-12 p-lg-6'>
      <div className='card'>
        <h1 className='centerText'>Linear Chart</h1>
        <Chart type='line' data={lineData} />
      </div>

      <div className='card'>
        <h1 className='centerText'>Pie Chart</h1>
        <Chart type='pie' data={pieData} height='150' />
      </div>

      <div className='card'>
        <h1 className='centerText'>Polar Area Chart</h1>
        <Chart type='polarArea' data={polarData} height='150' />
      </div>
    </div>
    <div className='p-col-12 p-lg-6'>
      <div className='card'>
        <h1 className='centerText'>Bar Chart</h1>
        <Chart type='bar' data={barData} />
      </div>

      <div className='card'>
        <h1 className='centerText'>Doughnut Chart</h1>
        <Chart type='doughnut' data={pieData} height='150' />
      </div>

      <div className='card'>
        <h1 className='centerText'>Radar Chart</h1>
        <Chart type='radar' data={radarData} height='150' />
      </div>
    </div>
  </div>
)

export default ChartsDemo
