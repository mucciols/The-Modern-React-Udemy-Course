import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";

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
        <Header />
        <CardList />
      </main>
    </div>
  );
}

export default App;
