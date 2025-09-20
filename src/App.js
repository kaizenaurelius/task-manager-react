import './App.css';
import Task from './components/Task';
import logo from './imgs/ChatGPT Image 1 sept 2025, 13_02_16.png'

function App() {
  return (

    <div className="App">



      <div className='to-do-container'>
        <div className='kaizen-tob-logo-container'>
          <img 
            className='kaizen-tob-logo'
            alt='logo'
            src={logo}
          />
      </div>

      <div className='to-do-list-container'>
        <h1>
          My Tasks
        </h1>
          <Task 
            text='Estudiar'
          />
        </div>
      </div>

    </div>
  );
}

export default App;
