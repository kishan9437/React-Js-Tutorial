// import logo from './logo.svg';
import './App.css';
import React, { useSyncExternalStore } from 'react';

function App() {
  const width=useSyncExternalStore((listener)=>{
    window.addEventListener("resize",listener);
    return()=>{
      window.removeEventListener("resize",listener);
    }
  },()=>window.innerWidth)

  return (
    <>
      <div className="App">
        <h1>useSyncExternalStore  Hook</h1>
        <p>Window width : {width}</p>
      </div>
    </>
  );
}

export default App;
