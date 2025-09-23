import '../stylesheets/task.css'
import { CiSquareRemove } from "react-icons/ci";


function Task({text}) {
	return(
			<div className='task-container'>

				<div className='task-text'>
					{text}
				</div>

				<div className='task-icons-container'>
					<CiSquareRemove />
				</div>

			</div>
	)
}

export default Task;