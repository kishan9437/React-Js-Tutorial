// import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import RenderMethod from './RenderMethod';

function App(){
  const [name,setName]=useState('kishan')
    return (
        <>
          <div className="App">
          <h1>Life cycle render method </h1>
          <RenderMethod name={name}/>
          <button onClick={()=>setName("pithiya")}>update value</button>

          </div>
        </>
      );
    
    
}

export default App;
