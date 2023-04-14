import img from './logo_ynov_campus_rvb.png';
import { displayContent } from './components/wordLoader';
import { displayButtons } from './components/buttons';
import EmotionsCrud from './EmotionsCrud';

// const emotions = [
//   {
//     text:"joie",
//     weight:90,
//     isPositive:true,
//   },
//   {
//     text:"colère",
//     weight:30,
//     isPositive:false,
//   },
//   {
//     text:"tristesse",
//     weight:205,
//     isPositive:false,
//   },
//   {
//     text:"neutre",
//     weight:60,
//     isPositive:null,
//   }
// ]

async function getAllEmotionsData() {
  const emotionsCrud = new EmotionsCrud();
  let emotions = []
  let now = new Date()
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const emotionsNames = await emotionsCrud.readData("/emotions/");
  emotionsNames.forEach(async (element, index) => {
    const count = await emotionsCrud.readData(`/values/${year}/${month}/${day}/${index}`);
    emotions.push({text:element.name, weight: count, isPositive: element.isPositive})
  });
  return emotions;
}

async function Extranet() {
  const emotions = await getAllEmotionsData()
  console.log(emotions)
  return (
    <div>
      {displayContent(emotions)}
      {displayButtons(emotions)}
    </div>
  )
}

export default Extranet;