import { useState } from "react";
import "./App.css";

function App() {
  const [statement, setStatement]  = useState("");
  const [amount, setAmount]  = useState("");
  const [statementType, setStatementType]  = useState("income");

  return (
    <main>
      <div>
        <h1 className="total-text">0</h1>
        <div className="input-container">
          <input 
            type="text" placeholder="Inc. or exp." 
            value={statement}
            onChange={(e)=> setStatement(e.target.value) } />
          <input 
            type="number" placeholder="$5000" 
            value={amount}
            onChange={(e)=> setAmount(e.target.value) } />
          <input type="number" />
          <select onChange={(e)=>{
            setStatement(e.target.value)
          }}
            value={statementType}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
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
