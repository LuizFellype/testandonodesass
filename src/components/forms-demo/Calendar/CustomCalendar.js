import React, { useState } from 'react'

// Prime Calendar component
import { Calendar } from 'primereact/calendar'

const CustomCalendar = props => {
  const [date, setDate] = useState(null)

  return (
    <div className='p-col-12'>
      <Calendar
        value={date}
        onChange={({ value }) => setDate(value)}
        {...props}
      />
    </div>
  )
}

export default CustomCalendar
