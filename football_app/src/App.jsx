import {Route} from 'react-router-dom'


import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home'
import Teams from './pages/teams/Teams'
import Players from './pages/players/Players'

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/teams" component={Teams}/>
      <Route exact path="/players" component={Players}/>
    </div>
  );
}

export default App;
