import React from 'react'

// Prime components
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

const Task = ({ task, onTaskChange, tasks, taskName }) => (
  <li>
    <Checkbox
      value={task}
      onChange={onTaskChange}
      checked={tasks.indexOf(task) > -1}
    />
    <span className='task-name'>{taskName}</span>
    <Button icon='pi pi-check' />
  </li>
)

export default Task
