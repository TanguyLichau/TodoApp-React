import React, { useState} from 'react'
import Task from './Task'
import { v4 as uuid } from 'uuid';

interface Test {
  value: string,
  id: string,
}

function TasksList() {
  const [taskValue, setTaskValue] = useState('')
  const [taskList, setTaskList] = useState<Test[]>([])

  const createTask = () => {
    if(!taskValue) return

    const newTask = {value: taskValue, id: uuid()}
    setTaskList([...taskList, newTask])
    setTaskValue("")
  }

  const deleteTask = (id) => {
    const afterDeleteTaskList = taskList.filter((e) => {return e.id !== id})
    setTaskList(afterDeleteTaskList)
  }

  const modifyTask = (id, modifiedValue) => {
    const afterModifyTaskList = taskList.map(e => {
      if (e.id === id) {
        return { ...e, value: modifiedValue };
      }
      return e;
    });
    setTaskList(afterModifyTaskList);
  };

  return (
    <div>
        <input onChange={(e) => {setTaskValue(e.target.value)}} value={taskValue}></input>
        <button onClick={createTask}>create Task</button>
        <h1>There are {taskList.length} todos</h1>
        {taskList.map((task)=>{
          return (
          <Task key={task.id} id={task.id} value = {task.value} deleteTask={deleteTask} modifyTask={modifyTask}/>)
        })}
    </div>
  )
}

export default TasksList