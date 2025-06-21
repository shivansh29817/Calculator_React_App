// App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setDisplay("");
    } else if (value === "±") {
      setDisplay((prev) => (prev.charAt(0) === "-" ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setDisplay((prev) => (prev ? String(eval(prev) / 100) : ""));
    } else if (value === "=") {
      try {
        setDisplay(String(eval(display)));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const renderButton = (label, extraClass = "") => (
    <button
      className={`calculator-key ${extraClass}`}
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );

  return (
    <div className="app-wrapper">
      <h1 className="gradient-text">
        <b>CALCULATOR</b>
      </h1>
      <div className="calculator">
        <div className="calculator-display">
          <div className="display-value">{display || "0"}</div>
        </div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              {renderButton("AC")}
              {renderButton("±")}
              {renderButton("%")}
            </div>
            <div className="digit-keys">
              {renderButton("7")}
              {renderButton("8")}
              {renderButton("9")}
              {renderButton("4")}
              {renderButton("5")}
              {renderButton("6")}
              {renderButton("1")}
              {renderButton("2")}
              {renderButton("3")}
              {renderButton("0", "key-0")}
              {renderButton(".", "key-dot")}
            </div>
          </div>
          <div className="operator-keys">
            {renderButton("/", "operator-key")}
            {renderButton("*", "operator-key")}
            {renderButton("-", "operator-key")}
            {renderButton("+", "operator-key")}
            {renderButton("=", "key-equals")}

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
