import React from 'react';
import { displayContent } from './wordLoader';

function Cloud() {
    const emotions = [
        {
          text: "joie",
          weight: 90,
        },{
          text: "colère",
          weight: 30,
        },{
          text: "tristesse",
          weight: 25,
        },{
          text: "neutre",
          weight: 60,
        }
      ]
    
      const emotions2 = [
        {
          text: "joie",
          weight: 66,
        },{
          text: "colère",
          weight: 30,
        },{
          text: "tristesse",
          weight: 25,
        },{
          text: "happy",
          weight: 10,
        },{
          text: "horny",
          weight: 80,
        },{
          text: "faim",
          weight: 18,
        },{
          text: "content",
          weight: 40,
        }
      ]
      const emotions3 = [
        {
          text: "joie",
          weight: 45,
        },{
          text: "colère",
          weight: 6,
        },{
          text: "tristesse",
          weight: 17,
        },{
          text: "happy",
          weight: 10,
        },{
          text: "horny",
          weight: 60,
        },{
          text: "faim",
          weight: 18,
        },{
          text: "content",
          weight: 20,
        },{
          text: "joie",
          weight: 23,
        },{
          text: "colère",
          weight: 13,
        },{
          text: "tristesse",
          weight: 56,
        },{
          text: "happy",
          weight: 38,
        },{
          text: "horny",
          weight: 6,
        },{
          text: "faim",
          weight: 38,
        },{
          text: "content",
          weight: 17,
        }
      ]

    return (
        <div className="cloud">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {displayContent(emotions)}
            </div>
        </div>
    )
}

export default Cloud