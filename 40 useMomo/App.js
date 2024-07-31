// import logo from './logo.svg';
import './App.css';
import React, { useMemo, useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [count, setCount] = useState(0)

  // const sum=()=>{
  //   console.log('calculating...')
  //   return number1+number2;
  // }

  const sum = useMemo(() => {
    console.log('calculating...')
    return number1 + number2;
  }, [number1, number2])
  return (
    <>
      <div className="App">
        <h1>useMemo in react</h1>

        <div>
          <input type='number' value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
          <input type='number' value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />

          <p>Sum : {sum}</p>

          <h2>count : {count}</h2>
          <button onClick={() => setCount(count + 1)}>count</button>
        </div>
      </div>
    </>
  );
}

export default App;
