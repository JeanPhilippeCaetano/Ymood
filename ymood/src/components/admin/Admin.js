import React, { useState, useEffect } from 'react';
import { Button, Input, Form, Select, Divider, Space } from 'antd';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from './bar-chart.js';
import { func } from 'prop-types';
import { async } from 'q';
import Navbar from '../../components/navbar';


function Admin() {

  let array = [
    {
      keyword:"joyeux",
      isPositive: true
    },
    {
      keyword:"triste",
      isPositive: false
    },
    {
      keyword:"inquiet",
      isPositive: false
    },
    {
      keyword:"heureux",
      isPositive: true
    },
    {
      keyword:"soulagé",
      isPositive: true
    },
    {
      keyword:"suicide",
      isPositive: false
    }
  ];

  const [keywords, setKeywords] = useState(
    array.reduce((acc, curr) => {
      acc[curr.keyword] = curr.keyword;
      return acc;
    }, {})
  );
  const { Option } = Select;

  const [selectedValue, setSelectedValue] = useState(false);
  

  const handleInputChange = (keyword, value) => {
    console.log(keyword);
    setKeywords({
      ...keywords,
      [keyword]: value,
    });
  };
  const handleSelectChange = (actualValue, newValue) => {
    console.log(`L EVENT :::   ${newValue}\nVALUE ::: ${actualValue}`);
    setSelectedValue({
      ...selectedValue,
      [actualValue]: newValue,
    });
    console.log(selectedValue.actualValue);
  };

  // const handleSubmit = (values) => {
  //   console.log(values);
  // }
  const handleSubmit = (formData) => {
    const result = {};
    for (const [key, value] of Object.entries(formData)) {
      for (const [keyy, valuee] of Object.entries(value)) {
        console.log(keyy);
        result[key] = keyy;
      }
    }
    console.log(result);
  };

  const handleMessageSubmit = (value) => {
    console.log(value.message);
  }

  // ----------------------

  const emotions = {
    "emotion": [
      {
        "isPositive": false,
        "name": "énervé"
      },
      {
        "isPositive": true,
        "name": "joyeux"
      },
      {
        "isPositive": false,
        "name": "triste"
      },
      {
        "isPositive": false,
        "name": "inquiet"
      },
      {
        "isPositive": true,
        "name": "serein"
      },
      {
        "isPositive": false,
        "name": "fatigué"
      },
      {
        "isPositive": false,
        "name": "déçu"
      },
      {
        "isPositive": true,
        "name": "excité"
      },
      {
        "isPositive": false,
        "name": "frustré"
      },
      {
        "isPositive": true,
        "name": "soulagé"
      }
    ],
  }


  const data = {
    values: {
      2023: {
        4: {
          7: {
            1: 10, 
            2: 42, 
            3: 36, 
            4:10, 
            5:9, 
            6:33, 
            7:15, 
            8:25, 
            9:8, 
            10:10
          },
          8: {
            1: 10, 
            2: 42, 
            3: 36, 
            4:10, 
            5:9, 
            6:33, 
            7:15, 
            8:25, 
            9:8, 
            10:10
          },
          9: {
            1: 10, 
            2: 42, 
            3: 36, 
            4:10, 
            5:9, 
            6:33, 
            7:15, 
            8:25, 
            9:8, 
            10:10
          },
          10: {
            1: 10, 
            2: 42, 
            3: 36, 
            4:10, 
            5:9, 
            6:33, 
            7:15, 
            8:25, 
            9:8, 
            10:10
          },
          11: {
            1: 10, 
            2: 42, 
            3: 36, 
            4:10, 
            5:9, 
            6:33, 
            7:15, 
            8:25, 
            9:8, 
            10:10
          },
          12: {
            1: 10, 
            2: 42, 
            3: 36, 
            4:10, 
            5:9, 
            6:33, 
            7:15, 
            8:25, 
            9:8, 
            10:10
          } ,
          13: {
            1: 10, 
            2: 78, 
            3: 36, 
            4:10, 
            5:9, 
            6:3, 
            7:15, 
            8:25, 
            9:8, 
            10:10
          } ,
          14: {
            1: 5, 
            2: 5, 
            3: 5, 
            4: 5, 
            5: 5, 
            6: 5, 
            7: 5, 
            8: 5, 
            9: 5, 
            10: 5
          }         
        }
      }
  }}

  const dateSouhaitée = "07/04/2023"

  // Convertion de la date en un array "01/01/1999" => ["01", "01", "1999"]
  const date = new Array(dateSouhaitée.split('/'))[0]

  // Clean des "0" au début du mois et des jours => Y'en a pas en BDD
  if (date[1].charAt(0) === '0') {
    date[1] = date[1].slice(1)
  }
  if (date[0].charAt(0) === '0') {
    date[0] = date[0].slice(1)
  }

  let Data = {}

  // Récupération des infos du jour
  for (const year in data['values']) {
    if (year === date[2]) {
      for (const month in data['values'][year]) {
        if (month === date[1]) {
          for (const day in data['values'][year][month]) {
            if (day === date[0]) {
              Data = data['values'][year][month][day]
              // console.log(data['values'][year][month][day])
            }
          }
        }
      }
    }
  }

  // Réorganisation de la donnée DESC
  let dailyData = new Array(
    Data[1],
    Data[2],
    Data[3],
    Data[4],
    Data[5],
    Data[6],
    Data[7],
    Data[8],
    Data[9],
    Data[10]
  )

  let Emotions = new Array(
    emotions["emotion"][0]["name"],
    emotions["emotion"][1]["name"],
    emotions["emotion"][2]["name"],
    emotions["emotion"][3]["name"],
    emotions["emotion"][4]["name"],
    emotions["emotion"][5]["name"],
    emotions["emotion"][6]["name"],
    emotions["emotion"][7]["name"],
    emotions["emotion"][8]["name"],
    emotions["emotion"][9]["name"]
  )

  // Array temporaire
  let tempArray = new Array

  // Regroupement des 2 array en une seul
  for (let index = 0 ; index < dailyData.length ; index++) {
    tempArray.push([dailyData[index], Emotions[index]])
  }

  // Trie sur la liste temporaire (mais que les premières valeurs) qui va déplacer les 2ème valeurs lors du trie
  tempArray.sort(function(a, b) {
    return b[0] - a[0];
  })

  // Split des 2 array
  for (let index = 0 ; index < tempArray.length ; index++) {
    dailyData[index] = tempArray[index][0]
    Emotions[index] = tempArray[index][1]
  }



  function Dataviz() {
    const [chartData, setChartData] = useState({
      labels: Emotions, 
      datasets: [
        {
          label: ["Nombre recensé"],
          data:  dailyData,
          backgroundColor: 'black',
          borderColor: "black",
          borderWidth: 1
        }
      ]
    });
    return (
      <div className="App">
        <BarChart chartData={chartData} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
    <div style={{ paddingLeft: 30, paddingTop: 30 }}>
      <Form
        onFinish={handleSubmit}
        style={{ width: 350 }}
      >
        <Divider>Entrer les mots clés et leurs valeurs</Divider>
        {array.map((item, index) => {
          // console.log(item);
          return (
            <div key={index} style={{ display: "flex" }}>
              <Form.Item
                key={index}
                name={[item.keyword, item.isPositive]}
              >
                <Input
                  defaultValue={item.keyword}
                  style={{ width: 225 }}
                  onChange={(e) =>
                    handleInputChange(item.keyword, e.target.value)
                  }
                />
                <Select
                  defaultValue={item.isPositive ? true : false}
                  layout="vertical"
                  style={{ width: 125 }}
                  onChange={(e) =>
                    handleSelectChange(item.isPositive, e)
                  }
                  options={[
                    {
                      value: true,
                      label: "true",
                    },
                    {
                      value: false,
                      label: "false",
                    },
                  ]}
                >
                </Select>
              </Form.Item>
            </div>
          );
        })}
        <Form.Item>
          <Button
            htmlType="submit"
          >
            Valider
          </Button>
          <Divider></Divider>
        </Form.Item>
      </Form>
      <Divider>Message à afficher sous le nuage</Divider>
      <Form
        onFinish={handleMessageSubmit}
      >
        <Form.Item
          name="message"
        >
          <Input
            placeholder="Message à afficher sous le nuage"
            onChange={(e) =>
              handleInputChange("", e.target.value)
            }
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
          >
            Valider
          </Button>
        </Form.Item>
      </Form>
      <Divider/>

      <div>
        <input type='date' id='input-date'></input>
      </div>
      <div id='chart-div'>
        <Dataviz/>
      </div>
    </div>
    </div>
  );
}
  

export default Admin;
