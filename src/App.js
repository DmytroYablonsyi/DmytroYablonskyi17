import React, {useEffect, useState} from 'react';
import './App.css';

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
  }, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
  }, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
  }, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
  }, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
  }, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
  }];

function App() {
  const [data, setData] = useState(contacts);
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value)
  }
  useEffect(() => {
    const filteredData = contacts.filter(({lastName}) => lastName.indexOf(value) !== -1)
    setData(filteredData)
  },[value])
  const renderData = () => {
    return(
      data.map((contact) => {
        const {firstName, lastName, phone, gender} = contact;
        return (
          <div className='phoneCard'>
            <p className='name'>{firstName} {lastName}</p>
            <p className='phone'>{phone}</p>
            {gender && <p>{gender}</p> }
          </div>
        )
      })
    )
  }

  return(
    <div className='container'>
      <h1>Contacts List</h1>
      <input placeholder='search' type="text" value={value} onChange={onChange} />
      {data.length > 0 ? renderData() : <div className='noResults'>no results</div>}
    </div>
  )
}

export default App;
