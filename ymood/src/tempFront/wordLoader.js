import background from "../asset/cloud.png"
const containerSize = 200;
const container = {
    width:containerSize+"px",
    height:containerSize+"px",
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"column",
    justifyContent:"space-around",
    alignContent:"center",
    alignItems:"center",
};

export function displayContent(emotions){
    const AreaSize = calcContainerSize();
    const emotionsWeight = getFullHeight(emotions);
    let localheight = 0;
    let tempwidth = 0;
    let totalwidth = 0;

    const Elements = emotions.map((emo) => {
        const area = emo.weight/emotionsWeight*AreaSize;
        const size = Math.floor(Math.sqrt(area));
        const fontSize = calcFontSize(emo.text,size);
        localheight+=size;
        if (localheight>containerSize){
            totalwidth += tempwidth;
            tempwidth = size;
            localheight = size;
        } else if (size>tempwidth){
            tempwidth = size;
        };

        const divStyle = {
            width:size,
            height:size,
            lineHeight:size+"px",
            fontSize:fontSize+"px",
        }

        return (
            <div className="moodText" style={divStyle}>{emo.text}</div>
        )
    });
    totalwidth += tempwidth;


    return (
        <div id={"background"} style={{backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
            <div id={"container"} style={{...container,...setMargin(totalwidth)}}>
                {Elements}
            </div>
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

function calcContainerSize(){
    return containerSize**2*0.75
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

function setMargin(width){
    let totalwidth = width+100;
    let totalheight = totalwidth*535/703;
    let marginheight,marginwidth;
    if (totalheight<width){
        marginheight = 0;
        marginwidth = (width*703/535-width)/2;
    } else {
        marginheight = (totalheight-containerSize)/2;
        marginwidth = (totalwidth-containerSize)/2;
    }
    return {        
        margin:marginheight+"px",
        marginInline:marginwidth+"px",
    }
}