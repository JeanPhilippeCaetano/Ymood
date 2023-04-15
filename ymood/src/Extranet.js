import img from './logo_ynov_campus_rvb.png';
import { useEffect, useState } from 'react';
import { displayContent } from './components/wordLoader';
import { displayButtons } from './components/buttons';
import EmotionsCrud from './EmotionsCrud';


const emotions2 = [
  {
    text: "joie",
    weight: 90,
    isPositive: true,
  },
  {
    text: "colère",
    weight: 30,
    isPositive: false,
  },
  {
    text: "tristesse",
    weight: 205,
    isPositive: false,
  },
  {
    text: "neutre",
    weight: 60,
    isPositive: null,
  }
]

async function getAllEmotionsData() {
  const emotionsCrud = new EmotionsCrud();
  let emotions = Array();
  let now = new Date()
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const emotionsNames = await emotionsCrud.readData("/emotions/");
  emotionsNames.forEach(async (element, index) => {
    const count = await emotionsCrud.readData(`/values/${year}/${month}/${day}/${index}`);
    emotions.push({ text: element.name, weight: count, isPositive: element.isPositive })
  });
  return emotions;
}

function Extranet() {
  const [emotionsD, setEmotions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // const emotionsCrud = new EmotionsCrud();
      // let emotions = Array();
      // let now = new Date()
      // const year = now.getFullYear();
      // const month = now.getMonth() + 1;
      // const day = now.getDate();
      // const emotionsNames = await emotionsCrud.readData("/emotions/");
      // emotionsNames.forEach( async(element, index) => {
      //   const count = await emotionsCrud.readData(`/values/${year}/${month}/${day}/${index}`);
      //   emotions.push({text:element.name, weight: count, isPositive: element.isPositive})
      // });
      const emotionsData = await getAllEmotionsData();
      setEmotions(emotionsData);

      setIsLoading(false);
      // console.log(emotionsData)
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        {displayContent(emotionsD)}
        {displayButtons(emotionsD)}
      </div>
    )
  }

  
}

export default Extranet;