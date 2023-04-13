import logo from './logo.svg';
import './App.css';
import Admin from './admin/Admin.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={App} element={<h1>App page component</h1>} />
        <Route path="/admin" component={Admin} element={<h1>admin page component</h1>} />
      </Routes>
    </Router>
  );
}

export default App;


