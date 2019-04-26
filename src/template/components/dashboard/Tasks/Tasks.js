import React, { useState } from 'react'
import Task from './Task'

// Prime components
import { Panel } from 'primereact/panel'

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  const onTaskChange = ({ checked, value }) => {
    const selectedTasks = [...tasks]
    if (checked) {
      selectedTasks.push(value)
    } else {
      selectedTasks.splice(selectedTasks.indexOf(value), 1)
    }

    setTasks(selectedTasks)
  }

  return (
    <div className='p-col-12 p-md-6'>
      <Panel header='Tasks' style={{ height: '100%' }}>
        <ul className='task-list'>
          <Task
            task='task1'
            onTaskChange={onTaskChange}
            tasks={tasks}
            taskName='Sales Reports'
          />
          <Task
            task='task2'
            onTaskChange={onTaskChange}
            tasks={tasks}
            taskName='Pay Invoices'
          />
          <Task
            task='task3'
            onTaskChange={onTaskChange}
            tasks={tasks}
            taskName='Dinner with Tony'
          />
          <Task
            task='task4'
            onTaskChange={onTaskChange}
            tasks={tasks}
            taskName='Client Meeting'
          />
          <Task
            task='task5'
            onTaskChange={onTaskChange}
            tasks={tasks}
            taskName='New Theme'
          />
          <Task
            task='task6'
            onTaskChange={onTaskChange}
            tasks={tasks}
            taskName='Flight Ticket'
          />
        </ul>
      </Panel>
    </div>
  )
}

export default Tasks
