// import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

class App extends Component{
    constructor(){
      super()
      this.state={
        name:'kishan',
        count:0
      }
      // console.log('constructor calling')
    }

    componentDidUpdate(prevProps,prevState){
      if((this.state.count , prevState.count)){
        alert('working')
        console.log('componentDidUpdate called',prevState.count,this.state.count)
      }
    }
    render(){
      // console.log('render called')
      return (
        <>
          <div className="App">
          <h1>componentDidUpdate life cycle method </h1>
          <h2>count : {this.state.count}</h2>
          {/* <button onClick={()=>this.setState({name:'pithiya'})}>Upadte</button> */}
          <button onClick={()=>this.setState({count:this.state.count+1})}>Upadte Count</button>

          </div>
        </>
      );
    
    }
    
    
}

export default App;
