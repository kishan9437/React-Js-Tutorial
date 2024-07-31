import logo from './logo.svg';
import './App.css';
import User from './User';
import React,{Component} from 'react';
import Counte from './Counte';

class App extends Component {
  constructor(){
    super()
    this.state={
      data:1,
    };
  }

  demo(){
    this.setState({
      data:this.state.data+1
    })
  }
  render(){
    return (
      <div className="App">
          <h1>{this.state.data}</h1>

          <button onClick={()=>this.demo()}>increment</button>
      </div>
    );
  }
  
}

export default App;
