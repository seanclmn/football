import {Route} from 'react-router-dom'


import './App.css';
import Home from './components/home.jsx'

function App() {
  return (
    <div className="App">
      <header className="header">

        <div>
          <h1>
            Football App
          </h1>
        </div>

      </header>

      <Home />

    </div>
  );
}

export default App;
