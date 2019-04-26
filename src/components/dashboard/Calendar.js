import React, { useState, useEffect } from 'react'
import EventService from '../../service/EventService'
import { fullCalendarOptions } from '../../utils/constants/constants'

// Prime FullCalendar component
import { FullCalendar } from 'primereact/fullcalendar'

const Calendar = () => {
  const [fullCalendarEvents, setFullCalendarEvents] = useState([])

  useEffect(() => {
    EventService.getEvents().then(events => setFullCalendarEvents(events))
  }, [])

  return (
    <div className='p-col-12 p-lg-8'>
      <div className='card card-w-title'>
        <h1>Schedule</h1>
        <FullCalendar
          events={fullCalendarEvents}
          options={fullCalendarOptions}
        />
      </div>
    </div>
  )
}

export default Calendar
