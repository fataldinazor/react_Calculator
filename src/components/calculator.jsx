// import {useState} from "react";
// import Screen from "./screen.jsx"
// import Keypad from "./keypad.jsx"
import { calcBodyStyle } from "./utils.jsx"
import Sample from "./sample.jsx"


export default function Calculator(){
    
    return(
        <div style={calcBodyStyle}>
            {/* <Screen />
            <Keypad /> */}
            <Sample/>
        </div>
    )
}