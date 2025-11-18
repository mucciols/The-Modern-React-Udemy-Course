import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   <main className="main_container">
    //     <Outlet />
    //   </main>
    // </div>

    <div className="App">
      <main className="main_container">
        <header className="main_header">
          <div className="text-container">
            <h1 className="header-title">
              Look for <span>Banger</span> Food
            </h1>
            <p className="header-description">
              s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als
            </p>
            <div className="header-input-container">
              <input type="text" placeholder="Find a recipee"/>
              <button>Search</button>
            </div>
          </div>
          <div>
            <img src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*" alt=""  className="main_img"/>
          </div>
        </header>
        <section className="cards">
          <div className="card">
            <img src="https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg" alt="" />
            <div className="card-content">
              <h3>
                Poke Bowl
              </h3>
              <div className="card-info">
                <div className="tag">
                  <p>Romantic Dinner</p>
                </div>
                <p className="time-text">60 mins</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
