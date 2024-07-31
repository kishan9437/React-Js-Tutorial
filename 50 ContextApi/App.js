// import logo from './logo.svg';
import './App.css';
import React, { createContext } from 'react';
import Child1 from './Child1';

const MyContext = createContext()
const MyContextNew = createContext()

function App() {
  const sharedData = "hello from parent!"
  const sharedDataNew = "multiple Entry!"
  return (
    <>
      <div className="App">
        <MyContext.Provider value={sharedData}>
          <MyContextNew.Provider value={sharedDataNew}>
            <h1>ContextApi in react</h1>
            <Child1 />
          </MyContextNew.Provider>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
export { MyContext,MyContextNew }
