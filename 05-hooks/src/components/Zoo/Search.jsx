// import { memo } from "react";

// function Search({ onChange: handleChange }) {
//   console.log("search rerendered");
//   return (
//     <div>
//       <input type="text" onChange={(e) => handleChange(e.target.value)} />
//     </div>
//   );
// }

// export default memo(Search);

import { memo } from "react";
function Search({onChange: handleChange}) {

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}
export default memo(Search)