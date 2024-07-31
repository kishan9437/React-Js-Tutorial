import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {
    //example 2 
    const usersData = [
      { name: "John Doe", age: 25, email: "john.doe@example.com" },
      { name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
      { name: "Bob Johnson", age: 28, email: "bob.johnson@example.com" },
    ];

    // examle 3
    // const [name,setName]=useState('kishan')
    return (
    <div className="App">
      <h1>Props functional component</h1>
      {/* <User name={name}/>
      <button onClick={()=>setName("jay hoo")}>update props</button> */}
      
      {/* <User name="kishan"/> */}
      {/* example 2 */}
      {
        usersData.map((user,index)=>(
          <User 
            key={index}
            name={user.name}
            age={user.age}
            email={user.email}/>
        ))
      } 
    </div>
  );
}

export default App;
