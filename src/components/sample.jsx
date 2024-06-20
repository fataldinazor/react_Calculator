import { keypadStyle, mathSymbols } from "./utils";
import { useState } from "react";

export default function Sample() {
  const [firstVar, setFirstVar] = useState("");
  const [secondVar, setSecondVar] = useState("");
  const [firstVarDone, setFirstVarDone] = useState(false);

  function handleClick(symbol) {
    // if(e.target)
    // firstVarDone
    //   ? setSecondVar(secondVar + e.target.value)
    //   : setFirstVar(firstVar + e.target.value);
    console.log(symbol.type);  
    if(symbol.type==="number"){
        firstVarDone
          ? setSecondVar(secondVar + symbol.value)
          : setFirstVar(firstVar + symbol.value);
    }
    else if(symbol.type==='operator'){
        if(firstVar==="")
            return;
        if(firstVarDone===false){
            setFirstVarDone(true);
        }
        else if(firstVarDone===true){
            sendForCalc
        }
    }
    // else if()
  }

  return (
    <>
      <div className='screen' style={{backgroundColor:"beige", color:"black",textAlign:"right"}}>{firstVarDone ? secondVar : firstVar}</div>
      <div className='touchpad' style={keypadStyle}>
        {mathSymbols.map((symbol) => (
          <button
            key={symbol.symbol}
            // value={symbol.value}
            onClick={()=>handleClick(symbol)}
          >
            {symbol.value}
          </button>
        ))}
      </div>
    </>
  );
}
