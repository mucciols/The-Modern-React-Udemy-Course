import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./App.css";

function App() {
  const [statements, setStatements] = useState([])

  const [input, setInput] = useState({
    statement: "",
    amount: "",
    statementType: "income"
  })
  
  const[showError, setShowError] = useState({
    statement: false,
    amount:false
  })

  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const newTotal = statements.reduce((sum, {statementType, amount}) => {
      if(statementType ==='expense') 
          return sum - parseFloat(amount);
      else 
          return sum + parseFloat(amount);
     }, 0 )
    setTotal(newTotal);
  },[statements])

  const renderTotal = () => {
    if(total > 0)
      return <h1 className="tltal-text success">+{Math.abs(total)}</h1>
    else if(total < 0)
      return <h1 className="tltal-text danger">-{Math.abs(total)}</h1>
    else
      return <h1 className="tltal-text">{Math.abs(total)}</h1>
  }

  const handleUpdateInput = (e) => {
    console.log(e.target.name);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleAddNewStatement = () => {
    const { statement, amount } = input;
    if(!statement) {
      return setShowError({
        statement: true,
        amount: false
      })
    } else if(!amount) {
      return setShowError({
        statement: false,
        amount: true
      })
    } else {
      setShowError({
        statement: false,
        amount: false
      });

      setStatements([...statements,{
        id: uuidv4(),
        name: statement,
        amount: parseFloat(amount).toFixed(2),
        statementType: input.statementType,
        date: new Date().toDateString(),
      }])
    }
  }

  return (
    <main>
      <div>
        <h1 className="total-text">{renderTotal()}</h1>
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
         {statements.map( ({name, statementType, amount, date, id}) => (
            <div className="card" key={id}>
              <div className="card-info">
                <h4>{name} - {statementType}</h4>
                <p>{date}</p>
              </div>
              <p className={`amount-text ${statementType ==='income' ? 'success' : 'danger'}`}>
                {statementType === 'income' ? '+' : '-'}
                ${amount}</p>
            </div>
         ))}
        </div>
      </div>
    </main>
  );
}

export default App;
