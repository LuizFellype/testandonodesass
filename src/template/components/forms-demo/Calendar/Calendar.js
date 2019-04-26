import React, { useState } from 'react'
import CustomCalendar from './CustomCalendar'

// Prime Calendar component
import { Calendar } from 'primereact/calendar'

const CalendarWrapper = () => {
  const [date, setDate] = useState(null)

  return (
    <div className='card card-w-title'>
      <h1>Calendar</h1>
      <Calendar value={date} onChange={({ value }) => setDate(value)} inline />

      <div className='p-grid-m' style={{ marginTop: '20px' }}>
        <CustomCalendar placeholder='Popup' />
        <CustomCalendar placeholder='DateTime' showTime dateFormat='mm/dd/yy' />
        <CustomCalendar placeholder='Time' timeOnly showTime />
        <CustomCalendar placeholder='Button' showIcon />
        <CustomCalendar
          readOnly
          placeholder='Multiple Months'
          numberOfMonths={3}
        />
        <CustomCalendar
          readOnly
          dateFormat='mm/yy'
          placeholder='Month Picker'
          view='month'
        />
      </div>
    </div>
  )
}

export default CalendarWrapper
