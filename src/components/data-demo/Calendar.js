import React, { useState, useEffect } from 'react'
import EventService from '../../service/EventService'

// Prime FullCalendar component
import { FullCalendar } from 'primereact/fullcalendar'

const Calendar = () => {
  const [fullCalendarEvents, setFullCalendarEvents] = useState([])

  useEffect(() => {
    EventService.getEvents().then(events => setFullCalendarEvents(events))
  }, [])

  const fullcalendarOptions = {
    defaultDate: '2016-01-12',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true
  }

  return (
    <div className='card card-w-title'>
      <h1>Schedule</h1>
      <FullCalendar events={fullCalendarEvents} options={fullcalendarOptions} />
    </div>
  )
}

export default Calendar
