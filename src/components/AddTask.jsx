import { useTask } from "../hooks/useTask"
import { useState } from "react"
import '../components/AddTask.css'

export function AddTask() {
  const { addTask } = useTask()
  const [inputs, setInputs] = useState({ inputName: '', inputDescription: '', inputDone: '' })

  function handleChangeInput(event) {
    const { name, value } = event.target

    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))

  }

  function handleSubmit(event) {
    event.preventDefault()

    addTask({ name: inputs.inputName, description: inputs.inputDescription, done: inputs.inputDone })
    setInputs({ inputName: '', inputDescription: '' })
  }

  return (
    <div className='add-tasks'>
      <h2>Añadir nueva tarea</h2>
      <div className="task-content">
        <form onSubmit={handleSubmit}>
          <input className="search-bar" type="text" name='inputName' onChange={handleChangeInput} placeholder='Name' value={inputs.inputName} />
          <input className="search-bar" type="text" name='inputDescription' onChange={handleChangeInput} placeholder='Description' value={inputs.inputDescription} />
          <select onChange={handleChangeInput} className="search-bar" name="inputDone" id="done" >
            <option value= ''>--seleccionar--</option>
            <option value= 'true'>Finalizada</option>
            <option value= 'false'>Pendiente</option>
          </select>
          <button className="button" type='submit'>Agregar</button>
        </form>
      </div>
    </div>
  )
}