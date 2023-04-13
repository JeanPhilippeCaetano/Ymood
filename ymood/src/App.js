import logo from './logo.svg';
import './App.css';
import Admin from './components/admin/Admin.js';
import Services from './components/Services/Services.js';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  );
}

export default App;


