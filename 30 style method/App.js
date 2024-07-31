// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
import Style from './style.module.css';
import './style.scss';

function App (){
  const headLine={
    color:'white',
    background:"Blue"
  }
  return (  
    <div className="App">
      <h1>style type in react</h1>
      {/* Example 1 Inline css */}
      <h1 style={{color:"red",background:"green"}}>Inline Css</h1>

      {/* Example 2 Normal css */}
      <h1 className='primary'>Normal Css</h1>

      {/* Example 3 css In Js*/}
      <h1 style={headLine}>Css In Js method</h1>

      {/* Example 4 css module*/}
      <h1 className={Style.title}>Css Module</h1>

      {/* Example 5 Sass and scss*/}
      <h1 className="primary-sass">Sass and <span>Scss</span> method</h1>
    </div>
  );  
}

export default App;
