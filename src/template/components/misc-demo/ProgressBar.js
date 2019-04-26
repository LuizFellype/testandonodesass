import React, { useState, useEffect } from 'react'

// Prime ProgressBar component
import { ProgressBar } from 'primereact/progressbar'

const Progress = () => {
  const [value, setValue] = useState(0)

  let interval

  // Component did mount
  useEffect(() => {
    interval = setInterval(() => {
      let val = value
      val += Math.floor(Math.random() * 100) + 1
      if (val >= 100) {
        val = 100
        clearInterval(interval)
      }
      setValue(val)
    }, 2000)
  }, [])

  // Component will unmount
  useEffect(() => () => clearInterval(interval), [])

  return (
    <div className='card'>
      <h1>ProgressBar</h1>
      <ProgressBar value={value} />
    </div>
  )
}

export default Progress
