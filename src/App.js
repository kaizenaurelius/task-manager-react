import './App.css';
import logo from './imgs/ChatGPT Image 1 sept 2025, 13_02_16.png'
import ListOfTasks from './components/ListOfTasks';
import LogIn from './components/LogIn';
import { auth } from './firebase-config.js'; // Asegúrate de que la ruta sea correcta
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';


function App() {

  // Estado para rastrear si el usuario está autenticado
  const [user, setUser] = useState(null);

  //Estado tiempo de carga
  const [loading, setLoading] = useState(true);

  // Escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Dejar de cargar una vez que sabemos el estado de autenticación
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);
  
  // Mostrar un mensaje de carga mientras verificamos la autenticación
  if (loading) {
    return <div className="App">Cargando...</div>;
  }
  
  return (

    <div className="App">



      <div className='task-container'>
        <div className='kaizen-tob-logo-container'>
          <img 
            className='kaizen-tob-logo'
            alt='logo'
            src={logo}
          />
        </div>

        {user ? 
          (        
          <div className='main-tasks-list-container'>
            <h1>
              My Tasks
            </h1>
            <ListOfTasks 
              userId={user.uid} // Pasar el ID del usuario autenticado como prop user es un objeto de firebase que se captura en App.js cuando el usuario se autentica
            />
          </div>
          )
          :
          (
            <LogIn />
)
        }

      </div>

    </div>

  );
}

export default App;
