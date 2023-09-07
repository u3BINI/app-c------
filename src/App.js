 import React from "react";
import './app.css'

 export default function App() {

const [count, setCount]= React.useState(0)

const  onClickPlus = ()=>{
    setCount(count+1)
}
const  onClickMinus = ()=>{
    setCount(count-1)
}

const sbros = () => {
    setCount(0)
}

    return(
        <div className="App">
            <div >
                <h2>Cчетчик :</h2>
                <h1>{count}</h1>
                <button onClick={onClickPlus} className="plus">+</button>
                <span>       </span>
                <button onClick={onClickMinus} className="minus">-</button>
                <p></p>
                <button onClick={sbros}  className="sbros" >сброс </button>
            </div>
        </div>
    )
 }  