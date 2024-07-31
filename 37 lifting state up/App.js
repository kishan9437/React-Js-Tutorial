// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

function App() {
  const [sharedState,setSharedState]=useState("");

  const handleChange=(newValue)=>{
    console.log(newValue)
    setSharedState(newValue)
  }

  const parseAlert=(data)=>{
    alert(data)
  }
  return (
    <>
      <div className="App">
        <h1>Lifting State Up in React </h1>
        <ChildComponentA sharedState={sharedState} handleChange={handleChange}/>
        <ChildComponentB sharedState={sharedState} alert={parseAlert}/>
      </div>
    </>
  );
}

export default App;
