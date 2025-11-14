import './App.css'
import groceryCartImg from './assets/grocery-cart.png'
import { useState } from 'react'

// {
//     name:"Banama",
//     quantity:1,
//     comleted:true
//   }

function App() {
  const [inputValue, setInputValue] = useState("")
  const [groceryItems, setGroceryItems] = useState([]);

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddGrocery = (e) => {
    console.log('called',e);
  }

  return (
    <main className="App">
      <div>
        <div>
        <h4 className='success'>You're done</h4>
        <div className="header">
          {inputValue}
          <button onClick={()=> {
            setInputValue("")
          }}>Clear input</button>
          <h1>Shopping list</h1>
          <img src={groceryCartImg} alt="" />
          <input 
            type="text" 
            className="item-input" 
            placeholder='add an item'
            onChange={handleChangeInputValue}
            onKeyDown={handleAddGrocery}
            value={inputValue}
            />
        </div>
      </div>
        <ul>
          <li>
            <div className='container'>
              <input type="checkbox"/>
              <p>Carrots</p>
            </div>
            <div>
              <button className='remove-button'>x</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default App
