import React, { useState, useEffect } from 'react';

function Admin() {
  
  const [emotion, setEmotion] = useState([{ name: '', isPositive: '' }])

  const handleFormChange = (event, index) => {
    const newValue = event.target.value;
    const newEmotion = [...emotion];
    newEmotion[index][name] = newValue;
    setEmotion(newEmotion);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emotion);
  };

  const addEmotion = () => {
    setEmotion([...emotion, { name: '', isPositive: '' }]);
  };

  // array from BDD
  let array = [
    {
      keyword:"joyeux",
      emotion: true
    },
    {
      keyword:"triste",
      emotion: false
    },
    {
      keyword:"inquiet",
      emotion: false
    },
    {
      keyword:"heureux",
      emotion: true
    },
    {
      keyword:"soulagé",
      emotion: true
    },
    {
      keyword:"suicide",
      emotion: false
    }
  ];

  return (
    <div>
      <h1>Page d'administration</h1>
      <form onSubmit={handleSubmit}>
        {array.map((name, index) => (
          <div key={index}>
            <input type="text" value={name.keyword} onChange={(e) => handleFormChange(e, index)} required></input>
            <select onChange={(e) => handleFormChange(e, index)}>
              <option value={ name.emotion ? true : false } >{ name.emotion ? 'positif' : 'negatif' }</option>
              <option value={ name.emotion ? false : true } >{ name.emotion ? 'negatif' : 'positif' }</option>
            </select>
          </div>
        ))}
        <input type="submit" value="Valider les changements" onClick={addEmotion}></input>
      </form>
    </div>
  );
}

export default Admin;
