import './App.css';
import { displayContent} from './tempFront/wordLoader.js';

const emotions = [
  {
    text:"joie",
    weight:90,
    isPositive:true,
  },
  {
    text:"colère",
    weight:30,
    isPositive:false,
  },
  {
    text:"tristesse",
    weight:205,
    isPositive:false,
  },
  {
    text:"neutre",
    weight:60,
    isPositive:null,
  }
]

const emotions2 = [
  {
    text:"joie",
    weight:66,
    isPositive:true,
  },
  {
    text:"colère",
    weight:30,
    isPositive:false,
  },
  {
    text:"tristesse",
    weight:25,
    isPositive:false,
  },
  {
    text:"happy",
    weight:10,
    isPositive:true,
  },
  {
    text:"horny",
    weight:80,
    isPositive:true,
  },
  {
    text:"faim",
    weight:18,
    isPositive:false,
  },
  {
    text:"content",
    weight:40,
    isPositive:true,
  }
]
const emotions3 = [
  {
    text:"joie",
    weight:450,
    isPositive:true,
  },
  {
    text:"colère",
    weight:6,
    isPositive:false,
  },
  {
    text:"tristesse",
    weight:17,
    isPositive:false,
  },
  {
    text:"happy",
    weight:10,
    isPositive:true,
  },
  {
    text:"horny",
    weight:60,
    isPositive:true,
  },
  {
    text:"faim",
    weight:18,
    isPositive:false,
  },
  {
    text:"content",
    weight:20,
    isPositive:true,
  },{
    text:"joie",
    weight:23,
    isPositive:true,
  },
  {
    text:"colère",
    weight:13,
    isPositive:false,
  },
  {
    text:"tristesse",
    weight:56,
    isPositive:false,
  },
  {
    text:"happy",
    weight:38,
    isPositive:true,
  },
  {
    text:"horny",
    weight:6,
    isPositive:true,
  },
  {
    text:"faim",
    weight:38,
    isPositive:false,
  },
  {
    text:"content",
    weight:17,
    isPositive:true,
  }
]

function App() {
  return (
    <div className="App">
      <div style={{display:"flex",flexDirection: "column",alignItems: "center"}}>
        {displayContent(emotions)}
        {displayContent(emotions2)}
        {displayContent(emotions3)}
      </div>
    </div>
  );
}

export default App;
