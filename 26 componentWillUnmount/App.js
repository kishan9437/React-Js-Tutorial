// import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Unmount from './Unmount';

class App extends Component{
    constructor(){
      super()
      this.state={
        show:true
      }
      // console.log('constructor calling')
    }

    render(){
      console.log('clicked',this.state.show)
      return (
        <>
          <div className="App">
          <h1>ComponentWillUnmount life cycle method </h1>
          {this.state.show ? <Unmount/> : <h2>remove</h2>}
          
          <button onClick={()=>this.setState({show:!this.state.show})}>remove Component</button>
          </div>
        </>
      );
    }   
}

export default App;
