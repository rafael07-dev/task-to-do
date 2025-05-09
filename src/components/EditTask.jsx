import { useState } from "react"

export default function EditTask() {

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

    //addTask({name: inputs.inputName, description: inputs.inputDescription, done: inputs.inputDone })
    setInputs({ inputName: '', inputDescription: '' })
  }

  return (
    <div className='add-tasks'>
      <h3>Editar tarea</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name='inputName' onChange={handleChangeInput} placeholder='Name' value={inputs.inputName} />
        <input type="text" name='inputDescription' onChange={handleChangeInput} placeholder='Description' value={inputs.inputDescription} />
        <select name="inputDone" id="done" >
          <option>--seleccionar--</option>
          <option >Finalizada</option>
          <option >Pendiente</option>
        </select>
        <button type='submit'>Agregar</button>
      </form>
    </div>
  )
}