// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import GetDataApi from './GetDataApi';

function App() {

  return (
    <>
      <div className="App">
        <h1>Axios Library</h1>
        <GetDataApi/>
      </div>
    </>
  );
}

export default App;
