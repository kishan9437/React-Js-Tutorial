// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import User from './User';

function App(){
    const handleButtonclick = () =>{
      console.log("Button Click")
    }

    const [count,setCount]=useState(0)
    const increment = () =>{
      setCount(count+1)
    }
    return (
      <>
        <div className="App">
        <h1>pass function as props</h1>
        <User handleClick={handleButtonclick} count={count} increment={increment}/>
        </div>
      </>
    );
}

export default App;
