import { Outlet } from "react-router-dom";

export default function RecipeInfo({ instructions, image }) {

  if(!instructions)
    return;

  return (
    <div className="recipe-info">
      <Outlet />
      <img className="recipe-img" src={image} />
    </div>
  );
}
