import { useState } from "react";
import "./App.css";
import Modal from "../components/Modal";

export interface Gift {
  id:string;
  name:string;
  value:number;
  image:string;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [gifts, setGifts] = useState<Gift[]>([])
  
  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const handleSave = (gift: Gift)  => {
    setGifts([...gifts, gift])
  }

  return (
    <div className="App">
      { showModal && <Modal onClose={handleClose}  onSave={handleSave} />}
      <h1>My Birthday Gifts TS</h1>
      <div className="cards">
        <button onClick={handleOpen} >Add a Gift TS</button>
      </div>
      <div className="cards-gift">
        {gifts.map((gift) => (
          <div className="card-gift" key={gift.id}>
            <img src={gift.image} alt="" />
            <h1>{gift.name}</h1>
            <p>${gift.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
