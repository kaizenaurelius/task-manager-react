// src/components/Login.js
import { auth } from '../firebase-config.js'; // Asegúrate de que la ruta sea correcta
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Login() {
  
  // Función que se ejecuta cuando el usuario hace clic en el botón
  const signInWithGoogle = async () => {
    // 1. Crear una instancia del proveedor de Google
    const provider = new GoogleAuthProvider();
    
    try {
      // 2. Abrir la ventana emergente para iniciar sesión
      await signInWithPopup(auth, provider);
      
      // La aplicación completa se recargará o actualizará automáticamente
      // ya que App.js estará escuchando el estado de autenticación.
      
    } catch (error) {
      // Aquí manejas errores (ej. la ventana emergente se cerró)
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div className='login-container'>
      <h2>¡Bienvenido a Mis Tareas!</h2>
      <p>Por favor, inicia sesión con tu cuenta de Google para continuar.</p>
      
      <button 
        className='google-signin-button'
        onClick={signInWithGoogle}
      >
        Iniciar Sesión con Google
      </button>
    </div>
  );
}

export default Login;