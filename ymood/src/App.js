import Home from './Components/Home/Home.js'
import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from "./admin/Admin.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extranet" element = {<Extranet />} />
      </Routes>
    </div>
  );
}

export default App;


