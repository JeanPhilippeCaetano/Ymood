import Home from './pages/Home.js'
import Admin from './components/admin/Admin.js';
import Services from './components/Services/Services.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import Extranet from './pages/Extranet.js';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extranet" element={<Extranet />} />
        <Route path="/loginpage" element={<LogIn />} />
        <Route path="/registerpage" element={<SignUp />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  )
}

export default App;


