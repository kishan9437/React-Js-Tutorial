// import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';

function App (){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    alert('useEffect hook')
    console.log('useEffect hook')
  })
  return (  
    <div className="App">
      <h1>useEffect hook</h1>
      <h2>count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  
  );  
}

export default App;
