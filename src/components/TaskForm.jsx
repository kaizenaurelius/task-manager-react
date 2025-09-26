
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

    const newTask = {
      id: uuidv4(),
      text: stateInput,
      completed: false
    }

    props.onSubmit(newTask); //Activa el método onSubmit del componente padre (ListOfTasks) y le pasa la nueva tarea como argumento// el argumento es newTask que se le pasa al componente padre
    
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