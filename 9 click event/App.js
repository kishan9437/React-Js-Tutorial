import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  let a="click event";

  const demo=()=>{
    alert(a)
  }
  return (
    <div className="App">
      <h1>{a}</h1>
      
      <button onClick={()=>demo()}>Click</button>
    </div>
  );
}

export default App;
