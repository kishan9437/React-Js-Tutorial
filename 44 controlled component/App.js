// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [inputValue,setInputValue]=useState("");
  const handleChange=(e)=>{
    setInputValue(e.target.value)
    console.log(inputValue)
  }
  return (
    <>
      <div className="App">
        <h1>Controlled component in react</h1>

        <input type='text' value={inputValue} onChange={handleChange}/>
        <p>Current Value : {inputValue}</p>
      </div>
    </>
  );
}
  
export default App;
