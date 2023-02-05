import React, { useState } from 'react'
import './Task.css'

interface Prop {
  value: string,
  id: string,
  deleteTask : (id:string) => void
  modifyTask : (id:string, value:string) => void
}

function Task(props: Prop) {
    const [isChecked, setIsChecked] = useState(false)
    const [isModified, setIsModified] = useState(false)
    const [modifiedValue, setModifiedValue] = useState('')

    const handleInputModification = () => {
      props.modifyTask(props.id, modifiedValue)
      setIsModified(!isModified)
    }

    const modifyText = isChecked ? <p><s>{props.value}</s></p> : <p>{props.value}</p>
    const modifyInput = (<div><input onChange={(e) => {setModifiedValue(e.target.value)}}  defaultValue= {props.value}></input> <button onClick={handleInputModification}>modif</button></div>)
  return (
    <div>
      <button onClick={() => {props.deleteTask(props.id)}}>delete</button>
      <button onClick={() => {setIsModified(!isModified)}}>modify</button>
      <button onClick={() => {setIsChecked(!isChecked)}}>click</button>
      {!isModified ? modifyText : modifyInput}
    </div>
  )
}

export default Task