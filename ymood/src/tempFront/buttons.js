function upVote(emote){
    console.log(emote)
}

export function emoteButtons(emotes){
    const buttonList = emotes.map((emote) => (
    <button onClick={upVote(emote)}>
      {emote}
    </button>
  ));

  return (
    <div>
      {buttonList}
    </div>
  );
}

export function addEmote(newEmote, Emotes){

}

export function removeEmote(emote,Emotes){
    
}