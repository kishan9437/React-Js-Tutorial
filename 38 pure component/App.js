// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CounterPureComponent from './CounterPureComponent';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  handleIncrement=()=>{
    this.setState((prevState)=>({
      // count:prevState.count+1
    }))
  }
  render(){
    console.log("parent component ")
    return (
      <>
        <div className="App">
          <h1>Pure Component in React </h1>

          <CounterPureComponent count={this.state.count} onIncrement={this.handleIncrement}/>
        </div>
      </>
    );
  }
}

export default App;
