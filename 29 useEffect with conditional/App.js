// import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import UserTotal from './UserTotal';

function App (){
  const [count,setCount]=useState(0)
  const [total,setTotal]=useState(100)

  useEffect(()=>{
    // console.log('After Render!')
  },[total])
  return (  
    <div className="App">
      <h1>useEffect with conditional hook</h1>

      <UserTotal count={count} total={total}/>

      {/* <h2>Count : {count}</h2> */}
      <button onClick={()=>setCount(count+1)}>Update Count</button>

      {/* <h2>Total : {total}</h2> */}
      <button onClick={()=>setTotal(total+1)}>Update Total</button>

    </div>
  
  );  
}

export default App;
