import React, { useState, useEffect } from 'react';
import { Button, Input, Form, Select, Divider, Space } from 'antd';

// function Admin() {

//   let array = [
//     {
//       keyword:"joyeux",
//       isPositive: true
//     },
//     {
//       keyword:"triste",
//       isPositive: false
//     },
//     {
//       keyword:"inquiet",
//       isPositive: false
//     },
//     {
//       keyword:"heureux",
//       isPositive: true
//     },
//     {
//       keyword:"soulagé",
//       isPositive: true
//     },
//     {
//       keyword:"suicide",
//       isPositive: false
//     }
//   ];

//   const { Option } = Select;

//   const handleMessageSubmit = (value) => {
//     console.log(value.message);
//   }

//   const handleInputChange = (oldValue, newValue) => {
//     console.log(keywords);
//   };
  
//   const handleSelectChange = (actualValue, newValue) => {
//     keywords[actualValue] = newValue;
//     console.log(keywords);
//   }

//   const handleSubmit = (formData) => {
//     console.log(keywords);
//   }

//   return (
//     <div style={{ paddingLeft: 30, paddingTop: 30 }}>
//       <Form
//         onFinish={handleSubmit}
//         style={{ width: 350 }}
//       >
//         <Divider>Entrer les mots clés et leurs valeurs</Divider>
//         {array.map((item, index) => {
//           // console.log(item);
//           return (
//             <div key={index} style={{ display: "flex" }}>
//               <Form.Item
//                 key={index}
//                 name={[item.keyword, item.isPositive]}
//               >
//                 <Input
//                   defaultValue={item.keyword}
//                   style={{ width: 225 }}
//                   onChange={(e) =>
//                     handleInputChange(item.keyword, e.target.value)
//                   }
//                 />
//                 <Select
//                   defaultValue={item.isPositive ? true : false}
//                   layout="vertical"
//                   style={{ width: 125 }}
//                   onChange={(e) =>
//                     handleSelectChange(item.keyword, e)
//                   }
//                 >
//                   <Option value={true}>true</Option>
//                   <Option value={false}>false</Option>
//                 </Select>
//               </Form.Item>
//             </div>
//           );
//         })}
//         <Form.Item>
//           <Button
//             htmlType="submit"
//             type="primary"
//           >
//             Valider
//           </Button>
//           <Divider></Divider>
//         </Form.Item>
//       </Form>
//       <Divider>Message à afficher sous le nuage</Divider>
//       <Form
//         onFinish={handleMessageSubmit}
//       >
//         <Form.Item
//           name="message"
//         >
//           <Input
//             placeholder="Message à afficher sous le nuage"
//             onChange={(e) =>
//               // handleInputChange("", e.target.value)
//               console.log(e)
//             }
//           />
//         </Form.Item>
//         <Form.Item>
//           <Button
//             htmlType="submit"
//             type="primary"
//           >
//             Valider
//           </Button>
//         </Form.Item>
//       </Form>
//       <Divider />
//     </div>
//   );
// }
  
  function Admin() {

    let array = [
      {
        keyword: "joyeux",
        isPositive: true,
      },
      {
        keyword: "triste",
        isPositive: false,
      },
      {
        keyword: "inquiet",
        isPositive: false,
      },
      {
        keyword: "heureux",
        isPositive: true,
      },
      {
        keyword: "soulagé",
        isPositive: true,
      },
      {
        keyword: "suicide",
        isPositive: false,
      },
    ];

    const [keywords, setKeywords] = useState(array);

    const handleKeywordChange = (index, event) => {
      const newKeywords = [...keywords];
      newKeywords[index].keyword = event.target.value;
      setKeywords(newKeywords);
    };

    const handleIsPositiveChange = (index, event) => {
      const newKeywords = [...keywords];
      newKeywords[index].isPositive = event.target.checked;
      setKeywords(newKeywords);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(keywords);
    };

    return (
      <form onSubmit={handleSubmit}>
        {keywords.map((keyword, index) => (
          <div key={index}>
            <label htmlFor={`keyword-${index}`}>  Keyword:  </label>
            <input
              type="text"
              id={`keyword-${index}`}
              value={keyword.keyword}
              onChange={(event) => handleKeywordChange(index, event)}
            />
            <label htmlFor={`isPositive-${index}`}>    Est-ce que c'est positif ? </label>
            <input
              type="checkbox"
              id={`isPositive-${index}`}
              checked={keyword.isPositive}
              onChange={(event) => handleIsPositiveChange(index, event)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );

  }

export default Admin;
