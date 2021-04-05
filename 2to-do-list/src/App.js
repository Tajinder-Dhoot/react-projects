import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (e) => {
    e.preventDefault();
    setToDos([...toDos, input]);
    setInput("");
  };

  return (
    <div className="app">
      <h2>Welcome to my ToDo App</h2>
      <form action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addToDo}>
          Add ToDo
        </button>
      </form>

      <h3>List of ToDos</h3>
      {toDos.map((todo) => (
        <li>{todo}</li>
      ))}
    </div>
  );
}

export default App;
