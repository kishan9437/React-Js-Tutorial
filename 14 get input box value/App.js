import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';


function App(){
    const [inputValue,setInputValue]=useState("")
    const [inputValueShow,setInputValueHide]=useState(false)

    const handleValue = (e) =>{
        console.log(e.target.value)
        setInputValue(e.target.value)

        // romove value
        setInputValueHide(false)
    }
    return (
      <>
        <div className="App">
        <h1>get input box value</h1>
        {/* <h2>value: {inputValue}</h2> */}
        <h2>{inputValueShow ? inputValue : ""}</h2>
        <input type='text' onChange={handleValue}></input>
        <button onClick={()=>setInputValueHide(true)}>submit</button>
        </div>
      </>
    );
}

export default App;
