const container = {
    width:200,
    height:200,
    style:{
        width:"200px",
        height:"200px",
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"column",
        justifyContent:"space-around",
        alignContent:"center"
    },
};

export function displayContent(emotions){
    const AreaSize = calcContainerSize(container);
    const emotionsWeight = getFullHeight(emotions);

    const Elements = emotions.map((emo) => {
        const area = emo.weight*AreaSize/emotionsWeight;
        const size = Math.floor(Math.sqrt(area));
        const fontSize = calcFontSize(emo.text,size);

        const divStyle = {
            width:size,
            height:size,
            lineHeight:size+"px",
            fontSize:fontSize+"px",
        }

        return (
            <div class="moodText" style={divStyle}>{emo.text}</div>
        )
    });

    return (
        <div id={"container"} style={container.style}>
            {Elements}
        </div>
    )
}

function getFullHeight(emotions){
    let returner = 0;

    emotions.forEach(emotion => {
        returner += emotion.weight
    });

    return returner
}

function calcContainerSize(container){
    return container.width*container.height
}

function calcFontSize(text,maxsize){
    let size = maxsize+1;
    let fontsize = 100;

    
    while (maxsize < size){
        fontsize-=1;

        let div = document.createElement("div");
        div.textContent = text;
        div.style.fontSize = fontsize+"px";
        div.style.position = "absolute";
    
        document.body.appendChild(div);
    
        size = div.getBoundingClientRect().width;
    
        document.body.removeChild(div); 
    }
        
    return fontsize
}