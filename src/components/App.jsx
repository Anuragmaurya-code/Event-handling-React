import React, { useState } from "react";

function App() {
  const [buttonColor, setColor] = useState("white");
  function black() {
    setColor("black");
  }
  function white() {
    setColor("white");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonColor }}
        onMouseOver={black}
        onMouseOut={white}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
