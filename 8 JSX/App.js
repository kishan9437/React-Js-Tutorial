import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const hello=()=>{
    return <h3>this is function</h3>
  }
  return (
    <div className="App">
      <h1>hello world</h1>

      <User/>
      {hello()}
      
    </div>
  );
}

export default App;
