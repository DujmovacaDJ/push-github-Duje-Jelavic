import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Pocetna from './Pocetna.js'
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Pocetna/>}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
