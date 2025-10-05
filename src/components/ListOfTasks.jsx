import TaskForm from "./TaskForm"
import "../stylesheets/list-of-tasks.css"
import { useState } from "react"
import Task from "./Task";

function ListOfTasks() {

const [tasks, setTasks] = useState([]);



const addTask = task => { //Task es el argumento que CAPTURA la nueva tarea que le llega desde el componente hijo TaskForm a través de la prop onSubmit
	if(task.text.trim()){
		console.log('New task received');
		task.text = task.text.trim();
		setTasks(prev => [task, ...prev]); //Se coloca la nueva tarea al inicio del array de tareas porque se pone antes el task que el ...prev
	}
}

const deleteTask = id => {
	setTasks(prev => prev.filter(task => task.id !== id)) //Filtrar todas las tareas que NO tengan el id que se le pasa como argumento
}


const completeTask = id => {
    // 1. Usar setTasks para actualizar el estado
    setTasks(prevTasks => prevTasks.map(task => {
        // 2. Buscar la tarea por su ID
        if(task.id === id){
            // 3. Devolver un NUEVO objeto de tarea
            // Spread operator (...) para copiar todas las propiedades
            // y luego sobrescribir 'completed' con su valor opuesto
            return {
                ...task, 
                completed: !task.completed // Invertir el valor actual
            };
        }
        // 4. Devolver las demás tareas sin modificar
        return task;
    }));
};


return (
		<>
				<TaskForm 
						onSubmit={addTask}// Prop para pasar el método addTask al componente hijo TaskForm
															// onSubmit es el nombre de la prop que se le pasa al componente hijo
															// addTask es el método que se le pasa como valor a la prop
				/>

				<div className="component-list-of-tasks-container">

					{/* Iterar sobre las tareas */}
					{/*contednedor de todas las tareas*/}
					{/* Por cada tarea, renderizar un componente Task */}
					{
						tasks.map((task, index) => 
							<Task
								id={task.id}
								text={task.text}
								completed={task.completed}
								deleteTask={deleteTask}	
								completeTask={completeTask}						/>
						)
					}

				</div>        
		</>
)
}

export default ListOfTasks