import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='App'>
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
                Hello world with React (Hoi Dan IT)
            </p>
            <a 
                className='App-link'
                href='http://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
            >
                Learn React
            </a>
        </header>
    </div>
  )
}

export default App





