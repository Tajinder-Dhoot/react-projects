import React, { useState } from "react";
import "./App.css";
import ClassCounter from "./ClassCounter.js";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <h2>Welcome to my Counter</h2>
      <h3>This counter is built with Functional Component</h3>
      <h3>The count is : {count} </h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      <ClassCounter />
    </div>
  );
}

export default App;
