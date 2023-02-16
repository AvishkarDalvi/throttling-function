import "./styles.css";
import { useState } from "react";

export default function App() {
  const [disabled, setDisabled] = useState(false);
  const throttleHandler = (callback, delay) => {
    return function (...args) {
      setDisabled(true);
      setTimeout(callback, delay);
    };
  };
  const enabler = () => setDisabled(false);
  console.log("render", disabled);
  return (
    <div className="App">
      <button
        disabled={disabled}
        // onClick={() => throttleHandler(enabler, 5000)()}
        onClick={throttleHandler(enabler, 5000)}
      >
        Click Me
      </button>
      {disabled ? <h3>Its Disabled now!</h3> : null}
    </div>
  );
}
