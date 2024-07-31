// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

function App (){
  const names=["alice","Bob","Charlie","Bhaskar"]
  const products=[
    {
      id:1,
      name:"product 1",
      price:10
    },
    {
      id:2,
      name:"product 2",
      price:15
    },
    {
      id:3,
      name:"product 3",
      price:30
    },
    {
      id:4,
      name:"product 4",
      price:35
    },
  ]

  const fruits=["apple","Banana","orange"]
  const fruitsItems=fruits.map((fruit,index)=>(<li key={index}>{fruit}</li>))
  return (  
    <div className="App">
      <h1>Array with map function in react</h1>
      
      <ul>
        {
          names.map((name,index)=>(
            <li key={index}>{name}</li>
          ))
        }
      </ul>

      <ul>
        {
          products.map((product)=>(
              <li key={product.id}>{product.name} - ${product.price}</li>
          ))
        }
      </ul>
      <ul>
        <li>{fruitsItems}</li>
      </ul>
    </div>
  );  
}

export default App;
