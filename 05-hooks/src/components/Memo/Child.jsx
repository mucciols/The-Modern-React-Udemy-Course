import { memo } from "react";

// function Child({ prop }) {
//   console.log("child is re-rendering");

//   return (
//     <div>
//       <h1>{prop}</h1>
//     </div>
//   );
// }

// export default memo(Child);


function Child({prop}){

  console.log('child is re-dendering: ', prop);

  return (
    <div>
      figlio:
      <h1>{prop}</h1>
    </div>
  )
}

export default memo(Child);