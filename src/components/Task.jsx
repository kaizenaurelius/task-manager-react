import '../stylesheets/task.css'
import { CiSquareRemove } from "react-icons/ci";


function Task({text, completed}) {


	return(
			<div className={`single-task-container${completed ? ' completed-task' : ''}`}>

				<div className='task-text'>
					{text}
				</div>

				<div 
					className='task-icons-container'>
					<CiSquareRemove 
						className='task-icon'
					/>
				</div>

			</div>
	)
}

export default Task;