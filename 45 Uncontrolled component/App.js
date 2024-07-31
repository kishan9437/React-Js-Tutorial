// import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';

function App() {
  const inputRef1=useRef(null)
  const inputRef2=useRef(null)

  const submitForm=(e)=>{
    e.preventDefault()
    console.log("First input value: ",inputRef1.current.value)
    console.log("Second input value: ",inputRef2.current.value)
  }
  return (
    <>
      <div className="App">
        <h1>UnControlled component in react</h1>
        <form onSubmit={submitForm}>
          <input type='text' ref={inputRef1}/>
          <input type='text' ref={inputRef2}/>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
  
export default App;
