import React from 'react'

// Customized components
import Upload from '../../components/misc-demo/Upload'
import ProgressBar from '../../components/misc-demo/ProgressBar'

const MiscDemo = () => (
  <div className='p-grid'>
    <div className='p-col-12'>
      <Upload />
    </div>

    <div className='p-col-12'>
      <ProgressBar />
    </div>
  </div>
)

export default MiscDemo
