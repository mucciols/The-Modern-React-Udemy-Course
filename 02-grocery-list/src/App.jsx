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

  const handleAddGroceryItem = (e) => {
    if(e.key === "Enter"){
      if(inputValue) {
        setGroceryItems([...groceryItems,{
          quantity: 1,
          name: inputValue,
          completed: false
        }])
      }
    }
  }

  const handleClickDelete = (e) => {
    console.log('delete', e)
  }

  const renderGroceryList = () => {
    return groceryItems.map((item)=>(
      <li>
          <div className='container'>
            <input type="checkbox"/>
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleClickDelete(item.name)} className='remove-button'>x</button>
          </div>
      </li>
    ))
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
            onKeyDown={handleAddGroceryItem}
            value={inputValue}
            />
        </div>
      </div>
        <ul>
          {renderGroceryList()}
        </ul>
      </div>
    </main>
  )
}

export default App
