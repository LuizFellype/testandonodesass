import React from 'react'
import { organizationChartValue } from '../../utils/constants/dataDemo'

// Prime OrganizationChart component
import { OrganizationChart } from 'primereact/organizationchart'

const FlowChart = () => (
  <div className='card card-w-title'>
    <h1>Organization Chart</h1>
    <OrganizationChart value={organizationChartValue} />
  </div>
)

export default FlowChart
