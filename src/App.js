import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import logo from './imgs/ChatGPT Image 1 sept 2025, 13_02_16.png'

function App() {
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

      <div className='tasks-list-container'>
        <h1>
          My Tasks
        </h1>
          <TaskForm/>
          <Task 
            text='Estudiar'
          />

        </div>
      </div>

    </div>
  );
}

export default App;
