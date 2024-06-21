import { keypadStyle, mathSymbols,screenStyle } from "./utils";
import { useState } from "react";

export default function CalculatorBody() {
  const [firstVar, setFirstVar] = useState("");
  const [secondVar, setSecondVar] = useState("");
  const [operator, setOperator] = useState("");
  const [firstVarDone, setFirstVarDone] = useState(false);

  function sendForCalc() {
    const firstNumber = Number(firstVar);
    const secondNumber = Number(secondVar);
    switch (operator) {
      case "+":
        setFirstVar(firstNumber+secondNumber)
        break;
      case "-":
        setFirstVar(firstNumber-secondNumber)
        break;
      case "*":
        setFirstVar(firstNumber* secondNumber);
        break;
      case "/":
        setFirstVar(firstNumber/ secondNumber);
        break;
    }
    return ;
  }

  function handleClick(symbol) {
    console.log(symbol.type);
    if (symbol.type === "number") {
      firstVarDone
        ? setSecondVar(secondVar + symbol.value)
        : setFirstVar(firstVar + symbol.value);
    } else if (symbol.type === "operator") {
      if (firstVar === "") return;
      if (firstVarDone === false) {
        setFirstVarDone(true);
        setOperator(symbol.value);
      } else if (firstVarDone === true) {
        sendForCalc();
        setFirstVarDone(true)
        setOperator(symbol.value);
        setSecondVar("");
      }
    } else if (symbol.type === "reset") {
      setFirstVar("");
      setSecondVar("");
      setOperator("");

      setFirstVarDone(false);
    }
    else if(symbol.type==="equate"){
      sendForCalc();
      setSecondVar("");
      setOperator("")
      setFirstVarDone(false);
    }
  }

  return (
    <>
      <div
        className='screen'
        style={screenStyle}
      >
        {firstVarDone ? firstVar+operator+secondVar : firstVar}
      </div>
      <div className='touchpad' style={keypadStyle}>
        {mathSymbols.map((symbol) => (
          <button
            key={symbol.symbol}
            // value={symbol.value}
            onClick={() => handleClick(symbol)}
          >
            {symbol.value}
          </button>
        ))}
      </div>
    </>
  );
}
