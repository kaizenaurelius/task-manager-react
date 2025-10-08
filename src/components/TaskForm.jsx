
import '../stylesheets/task-form.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {
  const [stateInput, setStateInput] = useState(''); // Estado para el input del formulario

  const handleChange = e => { // Maneja el cambio en el input. Se actualiza el estado con cada cambio //Se hace internamente dentro del componente
    setStateInput(e.target.value);
    console.log(stateInput);
  }

  const handleFormSubmit = e => { // Maneja el envío del formulario. Se crea una nueva tarea y se envía al componente padre// Se hace internamente dentro del componente
    e.preventDefault();

    /*const newTask = {  SE VA A CREAR EL OBJETO EN EL COMPONENTE PADRE
      id: uuidv4(),
      text: stateInput,
      completed: false
    }*/

    props.onSubmit(stateInput); //Se pasa el texto de la tarea al componente padre a través de la prop onSubmit que sera el addTask del componente padre ListOfTasks // <-- Pasar SÓLO el texto del input
    setStateInput(''); // Limpiar el input después de enviar el formulario
    
  }


	return (

		<form 
      className='task-form-container'
      onSubmit={handleFormSubmit}>
        <input
          className='task-input'
          placeholder='Write a task'
          type='text'
          name='text'
          onChange={handleChange}
        />
        <button 
          className='task-button'>
          Add task
        </button>
		</form>
	)

}

export default TaskForm