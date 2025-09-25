import './App.css';
import logo from './imgs/ChatGPT Image 1 sept 2025, 13_02_16.png'
import ListOfTasks from './components/ListOfTasks';

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
        <div className='main-tasks-list-container'>
          <h1>
            My Tasks
          </h1>
          <ListOfTasks />
        </div>
      </div>


    </div>

  );
}

export default App;
