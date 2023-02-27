// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


function App() {
  const [count, countocc] = useState(0); 

  function addcounter() {
    countocc(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decreasecounter() {
    countocc(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="App">

      <header className="App-header">

      <h1>{count}</h1>
      <div>
      <button onClick={addcounter}>Increment</button>
      <button onClick={decreasecounter}>Decrement</button>
      </div>
   
      </header>
    </div>

  );
  
}

export default App;
