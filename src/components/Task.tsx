import React, { useState } from 'react'
import './Task.css'

interface Prop {
  value: string,
  id: string,
  deleteTask : (id:string) => void
}

function Task(props: Prop) {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

  return (
    <div>
      <button onClick={() => {props.deleteTask(props.id)}}>delete</button>
      <button onClick={handleCheck}>click</button>
      {isChecked ? <p><s>{props.value}</s></p> : <p>{props.value}</p>}
    </div>
  )
}

export default Task