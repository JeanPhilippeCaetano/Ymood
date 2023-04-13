import Home from './components/Home.js'
import { Routes, Route, Navigate } from 'react-router-dom';
import Extranet from "./Extranet.js"
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import AddEmotions from './components/AddEmotions';
import LoginPage from './pages/LoginPage.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginregister" element={<LoginPage />} />
        <Route path="/extranet" element = {<Extranet />} />
      </Routes>
    
      <SignIn />
      <SignUp />
      <AuthDetails/>
      <AddEmotions/>
    </div>
  );
}

export default App;


