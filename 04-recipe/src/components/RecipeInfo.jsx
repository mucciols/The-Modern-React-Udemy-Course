import { Outlet } from "react-router-dom";

export default function RecipeInfo({ instructions, image }) {

  if(!instructions)
    return;

  return (
    <div className="recipe-info">
      {/* <div className="recipe-info-container">
        <div className="recipe-info-header">
          <h3>INSTRUCTIONS</h3>
        </div>
      </div>
      {instructions.map(({ display_text, position }) => (
        <div className="recipe-info-content-container" key={position}>
          <p className="recipe-step">{position}</p>
          <p className="recipe-text">{display_text}</p>
        </div>
      ))} */}
      <Outlet context={{instructions}}/>
      <img className="recipe-img" src={image} />
    </div>
  );
}
