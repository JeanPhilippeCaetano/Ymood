import Home from './Components/Home/Home.js'
import { Routes, Route, Navigate } from 'react-router-dom';
import Extranet from "./Extranet.js"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extranet" element = {<Extranet />} />
      </Routes>

  );
}

export default App;


