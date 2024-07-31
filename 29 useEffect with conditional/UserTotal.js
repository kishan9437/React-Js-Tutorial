// import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';

function UserTotal (props){
  useEffect(()=>{
    console.log('Called with props !!')
  })

  useEffect(()=>{
    console.log('Count is ',props.count)
  },[props.count,props.total])
  return (  
    <div className="App">
      <h1>useEffect with conditional hook</h1>
      <h2>Count : {props.count}</h2>
      <h2>Total : {props.total}</h2>
    </div>
  );  
}

export default UserTotal;
