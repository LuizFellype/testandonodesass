import React from 'react'
import { stepsItems } from '../../constants'

// Prime Steps component
import { Steps } from 'primereact/steps'

const CustomSteps = () => (
  <div className='card card-w-title'>
    <h1>Steps</h1>
    <Steps model={stepsItems} />
  </div>
)

export default CustomSteps
