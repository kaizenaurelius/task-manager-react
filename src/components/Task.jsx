import '../stylesheets/task.css'
import { CiSquareRemove } from "react-icons/ci";


function Task({id, text, completed, completeTask, deleteTask}) {




	return(
			<div className={`single-task-container${completed ? ' completed-task' : ''}`}>

				<div 
					onClick={() => completeTask(id)}
					className='task-text'>
					{text}
				</div>

				<div 
					onClick={() => deleteTask(id)}
					className='task-icons-container'>
					<CiSquareRemove 
					className='task-icon'
					/>
				</div>

			</div>
	)
}

export default Task;