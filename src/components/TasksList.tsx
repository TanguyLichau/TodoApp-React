import React, { useState} from 'react'
import Task from './Task'

export interface ITask {
  value: string
}

function TasksList() {
  const [taskValue, setTaskValue] = useState('')
  const [taskList, setTaskList] = useState<ITask[]>([])

  const handleChange = (e) => {
    setTaskValue(e.target.value)
  }

  const createTask = () => {
    if(!taskValue) return

    setTaskList([...taskList, {value: taskValue}])
    setTaskValue("")
  }

  return (
    <div>
        <input onChange={handleChange} value={taskValue}></input>
        <button onClick={createTask}>create Task</button>
        {taskList && taskList.map((task, key )=>{
          return <Task key={key} value = {task.value}/>
        })}
    </div>
  )
}

export default TasksList