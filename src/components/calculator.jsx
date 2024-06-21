import { calcBodyStyle } from "./utils.jsx"
import CalculatorBody from "./sample.jsx"


export default function Calculator(){
    
    return(
        <div style={calcBodyStyle}>
            <CalculatorBody/>
        </div>
    )
}