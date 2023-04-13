import logo from './logo.svg';
import './App.css';
import Admin from './admin/Admin.js'
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;


