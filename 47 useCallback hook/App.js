// import logo from './logo.svg';
import './App.css';
import React, { useState,useCallback } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [count1, setCount1] = useState(0)
  console.log('parent component !!')

  const [count2, setCount2] = useState(0)

  const incrementCount= useCallback(()=>{
    setCount2((prevCount)=>prevCount+1)
    console.log('useCallback Hooks!')
  },[])
  
  return (
    <>
      <div className="App">
        <h1>UseCallback Hook in react</h1>
        <p>Count : {count1}</p>
        <button onClick={() => setCount1(count1 + 1)}>Increment</button>
        <br/>

        <p>Count2 : {count2}</p>
        <ChildComponent increment={incrementCount}/>
        
      </div>
    </>
  );
}

export default App;
