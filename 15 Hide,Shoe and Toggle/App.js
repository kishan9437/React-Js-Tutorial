import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';


function App(){
    const [status,setStatus]=useState(true)
    return (
      <>
        <div className="App">
        <h1>Hide, show and toggle</h1>

        {status? <div className='status'>content</div>:null}

        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>show</button>
        <button onClick={()=>setStatus(!status)}>toggle</button>

        </div>
      </>
    );
}

export default App;
