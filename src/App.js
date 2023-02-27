// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
// import Child from "./CountClass"
// import Intro from "./IntroClass"
// import Change from "./change"
// import Translate from './IntroComp'
import Nav from './Component/Changenav'
import AxiosDemo from './Component/AxiosDemo'


function App() {

  return (
    <div className="App">
           

      <header className="App-header">
      {/* <AxiosDemo/> */}
        <Nav flag = {true}/>

        {/* <Child></Child> */}
        {/* <Intro></Intro> */}
        {/* <Change></Change> */}
        {/* <button onClick={<Change/>}>HIII </button> */}
        {/* <Change></Change> */}
        {/* <Translate></Translate> */}

      </header>


    </div>

  );
  
}

export default App;
