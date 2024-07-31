// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useTransition } from 'react';

function App() {
  // const [isPending, startTransition] = useTransition()
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("useState Run")
  // },[count])

  // const handleClick = (() => {
  //   startTransition(() => {
  //     setCount(count + 1)
  //     console.log("handle click Run!")
  //   })
  // })

  const [input,setInput]=useState();
  const [datalist,setDatalist]=useState([])

  const DataSize=10000;

  const handleChange=(e)=>{
    setInput(e.target.value)
    const a=[];
    for(let i=0;i<DataSize;i++){
      a.push(e.target.value)
    }
    setDatalist(a)
  }

  return (
    <>
      <div className="App">
        <h1>useTransition Hook</h1>

        {/* <h2>Count : {count}</h2>
        <button onClick={handleClick}>Update</button> */}

        <input type='text' value={input} onChange={handleChange}/>
        {
          datalist.map((item,index)=>{
            return <div key={index}>{item}</div>
          })
        }
      </div>
    </>
  );
}

export default App;
