import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(26);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Current Count: {counter}</h2>

        <button onClick={() => setCounter((prev) => prev + 5)}>
          Update Counter
        </button>
      </header>
    </div>
  );
}

export default App;
