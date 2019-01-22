import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./timer.js";
const count ="29080089"
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Timer  time={count}/>
      </div>
      
    );
    
  }
}

export default App;
