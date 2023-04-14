import React, { useState, useEffect } from 'react';
import { Button, Input, Form, Select, Divider, Space } from 'antd';

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
      acc[curr.keyword] = curr.isPositive;
      return acc;
    }, {})
  );
  const { Option } = Select;  

  const handleInputChange = (keyword, newKeyword) => {
    keywords[newKeyword] = keywords[keyword];
    delete keywords[keyword];
  };
  const handleSelectChange = (actualValue, newValue) => {
    keywords[actualValue] = newValue
  };

  // const handleSubmit = (values) => {
  //   console.log(values);
  // }
  const handleSubmit = (formData) => {
    // const result = {};
    // for (const [key, value] of Object.entries(formData)) {
    //   for (const [keyy, valuee] of Object.entries(value)) {
    //     result[key] = keyy;
    //   }
    // }
    console.log(keywords); // send keywords to database
  };

  const handleMessageSubmit = (value) => {
    console.log(value.message);
  }

  return (
    <div style={{ paddingLeft: 30, paddingTop: 30 }}>
      <Form
        onFinish={handleSubmit}
        style={{ width: 350 }}
      >
        <Divider>Entrer les mots clés et leurs valeurs</Divider>
        {array.map((item, index) => {
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
                    handleSelectChange(item.keyword, e)
                  }
                  
                >
                <Option value={true}>true</Option>
                <Option value={false}>false</Option>
                </Select>
              </Form.Item>
            </div>
          );
        })}
        <Form.Item>
          <Button
            htmlType="submit"
            //onClick={handleSubmit}
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
      <Divider />
    </div>
  );
}
  

export default Admin;
