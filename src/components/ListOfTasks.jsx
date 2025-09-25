import TaskForm from "./TaskForm"
import "../stylesheets/list-of-tasks.css"
import { useState } from "react"
import Task from "./Task";

function ListOfTasks() {

const [tasks, setTasks] = useState([]);



const completeTask = (id) => {
	id.completed = !id.completed
	setTasks([...tasks])
	console.log(tasks)
}
const addTask = (task) => {
		console.log('Task to add:', task)
		task.preventDefault()
		task = {
				text: task.target.text.value,
				completed: false
		}
		console.log(task)
		setTasks([
				...tasks,
				task
		])
}

return (
		<>
				<TaskForm 
						onSubmit={addTask}
						// Limpiar el formulario
				/>
				<div className="component-list-of-tasks-container">
					{
						tasks.map((task, index) => 
							<Task
								id={index}
								text={task.text}
								completed={task.completed}
								completeTask={completeTask}
							/>
						)
					}

				</div>        
		</>
)
}

export default ListOfTasks