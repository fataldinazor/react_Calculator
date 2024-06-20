import React from "react";
import { keypadStyle, mathSymbols } from "./utils";
import {useState} from "react";


export default function Keypad (props) {
  const [BtnValue,setBtnValue]=useState(0);

  function handleClick(e){
    setBtnValue(e.target.value);
    console.log(BtnValue)
  }

  return (
    <div style={keypadStyle}>
      {mathSymbols.map((symbol) => (
        <button key={symbol} value={symbol} onClick={handleClick}>{symbol}</button>
      ))}
    </div>
  );
}
