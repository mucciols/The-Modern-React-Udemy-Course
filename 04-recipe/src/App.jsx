import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   <main className="main_container">
    //     <Outlet />
    //   </main>
    // </div>

    <div className="App" >
      <main className="main_container">
        <Outlet />
      </main>
    </div>
    
  );
}

export default App;
