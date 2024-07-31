// import logo from './logo.svg';
import './App.css';
import React,{useRef} from 'react';

function App() {
  const inputRef=useRef(null)

  const handleButtonClick=()=>{
    const inputValue=inputRef.current.value;
    alert(`Input Value : ${inputValue}`)
  }
  return (
    <>
      <div className="App">
        <h1>useRef hook in react</h1>

        <input ref={inputRef} type='text'/>
        <button onClick={handleButtonClick}>input get value</button>
      </div>
    </>
  );
}
  
export default App;
