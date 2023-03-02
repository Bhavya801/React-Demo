import './App.css';
import React, {useState} from "react";
import Nav from './Component/Changenav'
import AxiosDemo from './Component/AxiosDemo'
import {Route,Routes} from "react-router-dom"

function App() {

  return (
    <div className="App">
        
      <header className="App-header">
        <Routes>
          <Route path = "/task1" element = {<Nav/>}/>
          <Route path = "/task2" element ={<AxiosDemo/>}/>
        </Routes>

      </header>


    </div>

  );
  
}

export default App;
