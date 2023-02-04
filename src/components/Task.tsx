import React, { useState } from 'react'
import './Task.css'
import { ITask } from './TasksList'


function Task(props: ITask) {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

  return (
    <div>
    <button onClick={handleCheck}>click</button>
    {isChecked ? <p><s>{props.value}</s></p> : <p>{props.value}</p>}
    </div>
  )
}

export default Task