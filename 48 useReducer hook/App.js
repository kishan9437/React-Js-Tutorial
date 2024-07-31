// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="App">
        <h1>UseReducer Hook in react</h1>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setCount(count - 1)}>Decrement Count</button>
        
        <br/><br/>
        <Counter />
      </div>
    </>
  );
}

export default App;
