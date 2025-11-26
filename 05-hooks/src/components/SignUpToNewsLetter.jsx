// import { useEffect } from "react";
// import { useState, useRef } from "react";




// export default function SignUpToNewsLetter() {
//   const [email, setEmail] = useState("");
//   const inputElement = useRef(null);

//   const handleClick = () => {
//     if (!email) {
//       inputElement.current.style.border = "5px solid red";
//       inputElement.current.focus();
//     }
//   };

//   useEffect(() => {
//     if (email) {
//       inputElement.current.style.border = "none";
//     }
//   }, [email]);

//   return (
//     <div>
//       <input
//         ref={inputElement}
//         type="email"
//         placeholder="Email..."
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleClick}>Sign up to news letter</button>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react"

export default function SignUpToNewsLetter() {
  const [email, setEmail] = useState('');
  const inputEmement = useRef(null)

  const handleClick = () => {
    if(!email) {
      inputEmement.current.style.border = "5px solid red";
      inputEmement.current.focus();
    }
  }

  useEffect(()=>{
    if(email.length === 0) {
      inputEmement.current.style.border = "5px solid red";
    } else {
      inputEmement.current.style.border = "";
    } 
  },[email])

  return (
    <div>

      {email}

      <input 
        ref={inputEmement}
        type="email" 
        placeholder="Email..." 
        value={email} 
        onChange={ (e) => setEmail(e.target.value)}
      ></input>
      <button onClick={handleClick}>Sign up to Newsletter</button>
    </div>
  )
}