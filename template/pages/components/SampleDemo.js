import React from 'react'

// Customized SampleDemo page components
import TopMessage from '../../components/sample-demo/TopMessage'
import FormElements from '../../components/sample-demo/FormElements'

const SampleDemo = () => (
  <div className='p-fluid'>
    <div className='p-grid'>
      <div className='p-col-12'>
        <TopMessage />
        <FormElements />
      </div>
    </div>
  </div>
)

export default SampleDemo
