import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';
import FormHandlling from './FormHandlling';


function App(){
    const [status,setStatus]=useState(true)
    return (
      <>
        <div className="App">
        <h1>Form Handling</h1>
        
        <FormHandlling/>
        </div>
      </>
    );
}

export default App;
