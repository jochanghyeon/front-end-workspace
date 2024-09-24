import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const setCounter = () => {
    setCount(count + 10);
  };
  const setCounter1 = () => {
    setCount(count - 10);
    if (count <= 0) {
      setCount(0);
    }
  };
  const setCounter2 = () => {
    setCount(0);
  };

  return (
    <div class="qweqq">
      <h1>Total Clicks : {count}</h1>
      <button onClick={setCounter} class="bubu">
        +10
      </button>
      <button onClick={setCounter1} class="bubu">
        -10
      </button>
      <button onClick={setCounter2} class="bubu">
        reset
      </button>
      <div>
        <p>qweqq</p>
      </div>
      <div>
        <p>qwamsmsa</p>
      </div>
    </div>
  );
};

export default App;
