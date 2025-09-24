
import '../stylesheets/task-form.css'

function TaskForm(props) {

	return (

		<form className='task-form-container'>
			<input
				className='task-input'
				placeholder='Write a task'
				type='text'
				name='text'
			/>
			<button className='task-button'>
				Add task
			</button>
		</form>
	)

}

export default TaskForm