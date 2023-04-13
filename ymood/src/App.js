import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import AddEmotions from './components/AddEmotions';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails/>
      <AddEmotions/>
    </div>
  );
}

export default App;
