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

    shouldComponentUpdate(nextProps,nextState){
      console.log('shouldComponentUpdate !! ',this.state.count)
      if(nextState.count<5){
        return true;
      }
      return false;
    }
    render(){
      console.log('render called')
      return (
        <>
          <div className="App">
          <h1>shouldComponentUpdate life cycle method </h1>
          <h2>count : {this.state.count}</h2>
          <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>
          </div>
        </>
      );
    
    }
    
    
}

export default App;
