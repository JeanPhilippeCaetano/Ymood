import './App.css';
import { displayContent} from './tempFront/wordLoader.js';

const emotions = [
  {
    text:"joie",
    weight:90,
  },
  {
    text:"colère",
    weight:30,
  },
  {
    text:"tristesse",
    weight:25,
  },
  {
    text:"neutre",
    weight:60,
  }
]

const emotions2 = [
  {
    text:"joie",
    weight:66,
  },
  {
    text:"colère",
    weight:30,
  },
  {
    text:"tristesse",
    weight:25,
  },
  {
    text:"happy",
    weight:10,
  },
  {
    text:"horny",
    weight:80,
  },
  {
    text:"faim",
    weight:18,
  },
  {
    text:"content",
    weight:40,
  }
]

function App() {
  return (
    <div className="App">
      <div style={{display:"flex",flexDirection: "column",alignItems: "center"}}>
        {displayContent(emotions)}
        {displayContent(emotions2)}
      </div>
    </div>
  );
}

export default App;
