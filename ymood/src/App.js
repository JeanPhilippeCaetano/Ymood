import Home from './pages/Home.js'
import Admin from './components/admin/Admin.js';
import Services from './components/Services/Services.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import Extranet from './pages/Extranet.js';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';
import AdminsCrud from './AdminsCrud.js';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';

function App() {
  const [authUser, setAuthUser] = useState(null);
  let isAdmin = false;
  let a = new AdminsCrud()
  let admins = a.getAllAdminsData()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
        for (const [key, value] of Object.entries(admins)) {
          if (user.id === value) {
            isAdmin = true;
          }
        }
      } else {
        setAuthUser(null)
      }
    });
    return () => {
      listen();
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extranet" element={<Extranet />} />
        <Route path="/loginpage" element={<LogIn />} />
        <Route path="/registerpage" element={<SignUp />} />
        {isAdmin ? <Route path="/admin" element={<Admin/>} /> : <></> }
        
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  )
}

export default App;


