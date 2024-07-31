// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
    constructor(){
      super()
      console.log('constructor method')
    }
    render(){
      console.log('render method')
      return (
        <>
          <div className="App">
          <h1>Life cycle method constructor</h1>
          </div>
        </>
      );
    }
    
    
}

export default App;
