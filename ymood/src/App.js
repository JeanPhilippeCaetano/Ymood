import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./Home.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;