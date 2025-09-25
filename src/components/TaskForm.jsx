
import '../stylesheets/task-form.css'
import { useState } from 'react';

function TaskForm(props) {
  const [stateInput, setStateInput] = useState('');

  const handleChange = e => {
    setStateInput(e.target.value);
    console.log(stateInput);
  }

	return (

		<form className='task-form-container'>
			<input
				className='task-input'
				placeholder='Write a task'
				type='text'
				name='text'
        onChange={handleChange}
			/>
			<button 
				onSubmit={props.onSubmit}
				className='task-button'>
				Add task
			</button>
		</form>
	)

}

export default TaskForm