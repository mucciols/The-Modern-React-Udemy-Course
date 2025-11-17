import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    statement: "",
    amount: "",
    statementType: ""
  })
  const[showError, setShowError] = useState({
    statement: false,
    amount:false
  })

  const handleUpdateInput = (e) => {
    console.log(e.target.name);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleAddNewStatement = () => {

    console.log('handle statement');

    const { statement, amount } = input;

    if(!statement) {
      return setShowError({
        statement: true,
        amount: false
      })
    }
    else if(!amount) {
      return setShowError({
        statement: false,
        amount: true
      })
    } 
    else {
      return setShowError({
        statement: false,
        amount: false
      })
    }
  }

  return (
    <main>
      <div>
        <h1 className="total-text">0</h1>
        <div className="input-container">
          <input 
            type="text" placeholder="Inc. or exp." 
            value={input.statement}
            onChange={handleUpdateInput}
            name="statement"
            style = {
              showError.statement ? { borderColor: "rgb(206, 76,76)"} : null
            }
            />
          <input 
            type="number" placeholder="$5000" 
            value={input.amount}
            onChange={handleUpdateInput} 
            name="amount"
            style={showError.amount ? { borderColor: "rgb(206, 76,76)"} : null}
          />
          <select onChange={handleUpdateInput}
            value={input.statementType}
            name="statementType"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={()=>handleAddNewStatement()}>+</button>
        </div>
        <div>
          <div className="card">
            <div className="card-info">
              <h4>Salary</h4>
              <p>July 27th, 2024</p>
            </div>
            <p className="amount-text success">+$5000</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
