import React, { useState, useEffect } from 'react';
import { Button, Input, Form, Select, Divider, Space } from 'antd';
import AdminsCrud from '../../AdminsCrud';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

function Admin() {
  const [authUser, setAuthUser] = useState(null);
  let isAdmin = false;
  let a = new AdminsCrud()
  let admins = a.getAllAdminsData()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
        for (const [key, value] of Object.entries(admins)) {
          if (user.id == value) {
            isAdmin = true
          }
        }
      } else {
        setAuthUser(null)
      }
    });
    return () => {
      listen();
    }
  }, [])


  let array = [
    {
      keyword: "joyeux",
      isPositive: true
    },
    {
      keyword: "triste",
      isPositive: false
    },
    {
      keyword: "inquiet",
      isPositive: false
    },
    {
      keyword: "heureux",
      isPositive: true
    },
    {
      keyword: "soulagé",
      isPositive: true
    },
    {
      keyword: "suicide",
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

  return (
    <>
      {isAdmin ? <div style={{ paddingLeft: 30, paddingTop: 30 }}>
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
        <Divider />
      </div> : <> Pas acces </>}
    </>

  );
}


export default Admin;
