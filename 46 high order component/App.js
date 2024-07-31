// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const withCounter=(wrappedComponent)=>{
    return function WithCounter(props){
      const [count,setCount]=useState(0)
      const Increment=()=>{
          setCount(count+1)
      }
      
      return(
        <wrappedComponent {...props} count={count} Increment={Increment}/>
      )
    }
  }

  const Counter=({count,Increment})=>{
    return(
      <div>
        <p>Count : {count}</p>
        <button onClick={Increment}>Increment</button>
      </div>
    )
  }

  const CounterWithEnhancement=withCounter(Counter);
  return (
    <>
      <div className="App">
        <h1>High Order component in react</h1>
        {/* <h2>Count : {count}</h2> 
        <button onClick={()=>setCount(count+1)}>Update Count</button>        */}
        <CounterWithEnhancement/>
      </div>
    </>
  );
}
  
export default App;
