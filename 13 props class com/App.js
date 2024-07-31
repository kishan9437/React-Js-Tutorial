import logo from './logo.svg';
import './App.css';
import User from './User';
import { Component, useState } from 'react';

class App extends Component{
    constructor(){
      super()
      this.state={
        name:"kishan pithiya"
      }
    }
    render(){
      return (
        <>
          <div className="App">
          <h1>Props class component</h1>
          {/* <User name={'kishan'} email={'kishan@gmail.com'}/> */}

          {/* example 2 */}
          <User name={this.state.name} email={'kishan@gmail.com'}/>
          <button onClick={()=>this.setState({name:"pithiya"})}>update value</button>
          </div>
        </>
      );
        
    }
}

export default App;
