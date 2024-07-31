// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [count,setCount]=useState(0)

  console.log('parent component')
  return (
    <>
      <div className="App">
        <h1>memo in react</h1>
        <ChildComponent count={count}/>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Count</button>
      </div>
    </>
  );
}

export default App;
