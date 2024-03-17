import React from "react";
import { useState } from "react";

function App() {
  const [array, setArray] = useState(["A", "B", "C"]);
  const [input, setInput] = useState("");


  function removeFirstElement() {
    setArray((prev) => {
      return prev.slice(1);
    });
  }

  function specificLetter(letter) {
    setArray((prev) => {
      return prev.filter((item) => {
        return item !== letter;
      });
    });
  }

  function addToStart(letter) {
    setArray((prev) => {
      return [letter, ...prev];
    });
  }
  function addToEnd(letter) {
    setArray((prev) => {
      return [...prev, letter];
    });
  }

  function clearArray() {
    setArray([]);
  }

  function resetToVal() {
    setArray(["A", "B", "C"]);
  }

  function changeAs(letter) {
    setArray((prev) => {
      return prev.map((item) => {
        if (item === "A") {
          return letter;
        }
        return item;
      });
    });
  }

  function anyIndex(letter, index) {
    setArray((prev) => {
      return [...prev.slice(0, index), letter, ...prev.slice(index)];
    });
    
  }



  return (
    <div>
      <button onClick={removeFirstElement}>removed first element </button>
      <br />
      <br />
      <button onClick={() => specificLetter("B")}>
        {" "}
        remove specific letter{" "}
      </button>
      <br />
      <br />
      <button onClick={() => addToStart("N")}>
        {" "}
        add New to start of the array
      </button>
      <br />
      <br />
      <button onClick={() => addToEnd("J")}> Add to End Of the array</button>
      <br />
      <br />
      <button onClick={clearArray}> CLear the array</button>
      <br />
      <br />
      <br />
      <button onClick={resetToVal}> reset to initial value</button>
      <br />
      <br />
      <button onClick={() => changeAs("H")}> CHange all a's to h's </button>
      <br />
      <br />
      <input type="text" value={input} onChange={e=> setInput(e.target.value)}  />
      <br />
      <br />
      <button onClick={()=>addToStart(input)}> add to the start</button>
      <br />
      <br />
      <button onClick={()=>anyIndex('V',2)}> Add V to any index of your choice </button> 
      <br />
      <br />
      <h1>{array.join(", ")} </h1>
    </div>
  );
}

export default App;


// ! Create a new function component that has state for name and age

//! Create a text input that when updated will update the name state

//!Create a plus and minus button that will update the age state and display the state between the two buttons
//! Display the string My name is {name} and I am {age} years old in your JSX
//! Repeat but for a class component instead of a function component