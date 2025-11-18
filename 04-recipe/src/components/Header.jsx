// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

// function Header({ handleSearch }) {
function Header() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [_, setSearchParams] = useSearchParams();
  // const handleClick = () => {
  //   handleSearch(searchTerm);
  //   if (searchTerm) {
  //     setSearchParams({
  //       search: searchTerm,
  //     });
  //   }
  //   setSearchTerm("");
  // };

  return (
    // <header className="main_header">
    //   <div className="text-container">
    //     <h1 className="header-title">
    //       Look for <span>Banger</span> Food
    //     </h1>
    //     <p className="header-description">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut
    //       ipsa fuga quas laboriosam recusandae voluptate, ducimus aspernatur
    //       accusamus ipsum.
    //     </p>
    //     <div className="header-input-container">
    //       <input
    //         type="text"
    //         placeholder="Find a recipe..."
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //         value={searchTerm}
    //       />
    //       <button onClick={handleClick}>Search</button>
    //     </div>
    //   </div>
    //   <div>
    //     <img
    //       src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*"
    //       alt=""
    //       className="main_img"
    //     />
    //   </div>
    // </header>

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
  );
}

export default Header;
