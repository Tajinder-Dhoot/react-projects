import React, { useState } from "react";
import "./App.css";
import ClassCounter from "./ClassCounter";

// Functional Component
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h2>Welcome to my Counter</h2>
        <h3>Counter below is built with Functional Component</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <h3>The count is : {count}</h3>
      </header>

      <ClassCounter />
    </div>
  );
}

export default App;
