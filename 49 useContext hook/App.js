// import logo from './logo.svg';
import './App.css';
import React, { createContext } from 'react';
import Child1 from './Child1';

const MyContext = createContext();

function App() {
  const sharedData = "Hello From Parents!!";

  return (
    <>
      <div className="App">
        <MyContext.Provider value={sharedData}>
          <h1>UseContext Hook in react</h1>
          <Child1 />
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
export {MyContext};