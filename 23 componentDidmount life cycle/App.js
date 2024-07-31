// import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

class App extends Component{
    constructor(){
      super()
      this.state={
        count:0
      }
      console.log('constructor calling')
    }

    increment =()=>{
      this.setState((prevState)=>({
          count:prevState.count+1
      }))
    }
    componentDidMount(){
      console.log("componentDidMount called")
    }
    render(){
      console.log('render called')
      return (
        <>
          <div className="App">
          <h1>componentDidMount life cycle method </h1>
          <h2>Count : {this.state.count}</h2>
          <button onClick={this.increment}>Increment</button>
          </div>
        </>
      );
    
    }
    
    
}

export default App;
