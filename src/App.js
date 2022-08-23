import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip, Toast, Popover } from 'bootstrap'

import Header from './components/Header';
import List from './components/List';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <List />
        <Admin />
      </div>      
    </div>
  );
}

export default App;
