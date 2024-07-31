// import logo from './logo.svg';
import './App.css';
import React,{useRef} from 'react';
import ChildrenComponent from './ChildrenComponent';

function App() {
  const inputRef=useRef(null)
  const updateInput=()=>{
    inputRef.current.value="1000"
    inputRef.current.style.color='white'
    inputRef.current.style.background='green'
  }

  const childRef=useRef()

  const handleButtonClick=()=>{
    if(childRef.current){
      childRef.current.handleButtonClick()
    }
  }
  return (
    <>
      <div className="App">
        <h1>forwardRef hook in react</h1>
        <ChildrenComponent ref={inputRef}/>
        <button onClick={updateInput}>update Button</button>

        <button onClick={handleButtonClick}>Click child button for parent</button>
      </div>
    </>
  );
}
  
export default App;
