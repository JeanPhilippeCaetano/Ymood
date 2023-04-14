import Home from './pages/Home.js'
import { Routes, Route, Navigate } from 'react-router-dom';
import Extranet from './pages/Extranet.js';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';
import AuthDetails from './components/AuthDetails';
import AddEmotions from './components/AddEmotions';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extranet" element={<Extranet />} />
        <Route path="/loginpage" element={<LogIn />} />
        <Route path="/registerpage" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App;


