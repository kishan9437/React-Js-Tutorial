// import logo from './logo.svg';
import './App.css';
import React, { useLayoutEffect, useRef, useState } from 'react';

function App() {
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null)

  useLayoutEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.getBoundingClientRect().width)
    }
  })

  return (
    <>
      <div className="App">
        <h1>useLayoutEffect Hook</h1>

        <div>
          <h2>Width Measurement Examle</h2>
          <div ref={elementRef} style={{ width: '300px', background: 'lightblue', margin: 'auto' }}>Element Whose Width Is Measured.

          </div>
          <p>Width : {width}px</p>
        </div>
      </div>
    </>
  );
}

export default App;
