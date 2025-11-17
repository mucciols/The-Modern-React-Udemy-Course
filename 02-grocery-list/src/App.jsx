import './App.css'
import groceryCartImg from './assets/grocery-cart.png'
import { useState, useEffect } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [groceryItems, setGroceryItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    determineCompletedStatus();
    
  },[groceryItems])

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

  const determineCompletedStatus = () => {
    if(!groceryItems.length)
      return setIsCompleted(false);

    let isAllCompleted = true;

    groceryItems.forEach(item => {
      if(!item.completed)
        isAllCompleted = false;
    })

    setIsCompleted(isAllCompleted);
  }

  const handleUpdateCompletedStatus = (status, index) => {
    const updatedGroceryList = [...groceryItems];
    updatedGroceryList[index].completed = status;
    setGroceryItems(updatedGroceryList);
  }

  const renderGroceryList = () => {
    return groceryItems.map((item, index)=>(
      <li key={item.name}>
          <div className='container'>
            <input 
              onChange={ (e) => handleUpdateCompletedStatus(e.target.checked, index)} 
              type="checkbox" 
              value={item.completed}
              checked={item.completed}
              />
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
        <button on></button>
        {
          //si usa && nel caso in cui non ci sia null nel else
          isCompleted && <h4 className='success'>You're done</h4>
        }
        
        <div className="header" onClick={() => {
          const updatedGroceryList = [...groceryItems].map(item=>{
            return {
              ...item,
              completed: false
            }
          });
          setGroceryItems(updatedGroceryList);
        }
        } >
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
