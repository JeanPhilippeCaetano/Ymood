import Home from './components/Home.js'
import { Routes, Route, Navigate } from 'react-router-dom';
import Extranet from './components/Extranet.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import AddEmotions from './components/AddEmotions';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extranet" element = {<Extranet />} />
        <Route path="/loginpage" element = {<SignIn />} />
        <Route path="/registerpage" element = {<SignUp />} />

      </Routes>
    
      <SignIn />
      <SignUp />
      <AuthDetails/>
      <AddEmotions/>
    </div>
  );
}

export default App;


