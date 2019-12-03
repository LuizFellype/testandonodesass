import React, { useState, useEffect, useRef } from 'react'

// Prime ProgressBar component
import { ProgressBar } from 'primereact/progressbar'

const Progress = () => {
  const [value, setValue] = useState(0)

  const interval = useRef(null)

  // Component did mount
  useEffect(() => {
    interval.current = setInterval(() => {
      let val = value
      val += Math.floor(Math.random() * 100) + 1
      if (val >= 100) {
        val = 100
        clearInterval(interval.current)
      }
      setValue(val)
    }, 2000)
  }, [interval, value])

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
