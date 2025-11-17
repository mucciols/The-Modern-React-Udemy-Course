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
        const updatedGroceryList = [...groceryItems]
        const itemIndex = updatedGroceryList.findIndex(x=>x.name === inputValue)
        if(itemIndex ===-1) {
          updatedGroceryList.push({
            name : inputValue,
            quantity : 1,
            completed: false
          })
        }
        else {
          updatedGroceryList[itemIndex].quantity++
        }

        setGroceryItems(updatedGroceryList);
        setInputValue("");
      }
    }
  }

  const handleRemoveItem = (name) => {
    const updatedGroceryList = [...groceryItems].filter(i=>i.name !== name)
    
    setGroceryItems(updatedGroceryList);
  }


  const renderGroceryList = () => {
    return groceryItems.map((item)=>(
      <li key={item.name}>
          <div className='container'>
            <input type="checkbox"/>
            <p>{item.name} 
             { item.quantity > 1 ? <span>x {item.quantity}</span> : null  } 
            </p> 
          </div>
          <div>
            <button onClick={ () => handleRemoveItem(item.name)} className='remove-button'>x</button>
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
