import AddEmotions from "./AddEmotions";

function emoteButtons(emotes){
    const buttonList = emotes.map((emote, index) => (
      <button onClick={AddEmotions().addValue} value={index+1}> {emote.text} </button>
    // <button onClick={upVote(emote.text)}>
    //   {emote.text}
    // </button>
  ));

  return (
    <div>
      {buttonList}
    </div>
  );
}

export function displayButtons(emotions){
  return (
    <div className="App">
      <div style={{display:"flex",flexDirection: "column",alignItems: "center"}}>
        {emoteButtons(emotions)}
      </div>
    </div>
  )
}