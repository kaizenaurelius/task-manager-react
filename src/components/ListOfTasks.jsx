import TaskForm from "./TaskForm"
import "../stylesheets/list-of-tasks.css"
import { useState, useEffect } from "react"
import Task from "./Task";
import { db } from '../firebase-config'; // La instancia de Firestore
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore'; 
function ListOfTasks({userId}) {

const [tasks, setTasks] = useState([]);

 // Referencia a la colección principal de tareas
const tasksCollectionRef = collection(db, "tasks");



const addTask = async (taskText) => { // taskText  es el argumento que CAPTURA la nueva tarea que le llega desde el componente hijo TaskForm a través de la prop onSubmit

	if (!taskText.trim() || !userId) return; 

	const newTask = {
	text: taskText,
	completed: false,
	uid: userId, 
	timestamp: new Date(),
    };

	try {
	// 4. USAR addDoc: Guarda el objeto 'newTask' en la colección referenciada
	await addDoc(tasksCollectionRef, newTask);
	
	// Nota: NO se usa setTasks aquí. El listener onSnapshot se encarga de eso.

	} 
	catch (error) {
		console.error("Error al añadir la tarea a Firestore: ", error);
	}

	/*if(task.text.trim()){
		console.log('New task received');
		task.text = task.text.trim();
		setTasks(prev => [task, ...prev]); //Se coloca la nueva tarea al inicio del array de tareas porque se pone antes el task que el ...prev
	}*/ // no se actualiza el estado local, se guarda en Firestore
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

    useEffect(() => {
        // 1. Crear la consulta (Query)
        // Busca en la colección "tasks" donde el campo "uid" sea igual al userId actual.
        const userQuery = query(
            tasksCollectionRef, 
            where("uid", "==", userId) // <-- Filtro clave
        );

        // 2. Suscribirse a los cambios en tiempo real (onSnapshot)
        const unsubscribe = onSnapshot(userQuery, (snapshot) => {
            const tasksData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTasks(tasksData); // Actualizar el estado con las tareas del usuario
        }, (error) => {
            console.error("Error al cargar las tareas:", error);
        });

        // 3. Limpiar el listener al desmontar
        return () => unsubscribe();
        
    }, [userId]); // <-- El useEffect se vuelve a ejecutar si el userId cambia (aunque no debería)


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