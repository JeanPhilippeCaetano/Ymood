import React, { useState, useEffect } from 'react';
import { Button, Input, Form, Select, Divider } from 'antd';

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

  const handleInputChange = (keyword, value) => {
    setKeywords({
      ...keywords,
      [keyword]: value,
    });
  };

  const handleSubmit = (values) => {
    console.log(values);
  }

  const handleMessageSubmit = (value) => {
    console.log(value.message);
  }

  return (
    <div style={{ paddingLeft: 30, paddingTop: 30 }}>
      <Form
        onFinish={handleSubmit}
      >
        <Divider>Entrer les mots clés et leurs valeurs</Divider>
        {array.map((item, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <Form.Item
                key={index}
                name={item.keyword}
                rules={[
                  {
                    required: false,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  defaultValue={item.keyword}
                  onChange={(e) =>
                    handleInputChange(item.keyword, e.target.value)
                  }
                />
              </Form.Item>
              <Select
                defaultValue={item.isPositive ? "true" : "false"}
                layout="vertical"
                style={{ width: 200 }}
                options={[
                  {
                    value: item.isPositive ? true : false,
                    label: item.isPositive ? "true" : "false",
                  },
                  {
                    value: item.isPositive ? false : true,
                    label: item.isPositive ? "false" : "true",
                  },
                ]}
              ></Select>
            </div>
          );
        })}
        <Form.Item>
          <Button
            htmlType="submit"
          >
            Valider
          </Button>
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
