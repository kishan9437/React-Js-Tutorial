import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';
import Counte from './Counte';

function App() {
  let [data,setData]=useState('use state')

  const demo=()=>{
    setData('react js')
    alert(data)
  }

  console.log('re-rendering')
  return (
    <div className="App">
      <h1>{data}</h1>
      
      <button onClick={()=>demo()}>Update Value</button>
      <br>
      </br>
      <Counte/>
    </div>
  );
}

export default App;
